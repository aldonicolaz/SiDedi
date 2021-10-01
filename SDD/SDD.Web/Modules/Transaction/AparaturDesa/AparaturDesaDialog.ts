
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class AparaturDesaDialog extends Serenity.EntityDialog<AparaturDesaRow, any> {
        protected getFormKey() { return AparaturDesaForm.formKey; }
        protected getIdProperty() { return AparaturDesaRow.idProperty; }
        protected getLocalTextPrefix() { return AparaturDesaRow.localTextPrefix; }
        protected getNameProperty() { return AparaturDesaRow.nameProperty; }
        protected getService() { return AparaturDesaService.baseUrl; }
        protected getDeletePermission() { return AparaturDesaRow.deletePermission; }
        protected getInsertPermission() { return AparaturDesaRow.insertPermission; }
        protected getUpdatePermission() { return AparaturDesaRow.updatePermission; }

        protected form = new AparaturDesaForm(this.idPrefix);

    }
}