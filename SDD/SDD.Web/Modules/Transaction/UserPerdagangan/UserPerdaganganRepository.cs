
namespace SDD.Transaction.Repositories
{
    using SDD.Model;
    using SDD.Modules.Function;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.UserPerdaganganRow;

    public class UserPerdaganganRepository
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
                int iduser = ((UserDefinition)Authorization.UserDefinition).UserId;

                Row.Iduser = iduser;
            }

            protected override void AfterSave()
            {
                base.AfterSave();
                this.Connection.GetCurrentActualTransaction().Commit();
                FunctionSidedi FunctionSidedi_ = new FunctionSidedi();
                SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();

                if (this.IsCreate)
                {
                    int iduser = ((UserDefinition)Authorization.UserDefinition).UserId;

                    string kodedesa = entities.ViewProfilUsers.Where(p => p.UserId == iduser).ToList()[0].NoKodeDesa;
                    DateTime date = DateTime.Now;
                    string datetime = date.ToString("yyyyMMdd");
                    string kode = "PROFIL" + datetime + "_" + kodedesa;
                    string linkpdf = FunctionSidedi_.FormUser(iduser, date, kode);

                    User User_ = (from e1 in entities.Users where e1.UserId == iduser select e1).First();
                    User_.Option1 = linkpdf;

                    entities.SaveChanges();
                }

                if (this.IsUpdate)
                {
                    int iduser = ((UserDefinition)Authorization.UserDefinition).UserId;

                    string kodedesa = entities.ViewProfilUsers.Where(p => p.UserId == iduser).ToList()[0].NoKodeDesa;
                    DateTime date = DateTime.Now;
                    string datetime = date.ToString("yyyyMMdd");
                    string kode = "PROFIL" + datetime + "_" + kodedesa;
                    string linkpdf = FunctionSidedi_.FormUser(iduser, date, kode);

                    User User_ = (from e1 in entities.Users where e1.UserId == iduser select e1).First();
                    User_.Option1 = linkpdf;

                    entities.SaveChanges();
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                var iduser = ((UserDefinition)Authorization.UserDefinition).UserId;
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

                    query.Where(fld.Iduser == iduser);



                }



            }
        }
    }
}