namespace SDD.View {
    export interface ViewProfilUserForm {
        DisplayName: Serenity.StringEditor;
        Username: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        IdHubungan: Serenity.IntegerEditor;
        NoKtp: Serenity.StringEditor;
        NoKk: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        WaNumber: Serenity.StringEditor;
        JenisKelamin: Serenity.IntegerEditor;
        TanggalLahir: Serenity.DateEditor;
        IdDesa: Serenity.StringEditor;
        Pendidikan: Serenity.StringEditor;
        IdKecamatan: Serenity.IntegerEditor;
        NamaDesa: Serenity.StringEditor;
        LogoDesa: Serenity.StringEditor;
        NoKodeDesa: Serenity.StringEditor;
        NamaKecamatan: Serenity.StringEditor;
        IdKabupaten: Serenity.IntegerEditor;
        NoKodeKecamatan: Serenity.StringEditor;
        KodePos: Serenity.StringEditor;
        NoKodeKabupaten: Serenity.StringEditor;
        IdPropinsi: Serenity.IntegerEditor;
        NamaKabupaten: Serenity.StringEditor;
        LogoKabupaten: Serenity.StringEditor;
        NamaPropinsi: Serenity.StringEditor;
        IbuKotaPropinsi: Serenity.StringEditor;
        LogoPropinsi: Serenity.StringEditor;
        NoKodePropinsi: Serenity.StringEditor;
        UserImage: Serenity.StringEditor;
    }

    export class ViewProfilUserForm extends Serenity.PrefixedContext {
        static formKey = 'View.ViewProfilUser';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ViewProfilUserForm.init)  {
                ViewProfilUserForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ViewProfilUserForm, [
                    'DisplayName', w0,
                    'Username', w0,
                    'Email', w0,
                    'Address', w0,
                    'IdHubungan', w1,
                    'NoKtp', w0,
                    'NoKk', w0,
                    'PhoneNumber', w0,
                    'WaNumber', w0,
                    'JenisKelamin', w1,
                    'TanggalLahir', w2,
                    'IdDesa', w0,
                    'Pendidikan', w0,
                    'IdKecamatan', w1,
                    'NamaDesa', w0,
                    'LogoDesa', w0,
                    'NoKodeDesa', w0,
                    'NamaKecamatan', w0,
                    'IdKabupaten', w1,
                    'NoKodeKecamatan', w0,
                    'KodePos', w0,
                    'NoKodeKabupaten', w0,
                    'IdPropinsi', w1,
                    'NamaKabupaten', w0,
                    'LogoKabupaten', w0,
                    'NamaPropinsi', w0,
                    'IbuKotaPropinsi', w0,
                    'LogoPropinsi', w0,
                    'NoKodePropinsi', w0,
                    'UserImage', w0
                ]);
            }
        }
    }
}

