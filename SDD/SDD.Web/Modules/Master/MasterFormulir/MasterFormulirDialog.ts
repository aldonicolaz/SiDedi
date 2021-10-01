
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterFormulirDialog extends Serenity.EntityDialog<MasterFormulirRow, any> {
        protected getFormKey() { return MasterFormulirForm.formKey; }
        protected getIdProperty() { return MasterFormulirRow.idProperty; }
        protected getLocalTextPrefix() { return MasterFormulirRow.localTextPrefix; }
        protected getNameProperty() { return MasterFormulirRow.nameProperty; }
        protected getService() { return MasterFormulirService.baseUrl; }
        protected getDeletePermission() { return MasterFormulirRow.deletePermission; }
        protected getInsertPermission() { return MasterFormulirRow.insertPermission; }
        protected getUpdatePermission() { return MasterFormulirRow.updatePermission; }

        protected form = new MasterFormulirForm(this.idPrefix);

    }
}