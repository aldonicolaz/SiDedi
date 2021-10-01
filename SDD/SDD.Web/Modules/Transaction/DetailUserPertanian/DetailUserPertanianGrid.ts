
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailUserPertanianGrid extends Common.GridEditorBase<DetailUserPertanianRow> {
        protected getColumnsKey() { return 'Transaction.DetailUserPertanian'; }
        protected getDialogType() { return DetailUserPertanianDialog; }
        protected getIdProperty() { return DetailUserPertanianRow.idProperty; }
        protected getInsertPermission() { return DetailUserPertanianRow.insertPermission; }
        protected getLocalTextPrefix() { return DetailUserPertanianRow.localTextPrefix; }
        protected getService() { return DetailUserPertanianService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}