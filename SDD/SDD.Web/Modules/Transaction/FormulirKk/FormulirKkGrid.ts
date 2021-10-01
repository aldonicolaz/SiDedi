
namespace SDD.Transaction {
    import fld = FormulirKkRow.Fields;
    @Serenity.Decorators.registerClass()
    export class FormulirKkGrid extends Serenity.EntityGrid<FormulirKkRow, any> {
        protected getColumnsKey() { return 'Transaction.FormulirKk'; }
        protected getDialogType() { return FormulirKkDialog; }
        protected getIdProperty() { return FormulirKkRow.idProperty; }
        protected getInsertPermission() { return FormulirKkRow.insertPermission; }
        protected getLocalTextPrefix() { return FormulirKkRow.localTextPrefix; }
        protected getService() { return FormulirKkService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            Q.first(columns, x => x.field == fld.LinkDocKk).format =
                ctx => `<span class="label bg-info text-white">` + `<a href="${Q.htmlEncode(ctx.value)}" target="_blank"><i class="fa fa fa-file-excel-o text-red"></i> Download</a>` + `</span>`;



            return columns;
        }
    }
}