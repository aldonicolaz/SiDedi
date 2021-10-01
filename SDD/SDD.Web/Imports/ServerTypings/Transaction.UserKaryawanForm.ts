namespace SDD.Transaction {
    export interface UserKaryawanForm {
        TypePerusahaan: Serenity.EnumEditor;
        StatusKaryawan: StatusKaryawan;
        RatarataPenghasilan: Serenity.DecimalEditor;
        NamaperusahaanUsaha: Serenity.StringEditor;
        AlamatPerusahanUsaha: Serenity.TextAreaEditor;
        Desc: Serenity.TextAreaEditor;
        IdPekerjaan: Serenity.IntegerEditor;
    }

    export class UserKaryawanForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.UserKaryawan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserKaryawanForm.init)  {
                UserKaryawanForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = StatusKaryawan;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.IntegerEditor;

                Q.initFormType(UserKaryawanForm, [
                    'TypePerusahaan', w0,
                    'StatusKaryawan', w1,
                    'RatarataPenghasilan', w2,
                    'NamaperusahaanUsaha', w3,
                    'AlamatPerusahanUsaha', w4,
                    'Desc', w4,
                    'IdPekerjaan', w5
                ]);
            }
        }
    }
}

