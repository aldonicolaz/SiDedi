
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterBudidayaDialog extends Serenity.EntityDialog<MasterBudidayaRow, any> {
        protected getFormKey() { return MasterBudidayaForm.formKey; }
        protected getIdProperty() { return MasterBudidayaRow.idProperty; }
        protected getLocalTextPrefix() { return MasterBudidayaRow.localTextPrefix; }
        protected getNameProperty() { return MasterBudidayaRow.nameProperty; }
        protected getService() { return MasterBudidayaService.baseUrl; }
        protected getDeletePermission() { return MasterBudidayaRow.deletePermission; }
        protected getInsertPermission() { return MasterBudidayaRow.insertPermission; }
        protected getUpdatePermission() { return MasterBudidayaRow.updatePermission; }

        protected form = new MasterBudidayaForm(this.idPrefix);

    }
}