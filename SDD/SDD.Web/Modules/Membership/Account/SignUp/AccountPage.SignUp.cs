
namespace SDD.Membership.Pages
{
    using Administration;
    using Administration.Entities;
    using Administration.Repositories;
    using SDD.Model;
    using SDD.Modules.Function;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.IO;
    using System.Net.Mail;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Security;

    public partial class AccountController : Controller
    {
        [HttpGet]
        public ActionResult SignUp()
        {
            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.SignUp.AccountSignUp_AdminLTE);
            else
                return View(MVC.Views.Membership.Account.SignUp.AccountSignUp);
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> SignUp(SignUpRequest request)
        {
            return this.UseConnection("SDD_Connection", connection =>
            {
                request.CheckNotNull();

                Check.NotNullOrWhiteSpace(request.Email, "email");
                Check.NotNullOrEmpty(request.Password, "password");
                UserRepository.ValidatePassword(request.Email, request.Password, true);
                Check.NotNullOrWhiteSpace(request.DisplayName, "displayName");

                if (connection.Exists<UserRow>(
                        UserRow.Fields.Username == request.Email |
                        UserRow.Fields.Email == request.Email))
                {
                    throw new ValidationError("EmailInUse", Texts.Validation.EmailInUse);
                }

                using (var uow = new UnitOfWork(connection))
                {
                    string salt = null;
                    var hash = UserRepository.GenerateHash(request.Password, ref salt);
                    var displayName = request.DisplayName.TrimToEmpty();
                    var email = request.Email;
                    var username = request.Email;
                    //var address = request.Address;
                   // var iddesa = request.IdDesa;
                   // var idhubungan = request.IdHubungan;
                    //var noktp = request.NoKTP;
                    //var nokk = request.NoKK;
                    //var phonenumber = request.PhoneNumber;
                    //var wanumber = request.WaNumber;
                    //var jeniskelamin = request.JenisKelamin;
                    //var tgllahir = request.TanggalLahir;
                    //var descripsi = request.Description;

                    var fld = UserRow.Fields;
                    var userId = (int)connection.InsertAndGetID(new UserRow
                    {
                        Username = username,
                        Source = "sign",
                        DisplayName = displayName,
                        Email = email,
                        PasswordHash = hash,
                        PasswordSalt = salt,
                        IsActive = 1,
                        InsertDate = DateTime.Now,
                        InsertUserId = 1,
                        LastDirectoryUpdate = DateTime.Now,
                      //  Address = address,
                        IdDesa=1111
                        //IdHubungan=idhubungan,
                        //NoKTP=noktp,
                        //NoKK=nokk,
                        //PhoneNumber=phonenumber,
                        //WaNumber=wanumber,
                        //JenisKelamin=jeniskelamin,
                        //TanggalLahir=tgllahir,
                        //Description=descripsi

                    });

                    byte[] bytes;
                    using (var ms = new MemoryStream())
                    using (var bw = new BinaryWriter(ms))
                    {
                        bw.Write(DateTime.UtcNow.AddHours(3).ToBinary());
                        bw.Write(userId);
                        bw.Flush();
                        bytes = ms.ToArray();
                    }

                    var token = Convert.ToBase64String(MachineKey.Protect(bytes, "Activate"));

                    var externalUrl = Config.Get<EnvironmentSettings>().SiteExternalUrl ??
                        Request.Url.GetLeftPart(UriPartial.Authority) + VirtualPathUtility.ToAbsolute("~/");

                    var activateLink = UriHelper.Combine(externalUrl, "Account/Activate?t=");
                    activateLink = activateLink + Uri.EscapeDataString(token);
                   // activateLink = "http://asri.aspan.co.id/sidedi/Account/Activate?t=";
                    var emailModel = new ActivateEmailModel();
                    emailModel.Username = username;
                    emailModel.DisplayName = displayName;
                    emailModel.ActivateLink = activateLink;

                    //var emailSubject = Texts.Forms.Membership.SignUp.ActivateEmailSubject.ToString();
                    var emailSubject = "Aktifasi Akun";
                    var emailBody = TemplateHelper.RenderTemplate(
                        MVC.Views.Membership.Account.SignUp.AccountActivateEmail, emailModel);

                    Common.EmailHelper.Send(emailSubject, emailBody, email);

                    uow.Commit();

                 
                    FunctionSidedi InsertTransactionInsured_ = new FunctionSidedi();
                    try
                    {
                        Common.EmailHelper.Send(emailSubject, emailBody, email);
                        InsertTransactionInsured_.InsertEmailLog(userId, email, "aspan.general@gmail.com", emailBody, emailSubject, activateLink, 0);
                    }
                    catch (System.Exception e)
                    {
                        InsertTransactionInsured_.InsertEmailLog(userId, email, "aspan.general@gmail.com", emailBody, e.ToString(), activateLink, 0);
                        throw new ValidationError("Gagal Send Email", e);
                    }

                    SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();
                    UserRole UserRoles_ = new UserRole();
                    UserRoles_.UserId = userId;
                    UserRoles_.RoleId = 1;
                    entities.UserRoles.Add(UserRoles_);
                    entities.SaveChanges();
                    UserRetrieveService.RemoveCachedUser(userId, username);

                    return new ServiceResponse();
                }
            });
        }

        [HttpGet]
        public ActionResult Activate(string t)
        {
            using (var connection = SqlConnections.NewByKey("SDD_Connection"))
            using (var uow = new UnitOfWork(connection))
            {
                int userId;
                try
                {
                    var bytes = MachineKey.Unprotect(Convert.FromBase64String(t), "Activate");
                    using (var ms = new MemoryStream(bytes))
                    using (var br = new BinaryReader(ms))
                    {
                        var dt = DateTime.FromBinary(br.ReadInt64());
                        if (dt < DateTime.UtcNow)
                            return Error(Texts.Validation.InvalidActivateToken);

                        userId = br.ReadInt32();
                    }
                }
                catch (System.Exception e)
                {
                    return Error(Texts.Validation.InvalidActivateToken);
                }

                var user = uow.Connection.TryById<UserRow>(userId);
                if (user == null || user.IsActive != 0)
                    return Error(Texts.Validation.InvalidActivateToken);

                uow.Connection.UpdateById(new UserRow
                {
                    UserId = user.UserId.Value,
                    IsActive = 1
                });

                BatchGenerationUpdater.OnCommit(uow, UserRow.Fields.GenerationKey);
                uow.Commit();

                return new RedirectResult("~/Account/Login?activated=" + Uri.EscapeDataString(user.Email));
            }
        }
    }
}
