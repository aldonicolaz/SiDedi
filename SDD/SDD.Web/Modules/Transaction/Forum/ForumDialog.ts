
namespace SDD.Transaction {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class ForumDialog extends Serenity.EntityDialog<ForumRow, any> {
        protected getFormKey() { return ForumForm.formKey; }
        protected getIdProperty() { return ForumRow.idProperty; }
        protected getLocalTextPrefix() { return ForumRow.localTextPrefix; }
        protected getNameProperty() { return ForumRow.nameProperty; }
        protected getService() { return ForumService.baseUrl; }
        protected getDeletePermission() { return ForumRow.deletePermission; }
        protected getInsertPermission() { return ForumRow.insertPermission; }
        protected getUpdatePermission() { return ForumRow.updatePermission; }

        protected form = new ForumForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();



            var DialogNew = this.isNew();
            if (!DialogNew) {
                var user = Authorization.userDefinition.UserId;

                var roleid = Authorization.userDefinition.RoleId;

                if (roleid == 1) {
                    this.toolbar.findButton(".delete-button").remove();
                    this.toolbar.findButton(".save-and-close-button").remove();
                    this.toolbar.findButton(".apply-changes-button").remove();
                    Serenity.EditorUtils.setReadOnly(this.form.IdMasterForum, true);
                    Serenity.EditorUtils.setReadOnly(this.form.DetailForum, true);
                    Serenity.EditorUtils.setReadOnly(this.form.FotoDokumenForum, true);
                    Serenity.EditorUtils.setReadOnly(this.form.HiddenUser, true);

                }
                else if (roleid == 2) {
                    this.toolbar.findButton(".delete-button").remove();

                    Serenity.EditorUtils.setReadOnly(this.form.IdMasterForum, true);
                    Serenity.EditorUtils.setReadOnly(this.form.DetailForum, true);
                    Serenity.EditorUtils.setReadOnly(this.form.FotoDokumenForum, true);
                    Serenity.EditorUtils.setReadOnly(this.form.HiddenUser, true);

                }
                else if (user == 1) {
                    Serenity.EditorUtils.setReadOnly(this.form.IdMasterForum, false);
                    Serenity.EditorUtils.setReadOnly(this.form.DetailForum, false);
                    Serenity.EditorUtils.setReadOnly(this.form.FotoDokumenForum, false);
                    Serenity.EditorUtils.setReadOnly(this.form.HiddenUser, false);

                }


            } else {
                if (roleid == 1) {


                    this.form.Detail.element.closest('.category').toggle(false);
                }
                else if (roleid == 2) {

                    this.form.Detail.element.closest('.category').toggle(true);
                }
                else if (user == 1) {

                    this.form.Detail.element.closest('.category').toggle(true);
                }
            }
        }
    }
}