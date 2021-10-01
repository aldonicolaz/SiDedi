
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class TransaksiStatusDialog extends Serenity.EntityDialog<TransaksiStatusRow, any> {
        protected getFormKey() { return TransaksiStatusForm.formKey; }
        protected getIdProperty() { return TransaksiStatusRow.idProperty; }
        protected getLocalTextPrefix() { return TransaksiStatusRow.localTextPrefix; }
        protected getNameProperty() { return TransaksiStatusRow.nameProperty; }
        protected getService() { return TransaksiStatusService.baseUrl; }
        protected getDeletePermission() { return TransaksiStatusRow.deletePermission; }
        protected getInsertPermission() { return TransaksiStatusRow.insertPermission; }
        protected getUpdatePermission() { return TransaksiStatusRow.updatePermission; }
        protected DokumenFormulir;
        protected form = new TransaksiStatusForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();
            var DialogNew = this.isNew();

           

            this.toolbar.findButton(".delete-button").remove();

            if (!DialogNew) {
                var idformulir = Q.toId(this.form.IdMasterForm.value);
                this.toolbar.findButton(".save-and-close-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();

                var Option1= Q.toId(this.form.LinkFormulir.value);
                if (Option1 !== "") {
                    $('.DokumenFormulir .editor').append("<a href='" + Option1 + "' target='_blank' class='btn btn-primary btn-xs'>Link Formulir</a>");
                } else {
                    $('.DokumenFormulir .editor').append("No File");

                }
            }

           
            
        }


    }
}