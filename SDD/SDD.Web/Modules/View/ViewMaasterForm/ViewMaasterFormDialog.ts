
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class ViewMaasterFormDialog extends Serenity.EntityDialog<ViewMaasterFormRow, any> {
        protected getFormKey() { return ViewMaasterFormForm.formKey; }
        protected getIdProperty() { return ViewMaasterFormRow.idProperty; }
        protected getLocalTextPrefix() { return ViewMaasterFormRow.localTextPrefix; }
        protected getNameProperty() { return ViewMaasterFormRow.nameProperty; }
        protected getService() { return ViewMaasterFormService.baseUrl; }
        protected getDeletePermission() { return ViewMaasterFormRow.deletePermission; }
        protected getInsertPermission() { return ViewMaasterFormRow.insertPermission; }
        protected getUpdatePermission() { return ViewMaasterFormRow.updatePermission; }

        protected form = new ViewMaasterFormForm(this.idPrefix);

    }
}