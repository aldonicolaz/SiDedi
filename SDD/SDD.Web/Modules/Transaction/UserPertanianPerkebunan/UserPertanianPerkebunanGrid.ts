
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class UserPertanianPerkebunanGrid extends Serenity.EntityGrid<UserPertanianPerkebunanRow, any> {
        protected getColumnsKey() { return 'Transaction.UserPertanianPerkebunan'; }
        protected getDialogType() { return UserPertanianPerkebunanDialog; }
        protected getIdProperty() { return UserPertanianPerkebunanRow.idProperty; }
        protected getInsertPermission() { return UserPertanianPerkebunanRow.insertPermission; }
        protected getLocalTextPrefix() { return UserPertanianPerkebunanRow.localTextPrefix; }
        protected getService() { return UserPertanianPerkebunanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}