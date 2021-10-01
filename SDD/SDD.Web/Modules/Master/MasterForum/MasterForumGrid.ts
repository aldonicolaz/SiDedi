
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterForumGrid extends Serenity.EntityGrid<MasterForumRow, any> {
        protected getColumnsKey() { return 'Master.MasterForum'; }
        protected getDialogType() { return MasterForumDialog; }
        protected getIdProperty() { return MasterForumRow.idProperty; }
        protected getInsertPermission() { return MasterForumRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterForumRow.localTextPrefix; }
        protected getService() { return MasterForumService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}