
namespace SDD.Transaction.Repositories
{
    using SDD.Model;
    using SDD.Modules.Function;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Linq;
    using System.Data;
    using MyRow = Entities.BannerRow;

    public class BannerRepository
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

               

                Row.IdUser = iduser;
               
            }

            protected override void AfterSave()
            {
                base.AfterSave();
                this.Connection.GetCurrentActualTransaction().Commit();
                SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();

                int idbanner = (int)Row.IdBanner;
                string image = Row.Image;
                string url = "http://asri.aspan.co.id/sidedi/upload/" + image;
                Banner Banner_ = (from e1 in entities.Banners where e1.IdBanner == idbanner select e1).First();
                Banner_.UrlImage = url;

                entities.SaveChanges();

            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

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

                if (iduser == 1)
                {

                }
                else
                {

                    query.Where(fld.IdUser == iduser);



                }



            }
        }
    }
}