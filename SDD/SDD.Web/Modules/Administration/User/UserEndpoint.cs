

namespace SDD.Administration.Endpoints
{
    using Entities;
    using Repositories;
    using SDD.Model;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.UserRepository;
    using MyRow = Entities.UserRow;

    [RoutePrefix("Services/Administration/User"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyRepository().Undelete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
        [HttpGet]
        public List<User> GetProfile(IDbConnection connection, ListRequest request)
        {
            SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();
            int IdUser = Convert.ToInt32(((UserDefinition)Serenity.Authorization.UserDefinition).UserId);
            List<User> list_user = new List<User>();
            var listuser = entities.Users.Where(p => p.UserId == IdUser).ToList();
            Int64 iddesa= (Int64)listuser[0].IdDesa;
            string namadesa = entities.MasterDesas.Where(p => p.IdDesa == iddesa).ToList()[0].NamaDesa;
            int IdKecamatan =(int) entities.MasterDesas.Where(p => p.IdDesa == iddesa).ToList()[0].IdKecamatan;
            int idkabupaten= (int)entities.MasterKecamatans.Where(p => p.idKecamatan == IdKecamatan).ToList()[0].IdKabupaten;
            int idpropinsi= (int)entities.MasterKabupatens.Where(p => p.IdKabupaten == idkabupaten).ToList()[0].IdPropinsi;

            int idhubungan = 0;
            int jeniskelamin = 0;
            int updateuserid = 0;

            try
            {
                updateuserid = (int)listuser[0].UpdateUserId;
            }
            catch (System.Exception e)
            {
                updateuserid = 0;
            }
            try
            {
                jeniskelamin = (int)listuser[0].JenisKelamin;
            }
            catch (System.Exception e)
            {
                jeniskelamin = 0;
            }
            try
            {
                idhubungan = (int)listuser[0].IdHubungan_;
            }
            catch (System.Exception e)
            {
                idhubungan = 0;
            }
            User User_ = new User();
          
            User_.IdDesa = (Int64)listuser[0].IdDesa;
            User_.NamaDesa = namadesa;
            User_.UserId = IdUser;
            User_.Username = listuser[0].Username;
            User_.Source = listuser[0].Source;
            User_.PasswordHash = listuser[0].PasswordHash;
            User_.PasswordSalt = listuser[0].PasswordSalt;
            User_.UserImage = listuser[0].UserImage;
            User_.DisplayName = listuser[0].DisplayName;
            User_.Email = listuser[0].Email;
            User_.IsActive = (Int16)listuser[0].IsActive;
            User_.Address = listuser[0].Address;
            User_.IdHubungan = idhubungan;
            User_.NoKTP = listuser[0].NoKTP;
            User_.NoKK = listuser[0].NoKK;
            User_.PhoneNumber = listuser[0].PhoneNumber;
            User_.WaNumber = listuser[0].WaNumber;
            User_.JenisKelamin =jeniskelamin;
            User_.TanggalLahir =listuser[0].TanggalLahir.GetValueOrDefault();
            User_.Description = listuser[0].Description;
            User_.InsertUserId = (int)listuser[0].InsertUserId;
            User_.InsertDate = listuser[0].InsertDate;
            User_.UpdateUserId = updateuserid;
            User_.UpdateDate = listuser[0].UpdateDate.GetValueOrDefault();
            User_.IdKecamatan = IdKecamatan;
            User_.IdKabupaten = idkabupaten;
            User_.IdPropinsi = idpropinsi;
            User_.Pendidikan = listuser[0].Pendidikan;
            User_.Option1= listuser[0].Option1;
            User_.FcmToken= listuser[0].FcmToken;
            list_user.Add(User_);
            return list_user;
        }
        private static string[] permissionsUsedFromScript;

        /// <summary>
        /// This declares a dynamic script with key 'UserData' that will be available from client side.
        /// We don't cache it at dynamic script manager, because dynamic scripts are cached globally,
        /// similar to static variables, not per user.
        /// </summary>
        [NonAction, DataScript("UserData", CacheDuration = -1), ServiceAuthorize]
        public ScriptUserDefinition GetUserData()
        {
            var result = new ScriptUserDefinition();
            var user = Authorization.UserDefinition as UserDefinition;

            if (user == null)
            {
                result.Permissions = new Dictionary<string, bool>();
                return result;
            }

            result.Username = user.Username;
            result.IdDesa = user.IdDesa;
            result.DisplayName = user.DisplayName;
            result.IsAdmin = user.Username == "admin";
            result.UserId = user.UserId;
            result.Roles = user.Roles.Select(r => r.RoleName).ToList();
            result.RolesId = user.Roles.Select(r => r.RoleId).ToList();
            if (user.Roles.Count() != 0)
            {
                result.RoleId = user.Roles.Select(r => r.RoleId).First<int>();
            }
            else
            {
                result.RoleId = 0;
            }
            if (user.Roles.Count() != 0)
            {
                result.RoleName = user.Roles.Select(r => r.RoleName).First<String>();
            }
            else
            {
                result.RoleName = "";
            }
            result.Permissions = TwoLevelCache.GetLocalStoreOnly("ScriptUserPermissions:" + user.Id, TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () =>
                {
                    var permissions = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);

                    if (permissionsUsedFromScript == null)
                    {
                        permissionsUsedFromScript = new UserPermissionRepository().ListPermissionKeys().Entities
                            .Where(permissionKey =>
                            {
                                // this sends permission information for all permission keys to client side.
                                // if you don't need all of them to be available from script, filter them here.
                                // this is recommended for security / performance reasons...
                                return true;
                            }).ToArray();
                    }

                    foreach (var permissionKey in permissionsUsedFromScript)
                    {
                        if (Authorization.HasPermission(permissionKey))
                            permissions[permissionKey] = true;
                    }

                    return permissions;
                });

            return result;
        }
    }

    public class User
    {

        public Int64 IdDesa { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Source { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string UserImage { get; set; }
        public DateTime LastDirectoryUpdate { get; set; }
        public Int16 IsActive { get; set; }
        public string Password { get; set; }
        public string PasswordConfirm { get; set; }
        public string Address { get; set; }
        public int IdHubungan { get; set; }
        public string NoKTP { get; set; }
        public string NoKK { get; set; }
        public string PhoneNumber { get; set; }
        public string WaNumber { get; set; }
        public string Option1 { get; set; }
        public string Option2 { get; set; }
        public string Option3 { get; set; }
        public int JenisKelamin { get; set; }
        public DateTime TanggalLahir { get; set; }
        public string Description { get; set; }
        public string Pendidikan { get; set; }
        public int IdKecamatan { get; set; }
        public int IdKabupaten { get; set; }
        public int IdPropinsi { get; set; }
        public int InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public int UpdateUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public string NamaDesa { get; set; }
        public string FcmToken { get; set; }
    }
}
