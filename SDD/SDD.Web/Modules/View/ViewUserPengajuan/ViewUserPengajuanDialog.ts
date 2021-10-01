
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class ViewUserPengajuanDialog extends Serenity.EntityDialog<ViewUserPengajuanRow, any> {
        protected getFormKey() { return ViewUserPengajuanForm.formKey; }
        protected getIdProperty() { return ViewUserPengajuanRow.idProperty; }
        protected getLocalTextPrefix() { return ViewUserPengajuanRow.localTextPrefix; }
        protected getNameProperty() { return ViewUserPengajuanRow.nameProperty; }
        protected getService() { return ViewUserPengajuanService.baseUrl; }
        protected getDeletePermission() { return ViewUserPengajuanRow.deletePermission; }
        protected getInsertPermission() { return ViewUserPengajuanRow.insertPermission; }
        protected getUpdatePermission() { return ViewUserPengajuanRow.updatePermission; }

        protected form = new ViewUserPengajuanForm(this.idPrefix);

    }
}