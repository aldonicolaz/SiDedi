namespace SDD.Master {
    export interface MasterKabupatenForm {
        IdPropinsi: Serenity.LookupEditor;
        NamaKabupaten: Serenity.StringEditor;
        NoKodeKabupaten: Serenity.StringEditor;
        Langtitudekabupaten: Serenity.StringEditor;
        LongtitudeKabupaten: Serenity.StringEditor;
        DescKabupaten: Serenity.TextAreaEditor;
        LogoKabupaten: Serenity.ImageUploadEditor;
    }

    export class MasterKabupatenForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterKabupaten';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterKabupatenForm.init)  {
                MasterKabupatenForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.ImageUploadEditor;

                Q.initFormType(MasterKabupatenForm, [
                    'IdPropinsi', w0,
                    'NamaKabupaten', w1,
                    'NoKodeKabupaten', w1,
                    'Langtitudekabupaten', w1,
                    'LongtitudeKabupaten', w1,
                    'DescKabupaten', w2,
                    'LogoKabupaten', w3
                ]);
            }
        }
    }
}

