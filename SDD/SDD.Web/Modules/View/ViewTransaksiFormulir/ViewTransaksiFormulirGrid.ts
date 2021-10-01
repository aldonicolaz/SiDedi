
namespace SDD.View {
    import fld = ViewTransaksiFormulirRow.Fields;
    @Serenity.Decorators.registerClass()
    export class ViewTransaksiFormulirGrid extends Serenity.EntityGrid<ViewTransaksiFormulirRow, any> {
        protected getColumnsKey() { return 'View.ViewTransaksiFormulir'; }
        protected getDialogType() { return ViewTransaksiFormulirDialog; }
        protected getIdProperty() { return ViewTransaksiFormulirRow.idProperty; }
        protected getInsertPermission() { return ViewTransaksiFormulirRow.insertPermission; }
        protected getLocalTextPrefix() { return ViewTransaksiFormulirRow.localTextPrefix; }
        protected getService() { return ViewTransaksiFormulirService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            $(".add-button").hide();
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            Q.first(columns, x => x.field == fld.Formulir).format =
                ctx => `<span class="label bg-info text-white">` + `<a href="${Q.htmlEncode(ctx.value)}" target="_blank"><i class="fa fa fa-file-excel-o text-red"></i> Lihat Formulir</a>` + `</span>`;



            return columns;
        }
    }
}