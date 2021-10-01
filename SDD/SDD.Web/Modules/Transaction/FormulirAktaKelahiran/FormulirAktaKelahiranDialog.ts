
namespace SDD.Transaction {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class FormulirAktaKelahiranDialog extends Serenity.EntityDialog<FormulirAktaKelahiranRow, any> {
        protected getFormKey() { return FormulirAktaKelahiranForm.formKey; }
        protected getIdProperty() { return FormulirAktaKelahiranRow.idProperty; }
        protected getLocalTextPrefix() { return FormulirAktaKelahiranRow.localTextPrefix; }
        protected getNameProperty() { return FormulirAktaKelahiranRow.nameProperty; }
        protected getService() { return FormulirAktaKelahiranService.baseUrl; }
        protected getDeletePermission() { return FormulirAktaKelahiranRow.deletePermission; }
        protected getInsertPermission() { return FormulirAktaKelahiranRow.insertPermission; }
        protected getUpdatePermission() { return FormulirAktaKelahiranRow.updatePermission; }

        protected form = new FormulirAktaKelahiranForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.toolbar.findButton(".delete-button").remove();
          
        }
    }
}