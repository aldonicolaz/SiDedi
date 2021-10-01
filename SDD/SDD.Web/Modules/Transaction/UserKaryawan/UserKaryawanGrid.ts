
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class UserKaryawanGrid extends Serenity.EntityGrid<UserKaryawanRow, any> {
        protected getColumnsKey() { return 'Transaction.UserKaryawan'; }
        protected getDialogType() { return UserKaryawanDialog; }
        protected getIdProperty() { return UserKaryawanRow.idProperty; }
        protected getInsertPermission() { return UserKaryawanRow.insertPermission; }
        protected getLocalTextPrefix() { return UserKaryawanRow.localTextPrefix; }
        protected getService() { return UserKaryawanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}