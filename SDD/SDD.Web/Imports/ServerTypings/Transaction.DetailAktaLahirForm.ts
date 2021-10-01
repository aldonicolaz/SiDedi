namespace SDD.Transaction {
    export interface DetailAktaLahirForm {
        NamaSaksi: Serenity.StringEditor;
        TglLahirSaksi: Serenity.DateEditor;
        PekerjaanSaksi: Serenity.StringEditor;
        NikSaksi: Serenity.StringEditor;
        Desc: Serenity.TextAreaEditor;
    }

    export class DetailAktaLahirForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.DetailAktaLahir';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DetailAktaLahirForm.init)  {
                DetailAktaLahirForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(DetailAktaLahirForm, [
                    'NamaSaksi', w0,
                    'TglLahirSaksi', w1,
                    'PekerjaanSaksi', w0,
                    'NikSaksi', w0,
                    'Desc', w2
                ]);
            }
        }
    }
}

