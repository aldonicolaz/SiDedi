
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailFlowFormDialog extends Common.GridEditorDialog<DetailFlowFormRow> {
        protected getFormKey() { return DetailFlowFormForm.formKey; }
        protected getIdProperty() { return DetailFlowFormRow.idProperty; }
        protected getLocalTextPrefix() { return DetailFlowFormRow.localTextPrefix; }
        protected getService() { return DetailFlowFormService.baseUrl; }
        protected getDeletePermission() { return DetailFlowFormRow.deletePermission; }
        protected getInsertPermission() { return DetailFlowFormRow.insertPermission; }
        protected getUpdatePermission() { return DetailFlowFormRow.updatePermission; }

        protected form = new DetailFlowFormForm(this.idPrefix);

    }
}