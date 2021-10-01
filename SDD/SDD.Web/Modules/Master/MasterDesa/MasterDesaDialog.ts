
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterDesaDialog extends Serenity.EntityDialog<MasterDesaRow, any> {
        protected getFormKey() { return MasterDesaForm.formKey; }
        protected getIdProperty() { return MasterDesaRow.idProperty; }
        protected getLocalTextPrefix() { return MasterDesaRow.localTextPrefix; }
        protected getNameProperty() { return MasterDesaRow.nameProperty; }
        protected getService() { return MasterDesaService.baseUrl; }
        protected getDeletePermission() { return MasterDesaRow.deletePermission; }
        protected getInsertPermission() { return MasterDesaRow.insertPermission; }
        protected getUpdatePermission() { return MasterDesaRow.updatePermission; }

        protected form = new MasterDesaForm(this.idPrefix);

    }
}