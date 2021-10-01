
namespace SDD.Transaction {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class MasterFlowFormulirDialog extends Serenity.EntityDialog<MasterFlowFormulirRow, any> {
        protected getFormKey() { return MasterFlowFormulirForm.formKey; }
        protected getIdProperty() { return MasterFlowFormulirRow.idProperty; }
        protected getLocalTextPrefix() { return MasterFlowFormulirRow.localTextPrefix; }
        protected getNameProperty() { return MasterFlowFormulirRow.nameProperty; }
        protected getService() { return MasterFlowFormulirService.baseUrl; }
        protected getDeletePermission() { return MasterFlowFormulirRow.deletePermission; }
        protected getInsertPermission() { return MasterFlowFormulirRow.insertPermission; }
        protected getUpdatePermission() { return MasterFlowFormulirRow.updatePermission; }

        protected form = new MasterFlowFormulirForm(this.idPrefix);

    }
}