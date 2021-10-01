
namespace SDD.Transaction {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class FormulirKkDialog extends Serenity.EntityDialog<FormulirKkRow, any> {
        protected getFormKey() { return FormulirKkForm.formKey; }
        protected getIdProperty() { return FormulirKkRow.idProperty; }
        protected getLocalTextPrefix() { return FormulirKkRow.localTextPrefix; }
        protected getNameProperty() { return FormulirKkRow.nameProperty; }
        protected getService() { return FormulirKkService.baseUrl; }
        protected getDeletePermission() { return FormulirKkRow.deletePermission; }
        protected getInsertPermission() { return FormulirKkRow.insertPermission; }
        protected getUpdatePermission() { return FormulirKkRow.updatePermission; }

        protected form = new FormulirKkForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.toolbar.findButton(".delete-button").remove();
            

        }
    }
}