namespace SDD.Transaction {
    export interface UserPerikananPeternakanForm {
        Option1: Serenity.LookupEditor;
        IdHasilBudidaya: Serenity.LookupEditor;
        TotalBibit: Serenity.DecimalEditor;
        LuasLahan: Serenity.DecimalEditor;
        JumlahPekerja: Serenity.IntegerEditor;
        PeriodePanen: Serenity.IntegerEditor;
        HasilPanen: Serenity.DecimalEditor;
        NominalHasilPanen: Serenity.DecimalEditor;
        DetailPeternakan: DetailUserPeternakanPerikananGrid;
    }

    export class UserPerikananPeternakanForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.UserPerikananPeternakan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserPerikananPeternakanForm.init)  {
                UserPerikananPeternakanForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;
                var w3 = DetailUserPeternakanPerikananGrid;

                Q.initFormType(UserPerikananPeternakanForm, [
                    'Option1', w0,
                    'IdHasilBudidaya', w0,
                    'TotalBibit', w1,
                    'LuasLahan', w1,
                    'JumlahPekerja', w2,
                    'PeriodePanen', w2,
                    'HasilPanen', w1,
                    'NominalHasilPanen', w1,
                    'DetailPeternakan', w3
                ]);
            }
        }
    }
}

