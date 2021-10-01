
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterStatusDialog extends Serenity.EntityDialog<MasterStatusRow, any> {
        protected getFormKey() { return MasterStatusForm.formKey; }
        protected getIdProperty() { return MasterStatusRow.idProperty; }
        protected getLocalTextPrefix() { return MasterStatusRow.localTextPrefix; }
        protected getNameProperty() { return MasterStatusRow.nameProperty; }
        protected getService() { return MasterStatusService.baseUrl; }
        protected getDeletePermission() { return MasterStatusRow.deletePermission; }
        protected getInsertPermission() { return MasterStatusRow.insertPermission; }
        protected getUpdatePermission() { return MasterStatusRow.updatePermission; }

        protected form = new MasterStatusForm(this.idPrefix);

    }
}