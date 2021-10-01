
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterHubunganDialog extends Serenity.EntityDialog<MasterHubunganRow, any> {
        protected getFormKey() { return MasterHubunganForm.formKey; }
        protected getIdProperty() { return MasterHubunganRow.idProperty; }
        protected getLocalTextPrefix() { return MasterHubunganRow.localTextPrefix; }
        protected getNameProperty() { return MasterHubunganRow.nameProperty; }
        protected getService() { return MasterHubunganService.baseUrl; }
        protected getDeletePermission() { return MasterHubunganRow.deletePermission; }
        protected getInsertPermission() { return MasterHubunganRow.insertPermission; }
        protected getUpdatePermission() { return MasterHubunganRow.updatePermission; }

        protected form = new MasterHubunganForm(this.idPrefix);

    }
}