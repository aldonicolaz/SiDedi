
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class ViewMaasterFormGrid extends Serenity.EntityGrid<ViewMaasterFormRow, any> {
        protected getColumnsKey() { return 'View.ViewMaasterForm'; }
        protected getDialogType() { return ViewMaasterFormDialog; }
        protected getIdProperty() { return ViewMaasterFormRow.idProperty; }
        protected getInsertPermission() { return ViewMaasterFormRow.insertPermission; }
        protected getLocalTextPrefix() { return ViewMaasterFormRow.localTextPrefix; }
        protected getService() { return ViewMaasterFormService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}