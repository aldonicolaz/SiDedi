
namespace SDD.Transaction {
    import fld = FormulirKtpRow.Fields;
    @Serenity.Decorators.registerClass()
    export class FormulirKtpGrid extends Serenity.EntityGrid<FormulirKtpRow, any> {
        protected getColumnsKey() { return 'Transaction.FormulirKtp'; }
        protected getDialogType() { return FormulirKtpDialog; }
        protected getIdProperty() { return FormulirKtpRow.idProperty; }
        protected getInsertPermission() { return FormulirKtpRow.insertPermission; }
        protected getLocalTextPrefix() { return FormulirKtpRow.localTextPrefix; }
        protected getService() { return FormulirKtpService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            Q.first(columns, x => x.field == fld.LinkDocKTP).format =
                ctx => `<span class="label bg-info text-white">` + `<a href="${Q.htmlEncode(ctx.value)}" target="_blank"><i class="fa fa fa-file-excel-o text-red"></i> Download</a>` + `</span>`;



            return columns;
        }
    }
}