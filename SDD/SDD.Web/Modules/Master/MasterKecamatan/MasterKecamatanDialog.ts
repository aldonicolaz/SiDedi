
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterKecamatanDialog extends Serenity.EntityDialog<MasterKecamatanRow, any> {
        protected getFormKey() { return MasterKecamatanForm.formKey; }
        protected getIdProperty() { return MasterKecamatanRow.idProperty; }
        protected getLocalTextPrefix() { return MasterKecamatanRow.localTextPrefix; }
        protected getNameProperty() { return MasterKecamatanRow.nameProperty; }
        protected getService() { return MasterKecamatanService.baseUrl; }
        protected getDeletePermission() { return MasterKecamatanRow.deletePermission; }
        protected getInsertPermission() { return MasterKecamatanRow.insertPermission; }
        protected getUpdatePermission() { return MasterKecamatanRow.updatePermission; }

        protected form = new MasterKecamatanForm(this.idPrefix);

    }
}