
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class ForumNewDialog extends Serenity.EntityDialog<ForumNewRow, any> {
        protected getFormKey() { return ForumNewForm.formKey; }
        protected getIdProperty() { return ForumNewRow.idProperty; }
        protected getLocalTextPrefix() { return ForumNewRow.localTextPrefix; }
        protected getNameProperty() { return ForumNewRow.nameProperty; }
        protected getService() { return ForumNewService.baseUrl; }
        protected getDeletePermission() { return ForumNewRow.deletePermission; }
        protected getInsertPermission() { return ForumNewRow.insertPermission; }
        protected getUpdatePermission() { return ForumNewRow.updatePermission; }

        protected form = new ForumNewForm(this.idPrefix);

    }
}