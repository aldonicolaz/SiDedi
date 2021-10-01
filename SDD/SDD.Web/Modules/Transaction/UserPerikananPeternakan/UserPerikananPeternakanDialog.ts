
namespace SDD.Transaction {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class UserPerikananPeternakanDialog extends Serenity.EntityDialog<UserPerikananPeternakanRow, any> {
        protected getFormKey() { return UserPerikananPeternakanForm.formKey; }
        protected getIdProperty() { return UserPerikananPeternakanRow.idProperty; }
        protected getLocalTextPrefix() { return UserPerikananPeternakanRow.localTextPrefix; }
        protected getService() { return UserPerikananPeternakanService.baseUrl; }
        protected getDeletePermission() { return UserPerikananPeternakanRow.deletePermission; }
        protected getInsertPermission() { return UserPerikananPeternakanRow.insertPermission; }
        protected getUpdatePermission() { return UserPerikananPeternakanRow.updatePermission; }

        protected form = new UserPerikananPeternakanForm(this.idPrefix);

    }
}