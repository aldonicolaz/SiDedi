
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class FormulirKtpDialog extends Serenity.EntityDialog<FormulirKtpRow, any> {
        protected getFormKey() { return FormulirKtpForm.formKey; }
        protected getIdProperty() { return FormulirKtpRow.idProperty; }
        protected getLocalTextPrefix() { return FormulirKtpRow.localTextPrefix; }
        protected getNameProperty() { return FormulirKtpRow.nameProperty; }
        protected getService() { return FormulirKtpService.baseUrl; }
        protected getDeletePermission() { return FormulirKtpRow.deletePermission; }
        protected getInsertPermission() { return FormulirKtpRow.insertPermission; }
        protected getUpdatePermission() { return FormulirKtpRow.updatePermission; }

        protected form = new FormulirKtpForm(this.idPrefix);
       

        protected afterLoadEntity() {
            super.afterLoadEntity();
          

            this.toolbar.findButton(".delete-button").remove();
     
        }
    }
}