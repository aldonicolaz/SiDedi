
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class ViewProfilUserGrid extends Serenity.EntityGrid<ViewProfilUserRow, any> {
        protected getColumnsKey() { return 'View.ViewProfilUser'; }
        protected getDialogType() { return ViewProfilUserDialog; }
        protected getIdProperty() { return ViewProfilUserRow.idProperty; }
        protected getInsertPermission() { return ViewProfilUserRow.insertPermission; }
        protected getLocalTextPrefix() { return ViewProfilUserRow.localTextPrefix; }
        protected getService() { return ViewProfilUserService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}