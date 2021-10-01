
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterHubunganGrid extends Serenity.EntityGrid<MasterHubunganRow, any> {
        protected getColumnsKey() { return 'Master.MasterHubungan'; }
        protected getDialogType() { return MasterHubunganDialog; }
        protected getIdProperty() { return MasterHubunganRow.idProperty; }
        protected getInsertPermission() { return MasterHubunganRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterHubunganRow.localTextPrefix; }
        protected getService() { return MasterHubunganService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}