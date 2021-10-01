
namespace SDD.Master {
    import fld = MasterDesaRow.Fields;
    @Serenity.Decorators.registerClass()
    export class MasterDesaGrid extends Serenity.EntityGrid<MasterDesaRow, any> {
        protected getColumnsKey() { return 'Master.MasterDesa'; }
        protected getDialogType() { return MasterDesaDialog; }
        protected getIdProperty() { return MasterDesaRow.idProperty; }
        protected getInsertPermission() { return MasterDesaRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterDesaRow.localTextPrefix; }
        protected getService() { return MasterDesaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            Q.first(columns, x => x.field == fld.LogoDesa).format =
                ctx => `<a href="../../../upload/${Q.htmlEncode(ctx.value)}" target="_blank">${Q.htmlEncode(ctx.value)}</a>`;



            return columns;
        }
    }
}