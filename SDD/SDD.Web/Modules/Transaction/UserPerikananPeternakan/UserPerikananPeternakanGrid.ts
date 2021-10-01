
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class UserPerikananPeternakanGrid extends Serenity.EntityGrid<UserPerikananPeternakanRow, any> {
        protected getColumnsKey() { return 'Transaction.UserPerikananPeternakan'; }
        protected getDialogType() { return UserPerikananPeternakanDialog; }
        protected getIdProperty() { return UserPerikananPeternakanRow.idProperty; }
        protected getInsertPermission() { return UserPerikananPeternakanRow.insertPermission; }
        protected getLocalTextPrefix() { return UserPerikananPeternakanRow.localTextPrefix; }
        protected getService() { return UserPerikananPeternakanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}