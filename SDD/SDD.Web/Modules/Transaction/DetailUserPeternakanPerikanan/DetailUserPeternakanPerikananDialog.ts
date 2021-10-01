
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailUserPeternakanPerikananDialog extends Common.GridEditorDialog<DetailUserPeternakanPerikananRow> {
        protected getFormKey() { return DetailUserPeternakanPerikananForm.formKey; }
        protected getIdProperty() { return DetailUserPeternakanPerikananRow.idProperty; }
        protected getLocalTextPrefix() { return DetailUserPeternakanPerikananRow.localTextPrefix; }
        protected getNameProperty() { return DetailUserPeternakanPerikananRow.nameProperty; }
        protected getService() { return DetailUserPeternakanPerikananService.baseUrl; }
        protected getDeletePermission() { return DetailUserPeternakanPerikananRow.deletePermission; }
        protected getInsertPermission() { return DetailUserPeternakanPerikananRow.insertPermission; }
        protected getUpdatePermission() { return DetailUserPeternakanPerikananRow.updatePermission; }

        protected form = new DetailUserPeternakanPerikananForm(this.idPrefix);

    }
}