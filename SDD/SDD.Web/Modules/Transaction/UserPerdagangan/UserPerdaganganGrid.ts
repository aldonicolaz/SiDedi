
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class UserPerdaganganGrid extends Serenity.EntityGrid<UserPerdaganganRow, any> {
        protected getColumnsKey() { return 'Transaction.UserPerdagangan'; }
        protected getDialogType() { return UserPerdaganganDialog; }
        protected getIdProperty() { return UserPerdaganganRow.idProperty; }
        protected getInsertPermission() { return UserPerdaganganRow.insertPermission; }
        protected getLocalTextPrefix() { return UserPerdaganganRow.localTextPrefix; }
        protected getService() { return UserPerdaganganService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}