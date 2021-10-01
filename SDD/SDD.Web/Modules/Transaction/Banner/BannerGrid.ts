
namespace SDD.Transaction {
    import fld = BannerRow.Fields;
    @Serenity.Decorators.registerClass()
    export class BannerGrid extends Serenity.EntityGrid<BannerRow, any> {
        protected getColumnsKey() { return 'Transaction.Banner'; }
        protected getDialogType() { return BannerDialog; }
        protected getIdProperty() { return BannerRow.idProperty; }
        protected getInsertPermission() { return BannerRow.insertPermission; }
        protected getLocalTextPrefix() { return BannerRow.localTextPrefix; }
        protected getService() { return BannerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            Q.first(columns, x => x.field == fld.UrlImage).format =
                ctx => `<span class="label bg-info text-white">` + `<a href="${Q.htmlEncode(ctx.value)}" target="_blank"><i class="fa fa fa-file-excel-o text-red"></i> Lihat Image</a>` + `</span>`;



            return columns;
        }
    }
}