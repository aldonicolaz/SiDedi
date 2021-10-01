
namespace SDD.Transaction {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class UserKaryawanDialog extends Serenity.EntityDialog<UserKaryawanRow, any> {
        protected getFormKey() { return UserKaryawanForm.formKey; }
        protected getIdProperty() { return UserKaryawanRow.idProperty; }
        protected getLocalTextPrefix() { return UserKaryawanRow.localTextPrefix; }
        protected getNameProperty() { return UserKaryawanRow.nameProperty; }
        protected getService() { return UserKaryawanService.baseUrl; }
        protected getDeletePermission() { return UserKaryawanRow.deletePermission; }
        protected getInsertPermission() { return UserKaryawanRow.insertPermission; }
        protected getUpdatePermission() { return UserKaryawanRow.updatePermission; }

        protected form = new UserKaryawanForm(this.idPrefix);

    }
}