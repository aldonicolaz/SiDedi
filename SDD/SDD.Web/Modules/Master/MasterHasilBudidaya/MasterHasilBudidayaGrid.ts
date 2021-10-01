
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterHasilBudidayaGrid extends Common.GridEditorBase<MasterHasilBudidayaRow> {
        protected getColumnsKey() { return 'Master.MasterHasilBudidaya'; }
        protected getDialogType() { return MasterHasilBudidayaDialog; }
        protected getIdProperty() { return MasterHasilBudidayaRow.idProperty; }
        protected getInsertPermission() { return MasterHasilBudidayaRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterHasilBudidayaRow.localTextPrefix; }
        protected getService() { return MasterHasilBudidayaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}