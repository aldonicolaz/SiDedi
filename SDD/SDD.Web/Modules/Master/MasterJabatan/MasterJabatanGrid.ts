
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterJabatanGrid extends Serenity.EntityGrid<MasterJabatanRow, any> {
        protected getColumnsKey() { return 'Master.MasterJabatan'; }
        protected getDialogType() { return MasterJabatanDialog; }
        protected getIdProperty() { return MasterJabatanRow.idProperty; }
        protected getInsertPermission() { return MasterJabatanRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterJabatanRow.localTextPrefix; }
        protected getService() { return MasterJabatanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}