
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailFormulirKkDialog extends Common.GridEditorDialog<DetailFormulirKkRow> {
        protected getFormKey() { return DetailFormulirKkForm.formKey; }
        protected getIdProperty() { return DetailFormulirKkRow.idProperty; }
        protected getLocalTextPrefix() { return DetailFormulirKkRow.localTextPrefix; }
        protected getNameProperty() { return DetailFormulirKkRow.nameProperty; }
        protected getService() { return DetailFormulirKkService.baseUrl; }
        protected getDeletePermission() { return DetailFormulirKkRow.deletePermission; }
        protected getInsertPermission() { return DetailFormulirKkRow.insertPermission; }
        protected getUpdatePermission() { return DetailFormulirKkRow.updatePermission; }

        protected form = new DetailFormulirKkForm(this.idPrefix);

    }
}