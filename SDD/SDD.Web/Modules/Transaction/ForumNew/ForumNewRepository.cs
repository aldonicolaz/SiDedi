
namespace SDD.Transaction.Repositories
{
    using SDD.Model;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Linq;
    using System.Data;
    using MyRow = Entities.ForumNewRow;

    public class ForumNewRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {
            protected override void BeforeSave()
            {
                base.BeforeSave();

                var iduser = ((UserDefinition)Authorization.UserDefinition).UserId;
                var iddesa = ((UserDefinition)Authorization.UserDefinition).IdDesa;
                int RoleId = 0;
                try
                {
                    RoleId = ((UserDefinition)Serenity.Authorization.UserDefinition).Roles[0].RoleId;
                }
                catch (System.Exception e)
                {
                    RoleId = 0;
                }

                if (this.IsCreate)
                {

                    Row.Timestamp = DateTime.Now;
                    Row.IdUserInsert = iduser;
                }

            }

            protected override void AfterSave()
            {
                base.AfterSave();
                this.Connection.GetCurrentActualTransaction().Commit();

                var iduser = ((UserDefinition)Authorization.UserDefinition).UserId;
                var iddesa = ((UserDefinition)Authorization.UserDefinition).IdDesa;
                SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();
                int RoleId = 0;
                try
                {
                    RoleId = ((UserDefinition)Serenity.Authorization.UserDefinition).Roles[0].RoleId;
                }
                catch (System.Exception e)
                {
                    RoleId = 0;
                }

                int id = (int)Row.IdForum;


                if (this.IsUpdate)
                {
                    int detailcount = (int)entities.DetailForums.Where(p => p.IdForum == id).ToList().Count;
                    var list = entities.DetailForums.Where(p => p.IdForum == id).ToList();
                    if (detailcount > 0)
                    {
                        for (int x = 0; x < detailcount; x++)
                        {
                            int iddetail = (int)list[x].IdDetailForum;
                            DetailForum DetailForum_ = (from e1 in entities.DetailForums where e1.IdDetailForum == iddetail select e1).First();
                            DetailForum_.IdUserRespon = iduser;
                            DetailForum_.Timestamp = DateTime.Now;
                            entities.SaveChanges();
                        }
                    }

                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}