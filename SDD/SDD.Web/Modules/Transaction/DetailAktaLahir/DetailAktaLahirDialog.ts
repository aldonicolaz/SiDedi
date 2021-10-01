
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailAktaLahirDialog extends Common.GridEditorDialog<DetailAktaLahirRow> {
        protected getFormKey() { return DetailAktaLahirForm.formKey; }
        protected getIdProperty() { return DetailAktaLahirRow.idProperty; }
        protected getLocalTextPrefix() { return DetailAktaLahirRow.localTextPrefix; }
        protected getNameProperty() { return DetailAktaLahirRow.nameProperty; }
        protected getService() { return DetailAktaLahirService.baseUrl; }
        protected getDeletePermission() { return DetailAktaLahirRow.deletePermission; }
        protected getInsertPermission() { return DetailAktaLahirRow.insertPermission; }
        protected getUpdatePermission() { return DetailAktaLahirRow.updatePermission; }

        protected form = new DetailAktaLahirForm(this.idPrefix);

    }
}