
namespace SDD.Transaction {
    import fld = FormulirAktaKelahiranRow.Fields;
    @Serenity.Decorators.registerClass()
    export class FormulirAktaKelahiranGrid extends Serenity.EntityGrid<FormulirAktaKelahiranRow, any> {
        protected getColumnsKey() { return 'Transaction.FormulirAktaKelahiran'; }
        protected getDialogType() { return FormulirAktaKelahiranDialog; }
        protected getIdProperty() { return FormulirAktaKelahiranRow.idProperty; }
        protected getInsertPermission() { return FormulirAktaKelahiranRow.insertPermission; }
        protected getLocalTextPrefix() { return FormulirAktaKelahiranRow.localTextPrefix; }
        protected getService() { return FormulirAktaKelahiranService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            Q.first(columns, x => x.field == fld.LinkDocAkta).format =
                ctx => `<span class="label bg-info text-white">` + `<a href="${Q.htmlEncode(ctx.value)}" target="_blank"><i class="fa fa fa-file-excel-o text-red"></i> Download</a>` + `</span>`;



            return columns;
        }
    }
}