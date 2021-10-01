namespace SDD.Master {
    export interface MasterKecamatanForm {
        IdKabupaten: Serenity.LookupEditor;
        NamaKecamatan: Serenity.StringEditor;
        NoKodeKecamatan: Serenity.StringEditor;
        LangtitudeKecamatan: Serenity.StringEditor;
        LongtitudeKecamatan: Serenity.StringEditor;
        KodePos: Serenity.StringEditor;
        DecKecamatan: Serenity.TextAreaEditor;
        LogoKecamatan: Serenity.ImageUploadEditor;
    }

    export class MasterKecamatanForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterKecamatan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterKecamatanForm.init)  {
                MasterKecamatanForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.ImageUploadEditor;

                Q.initFormType(MasterKecamatanForm, [
                    'IdKabupaten', w0,
                    'NamaKecamatan', w1,
                    'NoKodeKecamatan', w1,
                    'LangtitudeKecamatan', w1,
                    'LongtitudeKecamatan', w1,
                    'KodePos', w1,
                    'DecKecamatan', w2,
                    'LogoKecamatan', w3
                ]);
            }
        }
    }
}

