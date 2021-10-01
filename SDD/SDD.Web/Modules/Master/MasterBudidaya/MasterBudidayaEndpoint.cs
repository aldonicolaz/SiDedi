
namespace SDD.Master.Endpoints
{
    using SDD.Model;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.MasterBudidayaRepository;
    using MyRow = Entities.MasterBudidayaRow;

    [RoutePrefix("Services/Master/MasterBudidaya"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class MasterBudidayaController : ServiceEndpoint
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
        public ListTransactionMasterBudidaya GetListMasterBudidaya(IDbConnection connection, PostIdpekerjaan request)
        {

            var iduser = ((UserDefinition)Authorization.UserDefinition).UserId;
            List<MyRow> listTRansaction = connection.List<MyRow>();

            ListTransactionMasterBudidaya ListTransaction_ = new ListTransactionMasterBudidaya();


            ListTransaction_.ListMasterBudidaya = listTRansaction.OrderByDescending(d => d.IdBudidaya).Where(x => x.IdPekerjaan == request.IdPekerjaan).ToList();
            return ListTransaction_;



        }

        [HttpPost]
        public ListTransactionHasil GetListHasilBudidaya(IDbConnection connection, PostIdhasil request)
        {

            var iduser = ((UserDefinition)Authorization.UserDefinition).UserId;
            List<Master.Entities.MasterHasilBudidayaRow> listTRansaction = connection.List<Master.Entities.MasterHasilBudidayaRow>();

            ListTransactionHasil ListTransaction_ = new ListTransactionHasil();


            ListTransaction_.ListMasterHasilBudidaya = listTRansaction.OrderByDescending(d => d.IdHasilBudidaya).Where(x => x.IdMasterBudidaya == request.IdBudidaya).ToList();
            return ListTransaction_;



        }
        [HttpPost]
        public ListTransaction ListBudidaya(IDbConnection connection, PostIdpekerjaan request)
        {
            SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();
            var iduser = ((UserDefinition)Authorization.UserDefinition).UserId;
            List<DataHasilBudidaya> ListDatahasil_ = new List<DataHasilBudidaya>();
            List<DataBudidaya> ListDatabudidaya_ = new List<DataBudidaya>();
            DataBudidaya DataBudidaya_ = new DataBudidaya();
            int idhasilbudidaya = 0;
            int idbudidaya = 0;
            string namahasil = "";
            int idsatuan = 0;
            int idsatuanbudidaya = 0;
            int idmasterbudidaya = 0;
            string namabudidaya = "";
            int idpekerjaan = 0;
            string desc = "";
            try
            {
                idmasterbudidaya = (int)entities.MasterBudidayas.Where(p => p.IdPekerjaan == request.IdPekerjaan).ToList()[0].IdBudidaya;
            }
            catch (System.Exception e)
            {
                idmasterbudidaya = 0;
            }

            try
            {
                idsatuanbudidaya = (int)entities.MasterBudidayas.Where(p => p.IdPekerjaan == request.IdPekerjaan).ToList()[0].IdSatuanBudidaya;
            }
            catch (System.Exception e)
            {
                idsatuanbudidaya = 0;
            }
            try
            {
                idpekerjaan = (int)entities.MasterBudidayas.Where(p => p.IdPekerjaan == request.IdPekerjaan).ToList()[0].IdPekerjaan;
            }
            catch (System.Exception e)
            {
                idpekerjaan = 0;
            }

            try
            {
                namabudidaya = entities.MasterBudidayas.Where(p => p.IdPekerjaan == request.IdPekerjaan).ToList()[0].NamaBudidaya;
            }
            catch (System.Exception e)
            {
                namabudidaya = "";
            }

            try
            {
                idbudidaya= (int)entities.MasterBudidayas.Where(p => p.IdPekerjaan == request.IdPekerjaan).ToList()[0].IdBudidaya;
            }
            catch (System.Exception e)
            {
                idbudidaya = 0;
            }



            try
            {
                idhasilbudidaya = (int)entities.MasterHasilBudidayas.Where(p => p.IdMasterBudidaya == idbudidaya).ToList()[0].IdHasilBudidaya;
            }
            catch (System.Exception e)
            {
                idhasilbudidaya = 0;
            }

            try
            {
                namahasil = entities.MasterHasilBudidayas.Where(p => p.IdHasilBudidaya == idhasilbudidaya).ToList()[0].NamaHasil;
            }
            catch (System.Exception e)
            {
                namahasil = "";
            }

            try
            {
                idsatuan = (int)entities.MasterHasilBudidayas.Where(p => p.IdHasilBudidaya == idhasilbudidaya).ToList()[0].IdSatuanHasil;
            }
            catch (System.Exception e)
            {
                idsatuan = 0;
            }

            try
            {
                desc = entities.MasterHasilBudidayas.Where(p => p.IdHasilBudidaya == idhasilbudidaya).ToList()[0].Desc;
            }
            catch (System.Exception e)
            {
                desc = "";
            }

          

            DataHasilBudidaya DataHasilBudidaya_ = new DataHasilBudidaya();
            DataHasilBudidaya_.IdHasilBudidaya = idhasilbudidaya;
            DataHasilBudidaya_.IdMasterBudidaya = idbudidaya;
            DataHasilBudidaya_.NamaHasil = namahasil;
            DataHasilBudidaya_.IdSatuanHasil = idsatuan;
            DataHasilBudidaya_.Desc = desc;

            ListDatahasil_.Add(DataHasilBudidaya_);


            DataBudidaya DataMasterBudidaya_ = new DataBudidaya();
            DataMasterBudidaya_.IdBudidaya = idmasterbudidaya;
            DataMasterBudidaya_.IdPekerjaan = idpekerjaan;
            DataMasterBudidaya_.IdSatuanBudidaya = idsatuanbudidaya;
            DataMasterBudidaya_.NamaBudidaya = namabudidaya;
            DataMasterBudidaya_.detail = ListDatahasil_;
            ListDatabudidaya_.Add(DataMasterBudidaya_);
      

             ListTransaction ListTransaction_ = new ListTransaction();
            ListTransaction_.ListTransactionRow = ListDatabudidaya_;
            return ListTransaction_;



        }

    }

    public class ListTransaction : ServiceResponse
    {
        public List<DataBudidaya> ListTransactionRow { get; set; }

    }

    public class ListTransactionMasterBudidaya : ServiceResponse
    {
        public List<MyRow> ListMasterBudidaya { get; set; }

    }

    public class ListTransactionHasil : ServiceResponse
    {
        public List<Master.Entities.MasterHasilBudidayaRow> ListMasterHasilBudidaya { get; set; }

    }
    public class PostIdpekerjaan : ServiceRequest
    {
        public int IdPekerjaan { get; set; }

    }

    public class PostIdhasil : ServiceRequest
    {
        public int IdBudidaya { get; set; }

    }

    public class DataBudidaya
    {
        public int IdBudidaya { get; set; }
        public int IdPekerjaan { get; set; }

        public string NamaBudidaya { get; set; }

        public int IdSatuanBudidaya { get; set; }
        public List<DataHasilBudidaya> detail { get; set; }
    }
   

    public class DataHasilBudidaya
    {

        public int IdHasilBudidaya { get; set; }
        public int IdMasterBudidaya { get; set; }
        public string NamaHasil { get; set; }
        public int IdSatuanHasil { get; set; }
        public string Desc { get; set; }
    }
}
