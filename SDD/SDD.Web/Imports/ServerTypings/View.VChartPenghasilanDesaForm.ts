namespace SDD.View {
    export interface VChartPenghasilanDesaForm {
        Namadesa: Serenity.StringEditor;
        TotalPenghasilan: Serenity.DecimalEditor;
    }

    export class VChartPenghasilanDesaForm extends Serenity.PrefixedContext {
        static formKey = 'View.VChartPenghasilanDesa';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VChartPenghasilanDesaForm.init)  {
                VChartPenghasilanDesaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(VChartPenghasilanDesaForm, [
                    'Namadesa', w0,
                    'TotalPenghasilan', w1
                ]);
            }
        }
    }
}

