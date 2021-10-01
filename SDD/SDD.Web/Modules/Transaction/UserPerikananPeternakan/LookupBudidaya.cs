

namespace SDD.Transaction.Lookups
{

    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript(Permission = "*")]
    public class LookupBudidaya : RowLookupScript<Master.Entities.MasterHasilBudidayaRow>
    {
        public LookupBudidaya()
        {
            IdField = Master.Entities.MasterHasilBudidayaRow.Fields.IdHasilBudidaya.PropertyName;
            TextField = Master.Entities.MasterHasilBudidayaRow.Fields.NamaHasil.PropertyName;
            Expiration = TimeSpan.FromSeconds(1);


        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);


            var fld = Master.Entities.MasterHasilBudidayaRow.Fields;
            query.Distinct(true)
                 .Select(fld.IdHasilBudidaya, fld.NamaHasil,fld.IdMasterBudidaya)

           ;
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}