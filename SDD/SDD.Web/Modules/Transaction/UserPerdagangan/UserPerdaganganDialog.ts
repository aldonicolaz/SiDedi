
namespace SDD.Transaction {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class UserPerdaganganDialog extends Serenity.EntityDialog<UserPerdaganganRow, any> {
        protected getFormKey() { return UserPerdaganganForm.formKey; }
        protected getIdProperty() { return UserPerdaganganRow.idProperty; }
        protected getLocalTextPrefix() { return UserPerdaganganRow.localTextPrefix; }
        protected getNameProperty() { return UserPerdaganganRow.nameProperty; }
        protected getService() { return UserPerdaganganService.baseUrl; }
        protected getDeletePermission() { return UserPerdaganganRow.deletePermission; }
        protected getInsertPermission() { return UserPerdaganganRow.insertPermission; }
        protected getUpdatePermission() { return UserPerdaganganRow.updatePermission; }

        protected form = new UserPerdaganganForm(this.idPrefix);

    }
}