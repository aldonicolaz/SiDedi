
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class FcmMessageGrid extends Common.GridEditorBase<FcmMessageRow> {
        protected getColumnsKey() { return 'Transaction.FcmMessage'; }
        protected getDialogType() { return FcmMessageDialog; }
        protected getIdProperty() { return FcmMessageRow.idProperty; }
        protected getInsertPermission() { return FcmMessageRow.insertPermission; }
        protected getLocalTextPrefix() { return FcmMessageRow.localTextPrefix; }
        protected getService() { return FcmMessageService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {

            row.IdUserUsername = SDD.Administration.UserRow.getLookup().itemById[row.IdUser].Username;


            return true;

        }
    }
}