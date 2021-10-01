namespace SDD.View {
    export interface ViewUserPenghasilanForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        WaNumber: Serenity.StringEditor;
        TotalHasil: Serenity.DecimalEditor;
        NamaPekerjaan: Serenity.StringEditor;
        NamaDesa: Serenity.StringEditor;
        NamaKecamatan: Serenity.StringEditor;
        NamaKabupaten: Serenity.StringEditor;
        NamaPropinsi: Serenity.StringEditor;
    }

    export class ViewUserPenghasilanForm extends Serenity.PrefixedContext {
        static formKey = 'View.ViewUserPenghasilan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ViewUserPenghasilanForm.init)  {
                ViewUserPenghasilanForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ViewUserPenghasilanForm, [
                    'DisplayName', w0,
                    'Email', w0,
                    'WaNumber', w0,
                    'TotalHasil', w1,
                    'NamaPekerjaan', w0,
                    'NamaDesa', w0,
                    'NamaKecamatan', w0,
                    'NamaKabupaten', w0,
                    'NamaPropinsi', w0
                ]);
            }
        }
    }
}

