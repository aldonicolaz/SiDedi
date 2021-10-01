namespace SDD.Transaction {
    export interface AparaturDesaForm {
        IdJabatan: Serenity.LookupEditor;
        StatusAparatur: Serenity.EnumEditor;
        PeriodeAwal: Serenity.DateEditor;
        PeriodeAkhir: Serenity.DateEditor;
        DescAparaturDesa: Serenity.TextAreaEditor;
    }

    export class AparaturDesaForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.AparaturDesa';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AparaturDesaForm.init)  {
                AparaturDesaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(AparaturDesaForm, [
                    'IdJabatan', w0,
                    'StatusAparatur', w1,
                    'PeriodeAwal', w2,
                    'PeriodeAkhir', w2,
                    'DescAparaturDesa', w3
                ]);
            }
        }
    }
}

