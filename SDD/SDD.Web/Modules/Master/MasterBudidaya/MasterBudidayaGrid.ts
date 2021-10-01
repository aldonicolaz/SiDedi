
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterBudidayaGrid extends Serenity.EntityGrid<MasterBudidayaRow, any> {
        protected getColumnsKey() { return 'Master.MasterBudidaya'; }
        protected getDialogType() { return MasterBudidayaDialog; }
        protected getIdProperty() { return MasterBudidayaRow.idProperty; }
        protected getInsertPermission() { return MasterBudidayaRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterBudidayaRow.localTextPrefix; }
        protected getService() { return MasterBudidayaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}