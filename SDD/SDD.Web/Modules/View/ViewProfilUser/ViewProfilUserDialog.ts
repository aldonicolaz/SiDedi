
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class ViewProfilUserDialog extends Serenity.EntityDialog<ViewProfilUserRow, any> {
        protected getFormKey() { return ViewProfilUserForm.formKey; }
        protected getIdProperty() { return ViewProfilUserRow.idProperty; }
        protected getLocalTextPrefix() { return ViewProfilUserRow.localTextPrefix; }
        protected getNameProperty() { return ViewProfilUserRow.nameProperty; }
        protected getService() { return ViewProfilUserService.baseUrl; }
        protected getDeletePermission() { return ViewProfilUserRow.deletePermission; }
        protected getInsertPermission() { return ViewProfilUserRow.insertPermission; }
        protected getUpdatePermission() { return ViewProfilUserRow.updatePermission; }

        protected form = new ViewProfilUserForm(this.idPrefix);

    }
}