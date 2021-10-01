namespace SDD.Transaction {
    export interface DetailUserPertanianForm {
        IdSatuanPendukung: Serenity.LookupEditor;
        AlatBahanPendukung: Serenity.StringEditor;
        QuantityPendukung: Serenity.IntegerEditor;
        NominalPendukung: Serenity.DecimalEditor;
        TotalNominalPendukung: Serenity.DecimalEditor;
        Desc: Serenity.TextAreaEditor;
    }

    export class DetailUserPertanianForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.DetailUserPertanian';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DetailUserPertanianForm.init)  {
                DetailUserPertanianForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(DetailUserPertanianForm, [
                    'IdSatuanPendukung', w0,
                    'AlatBahanPendukung', w1,
                    'QuantityPendukung', w2,
                    'NominalPendukung', w3,
                    'TotalNominalPendukung', w3,
                    'Desc', w4
                ]);
            }
        }
    }
}

