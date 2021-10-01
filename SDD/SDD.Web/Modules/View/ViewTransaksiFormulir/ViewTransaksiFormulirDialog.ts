
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class ViewTransaksiFormulirDialog extends Serenity.EntityDialog<ViewTransaksiFormulirRow, any> {
        protected getFormKey() { return ViewTransaksiFormulirForm.formKey; }
        protected getIdProperty() { return ViewTransaksiFormulirRow.idProperty; }
        protected getLocalTextPrefix() { return ViewTransaksiFormulirRow.localTextPrefix; }
        protected getNameProperty() { return ViewTransaksiFormulirRow.nameProperty; }
        protected getService() { return ViewTransaksiFormulirService.baseUrl; }
        protected getDeletePermission() { return ViewTransaksiFormulirRow.deletePermission; }
        protected getInsertPermission() { return ViewTransaksiFormulirRow.insertPermission; }
        protected getUpdatePermission() { return ViewTransaksiFormulirRow.updatePermission; }

        protected form = new ViewTransaksiFormulirForm(this.idPrefix);
        protected DokumenFormulir;

        protected afterLoadEntity() {
            super.afterLoadEntity();
            var DialogNew = this.isNew();



            this.toolbar.findButton(".delete-button").remove();

            if (!DialogNew) {
               
                this.toolbar.findButton(".delete-button").remove();
                this.toolbar.findButton(".save-and-close-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();

                var Option1 = Q.toId(this.form.Formulir.value);
                if (Option1 !== "") {
                    $('.DokumenFormulir .editor').append("<a href='" + Option1 + "' target='_blank' class='btn btn-primary btn-xs'>Link Formulir</a>");
                } else {
                    $('.DokumenFormulir .editor').append("No File");

                }
            }



        }
    }
}