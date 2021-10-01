
namespace SDD.Transaction {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class UserPertanianPerkebunanDialog extends Serenity.EntityDialog<UserPertanianPerkebunanRow, any> {
        protected getFormKey() { return UserPertanianPerkebunanForm.formKey; }
        protected getIdProperty() { return UserPertanianPerkebunanRow.idProperty; }
        protected getLocalTextPrefix() { return UserPertanianPerkebunanRow.localTextPrefix; }
        protected getService() { return UserPertanianPerkebunanService.baseUrl; }
        protected getDeletePermission() { return UserPertanianPerkebunanRow.deletePermission; }
        protected getInsertPermission() { return UserPertanianPerkebunanRow.insertPermission; }
        protected getUpdatePermission() { return UserPertanianPerkebunanRow.updatePermission; }

        protected form = new UserPertanianPerkebunanForm(this.idPrefix);

    }
}