
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class ParentMessageDialog extends Serenity.EntityDialog<ParentMessageRow, any> {
        protected getFormKey() { return ParentMessageForm.formKey; }
        protected getIdProperty() { return ParentMessageRow.idProperty; }
        protected getLocalTextPrefix() { return ParentMessageRow.localTextPrefix; }
        protected getNameProperty() { return ParentMessageRow.nameProperty; }
        protected getService() { return ParentMessageService.baseUrl; }
        protected getDeletePermission() { return ParentMessageRow.deletePermission; }
        protected getInsertPermission() { return ParentMessageRow.insertPermission; }
        protected getUpdatePermission() { return ParentMessageRow.updatePermission; }

        protected form = new ParentMessageForm(this.idPrefix);
       
        constructor() {
            super();


        }
    }
}