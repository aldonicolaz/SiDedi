
namespace SDD.Master {
    import fld = MasterKabupatenRow.Fields;
    @Serenity.Decorators.registerClass()
    export class MasterKabupatenGrid extends Serenity.EntityGrid<MasterKabupatenRow, any> {
        protected getColumnsKey() { return 'Master.MasterKabupaten'; }
        protected getDialogType() { return MasterKabupatenDialog; }
        protected getIdProperty() { return MasterKabupatenRow.idProperty; }
        protected getInsertPermission() { return MasterKabupatenRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterKabupatenRow.localTextPrefix; }
        protected getService() { return MasterKabupatenService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            Q.first(columns, x => x.field == fld.LogoKabupaten).format =
                ctx => `<a href="../../../upload/${Q.htmlEncode(ctx.value)}" target="_blank">${Q.htmlEncode(ctx.value)}</a>`;



            return columns;
        }
    }
}