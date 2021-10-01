
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailUserPerdaganganDialog extends Common.GridEditorDialog<DetailUserPerdaganganRow> {
        protected getFormKey() { return DetailUserPerdaganganForm.formKey; }
        protected getIdProperty() { return DetailUserPerdaganganRow.idProperty; }
        protected getLocalTextPrefix() { return DetailUserPerdaganganRow.localTextPrefix; }
        protected getNameProperty() { return DetailUserPerdaganganRow.nameProperty; }
        protected getService() { return DetailUserPerdaganganService.baseUrl; }
        protected getDeletePermission() { return DetailUserPerdaganganRow.deletePermission; }
        protected getInsertPermission() { return DetailUserPerdaganganRow.insertPermission; }
        protected getUpdatePermission() { return DetailUserPerdaganganRow.updatePermission; }

        protected form = new DetailUserPerdaganganForm(this.idPrefix);

    }
}