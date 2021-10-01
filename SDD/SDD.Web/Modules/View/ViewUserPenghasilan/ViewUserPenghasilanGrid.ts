
namespace SDD.View {
    import fld = ViewUserPenghasilanRow.Fields;
    @Serenity.Decorators.registerClass()
    export class ViewUserPenghasilanGrid extends Serenity.EntityGrid<ViewUserPenghasilanRow, any> {
        protected getColumnsKey() { return 'View.ViewUserPenghasilan'; }
        protected getDialogType() { return ViewUserPenghasilanDialog; }
        protected getIdProperty() { return ViewUserPenghasilanRow.idProperty; }
        protected getInsertPermission() { return ViewUserPenghasilanRow.insertPermission; }
        protected getLocalTextPrefix() { return ViewUserPenghasilanRow.localTextPrefix; }
        protected getService() { return ViewUserPenghasilanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            $(".add-button").hide();
        }
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ViewUserPenghasilanService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                title: "Excel",
                separator: true
            }));
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            //buttons.push(Common.ExcelExportHelper.createToolButton({
            //    grid: this,
            //    service: ViewUserPenghasilanService.baseUrl + '/ListPdf',
            //    onViewSubmit: () => this.onViewSubmit(),        
            //    title: "Chart Desa",
            //    separator: true
            //}));



            return buttons;


        }

        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {


            let filters = super.getQuickFilters();

            let endFreight: Serenity.DecimalEditor = null;


            filters.push({
                field: fld.TotalHasil,
                type: Serenity.DecimalEditor,
                title: 'Total Penghasilan',
                element: e1 => {
                    e1.css("width", "100px");
                    endFreight = Serenity.Widget.create({
                        type: Serenity.DecimalEditor,
                        element: e2 => e2.insertAfter(e1).css("width", "100px")
                    });

                    endFreight.element.change(x => e1.triggerHandler("change"));
                    $("<span/>").addClass("range-separator").text("-").insertAfter(e1);
                },
                handler: h => {
                    var active1 = h.value != null && !isNaN(h.value);
                    var active2 = endFreight.value != null && !isNaN(endFreight.value);
                    h.active = active1 || active2;

                    if (active1)
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                            [[fld.TotalHasil], '>=', h.value]);

                    if (active2)
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                            [[fld.TotalHasil], '<=', endFreight.value]);
                }
            });

            return filters;
        }
        protected createSlickGrid() {
            var grid = super.createSlickGrid();


            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum(fld.TotalHasil)
                ]
            });

            return grid;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }
    }
}