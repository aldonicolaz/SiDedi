
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class ViewAllPengajuanDialog extends Serenity.EntityDialog<ViewAllPengajuanRow, any> {
        protected getFormKey() { return ViewAllPengajuanForm.formKey; }
        protected getIdProperty() { return ViewAllPengajuanRow.idProperty; }
        protected getLocalTextPrefix() { return ViewAllPengajuanRow.localTextPrefix; }
        protected getNameProperty() { return ViewAllPengajuanRow.nameProperty; }
        protected getService() { return ViewAllPengajuanService.baseUrl; }
        protected getDeletePermission() { return ViewAllPengajuanRow.deletePermission; }
        protected getInsertPermission() { return ViewAllPengajuanRow.insertPermission; }
        protected getUpdatePermission() { return ViewAllPengajuanRow.updatePermission; }

        protected form = new ViewAllPengajuanForm(this.idPrefix);

    }
}