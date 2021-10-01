
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class VChartByAllPekerjaanGrid extends Serenity.EntityGrid<VChartByAllPekerjaanRow, any> {
        protected getColumnsKey() { return 'View.VChartByAllPekerjaan'; }
        protected getDialogType() { return VChartByAllPekerjaanDialog; }
        protected getIdProperty() { return VChartByAllPekerjaanRow.idProperty; }
        protected getInsertPermission() { return VChartByAllPekerjaanRow.insertPermission; }
        protected getLocalTextPrefix() { return VChartByAllPekerjaanRow.localTextPrefix; }
        protected getService() { return VChartByAllPekerjaanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}