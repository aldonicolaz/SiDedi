
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailKapalNelayanDialog extends Common.GridEditorDialog<DetailKapalNelayanRow> {
        protected getFormKey() { return DetailKapalNelayanForm.formKey; }
        protected getIdProperty() { return DetailKapalNelayanRow.idProperty; }
        protected getLocalTextPrefix() { return DetailKapalNelayanRow.localTextPrefix; }
        protected getNameProperty() { return DetailKapalNelayanRow.nameProperty; }
        protected getService() { return DetailKapalNelayanService.baseUrl; }
        protected getDeletePermission() { return DetailKapalNelayanRow.deletePermission; }
        protected getInsertPermission() { return DetailKapalNelayanRow.insertPermission; }
        protected getUpdatePermission() { return DetailKapalNelayanRow.updatePermission; }

        protected form = new DetailKapalNelayanForm(this.idPrefix);

    }
}