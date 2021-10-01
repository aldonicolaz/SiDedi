
namespace SDD.Membership.Pages
{
    using SDD.Model;
    using Serenity;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Web.Mvc;
    using System.Web.Security;
    using System.Linq;

    [RoutePrefix("Account"), Route("{action=index}")]
    public partial class AccountController : Controller
    {
        public static bool UseAdminLTELoginBox = false;

        [HttpGet]
        public ActionResult Login(string activated)
        {
            ViewData["Activated"] = activated;
            ViewData["HideLeftNavigation"] = true;

            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.AccountLogin_AdminLTE);
            else
                return View(MVC.Views.Membership.Account.AccountLogin);
        }

        [HttpGet]
        public ActionResult AccessDenied(string returnURL)
        {
            ViewData["HideLeftNavigation"] = !Authorization.IsLoggedIn;

            return View(MVC.Views.Errors.AccessDenied, (object)returnURL);
        }

        [HttpPost, JsonFilter]
        public Result<StatusResponses> Login(LoginRequest request)
        {
            SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();
            int IdVersion1 = 0;
            int IdVersion2 = 0;
            string remarks = "";
            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Username))
                    throw new ArgumentNullException("username");

                var username = request.Username;

                int userid = (int)entities.Users.Where(p => p.Username == username).ToList()[0].UserId;
                IdVersion1 = (int)entities.Users.Where(p => p.Username == username).ToList()[0].IdVersion;
                int count= entities.MasterVersions.ToList().Count;

                string NamaVersion1 = entities.MasterVersions.Where(p => p.IdMasterVersion == IdVersion1).ToList()[0].NamaVersion;
                IdVersion2 = (int)entities.MasterVersions.ToList()[count - 1].IdMasterVersion;
                string NamaVersion2 = entities.MasterVersions.Where(p => p.IdMasterVersion == IdVersion2).ToList()[0].NamaVersion;

             

                if (IdVersion1==IdVersion2)
                {
                    remarks = "";
                }
                else
                {
                    remarks = "Update versi " + NamaVersion2;
                }
               

                if (WebSecurityHelper.Authenticate(ref username, request.Password, false))

                    return new StatusResponses() { UserId = userid, Username = request.Username,CurrentVersion=NamaVersion1,LastVersion=NamaVersion2,Remarks=remarks};

                throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError);
            });
        }


        //[HttpPost, JsonFilter]
        //public Result<ServiceResponse> Login(LoginRequest request)
        //{
        //    return this.ExecuteMethod(() =>
        //    {
        //        request.CheckNotNull();

        //        if (string.IsNullOrEmpty(request.Username))
        //            throw new ArgumentNullException("username");

        //        var username = request.Username;

        //        if (WebSecurityHelper.Authenticate(ref username, request.Password, false))
        //            return new ServiceResponse();

        //        throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError);
        //    });
        //}

        private ActionResult Error(string message)
        {
            return View(MVC.Views.Errors.ValidationError,
                new ValidationError(Texts.Validation.InvalidResetToken));
        }

        public ActionResult Signout()
        {
            Session.Abandon();
            FormsAuthentication.SignOut();
            return new RedirectResult("~/");
        }

       
       public partial class StatusResponses : ServiceResponse

    {
        public int UserId { get; set; }
        public string Username { get; set; }

        public String CurrentVersion { get; set; }
        public string LastVersion { get; set; }
        public string Remarks { get; set; }

        }
    }
}