
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class FcmMessageUserGrid extends Serenity.EntityGrid<FcmMessageUserRow, any> {
        protected getColumnsKey() { return 'Transaction.FcmMessageUser'; }
        protected getDialogType() { return FcmMessageUserDialog; }
        protected getIdProperty() { return FcmMessageUserRow.idProperty; }
        protected getInsertPermission() { return FcmMessageUserRow.insertPermission; }
        protected getLocalTextPrefix() { return FcmMessageUserRow.localTextPrefix; }
        protected getService() { return FcmMessageUserService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}