
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class AparaturDesaGrid extends Serenity.EntityGrid<AparaturDesaRow, any> {
        protected getColumnsKey() { return 'Transaction.AparaturDesa'; }
        protected getDialogType() { return AparaturDesaDialog; }
        protected getIdProperty() { return AparaturDesaRow.idProperty; }
        protected getInsertPermission() { return AparaturDesaRow.insertPermission; }
        protected getLocalTextPrefix() { return AparaturDesaRow.localTextPrefix; }
        protected getService() { return AparaturDesaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}