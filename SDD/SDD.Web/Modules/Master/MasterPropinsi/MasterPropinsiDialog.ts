
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterPropinsiDialog extends Serenity.EntityDialog<MasterPropinsiRow, any> {
        protected getFormKey() { return MasterPropinsiForm.formKey; }
        protected getIdProperty() { return MasterPropinsiRow.idProperty; }
        protected getLocalTextPrefix() { return MasterPropinsiRow.localTextPrefix; }
        protected getNameProperty() { return MasterPropinsiRow.nameProperty; }
        protected getService() { return MasterPropinsiService.baseUrl; }
        protected getDeletePermission() { return MasterPropinsiRow.deletePermission; }
        protected getInsertPermission() { return MasterPropinsiRow.insertPermission; }
        protected getUpdatePermission() { return MasterPropinsiRow.updatePermission; }

        protected form = new MasterPropinsiForm(this.idPrefix);

    }
}