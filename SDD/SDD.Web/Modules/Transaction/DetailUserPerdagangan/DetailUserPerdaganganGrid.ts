
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailUserPerdaganganGrid extends Common.GridEditorBase<DetailUserPerdaganganRow> {
        protected getColumnsKey() { return 'Transaction.DetailUserPerdagangan'; }
        protected getDialogType() { return DetailUserPerdaganganDialog; }
        protected getIdProperty() { return DetailUserPerdaganganRow.idProperty; }
        protected getInsertPermission() { return DetailUserPerdaganganRow.insertPermission; }
        protected getLocalTextPrefix() { return DetailUserPerdaganganRow.localTextPrefix; }
        protected getService() { return DetailUserPerdaganganService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}