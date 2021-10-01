
namespace SDD.Transaction {
    import fld = InfoDesaRow.Fields;
    @Serenity.Decorators.registerClass()
    export class InfoDesaGrid extends Serenity.EntityGrid<InfoDesaRow, any> {
        protected getColumnsKey() { return 'Transaction.InfoDesa'; }
        protected getDialogType() { return InfoDesaDialog; }
        protected getIdProperty() { return InfoDesaRow.idProperty; }
        protected getInsertPermission() { return InfoDesaRow.insertPermission; }
        protected getLocalTextPrefix() { return InfoDesaRow.localTextPrefix; }
        protected getService() { return InfoDesaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            Q.first(columns, x => x.field == fld.Image).format =
                ctx => `<a href="../sidedi/upload/${Q.htmlEncode(ctx.value)}" target="_blank"><i class="fa fa fa-file-excel-o text-red"></i> Lihat</a>`;
            return columns;
        }
    }
  }
