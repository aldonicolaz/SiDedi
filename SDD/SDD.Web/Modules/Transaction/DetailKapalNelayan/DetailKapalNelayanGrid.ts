
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailKapalNelayanGrid extends Common.GridEditorBase<DetailKapalNelayanRow> {
        protected getColumnsKey() { return 'Transaction.DetailKapalNelayan'; }
        protected getDialogType() { return DetailKapalNelayanDialog; }
        protected getIdProperty() { return DetailKapalNelayanRow.idProperty; }
        protected getInsertPermission() { return DetailKapalNelayanRow.insertPermission; }
        protected getLocalTextPrefix() { return DetailKapalNelayanRow.localTextPrefix; }
        protected getService() { return DetailKapalNelayanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}