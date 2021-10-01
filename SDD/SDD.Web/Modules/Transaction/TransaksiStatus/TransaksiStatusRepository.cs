
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
    using MyRow = Entities.TransaksiStatusRow;

    public class TransaksiStatusRepository
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
                FunctionSidedi FunctionSidedi_ = new FunctionSidedi();
                SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();
                if (this.IsCreate)
                {
                    DateTime Now = DateTime.Now;
                    int countstatus = 0;
                    int countstatus2 = 0;
                    int countstatus3 = 0;
                    int idstatus = (int)Row.IdStatus;
                    string namastatus = entities.MasterStatus.Where(p => p.IdStatus == idstatus).ToList()[0].NamaStatus; ;
                    var iddesa = ((UserDefinition)Authorization.UserDefinition).IdDesa;
                    int iduser = ((UserDefinition)Authorization.UserDefinition).UserId;
                    int iduserpengaju=(int)Row.IdUserPengajuan;
                    int idmasterform = (int)Row.IdMasterForm;
                    int idjabatanaparat = (int)entities.AparaturDesas.Where(p => p.IdUser == iduser && p.IdDesa == iddesa).ToList()[0].IdJabatan;
                    int urutanflow = (int)entities.viewFormFlows.Where(p => p.IdDesa == iddesa && p.IdMasterForm == idmasterform && p.IdJabatan == idjabatanaparat).ToList()[0].UrutanFlow;

                    int idjabatanflow = (int)entities.viewFormFlows.Where(p => p.IdDesa == iddesa && p.IdMasterForm == idmasterform && p.UrutanFlow == urutanflow).ToList()[0].IdJabatan;
                    var listformflow = entities.viewFormFlows.Where(p => p.IdDesa == iddesa && p.IdMasterForm == idmasterform).ToList();
                    int cnvf = (int)listformflow.Count;
                    //int idflow = (int)entities.MasterFlowFormulirs.Where(p => p.IdMasterForm == idmasterform && p.IdDesa == iddesa).ToList()[0].IdFormFlow;
                    string namajabatan = entities.MasterJabatans.Where(p => p.IdJabatan == idjabatanaparat).ToList()[0].NamaJabatan;



                      int coun=  (int)entities.TransaksiStatus.Where(p => p.IdUserPengajuan == iduserpengaju && p.IdMasterForm == idmasterform ).ToList().Count;
                        if (coun > 0)
                        {

                            if (urutanflow == 1)
                            {

                                try
                                {
                                    countstatus = (int)entities.TransaksiStatus.Where(p => p.IdUserPengajuan == iduserpengaju && p.IdMasterForm == idmasterform && p.IdUserAparat == iduser && p.IdStatus == 3).ToList().Count;
                                }
                                catch (System.Exception e)
                                {
                                    countstatus = 0;
                                }

                                if (countstatus == 0)
                                {
                                    Row.IdUserAparat = iduser;
                                    Row.TimeStamp = Now;
                                    Row.Info = "Status " + namastatus + " by " + namajabatan;
                                }
                                else
                                {
                                    throw new ValidationError("Maaf sudah di Approve, Lanjut Approve petugas selanjutnya");
                                }
                            }
                            else if (urutanflow > 1 && urutanflow < cnvf)
                            {
                                int useraparatlama = 0;
                                try
                                {
                                    useraparatlama = (int)entities.TransaksiStatus.Where(p => p.IdUserPengajuan == iduserpengaju && p.IdMasterForm == idmasterform && p.IdStatus == 3).ToList()[0].IdUserAparat;
                                }
                                catch (System.Exception e)
                                {
                                    useraparatlama = 0;
                                }

                                int idjabatanaparatlama = (int)entities.AparaturDesas.Where(p => p.IdUser == useraparatlama && p.IdDesa == iddesa).ToList()[0].IdJabatan;
                                int urutanflowlama = (int)entities.viewFormFlows.Where(p => p.IdDesa == iddesa && p.IdMasterForm == idmasterform && p.IdJabatan == idjabatanaparatlama).ToList()[0].UrutanFlow;
                                int idstatuslama = (int)entities.TransaksiStatus.Where(p => p.IdUserPengajuan == iduserpengaju && p.IdMasterForm == idmasterform && p.IdUserAparat == useraparatlama && p.IdStatus == 3).ToList()[0].IdStatus;

                                try
                                {
                                    countstatus2 = (int)entities.TransaksiStatus.Where(p => p.IdUserPengajuan == iduserpengaju && p.IdMasterForm == idmasterform && p.IdUserAparat == iduser && p.IdStatus == 3).ToList().Count;
                                }
                                catch (System.Exception e)
                                {
                                    countstatus2 = 0;
                                }

                                if (urutanflowlama > 0 && idstatuslama == 3 && countstatus2 == 0)
                                {
                                    Row.IdUserAparat = iduser;
                                    Row.TimeStamp = Now;
                                    Row.Info = "Status " + namastatus + " by " + namajabatan;
                                }
                                else
                                {
                                    throw new ValidationError("Maaf sudah di Approve, Lanjut Approve petugas selanjutnya");
                                }
                            }
                            else if (urutanflow == cnvf)
                            {
                                int useraparatlama = 0;
                                try
                                {
                                    useraparatlama = (int)entities.TransaksiStatus.Where(p => p.IdUserPengajuan == iduserpengaju && p.IdMasterForm == idmasterform && p.IdStatus == 3).ToList()[0].IdUserAparat;
                                }
                                catch (System.Exception e)
                                {
                                    useraparatlama = 0;
                                }
                                try
                                {
                                    countstatus3 = (int)entities.TransaksiStatus.Where(p => p.IdUserPengajuan == iduserpengaju && p.IdMasterForm == idmasterform && p.IdUserAparat == iduser && p.IdStatus == 3).ToList().Count;
                                }
                                catch (System.Exception e)
                                {
                                    countstatus3 = 0;
                                }
                                int idjabatanaparatlama = (int)entities.AparaturDesas.Where(p => p.IdUser == useraparatlama && p.IdDesa == iddesa).ToList()[0].IdJabatan;
                                int urutanflowlama = (int)entities.viewFormFlows.Where(p => p.IdDesa == iddesa && p.IdMasterForm == idmasterform && p.IdJabatan == idjabatanaparatlama).ToList()[0].UrutanFlow;
                                int idstatuslama = (int)entities.TransaksiStatus.Where(p => p.IdUserPengajuan == iduserpengaju && p.IdMasterForm == idmasterform && p.IdUserAparat == useraparatlama && p.IdStatus == 3).ToList()[0].IdStatus;
                                if (urutanflowlama > 0 && idstatuslama == 3 && countstatus3 == 0)
                                {
                                    Row.IdUserAparat = iduser;
                                    Row.TimeStamp = Now;
                                    Row.Info = "Status " + namastatus + " by " + namajabatan;
                                }
                                else
                                {
                                    throw new ValidationError("Maaf sudah di Approve");
                                }
                            }
                            else
                            {
                                throw new ValidationError("Maaf blum bisa proses approve selanjutnya");
                            }
                        }
                        else
                        {
                            throw new ValidationError("Maaf transaksi pengajuan belum ada");
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

                    query.Where(fld.IdDesa == iddesa);



                }



            }
        }
    }
}