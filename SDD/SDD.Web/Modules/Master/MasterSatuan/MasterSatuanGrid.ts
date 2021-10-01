
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterSatuanGrid extends Serenity.EntityGrid<MasterSatuanRow, any> {
        protected getColumnsKey() { return 'Master.MasterSatuan'; }
        protected getDialogType() { return MasterSatuanDialog; }
        protected getIdProperty() { return MasterSatuanRow.idProperty; }
        protected getInsertPermission() { return MasterSatuanRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterSatuanRow.localTextPrefix; }
        protected getService() { return MasterSatuanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}