
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class ParentMessageGrid extends Serenity.EntityGrid<ParentMessageRow, any> {
        protected getColumnsKey() { return 'Transaction.ParentMessage'; }
        protected getDialogType() { return ParentMessageDialog; }
        protected getIdProperty() { return ParentMessageRow.idProperty; }
        protected getInsertPermission() { return ParentMessageRow.insertPermission; }
        protected getLocalTextPrefix() { return ParentMessageRow.localTextPrefix; }
        protected getService() { return ParentMessageService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}