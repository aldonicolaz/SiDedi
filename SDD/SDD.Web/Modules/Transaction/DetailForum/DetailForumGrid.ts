
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailForumGrid extends Common.GridEditorBase<DetailForumRow> {
        protected getColumnsKey() { return 'Transaction.DetailForum'; }
        protected getDialogType() { return DetailForumDialog; }
        protected getIdProperty() { return DetailForumRow.idProperty; }
        protected getInsertPermission() { return DetailForumRow.insertPermission; }
        protected getLocalTextPrefix() { return DetailForumRow.localTextPrefix; }
        protected getService() { return DetailForumService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

            var user = Authorization.userDefinition.UserId;

            var roleid = Authorization.userDefinition.RoleId;

            if (roleid == 1) {

                $(".add-button").hide();
            }
            else if (roleid == 2) {
                $(".add-button").show();
            }
            else if (user == 1) {
                $(".add-button").show();
            }
        }
    }
}