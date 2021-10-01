
namespace SDD.Transaction {

    @Serenity.Decorators.registerClass()
    export class DetailPengaduanGrid extends Common.GridEditorBase<DetailPengaduanRow> {
        protected getColumnsKey() { return 'Transaction.DetailPengaduan'; }
        protected getDialogType() { return DetailPengaduanDialog; }
        protected getIdProperty() { return DetailPengaduanRow.idProperty; }
        protected getInsertPermission() { return DetailPengaduanRow.insertPermission; }
        protected getLocalTextPrefix() { return DetailPengaduanRow.localTextPrefix; }
        protected getService() { return DetailPengaduanService.baseUrl; }

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
