
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class ViewAllPenghasilanGrid extends Serenity.EntityGrid<ViewAllPenghasilanRow, any> {
        protected getColumnsKey() { return 'View.ViewAllPenghasilan'; }
        protected getDialogType() { return ViewAllPenghasilanDialog; }
        protected getIdProperty() { return ViewAllPenghasilanRow.idProperty; }
        protected getInsertPermission() { return ViewAllPenghasilanRow.insertPermission; }
        protected getLocalTextPrefix() { return ViewAllPenghasilanRow.localTextPrefix; }
        protected getService() { return ViewAllPenghasilanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}