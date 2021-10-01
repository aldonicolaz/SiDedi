
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class ViewAllPenghasilanDialog extends Serenity.EntityDialog<ViewAllPenghasilanRow, any> {
        protected getFormKey() { return ViewAllPenghasilanForm.formKey; }
        protected getIdProperty() { return ViewAllPenghasilanRow.idProperty; }
        protected getLocalTextPrefix() { return ViewAllPenghasilanRow.localTextPrefix; }
        protected getNameProperty() { return ViewAllPenghasilanRow.nameProperty; }
        protected getService() { return ViewAllPenghasilanService.baseUrl; }
        protected getDeletePermission() { return ViewAllPenghasilanRow.deletePermission; }
        protected getInsertPermission() { return ViewAllPenghasilanRow.insertPermission; }
        protected getUpdatePermission() { return ViewAllPenghasilanRow.updatePermission; }

        protected form = new ViewAllPenghasilanForm(this.idPrefix);

    }
}