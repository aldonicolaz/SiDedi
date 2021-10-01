
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterVersionDialog extends Serenity.EntityDialog<MasterVersionRow, any> {
        protected getFormKey() { return MasterVersionForm.formKey; }
        protected getIdProperty() { return MasterVersionRow.idProperty; }
        protected getLocalTextPrefix() { return MasterVersionRow.localTextPrefix; }
        protected getNameProperty() { return MasterVersionRow.nameProperty; }
        protected getService() { return MasterVersionService.baseUrl; }
        protected getDeletePermission() { return MasterVersionRow.deletePermission; }
        protected getInsertPermission() { return MasterVersionRow.insertPermission; }
        protected getUpdatePermission() { return MasterVersionRow.updatePermission; }

        protected form = new MasterVersionForm(this.idPrefix);

    }
}