
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterKabupatenDialog extends Serenity.EntityDialog<MasterKabupatenRow, any> {
        protected getFormKey() { return MasterKabupatenForm.formKey; }
        protected getIdProperty() { return MasterKabupatenRow.idProperty; }
        protected getLocalTextPrefix() { return MasterKabupatenRow.localTextPrefix; }
        protected getNameProperty() { return MasterKabupatenRow.nameProperty; }
        protected getService() { return MasterKabupatenService.baseUrl; }
        protected getDeletePermission() { return MasterKabupatenRow.deletePermission; }
        protected getInsertPermission() { return MasterKabupatenRow.insertPermission; }
        protected getUpdatePermission() { return MasterKabupatenRow.updatePermission; }

        protected form = new MasterKabupatenForm(this.idPrefix);

    }
}