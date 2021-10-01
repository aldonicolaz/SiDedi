
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterForumDialog extends Serenity.EntityDialog<MasterForumRow, any> {
        protected getFormKey() { return MasterForumForm.formKey; }
        protected getIdProperty() { return MasterForumRow.idProperty; }
        protected getLocalTextPrefix() { return MasterForumRow.localTextPrefix; }
        protected getNameProperty() { return MasterForumRow.nameProperty; }
        protected getService() { return MasterForumService.baseUrl; }
        protected getDeletePermission() { return MasterForumRow.deletePermission; }
        protected getInsertPermission() { return MasterForumRow.insertPermission; }
        protected getUpdatePermission() { return MasterForumRow.updatePermission; }

        protected form = new MasterForumForm(this.idPrefix);

    }
}