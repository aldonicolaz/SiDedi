
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class UserNelayanGrid extends Serenity.EntityGrid<UserNelayanRow, any> {
        protected getColumnsKey() { return 'Transaction.UserNelayan'; }
        protected getDialogType() { return UserNelayanDialog; }
        protected getIdProperty() { return UserNelayanRow.idProperty; }
        protected getInsertPermission() { return UserNelayanRow.insertPermission; }
        protected getLocalTextPrefix() { return UserNelayanRow.localTextPrefix; }
        protected getService() { return UserNelayanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}