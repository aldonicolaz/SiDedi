
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class FcmMessageUserDialog extends Serenity.EntityDialog<FcmMessageUserRow, any> {
        protected getFormKey() { return FcmMessageUserForm.formKey; }
        protected getIdProperty() { return FcmMessageUserRow.idProperty; }
        protected getLocalTextPrefix() { return FcmMessageUserRow.localTextPrefix; }
        protected getNameProperty() { return FcmMessageUserRow.nameProperty; }
        protected getService() { return FcmMessageUserService.baseUrl; }
        protected getDeletePermission() { return FcmMessageUserRow.deletePermission; }
        protected getInsertPermission() { return FcmMessageUserRow.insertPermission; }
        protected getUpdatePermission() { return FcmMessageUserRow.updatePermission; }

        protected form = new FcmMessageUserForm(this.idPrefix);

    }
}