
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class MasterFlowFormulirGrid extends Serenity.EntityGrid<MasterFlowFormulirRow, any> {
        protected getColumnsKey() { return 'Transaction.MasterFlowFormulir'; }
        protected getDialogType() { return MasterFlowFormulirDialog; }
        protected getIdProperty() { return MasterFlowFormulirRow.idProperty; }
        protected getInsertPermission() { return MasterFlowFormulirRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterFlowFormulirRow.localTextPrefix; }
        protected getService() { return MasterFlowFormulirService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}