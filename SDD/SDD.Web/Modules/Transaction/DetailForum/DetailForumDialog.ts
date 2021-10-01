
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailForumDialog extends Common.GridEditorDialog<DetailForumRow> {
        protected getFormKey() { return DetailForumForm.formKey; }
        protected getIdProperty() { return DetailForumRow.idProperty; }
        protected getLocalTextPrefix() { return DetailForumRow.localTextPrefix; }
        protected getNameProperty() { return DetailForumRow.nameProperty; }
        protected getService() { return DetailForumService.baseUrl; }
        protected getDeletePermission() { return DetailForumRow.deletePermission; }
        protected getInsertPermission() { return DetailForumRow.insertPermission; }
        protected getUpdatePermission() { return DetailForumRow.updatePermission; }

        protected form = new DetailForumForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            var user = Authorization.userDefinition.UserId;

            var roleid = Authorization.userDefinition.RoleId;

            if (roleid == 1) {

                this.toolbar.findButton(".delete-button").hide();
                this.toolbar.findButton(".save-and-close-button").hide();
                this.toolbar.findButton(".apply-changes-button").hide();
            }
            else if (roleid == 2) {
                this.toolbar.findButton(".delete-button").show();
                this.toolbar.findButton(".save-and-close-button").show();
                this.toolbar.findButton(".apply-changes-button").show();
            }
            else if (user == 1) {
                this.toolbar.findButton(".delete-button").show();
                this.toolbar.findButton(".save-and-close-button").show();
                this.toolbar.findButton(".apply-changes-button").show();
            }
            var DialogNew = this.isNew();
            if (!DialogNew) {



            }
        }
    }
}