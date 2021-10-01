
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailUserPertanianDialog extends Common.GridEditorDialog<DetailUserPertanianRow> {
        protected getFormKey() { return DetailUserPertanianForm.formKey; }
        protected getIdProperty() { return DetailUserPertanianRow.idProperty; }
        protected getLocalTextPrefix() { return DetailUserPertanianRow.localTextPrefix; }
        protected getNameProperty() { return DetailUserPertanianRow.nameProperty; }
        protected getService() { return DetailUserPertanianService.baseUrl; }
        protected getDeletePermission() { return DetailUserPertanianRow.deletePermission; }
        protected getInsertPermission() { return DetailUserPertanianRow.insertPermission; }
        protected getUpdatePermission() { return DetailUserPertanianRow.updatePermission; }

        protected form = new DetailUserPertanianForm(this.idPrefix);

    }
}