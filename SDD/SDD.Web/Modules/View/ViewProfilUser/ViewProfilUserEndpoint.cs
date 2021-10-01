
namespace SDD.View.Endpoints
{
    using SDD.Model;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.ViewProfilUserRepository;
    using MyRow = Entities.ViewProfilUserRow;

    [RoutePrefix("Services/View/ViewProfilUser"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ViewProfilUserController : ServiceEndpoint
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

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        [HttpPost]
        public StatusResponse CekUser(IDbConnection connection, PostIdUser request)
        {

          
            int status = 0;
            string NoKTP = "";
            string NoKK = "";
            string Address = "";
            string PhoneNumber = "";
            int idhubungan = 0;
            string WaNumber = "";
            int JenisKelamin = 0;
            string TanggalLahir="";
            int iddesa = 0;
            string pendidikan = "";
            DateTime? tgllahir;
            int IdPekerjaan = 0;
            int countpekerjaan = 0;
           
            SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();
            try
            {
                NoKTP = entities.Users.Where(p => p.UserId == request.IdUser).ToList()[0].NoKTP;
                if (NoKTP == null)
                {
                    NoKTP = "";
                }
            }
            catch (System.Exception e)
            {
                NoKTP = "";
            }

            try
            {
                NoKK = entities.Users.Where(p => p.UserId == request.IdUser).ToList()[0].NoKK;
                if (NoKK == null)
                {
                    NoKK = "";
                }
            }
            catch (System.Exception e)
            {
                NoKK = "";
            }
            try
            {
                Address = entities.Users.Where(p => p.UserId == request.IdUser).ToList()[0].Address;
                if (Address == null)
                {
                    Address = "";
                }
            }
            catch (System.Exception e)
            {
                Address = "";
            }

           

          
            try
            {
                WaNumber = entities.Users.Where(p => p.UserId == request.IdUser).ToList()[0].WaNumber;
                if (WaNumber == null)
                {
                    WaNumber = "";
                }
            }
            catch (System.Exception e)
            {
                WaNumber = "";
            }

            try
            {
                PhoneNumber = entities.Users.Where(p => p.UserId == request.IdUser).ToList()[0].PhoneNumber;
                if (PhoneNumber==null)
                {
                    PhoneNumber = "";
                }

            }
            catch (System.Exception e)
            {
                PhoneNumber = "";
            }
            try
            {
                JenisKelamin = (int)entities.Users.Where(p => p.UserId == request.IdUser).ToList()[0].JenisKelamin;
                if (JenisKelamin == null)
                {
                    JenisKelamin =0;
                }
            }
            catch (System.Exception e)
            {
                JenisKelamin = 0;
            }
            try
            {
                idhubungan = (int)entities.Users.Where(p => p.UserId == request.IdUser).ToList()[0].IdHubungan_;
                if (idhubungan == null)
                {
                    idhubungan = 0;
                }
            }
            catch (System.Exception e)
            {
                idhubungan = 0;
            }

            try
            {
                iddesa = (int)entities.Users.Where(p => p.UserId == request.IdUser).ToList()[0].IdDesa;
                if (iddesa == null)
                {
                    iddesa = 0;
                }
            }
            catch (System.Exception e)
            {
                iddesa = 0;
            }

            try
            {
                 tgllahir= entities.Users.Where(p => p.UserId == request.IdUser).ToList()[0].TanggalLahir.GetValueOrDefault();
                TanggalLahir = tgllahir.ToStringDefault("yyyy-MM-dd");
                if (tgllahir == null)
                {
                    TanggalLahir = "";
                }
            }
            catch (System.Exception e)
            {
                TanggalLahir = "";
            }
            try
            {
                pendidikan = entities.Users.Where(p => p.UserId == request.IdUser).ToList()[0].Pendidikan;
                if (pendidikan == null)
                {
                    pendidikan = "";
                }
            }
            catch (System.Exception e)
            {
                pendidikan = "";
            }


            try
            {
                IdPekerjaan = (int)entities.ViewAllPenghasilans.Where(p => p.UserId == request.IdUser).ToList()[0].IdPekerjaan;
            }
            catch (System.Exception e)
            {
                IdPekerjaan = 0;
            }

            StatusResponse statusres = new StatusResponse();

            if (IdPekerjaan>0 && NoKK != "" && NoKTP != "" && Address != "" && WaNumber != "" && PhoneNumber != "" && JenisKelamin != 0 && idhubungan != 0 && iddesa != 0 && pendidikan != "" && TanggalLahir != "")
            {
                statusres.Status = 2;
                statusres.Response = "Profil User dan Pekerjaan Lengkap";

            }
            else if (IdPekerjaan == 0 && NoKK != "" && NoKTP != "" && Address != "" && WaNumber != "" && PhoneNumber != "" && JenisKelamin != 0 && idhubungan != 0 && iddesa != 0 && pendidikan != "" && TanggalLahir != "")
            {
                statusres.Status = 1;
                statusres.Response = "Profil User Lengkap Pekerjaan kosong";

            }else if (IdPekerjaan == 0 && NoKK == "" || NoKTP == "" || Address == "" || WaNumber == "" || PhoneNumber == "" || JenisKelamin == 0 || idhubungan == 0 || iddesa == 0 || pendidikan == "" || TanggalLahir == "")
            {
                statusres.Status = 0;
                statusres.Response = "Profil User tidak lengkap dan Pekerjaan Kosong";
            }


          


            return statusres;



        }
    }


    public class ListResponse : ServiceResponse
    {
        public List<StatusResponse> ListStatusResponse { get; set; }
    }
    public class StatusResponse : ServiceResponse
    {
       
        public int Status { get; set; }
        public string Response { get; set; }
    }
    public class PostIdUser : ServiceRequest
    {
        public int IdUser { get; set; }

    }
}
