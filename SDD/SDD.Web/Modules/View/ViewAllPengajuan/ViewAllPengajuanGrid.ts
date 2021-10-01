
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class ViewAllPengajuanGrid extends Serenity.EntityGrid<ViewAllPengajuanRow, any> {
        protected getColumnsKey() { return 'View.ViewAllPengajuan'; }
        protected getDialogType() { return ViewAllPengajuanDialog; }
        protected getIdProperty() { return ViewAllPengajuanRow.idProperty; }
        protected getInsertPermission() { return ViewAllPengajuanRow.insertPermission; }
        protected getLocalTextPrefix() { return ViewAllPengajuanRow.localTextPrefix; }
        protected getService() { return ViewAllPengajuanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}