
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterSatuanDialog extends Serenity.EntityDialog<MasterSatuanRow, any> {
        protected getFormKey() { return MasterSatuanForm.formKey; }
        protected getIdProperty() { return MasterSatuanRow.idProperty; }
        protected getLocalTextPrefix() { return MasterSatuanRow.localTextPrefix; }
        protected getNameProperty() { return MasterSatuanRow.nameProperty; }
        protected getService() { return MasterSatuanService.baseUrl; }
        protected getDeletePermission() { return MasterSatuanRow.deletePermission; }
        protected getInsertPermission() { return MasterSatuanRow.insertPermission; }
        protected getUpdatePermission() { return MasterSatuanRow.updatePermission; }

        protected form = new MasterSatuanForm(this.idPrefix);

    }
}