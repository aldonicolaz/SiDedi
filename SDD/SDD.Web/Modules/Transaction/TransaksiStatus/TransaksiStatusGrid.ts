
namespace SDD.Transaction {
    import fld = TransaksiStatusRow.Fields;
    @Serenity.Decorators.registerClass()
    export class TransaksiStatusGrid extends Serenity.EntityGrid<TransaksiStatusRow, any> {
        protected getColumnsKey() { return 'Transaction.TransaksiStatus'; }
        protected getDialogType() { return TransaksiStatusDialog; }
        protected getIdProperty() { return TransaksiStatusRow.idProperty; }
        protected getInsertPermission() { return TransaksiStatusRow.insertPermission; }
        protected getLocalTextPrefix() { return TransaksiStatusRow.localTextPrefix; }
        protected getService() { return TransaksiStatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
           // $(".add-button").hide();
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            Q.first(columns, x => x.field == fld.LinkFormulir).format =
                ctx => `<span class="label bg-info text-white">` + `<a href="${Q.htmlEncode(ctx.value)}" target="_blank"><i class="fa fa fa-file-excel-o text-red"></i> Lihat Formulir</a>` + `</span>`;



            return columns;
        }
    }
}