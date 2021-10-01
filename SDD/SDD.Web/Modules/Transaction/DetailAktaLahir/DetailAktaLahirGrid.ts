
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailAktaLahirGrid extends Common.GridEditorBase<DetailAktaLahirRow> {
        protected getColumnsKey() { return 'Transaction.DetailAktaLahir'; }
        protected getDialogType() { return DetailAktaLahirDialog; }
        protected getIdProperty() { return DetailAktaLahirRow.idProperty; }
        protected getInsertPermission() { return DetailAktaLahirRow.insertPermission; }
        protected getLocalTextPrefix() { return DetailAktaLahirRow.localTextPrefix; }
        protected getService() { return DetailAktaLahirService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}