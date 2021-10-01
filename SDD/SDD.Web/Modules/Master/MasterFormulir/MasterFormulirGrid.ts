
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterFormulirGrid extends Serenity.EntityGrid<MasterFormulirRow, any> {
        protected getColumnsKey() { return 'Master.MasterFormulir'; }
        protected getDialogType() { return MasterFormulirDialog; }
        protected getIdProperty() { return MasterFormulirRow.idProperty; }
        protected getInsertPermission() { return MasterFormulirRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterFormulirRow.localTextPrefix; }
        protected getService() { return MasterFormulirService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}