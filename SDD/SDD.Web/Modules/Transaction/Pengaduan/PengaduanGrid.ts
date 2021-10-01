
namespace SDD.Transaction {
    import fld = PengaduanRow.Fields;
    @Serenity.Decorators.registerClass()
    export class PengaduanGrid extends Serenity.EntityGrid<PengaduanRow, any> {
        protected getColumnsKey() { return 'Transaction.Pengaduan'; }
        protected getDialogType() { return PengaduanDialog; }
        protected getIdProperty() { return PengaduanRow.idProperty; }
        protected getInsertPermission() { return PengaduanRow.insertPermission; }
        protected getLocalTextPrefix() { return PengaduanRow.localTextPrefix; }
        protected getService() { return PengaduanService.baseUrl; }


        constructor(container: JQuery) {
            super(container);
            var userid = Authorization.userDefinition.UserId;
            var roleid = Authorization.userDefinition.RoleId;

            if (userid == 1) {
             
            } else {
                $(".add-button").remove();
            }
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            Q.first(columns, x => x.field == fld.FotoDokumen).format =
                ctx => `<span class="label bg-info text-white">` + `<a href="${Q.htmlEncode(ctx.value)}" target="_blank"><i class="fa fa fa-file-excel-o text-red"></i> Lihat Foto/Dokumen</a>` + `</span>`;



            return columns;
        }

    }
}