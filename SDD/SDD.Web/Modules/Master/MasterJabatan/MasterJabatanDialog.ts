
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterJabatanDialog extends Serenity.EntityDialog<MasterJabatanRow, any> {
        protected getFormKey() { return MasterJabatanForm.formKey; }
        protected getIdProperty() { return MasterJabatanRow.idProperty; }
        protected getLocalTextPrefix() { return MasterJabatanRow.localTextPrefix; }
        protected getNameProperty() { return MasterJabatanRow.nameProperty; }
        protected getService() { return MasterJabatanService.baseUrl; }
        protected getDeletePermission() { return MasterJabatanRow.deletePermission; }
        protected getInsertPermission() { return MasterJabatanRow.insertPermission; }
        protected getUpdatePermission() { return MasterJabatanRow.updatePermission; }

        protected form = new MasterJabatanForm(this.idPrefix);

    }
}