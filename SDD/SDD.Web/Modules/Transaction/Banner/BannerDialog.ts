
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class BannerDialog extends Serenity.EntityDialog<BannerRow, any> {
        protected getFormKey() { return BannerForm.formKey; }
        protected getIdProperty() { return BannerRow.idProperty; }
        protected getLocalTextPrefix() { return BannerRow.localTextPrefix; }
        protected getNameProperty() { return BannerRow.nameProperty; }
        protected getService() { return BannerService.baseUrl; }
        protected getDeletePermission() { return BannerRow.deletePermission; }
        protected getInsertPermission() { return BannerRow.insertPermission; }
        protected getUpdatePermission() { return BannerRow.updatePermission; }

        protected form = new BannerForm(this.idPrefix);

    }
}