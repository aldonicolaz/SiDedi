
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class ForumGrid extends Serenity.EntityGrid<ForumRow, any> {
        protected getColumnsKey() { return 'Transaction.Forum'; }
        protected getDialogType() { return ForumDialog; }
        protected getIdProperty() { return ForumRow.idProperty; }
        protected getInsertPermission() { return ForumRow.insertPermission; }
        protected getLocalTextPrefix() { return ForumRow.localTextPrefix; }
        protected getService() { return ForumService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            $(".add-button").remove();
        }
    }
}