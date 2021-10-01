namespace SDD.Transaction {
    export interface UserPertanianPerkebunanForm {
        Option1: Serenity.LookupEditor;
        IdHasilBudidaya: Serenity.LookupEditor;
        LuasLahan: Serenity.DecimalEditor;
        JumlahPekerja: Serenity.IntegerEditor;
        PeriodePanen: Serenity.IntegerEditor;
        HasilPanen: Serenity.DecimalEditor;
        NominalHasilPanen: Serenity.DecimalEditor;
        DetailPertanian: DetailUserPertanianGrid;
    }

    export class UserPertanianPerkebunanForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.UserPertanianPerkebunan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserPertanianPerkebunanForm.init)  {
                UserPertanianPerkebunanForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;
                var w3 = DetailUserPertanianGrid;

                Q.initFormType(UserPertanianPerkebunanForm, [
                    'Option1', w0,
                    'IdHasilBudidaya', w0,
                    'LuasLahan', w1,
                    'JumlahPekerja', w2,
                    'PeriodePanen', w2,
                    'HasilPanen', w1,
                    'NominalHasilPanen', w1,
                    'DetailPertanian', w3
                ]);
            }
        }
    }
}

