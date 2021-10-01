
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterPekerjaanGrid extends Serenity.EntityGrid<MasterPekerjaanRow, any> {
        protected getColumnsKey() { return 'Master.MasterPekerjaan'; }
        protected getDialogType() { return MasterPekerjaanDialog; }
        protected getIdProperty() { return MasterPekerjaanRow.idProperty; }
        protected getInsertPermission() { return MasterPekerjaanRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterPekerjaanRow.localTextPrefix; }
        protected getService() { return MasterPekerjaanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}