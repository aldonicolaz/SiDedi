

namespace SDD.Transaction.Lookups
{

    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript(Permission = "*")]
    public class LookupFlowForm : RowLookupScript<View.Entities.ViewMaasterFormRow>
    {
        public LookupFlowForm()
        {
            IdField = View.Entities.ViewMaasterFormRow.Fields.IdFormFlow.PropertyName;
            TextField = View.Entities.ViewMaasterFormRow.Fields.ReqForm.PropertyName;
            Expiration = TimeSpan.FromSeconds(1);


        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);


            var fld = View.Entities.ViewMaasterFormRow.Fields;
            query.Distinct(true)
                 .Select(fld.IdFormFlow,fld.ReqForm)
                
           ;
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}