
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterHasilBudidayaDialog extends Common.GridEditorDialog<MasterHasilBudidayaRow> {
        protected getFormKey() { return MasterHasilBudidayaForm.formKey; }
        protected getIdProperty() { return MasterHasilBudidayaRow.idProperty; }
        protected getLocalTextPrefix() { return MasterHasilBudidayaRow.localTextPrefix; }
        protected getNameProperty() { return MasterHasilBudidayaRow.nameProperty; }
        protected getService() { return MasterHasilBudidayaService.baseUrl; }
        protected getDeletePermission() { return MasterHasilBudidayaRow.deletePermission; }
        protected getInsertPermission() { return MasterHasilBudidayaRow.insertPermission; }
        protected getUpdatePermission() { return MasterHasilBudidayaRow.updatePermission; }

        protected form = new MasterHasilBudidayaForm(this.idPrefix);

    }
}