
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterTujuanPengaduanDialog extends Serenity.EntityDialog<MasterTujuanPengaduanRow, any> {
        protected getFormKey() { return MasterTujuanPengaduanForm.formKey; }
        protected getIdProperty() { return MasterTujuanPengaduanRow.idProperty; }
        protected getLocalTextPrefix() { return MasterTujuanPengaduanRow.localTextPrefix; }
        protected getNameProperty() { return MasterTujuanPengaduanRow.nameProperty; }
        protected getService() { return MasterTujuanPengaduanService.baseUrl; }
        protected getDeletePermission() { return MasterTujuanPengaduanRow.deletePermission; }
        protected getInsertPermission() { return MasterTujuanPengaduanRow.insertPermission; }
        protected getUpdatePermission() { return MasterTujuanPengaduanRow.updatePermission; }

        protected form = new MasterTujuanPengaduanForm(this.idPrefix);

    }
}