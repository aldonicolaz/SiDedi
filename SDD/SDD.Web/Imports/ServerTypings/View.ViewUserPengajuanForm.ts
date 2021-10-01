namespace SDD.View {
    export interface ViewUserPengajuanForm {
        IdNumber: Serenity.StringEditor;
        Formulir: Serenity.StringEditor;
        Dokumen: Serenity.StringEditor;
    }

    export class ViewUserPengajuanForm extends Serenity.PrefixedContext {
        static formKey = 'View.ViewUserPengajuan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ViewUserPengajuanForm.init)  {
                ViewUserPengajuanForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ViewUserPengajuanForm, [
                    'IdNumber', w0,
                    'Formulir', w0,
                    'Dokumen', w0
                ]);
            }
        }
    }
}

