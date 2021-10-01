
namespace SDD.Transaction {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class InfoDesaDialog extends Serenity.EntityDialog<InfoDesaRow, any> {
        protected getFormKey() { return InfoDesaForm.formKey; }
        protected getIdProperty() { return InfoDesaRow.idProperty; }
        protected getLocalTextPrefix() { return InfoDesaRow.localTextPrefix; }
        protected getNameProperty() { return InfoDesaRow.nameProperty; }
        protected getService() { return InfoDesaService.baseUrl; }
        protected getDeletePermission() { return InfoDesaRow.deletePermission; }
        protected getInsertPermission() { return InfoDesaRow.insertPermission; }
        protected getUpdatePermission() { return InfoDesaRow.updatePermission; }

        protected form = new InfoDesaForm(this.idPrefix);

    }
}