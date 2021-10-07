
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class FcmMessageUserDialog extends Serenity.EntityDialog<FcmMessageUserRow, any> {
        protected getFormKey() { return FcmMessageUserForm.formKey; }
        protected getIdProperty() { return FcmMessageUserRow.idProperty; }
        protected getLocalTextPrefix() { return FcmMessageUserRow.localTextPrefix; }
        protected getNameProperty() { return FcmMessageUserRow.nameProperty; }
        protected getService() { return FcmMessageUserService.baseUrl; }
        protected getDeletePermission() { return FcmMessageUserRow.deletePermission; }
        protected getInsertPermission() { return FcmMessageUserRow.insertPermission; }
        protected getUpdatePermission() { return FcmMessageUserRow.updatePermission; }

        protected form = new FcmMessageUserForm(this.idPrefix);

        protected afterLoadEntity() {
            super.afterLoadEntity();

            var DialogNew = this.isNew();




            if (!DialogNew) {
                this.form.IdUser.value = Authorization.userDefinition.UserId;
                this.form.TimeStamp.valueAsDate;


            }
        }
    }
}