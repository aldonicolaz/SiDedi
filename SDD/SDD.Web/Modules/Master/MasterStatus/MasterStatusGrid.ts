
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterStatusGrid extends Serenity.EntityGrid<MasterStatusRow, any> {
        protected getColumnsKey() { return 'Master.MasterStatus'; }
        protected getDialogType() { return MasterStatusDialog; }
        protected getIdProperty() { return MasterStatusRow.idProperty; }
        protected getInsertPermission() { return MasterStatusRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterStatusRow.localTextPrefix; }
        protected getService() { return MasterStatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}