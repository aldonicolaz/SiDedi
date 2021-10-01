
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterPekerjaanDialog extends Serenity.EntityDialog<MasterPekerjaanRow, any> {
        protected getFormKey() { return MasterPekerjaanForm.formKey; }
        protected getIdProperty() { return MasterPekerjaanRow.idProperty; }
        protected getLocalTextPrefix() { return MasterPekerjaanRow.localTextPrefix; }
        protected getNameProperty() { return MasterPekerjaanRow.nameProperty; }
        protected getService() { return MasterPekerjaanService.baseUrl; }
        protected getDeletePermission() { return MasterPekerjaanRow.deletePermission; }
        protected getInsertPermission() { return MasterPekerjaanRow.insertPermission; }
        protected getUpdatePermission() { return MasterPekerjaanRow.updatePermission; }

        protected form = new MasterPekerjaanForm(this.idPrefix);

    }
}