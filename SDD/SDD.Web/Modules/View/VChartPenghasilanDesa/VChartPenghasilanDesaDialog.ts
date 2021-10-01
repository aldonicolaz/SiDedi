
namespace SDD.View {

    @Serenity.Decorators.registerClass()
    export class VChartPenghasilanDesaDialog extends Serenity.EntityDialog<VChartPenghasilanDesaRow, any> {
        protected getFormKey() { return VChartPenghasilanDesaForm.formKey; }
        protected getIdProperty() { return VChartPenghasilanDesaRow.idProperty; }
        protected getLocalTextPrefix() { return VChartPenghasilanDesaRow.localTextPrefix; }
        protected getNameProperty() { return VChartPenghasilanDesaRow.nameProperty; }
        protected getService() { return VChartPenghasilanDesaService.baseUrl; }
        protected getDeletePermission() { return VChartPenghasilanDesaRow.deletePermission; }
        protected getInsertPermission() { return VChartPenghasilanDesaRow.insertPermission; }
        protected getUpdatePermission() { return VChartPenghasilanDesaRow.updatePermission; }

        protected form = new VChartPenghasilanDesaForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.toolbar.findButton(".delete-button").remove();
            this.toolbar.findButton(".save-and-close-button").remove();
            this.toolbar.findButton(".apply-changes-button").remove();
        }
    }
}