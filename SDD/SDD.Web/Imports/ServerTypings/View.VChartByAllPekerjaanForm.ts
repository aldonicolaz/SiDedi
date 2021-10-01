namespace SDD.View {
    export interface VChartByAllPekerjaanForm {
        CountTransaksi: Serenity.IntegerEditor;
        TotalPenghasilan: Serenity.DecimalEditor;
        IdPekerjaan: Serenity.IntegerEditor;
        NamaPekerjaan: Serenity.StringEditor;
    }

    export class VChartByAllPekerjaanForm extends Serenity.PrefixedContext {
        static formKey = 'View.VChartByAllPekerjaan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VChartByAllPekerjaanForm.init)  {
                VChartByAllPekerjaanForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.StringEditor;

                Q.initFormType(VChartByAllPekerjaanForm, [
                    'CountTransaksi', w0,
                    'TotalPenghasilan', w1,
                    'IdPekerjaan', w0,
                    'NamaPekerjaan', w2
                ]);
            }
        }
    }
}

