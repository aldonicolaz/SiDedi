
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailUserPeternakanPerikananGrid extends Common.GridEditorBase<DetailUserPeternakanPerikananRow> {
        protected getColumnsKey() { return 'Transaction.DetailUserPeternakanPerikanan'; }
        protected getDialogType() { return DetailUserPeternakanPerikananDialog; }
        protected getIdProperty() { return DetailUserPeternakanPerikananRow.idProperty; }
        protected getInsertPermission() { return DetailUserPeternakanPerikananRow.insertPermission; }
        protected getLocalTextPrefix() { return DetailUserPeternakanPerikananRow.localTextPrefix; }
        protected getService() { return DetailUserPeternakanPerikananService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}