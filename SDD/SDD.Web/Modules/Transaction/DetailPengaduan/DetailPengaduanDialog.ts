
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailPengaduanDialog extends Common.GridEditorDialog<DetailPengaduanRow> {
        protected getFormKey() { return DetailPengaduanForm.formKey; }
        protected getIdProperty() { return DetailPengaduanRow.idProperty; }
        protected getLocalTextPrefix() { return DetailPengaduanRow.localTextPrefix; }
        protected getNameProperty() { return DetailPengaduanRow.nameProperty; }
        protected getService() { return DetailPengaduanService.baseUrl; }
        protected getDeletePermission() { return DetailPengaduanRow.deletePermission; }
        protected getInsertPermission() { return DetailPengaduanRow.insertPermission; }
        protected getUpdatePermission() { return DetailPengaduanRow.updatePermission; }


        protected form = new DetailPengaduanForm(this.idPrefix);
        constructor() {
            super();
            this.form = new DetailPengaduanForm(this.idPrefix);
           


            var userid = Authorization.userDefinition.UserId;
            var roleid = Authorization.userDefinition.RoleId;

            if (roleid == 1) {
                this.toolbar.findButton(".add-button").remove();
                this.toolbar.findButton(".save-and-close-button").remove();

            }
            else
            {


            }
        }

    }
}