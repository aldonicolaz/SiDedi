
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class ViewUserPenghasilanDialog extends Serenity.EntityDialog<ViewUserPenghasilanRow, any> {
        protected getFormKey() { return ViewUserPenghasilanForm.formKey; }
        protected getIdProperty() { return ViewUserPenghasilanRow.idProperty; }
        protected getLocalTextPrefix() { return ViewUserPenghasilanRow.localTextPrefix; }
        protected getNameProperty() { return ViewUserPenghasilanRow.nameProperty; }
        protected getService() { return ViewUserPenghasilanService.baseUrl; }
        protected getDeletePermission() { return ViewUserPenghasilanRow.deletePermission; }
        protected getInsertPermission() { return ViewUserPenghasilanRow.insertPermission; }
        protected getUpdatePermission() { return ViewUserPenghasilanRow.updatePermission; }

        protected form = new ViewUserPenghasilanForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.toolbar.findButton(".delete-button").remove();
            this.toolbar.findButton(".save-and-close-button").remove();
            this.toolbar.findButton(".apply-changes-button").remove();
        }
    }
}