
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class VChartByAllPekerjaanDialog extends Serenity.EntityDialog<VChartByAllPekerjaanRow, any> {
        protected getFormKey() { return VChartByAllPekerjaanForm.formKey; }
        protected getIdProperty() { return VChartByAllPekerjaanRow.idProperty; }
        protected getLocalTextPrefix() { return VChartByAllPekerjaanRow.localTextPrefix; }
        protected getNameProperty() { return VChartByAllPekerjaanRow.nameProperty; }
        protected getService() { return VChartByAllPekerjaanService.baseUrl; }
        protected getDeletePermission() { return VChartByAllPekerjaanRow.deletePermission; }
        protected getInsertPermission() { return VChartByAllPekerjaanRow.insertPermission; }
        protected getUpdatePermission() { return VChartByAllPekerjaanRow.updatePermission; }

        protected form = new VChartByAllPekerjaanForm(this.idPrefix);

    }
}