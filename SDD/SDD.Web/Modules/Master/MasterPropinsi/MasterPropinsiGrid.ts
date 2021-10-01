
namespace SDD.Master {
    import fld = MasterPropinsiRow.Fields;
    @Serenity.Decorators.registerClass()
    export class MasterPropinsiGrid extends Serenity.EntityGrid<MasterPropinsiRow, any> {
        protected getColumnsKey() { return 'Master.MasterPropinsi'; }
        protected getDialogType() { return MasterPropinsiDialog; }
        protected getIdProperty() { return MasterPropinsiRow.idProperty; }
        protected getInsertPermission() { return MasterPropinsiRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterPropinsiRow.localTextPrefix; }
        protected getService() { return MasterPropinsiService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            Q.first(columns, x => x.field == fld.LogoPropinsi).format =
                ctx => `<a href="../../../upload/${Q.htmlEncode(ctx.value)}" target="_blank">${Q.htmlEncode(ctx.value)}</a>`;



            return columns;
        }
    }
}