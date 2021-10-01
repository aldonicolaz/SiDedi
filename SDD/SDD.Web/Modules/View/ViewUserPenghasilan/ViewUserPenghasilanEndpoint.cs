
namespace SDD.View.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Linq;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.ViewUserPenghasilanRepository;
    using MyRow = Entities.ViewUserPenghasilanRow;
    using SDD.Modules.Function;
    using System.Net;

    [RoutePrefix("Services/View/ViewUserPenghasilan"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ViewUserPenghasilanController : ServiceEndpoint
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

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.ViewUserPenghasilanColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "ViewTotalPenghasilan_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        //public string ListPdf(IDbConnection connection, ListRequest request)
        //{
        //    FunctionSidedi FunctionSidedi_ = new FunctionSidedi();

        //    DateTime date = DateTime.Now;

        //    string linkpdf = FunctionSidedi_.Chartdesa(date);
          
        //    Response.Redirect(linkpdf);
        //    return linkpdf;
        //}

        [HttpPost]
        public ListTransaction ListPekerjaanUser(IDbConnection connection, PostUser request)
        {


            List<MyRow> listTRansaction = connection.List<MyRow>();

            ListTransaction ListTransaction_ = new ListTransaction();


            ListTransaction_.ListTransactionRow = listTRansaction.OrderByDescending(d => d.NumberId).Where(x => x.UserId == request.IdUser).ToList();
            return ListTransaction_;



        }
    }

    public class ListTransaction : ServiceResponse
    {
        public List<MyRow> ListTransactionRow { get; set; }
    }
    public class PostUser : ServiceRequest
    {
        public int IdUser { get; set; }

    }
}
