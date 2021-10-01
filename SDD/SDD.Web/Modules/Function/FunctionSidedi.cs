using CrystalDecisions.CrystalReports.Engine;
using SDD.Model;
using SDD.Model.SidediDatasetTableAdapters;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using static SDD.Model.SidediDataset;

namespace SDD.Modules.Function
{
    public class FunctionSidedi
    {
        SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();

        internal int InsertEmailLog(int IdUser, String From, String To, String Messages, String Desc, String LinkContent, int StatusWA)
        {
            EmailLog EmailLog_ = new EmailLog();
            EmailLog_.IdUser = IdUser;
            EmailLog_.From = From;
            EmailLog_.To = To;
            EmailLog_.Messages = Messages;
            EmailLog_.Desc = Desc;
            EmailLog_.LinkContent = LinkContent;
            EmailLog_.StatusWA = StatusWA;
            entities.EmailLogs.Add(EmailLog_);
            entities.SaveChanges();
            int IdEmail = EmailLog_.IdEmail;
            return IdEmail;
        }

        internal int InsertTransaction(int IdMasterForm, int IdStatus,int IdUserPengajuan,string Keterangan, int IdUserAparat,DateTime Timestamp,int IdTransaksiForm)
        {
            
            TransaksiStatu TransaksiStatu_ = new TransaksiStatu();
            TransaksiStatu_.IdMasterForm = IdMasterForm;
            TransaksiStatu_.IdStatus = IdStatus;
            TransaksiStatu_.IdUserPengajuan = IdUserPengajuan;
            TransaksiStatu_.Keterangan = Keterangan;
            TransaksiStatu_.IdUserAparat = IdUserAparat;
            TransaksiStatu_.TimeStamp = Timestamp;
            TransaksiStatu_.IdTransaksiForm = IdTransaksiForm;
            entities.TransaksiStatus.Add(TransaksiStatu_);
            entities.SaveChanges();
           int IdTransaksi = TransaksiStatu_.IdTransaksi;
            return IdTransaksi;
        }

        internal String Chartdesa( DateTime Date)
        {
            String DateConvert = Date.ToString("yyyy-MM-dd");
            try
            {
                if (!Directory.Exists(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert)))
                {
                    Directory.CreateDirectory(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert));
                }
                ReportDocument rd = new ReportDocument();



                rd.Load(System.Web.HttpContext.Current.Server.MapPath("~/Modules/RPT/ChartDesa.rpt"));


                vChartPenghasilanDesaTableAdapter daView1 = new vChartPenghasilanDesaTableAdapter();



                vChartPenghasilanDesaDataTable vChartPenghasilanDesaDataTable_ = new vChartPenghasilanDesaDataTable();

                daView1.Fill(vChartPenghasilanDesaDataTable_);




                DataTable dt1 = vChartPenghasilanDesaDataTable_;


                rd.Database.Tables["vChartPenghasilanDesa"].SetDataSource(dt1);



                rd.PrintOptions.PaperSize = CrystalDecisions.Shared.PaperSize.PaperLegal;
                rd.ExportToDisk(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + "Chart.pdf"));
                 // return System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + "Chart.pdf");
                return "http://asri.aspan.co.id/sidedi/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/"+ "Chart.pdf";


            }
            catch (System.Exception ex)
            {
                return ex.Message;

            }
        }

        internal String FormKTP(int IdFormulirKTP, DateTime Date, string kodektp)
        {
            String DateConvert = Date.ToString("yyyy-MM-dd");
            try
            {
                if (!Directory.Exists(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert)))
                {
                    Directory.CreateDirectory(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert));
                }
                ReportDocument rd = new ReportDocument();



                rd.Load(System.Web.HttpContext.Current.Server.MapPath("~/Modules/RPT/FormKTP.rpt"));


                ViewFormKTPTableAdapter daView1 = new ViewFormKTPTableAdapter();



                ViewFormKTPDataTable ViewFormKTPDataTable_ = new ViewFormKTPDataTable();

                daView1.FillBy(ViewFormKTPDataTable_, IdFormulirKTP);




                DataTable dt1 = ViewFormKTPDataTable_;


                rd.Database.Tables["ViewFormKTP"].SetDataSource(dt1);



                rd.PrintOptions.PaperSize = CrystalDecisions.Shared.PaperSize.PaperA4;
                rd.ExportToDisk(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + IdFormulirKTP+"_"+kodektp+ ".pdf"));
              //  return System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + IdFormulirKTP + "_" + kodektp + ".pdf");
                return "http://asri.aspan.co.id/sidedi/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + IdFormulirKTP + "_" + kodektp + ".pdf";


            }
            catch (System.Exception ex)
            {
                return ex.Message;

            }
        }

        internal String FormKK(int IdFormulirKK, DateTime Date, string kodekk)
        {
            String DateConvert = Date.ToString("yyyy-MM-dd");
            try
            {
                if (!Directory.Exists(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert)))
                {
                    Directory.CreateDirectory(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert));
                }
                ReportDocument rd = new ReportDocument();



                rd.Load(System.Web.HttpContext.Current.Server.MapPath("~/Modules/RPT/FormulirKK.rpt"));


                ViewFormKKTableAdapter daView1 = new ViewFormKKTableAdapter();
                ViewDetailFormKKTableAdapter daView2 = new ViewDetailFormKKTableAdapter();



                ViewFormKKDataTable ViewFormKKDataTable_ = new ViewFormKKDataTable();
                ViewDetailFormKKDataTable ViewDetailFormKKDataTable_ = new ViewDetailFormKKDataTable();

                daView1.FillBy(ViewFormKKDataTable_, IdFormulirKK);
                daView2.FillBy(ViewDetailFormKKDataTable_,IdFormulirKK);




                DataTable dt1 = ViewFormKKDataTable_;
                DataTable dt2 = ViewDetailFormKKDataTable_;


                rd.Database.Tables["ViewFormKK"].SetDataSource(dt1);
                rd.Database.Tables["ViewDetailFormKK"].SetDataSource(dt2);



                rd.PrintOptions.PaperSize = CrystalDecisions.Shared.PaperSize.PaperA4;
                rd.ExportToDisk(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + IdFormulirKK + "_" + kodekk + ".pdf"));
                //  return System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + IdFormulirKTP + "_" + kodektp + ".pdf");
                return "http://asri.aspan.co.id/sidedi/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + IdFormulirKK + "_" + kodekk + ".pdf";


            }
            catch (System.Exception ex)
            {
                return ex.Message;

            }
        }

        internal String FormAkta(int IdFormAktaKelahiran, DateTime Date, string kodeakta)
        {
            String DateConvert = Date.ToString("yyyy-MM-dd");
            try
            {
                if (!Directory.Exists(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert)))
                {
                    Directory.CreateDirectory(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert));
                }
                ReportDocument rd = new ReportDocument();



                rd.Load(System.Web.HttpContext.Current.Server.MapPath("~/Modules/RPT/SuketKelahiran.rpt"));


                ViewFormAktaKelahiranTableAdapter daView1 = new ViewFormAktaKelahiranTableAdapter();
                ViewDetailAktaLahirTableAdapter daView2 = new ViewDetailAktaLahirTableAdapter();



                ViewFormAktaKelahiranDataTable ViewFormAktaKelahiranDataTable_ = new ViewFormAktaKelahiranDataTable();
                ViewDetailAktaLahirDataTable ViewDetailAktaLahirDataTable_ = new ViewDetailAktaLahirDataTable();

                daView1.FillBy(ViewFormAktaKelahiranDataTable_, IdFormAktaKelahiran);
                daView2.FillBy(ViewDetailAktaLahirDataTable_, IdFormAktaKelahiran);




                DataTable dt1 = ViewFormAktaKelahiranDataTable_;
                DataTable dt2 = ViewDetailAktaLahirDataTable_;


                rd.Database.Tables["ViewFormAktaKelahiran"].SetDataSource(dt1);
                rd.Database.Tables["ViewDetailAktaLahir"].SetDataSource(dt2);



                rd.PrintOptions.PaperSize = CrystalDecisions.Shared.PaperSize.PaperA4;
                rd.ExportToDisk(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + IdFormAktaKelahiran + "_" + kodeakta + ".pdf"));
                //  return System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + IdFormulirKTP + "_" + kodektp + ".pdf");
                return "http://asri.aspan.co.id/sidedi/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + IdFormAktaKelahiran + "_" + kodeakta + ".pdf";


            }
            catch (System.Exception ex)
            {
                return ex.Message;

            }
        }


         internal String FormUser(int UserId, DateTime Date, string kodeform)
        {
            String DateConvert = Date.ToString("yyyy-MM-dd");
            try
            {
                if (!Directory.Exists(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert)))
                {
                    Directory.CreateDirectory(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert));
                }
                ReportDocument rd = new ReportDocument();



                rd.Load(System.Web.HttpContext.Current.Server.MapPath("~/Modules/RPT/FormUserRev.rpt"));


                ViewProfilUserTableAdapter daView1 = new ViewProfilUserTableAdapter();
                ViewAllPenghasilanTableAdapter daView2 = new ViewAllPenghasilanTableAdapter();



                ViewProfilUserDataTable ViewProfilUserDataTable_ = new ViewProfilUserDataTable();
                ViewAllPenghasilanDataTable ViewAllPenghasilanDataTable_ = new ViewAllPenghasilanDataTable();

                daView1.FillBy(ViewProfilUserDataTable_, UserId);
                daView2.FillBy(ViewAllPenghasilanDataTable_, UserId);




                DataTable dt1 = ViewProfilUserDataTable_;
                DataTable dt2 = ViewAllPenghasilanDataTable_;


                rd.Database.Tables["ViewProfilUser"].SetDataSource(dt1);
                rd.Database.Tables["ViewAllPenghasilan"].SetDataSource(dt2);



                rd.PrintOptions.PaperSize = CrystalDecisions.Shared.PaperSize.PaperA4;
                rd.ExportToDisk(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + UserId + "_" + kodeform + ".pdf"));
                //  return System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + IdFormulirKTP + "_" + kodektp + ".pdf");
                return "http://asri.aspan.co.id/sidedi/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + UserId + "_" + kodeform + ".pdf";


            }
            catch (System.Exception ex)
            {
                return ex.Message;

            }
        }

        internal String ChartUser(long IdDesa, DateTime Date)
        {
            String DateConvert = Date.ToString("yyyy-MM-dd");

            //int IdDesa = ChartUser.IdDesa;


            try
            {


                if (!Directory.Exists(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert)))
                {
                    Directory.CreateDirectory(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert));
                }
                ReportDocument rd = new ReportDocument();




                rd.Load(System.Web.HttpContext.Current.Server.MapPath("~/Modules/RPT/ChartDesaPerkerjaanById.rpt"));

                VChartDesaByPekerjaanTableAdapter daView = new VChartDesaByPekerjaanTableAdapter();

                VChartDesaByPekerjaanDataTable VChartDesaByPekerjaanDataTable_ = new VChartDesaByPekerjaanDataTable();
                daView.FillBy(VChartDesaByPekerjaanDataTable_, IdDesa);

                DataTable dt1 = VChartDesaByPekerjaanDataTable_;

                rd.Database.Tables["VChartDesaByPekerjaan"].SetDataSource(dt1);

                rd.PrintOptions.PaperSize = CrystalDecisions.Shared.PaperSize.PaperA4;
                rd.ExportToDisk(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/"  + DateConvert + "/ChartDesaUser_" + IdDesa + ".pdf"));
                //  return System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + IdFormulirKTP + "_" + kodektp + ".pdf");
                return "http://asri.aspan.co.id/sidedi/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/ChartDesaUser_" + IdDesa + ".pdf";


            }

            catch (System.Exception ex)
            {
                return ex.Message;

            }


        }

        internal String ChartAllPekerjaan(DateTime Date)
        {
            String DateConvert = Date.ToString("yyyy-MM-dd");

            //int IdDesa = ChartUser.IdDesa;


            try
            {


                if (!Directory.Exists(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert)))
                {
                    Directory.CreateDirectory(System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert));
                }
                ReportDocument rd = new ReportDocument();




                rd.Load(System.Web.HttpContext.Current.Server.MapPath("~/Modules/RPT/ChartPekerjaanAll.rpt"));

                VChartByAllPekerjaanTableAdapter daView = new VChartByAllPekerjaanTableAdapter();

                VChartByAllPekerjaanDataTable VChartByAllPekerjaanDataTable_ = new VChartByAllPekerjaanDataTable();
                daView.Fill(VChartByAllPekerjaanDataTable_);

                DataTable dt1 = VChartByAllPekerjaanDataTable_;

                rd.Database.Tables["VChartByAllPekerjaan"].SetDataSource(dt1);

                rd.PrintOptions.PaperSize = CrystalDecisions.Shared.PaperSize.PaperA4;
                rd.ExportToDisk(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" +  DateConvert + "/ChartAllPekerjaan"  + ".pdf"));
                //  return System.Web.HttpContext.Current.Server.MapPath("~/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert + "/" + IdFormulirKTP + "_" + kodektp + ".pdf");
                return "http://asri.aspan.co.id/sidedi/Pdf/" + "Dokumen" + "/FORMULIR/" + DateConvert +  "/ChartAllPekerjaan" + ".pdf";


            }

            catch (System.Exception ex)
            {
                return ex.Message;

            }


        }
    }
}