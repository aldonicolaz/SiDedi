
namespace SDD.Master {
    import fld = MasterKecamatanRow.Fields;
    @Serenity.Decorators.registerClass()
    export class MasterKecamatanGrid extends Serenity.EntityGrid<MasterKecamatanRow, any> {
        protected getColumnsKey() { return 'Master.MasterKecamatan'; }
        protected getDialogType() { return MasterKecamatanDialog; }
        protected getIdProperty() { return MasterKecamatanRow.idProperty; }
        protected getInsertPermission() { return MasterKecamatanRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterKecamatanRow.localTextPrefix; }
        protected getService() { return MasterKecamatanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            Q.first(columns, x => x.field == fld.LogoKecamatan).format =
                ctx => `<a href="../../../upload/${Q.htmlEncode(ctx.value)}" target="_blank">${Q.htmlEncode(ctx.value)}</a>`;



            return columns;
        }
    }
}