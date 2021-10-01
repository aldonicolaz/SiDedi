
namespace SDD.Transaction.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Collections.Generic;
    using MyRow = Entities.PengaduanRow;
    using SDD.Model;
    using Newtonsoft.Json;
    using System.Linq;
    using System.Data.Entity;
    using SDD.Modules.Function;
    using SDD.Transaction.Entities;
    using SDD.Transaction.Forms;

    public class PengaduanRepository
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

                if(this.IsCreate)
                {
                    Row.Timestamp = DateTime.Now;
                    Row.IdUserPengadu = iduser;
                    Row.IdDesa = iddesa;
                }

            }

            protected override void AfterSave()
            {
                base.AfterSave();
                this.Connection.GetCurrentActualTransaction().Commit();
                SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();
                int id = (int)Row.IdPengaduan;
                int RoleId = 0;
                try
                {
                     RoleId =  ((UserDefinition)Authorization.UserDefinition).Roles[0].RoleId;
                }
                catch
                {
                    RoleId = 0;
                }


                if (this.IsUpdate)
                {
                    int userid = ((UserDefinition)Authorization.UserDefinition).UserId;
                    int detailcount = (int)entities.DetailPengaduans.Where(p => p.IdPengaduan == id).ToList().Count;  // mengambil count atau jumlah list 
                    var listdetail = entities.DetailPengaduans.Where(p => p.IdPengaduan == id).ToList(); // mengambil list detailpengaduan



                    if (detailcount > 0)
                    {
                      
                            int iddetail = (int)listdetail[detailcount-1].IdDetailPengaduan; // unboxing list detail dan mengambil nilai id detail
                            DetailPengaduan detailpengaduan = (from e in entities.DetailPengaduans where e.IdDetailPengaduan == iddetail select e).First(); //query Linq untuk mengambil/select list Iddetailpengaduan
                            detailpengaduan.IdUserPenanggap = userid; // isi user yang menanganggapi
                            detailpengaduan.Timestamp = DateTime.Now; 

                            entities.SaveChanges();
                    }
                }
            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();
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
                else if (RoleId == 1)
                {
                    query.Where(fld.IdUserPengadu == iduser);
                }
                else if (RoleId == 2)
                {
                    query.Where(fld.IdUserPengaduIdDesa == iddesa);
                }
                //else if (RoleId == 1)  <<<Option
                //{
                //    query.Where(fld.IdUserInsert == iduser);
                //}


            }
        }
    }
}