
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailFormulirKkGrid extends Common.GridEditorBase<DetailFormulirKkRow> {
        protected getColumnsKey() { return 'Transaction.DetailFormulirKk'; }
        protected getDialogType() { return DetailFormulirKkDialog; }
        protected getIdProperty() { return DetailFormulirKkRow.idProperty; }
        protected getInsertPermission() { return DetailFormulirKkRow.insertPermission; }
        protected getLocalTextPrefix() { return DetailFormulirKkRow.localTextPrefix; }
        protected getService() { return DetailFormulirKkService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}