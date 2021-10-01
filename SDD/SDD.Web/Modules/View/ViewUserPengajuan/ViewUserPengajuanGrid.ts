
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class ViewUserPengajuanGrid extends Serenity.EntityGrid<ViewUserPengajuanRow, any> {
        protected getColumnsKey() { return 'View.ViewUserPengajuan'; }
        protected getDialogType() { return ViewUserPengajuanDialog; }
        protected getIdProperty() { return ViewUserPengajuanRow.idProperty; }
        protected getInsertPermission() { return ViewUserPengajuanRow.insertPermission; }
        protected getLocalTextPrefix() { return ViewUserPengajuanRow.localTextPrefix; }
        protected getService() { return ViewUserPengajuanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}