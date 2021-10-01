namespace SDD.Administration {
    import fld = UserRow.Fields;
    @Serenity.Decorators.registerClass()
    export class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey() { return "Administration.User"; }
        protected getDialogType() { return UserDialog; }
        protected getIdProperty() { return UserRow.idProperty; }
        protected getIsActiveProperty() { return UserRow.isActiveProperty; }
        protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
        protected getService() { return UserService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getDefaultSortBy() {
            return [UserRow.Fields.Username];
        }

 protected getColumns(): Slick.Column[] {
     var columns = super.getColumns();
     Q.first(columns, x => x.field == fld.Option1).format = ctx => (ctx.value == null) ? `<span>` + "No File" + `</span>` : `<span class="label bg-info text-white">` + `<a href="${Q.htmlEncode(ctx.value)}" target="_blank" download="${Q.htmlEncode(ctx.value)}"><i class="fa fa fa-file-excel-o text-red"></i> Download</a>` + `</span>`;
         

            return columns;
        }
    }
}