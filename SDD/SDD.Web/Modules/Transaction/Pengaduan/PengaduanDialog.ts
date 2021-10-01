
namespace SDD.Transaction {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class PengaduanDialog extends Serenity.EntityDialog<PengaduanRow, any> {
        protected getFormKey() { return PengaduanForm.formKey; }
        protected getIdProperty() { return PengaduanRow.idProperty; }
        protected getLocalTextPrefix() { return PengaduanRow.localTextPrefix; }
        protected getNameProperty() { return PengaduanRow.nameProperty; }
        protected getService() { return PengaduanService.baseUrl; }
        protected getDeletePermission() { return PengaduanRow.deletePermission; }
        protected getInsertPermission() { return PengaduanRow.insertPermission; }
        protected getUpdatePermission() { return PengaduanRow.updatePermission; }

        protected form = new PengaduanForm(this.idPrefix);


        protected afterLoadEntity() {
            super.afterLoadEntity();
            
            var DialogNew = this.isNew();

            var userid = Authorization.userDefinition.UserId;
            var roleid = Authorization.userDefinition.RoleId;

            if (!DialogNew) {
                if (userid == 1)
                {
                    this.set_readOnly(false);
                }

                else if (roleid == 2)
                {
                    Serenity.EditorUtils.setReadOnly(this.form.FotoDokumen, true);
                    Serenity.EditorUtils.setReadOnly(this.form.IdMasterTujuan, true);
                    Serenity.EditorUtils.setReadOnly(this.form.PerihalPengaduan, true);
                    this.toolbar.findButton(".apply-changes-button").remove();
                    this.toolbar.findButton(".delete-button").remove();
                }
                else if (roleid == 1)
                {

                    this.toolbar.findButton(".save-and-close-button").remove();
                    this.toolbar.findButton(".apply-changes-button").remove();
                    this.toolbar.findButton(".delete-button").remove();
                    this.set_readOnly(true);
                }
            }

        }
    }
}