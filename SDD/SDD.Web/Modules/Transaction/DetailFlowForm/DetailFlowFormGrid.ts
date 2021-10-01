
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailFlowFormGrid extends Common.GridEditorBase<DetailFlowFormRow> {
        protected getColumnsKey() { return 'Transaction.DetailFlowForm'; }
        protected getDialogType() { return DetailFlowFormDialog; }
        protected getIdProperty() { return DetailFlowFormRow.idProperty; }
        protected getInsertPermission() { return DetailFlowFormRow.insertPermission; }
        protected getLocalTextPrefix() { return DetailFlowFormRow.localTextPrefix; }
        protected getService() { return DetailFlowFormService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}