
namespace SDD.Master.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using System.Linq;
    using MyRepository = Repositories.MasterPropinsiRepository;
    using MyRow = Entities.MasterPropinsiRow;

    [RoutePrefix("Services/Master/MasterPropinsi"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class MasterPropinsiController : ServiceEndpoint
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
        public ListKabupaten GetListKabupaten(IDbConnection connection, PostIdPropinsi request)
        {

            var iduser = ((UserDefinition)Authorization.UserDefinition).UserId;
            List<Master.Entities.MasterKabupatenRow> listTRansaction = connection.List<Master.Entities.MasterKabupatenRow>();

            ListKabupaten ListTransaction_ = new ListKabupaten();


            ListTransaction_.ListDataKabupaten = listTRansaction.OrderByDescending(d => d.IdKabupaten).Where(x => x.IdPropinsi == request.IdPropinsi).ToList();
            return ListTransaction_;



        }

        [HttpPost]
        public ListKecamatan GetListKecamatan(IDbConnection connection, PostIdKabupaten request)
        {

            var iduser = ((UserDefinition)Authorization.UserDefinition).UserId;
            List<Master.Entities.MasterKecamatanRow> listTRansaction = connection.List<Master.Entities.MasterKecamatanRow>();

            ListKecamatan ListTransaction_ = new ListKecamatan();


            ListTransaction_.ListDataKecamatan = listTRansaction.OrderByDescending(d => d.IdKecamatan).Where(x => x.IdKabupaten == request.IdKabupaten).ToList();
            return ListTransaction_;



        }

        [HttpPost]
        public ListDesa GetListDesa(IDbConnection connection, PostIdKecamatan request)
        {

            var iduser = ((UserDefinition)Authorization.UserDefinition).UserId;
            List<Master.Entities.MasterDesaRow> listTRansaction = connection.List<Master.Entities.MasterDesaRow>();

            ListDesa ListTransaction_ = new ListDesa();


            ListTransaction_.ListDataDesa = listTRansaction.OrderByDescending(d => d.IdDesa).Where(x => x.IdKecamatan == request.IdKecamatan).ToList();
            return ListTransaction_;



        }
    }
    public class ListKabupaten : ServiceResponse
    {
        public List<Master.Entities.MasterKabupatenRow> ListDataKabupaten { get; set; }

    }
    public class PostIdPropinsi : ServiceRequest
    {
        public int IdPropinsi { get; set; }

    }
    public class ListKecamatan : ServiceResponse
    {
        public List<Master.Entities.MasterKecamatanRow> ListDataKecamatan{ get; set; }

    }
    public class PostIdKabupaten : ServiceRequest
    {
        public int IdKabupaten { get; set; }

    }
    public class ListDesa : ServiceResponse
    {
        public List<Master.Entities.MasterDesaRow> ListDataDesa{ get; set; }

    }
    public class PostIdKecamatan : ServiceRequest
    {
        public int IdKecamatan { get; set; }

    }
}
