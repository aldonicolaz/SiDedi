
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class ForumNewGrid extends Serenity.EntityGrid<ForumNewRow, any> {
        protected getColumnsKey() { return 'Transaction.ForumNew'; }
        protected getDialogType() { return ForumNewDialog; }
        protected getIdProperty() { return ForumNewRow.idProperty; }
        protected getInsertPermission() { return ForumNewRow.insertPermission; }
        protected getLocalTextPrefix() { return ForumNewRow.localTextPrefix; }
        protected getService() { return ForumNewService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            $(".add-button").remove();
        }
    }
}