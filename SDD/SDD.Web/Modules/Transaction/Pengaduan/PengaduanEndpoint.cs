
namespace SDD.Transaction.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.PengaduanRepository;
    using MyRow = Entities.PengaduanRow;

    [RoutePrefix("Services/Transaction/Pengaduan"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PengaduanController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        //public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        //{
        //    return new MyRepository().Create(uow, request);
        //}

        public SaveResponse Create( SaveRequest<MyRow> request)
        {
            using (var connection = SqlConnections.NewByKey("SDD_Connection"))
            using (var uow = new UnitOfWork(connection))
            {
                var result = new MyRepository().Create(uow, request);
                //uow.Commit();
                return result;
            }
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(SaveRequest<MyRow> request)
        {
            using (var connection = SqlConnections.NewByKey("SDD_Connection"))
            using (var uow = new UnitOfWork(connection))
            {
                var result = new MyRepository().Update(uow, request);
                //uow.Commit();
                return result;
            }
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
    }
}
