namespace SDD.View {
    export interface ViewAllPengajuanForm {
        IdNumber: Serenity.StringEditor;
        IdUserPengajuan: Serenity.IntegerEditor;
        IdMasterForm: Serenity.IntegerEditor;
        FormulirPengajuan: Serenity.StringEditor;
    }

    export class ViewAllPengajuanForm extends Serenity.PrefixedContext {
        static formKey = 'View.ViewAllPengajuan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ViewAllPengajuanForm.init)  {
                ViewAllPengajuanForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ViewAllPengajuanForm, [
                    'IdNumber', w0,
                    'IdUserPengajuan', w1,
                    'IdMasterForm', w1,
                    'FormulirPengajuan', w0
                ]);
            }
        }
    }
}

