namespace SDD.Transaction {
    export interface DetailUserPerdaganganForm {
        TypeLapak: Serenity.EnumEditor;
        LuasLapak: Serenity.DecimalEditor;
        StatusLapak: Serenity.EnumEditor;
        AlamatLapak: Serenity.TextAreaEditor;
        JumPekerja: Serenity.IntegerEditor;
        SemuaBiayaBulanan: Serenity.DecimalEditor;
        PenghasilanBulanan: Serenity.DecimalEditor;
        Desc: Serenity.TextAreaEditor;
    }

    export class DetailUserPerdaganganForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.DetailUserPerdagangan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DetailUserPerdaganganForm.init)  {
                DetailUserPerdaganganForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(DetailUserPerdaganganForm, [
                    'TypeLapak', w0,
                    'LuasLapak', w1,
                    'StatusLapak', w0,
                    'AlamatLapak', w2,
                    'JumPekerja', w3,
                    'SemuaBiayaBulanan', w1,
                    'PenghasilanBulanan', w1,
                    'Desc', w2
                ]);
            }
        }
    }
}

