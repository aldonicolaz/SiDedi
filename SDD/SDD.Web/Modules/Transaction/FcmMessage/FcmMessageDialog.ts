
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class FcmMessageDialog extends Common.GridEditorDialog<FcmMessageRow> {
        protected getFormKey() { return FcmMessageForm.formKey; }
        protected getIdProperty() { return FcmMessageRow.idProperty; }
        protected getLocalTextPrefix() { return FcmMessageRow.localTextPrefix; }
        protected getNameProperty() { return FcmMessageRow.nameProperty; }
        protected getService() { return FcmMessageService.baseUrl; }
        protected getDeletePermission() { return FcmMessageRow.deletePermission; }
        protected getInsertPermission() { return FcmMessageRow.insertPermission; }
        protected getUpdatePermission() { return FcmMessageRow.updatePermission; }

        protected form = new FcmMessageForm(this.idPrefix);
        constructor() {
            super();
            this.form = new FcmMessageForm(this.idPrefix);
        }

    }
}