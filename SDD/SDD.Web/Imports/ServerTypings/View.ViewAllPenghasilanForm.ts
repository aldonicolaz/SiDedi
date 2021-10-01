namespace SDD.View {
    export interface ViewAllPenghasilanForm {
        UserId: Serenity.IntegerEditor;
        DisplayName: Serenity.StringEditor;
        Username: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        IdHubungan: Serenity.IntegerEditor;
        NoKtp: Serenity.StringEditor;
        NoKk: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        WaNumber: Serenity.StringEditor;
        JenisKelamin: Serenity.StringEditor;
        TanggalLahir: Serenity.DateEditor;
        IdDesa: Serenity.StringEditor;
        NamaDesa: Serenity.StringEditor;
        IdKecamatan: Serenity.IntegerEditor;
        NamaKecamatan: Serenity.StringEditor;
        IdKabupaten: Serenity.IntegerEditor;
        NamaKabupaten: Serenity.StringEditor;
        IdPropinsi: Serenity.IntegerEditor;
        NamaPropinsi: Serenity.StringEditor;
        TotalPenghasilanPeternakan: Serenity.DecimalEditor;
        TotalPenghasilanPertanian: Serenity.DecimalEditor;
        TotalPenghasilanNelayan: Serenity.DecimalEditor;
        TotalPenghasilanKaryawan: Serenity.DecimalEditor;
        TotalPenghasilanPerdagangan: Serenity.DecimalEditor;
        TotalPenghasilan: Serenity.DecimalEditor;
    }

    export class ViewAllPenghasilanForm extends Serenity.PrefixedContext {
        static formKey = 'View.ViewAllPenghasilan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ViewAllPenghasilanForm.init)  {
                ViewAllPenghasilanForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(ViewAllPenghasilanForm, [
                    'UserId', w0,
                    'DisplayName', w1,
                    'Username', w1,
                    'Email', w1,
                    'Address', w1,
                    'IdHubungan', w0,
                    'NoKtp', w1,
                    'NoKk', w1,
                    'PhoneNumber', w1,
                    'WaNumber', w1,
                    'JenisKelamin', w1,
                    'TanggalLahir', w2,
                    'IdDesa', w1,
                    'NamaDesa', w1,
                    'IdKecamatan', w0,
                    'NamaKecamatan', w1,
                    'IdKabupaten', w0,
                    'NamaKabupaten', w1,
                    'IdPropinsi', w0,
                    'NamaPropinsi', w1,
                    'TotalPenghasilanPeternakan', w3,
                    'TotalPenghasilanPertanian', w3,
                    'TotalPenghasilanNelayan', w3,
                    'TotalPenghasilanKaryawan', w3,
                    'TotalPenghasilanPerdagangan', w3,
                    'TotalPenghasilan', w3
                ]);
            }
        }
    }
}

