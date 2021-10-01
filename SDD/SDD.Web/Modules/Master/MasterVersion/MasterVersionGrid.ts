
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterVersionGrid extends Serenity.EntityGrid<MasterVersionRow, any> {
        protected getColumnsKey() { return 'Master.MasterVersion'; }
        protected getDialogType() { return MasterVersionDialog; }
        protected getIdProperty() { return MasterVersionRow.idProperty; }
        protected getInsertPermission() { return MasterVersionRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterVersionRow.localTextPrefix; }
        protected getService() { return MasterVersionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}