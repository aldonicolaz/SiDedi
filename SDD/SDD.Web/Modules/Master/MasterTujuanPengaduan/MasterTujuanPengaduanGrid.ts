
namespace SDD.Master {

    @Serenity.Decorators.registerClass()
    export class MasterTujuanPengaduanGrid extends Serenity.EntityGrid<MasterTujuanPengaduanRow, any> {
        protected getColumnsKey() { return 'Master.MasterTujuanPengaduan'; }
        protected getDialogType() { return MasterTujuanPengaduanDialog; }
        protected getIdProperty() { return MasterTujuanPengaduanRow.idProperty; }
        protected getInsertPermission() { return MasterTujuanPengaduanRow.insertPermission; }
        protected getLocalTextPrefix() { return MasterTujuanPengaduanRow.localTextPrefix; }
        protected getService() { return MasterTujuanPengaduanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}