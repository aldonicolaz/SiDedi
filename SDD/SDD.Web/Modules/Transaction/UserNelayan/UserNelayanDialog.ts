
namespace SDD.Transaction {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class UserNelayanDialog extends Serenity.EntityDialog<UserNelayanRow, any> {
        protected getFormKey() { return UserNelayanForm.formKey; }
        protected getIdProperty() { return UserNelayanRow.idProperty; }
        protected getLocalTextPrefix() { return UserNelayanRow.localTextPrefix; }
        protected getNameProperty() { return UserNelayanRow.nameProperty; }
        protected getService() { return UserNelayanService.baseUrl; }
        protected getDeletePermission() { return UserNelayanRow.deletePermission; }
        protected getInsertPermission() { return UserNelayanRow.insertPermission; }
        protected getUpdatePermission() { return UserNelayanRow.updatePermission; }

        protected form = new UserNelayanForm(this.idPrefix);

    }
}