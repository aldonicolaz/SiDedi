


namespace SDD.Transaction.Lookups
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript(Permission = "*")]
    public class LookupUserDesa : RowLookupScript<View.Entities.ViewProfilUserRow>
    {
        public LookupUserDesa()
        {
            IdField = View.Entities.ViewProfilUserRow.Fields.UserId.PropertyName;
            TextField = View.Entities.ViewProfilUserRow.Fields.DisplayName.PropertyName;
            Expiration = TimeSpan.FromSeconds(1);


        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);
            var iduser = ((UserDefinition)Authorization.UserDefinition).UserId;
            var iddesa = ((UserDefinition)Authorization.UserDefinition).IdDesa;
            var fld = View.Entities.ViewProfilUserRow.Fields;

            if (iduser==1) {
                query.Distinct(true)
                     .Select(fld.UserId, fld.DisplayName)
                    
               ;
            }
            else
            {
                query.Distinct(true)
                   .Select(fld.UserId, fld.DisplayName)
                   .Where(fld.IdDesa == iddesa)

             ;
            }
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}