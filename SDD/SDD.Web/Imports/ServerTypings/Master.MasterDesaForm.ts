namespace SDD.Master {
    export interface MasterDesaForm {
        IdKecamatan: Serenity.LookupEditor;
        NamaDesa: Serenity.StringEditor;
        NoKodeDesa: Serenity.StringEditor;
        LantitudeDesa: Serenity.StringEditor;
        LongtitudeDesa: Serenity.StringEditor;
        LogoDesa: Serenity.ImageUploadEditor;
        DescDesa: Serenity.TextAreaEditor;
    }

    export class MasterDesaForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterDesa';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterDesaForm.init)  {
                MasterDesaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(MasterDesaForm, [
                    'IdKecamatan', w0,
                    'NamaDesa', w1,
                    'NoKodeDesa', w1,
                    'LantitudeDesa', w1,
                    'LongtitudeDesa', w1,
                    'LogoDesa', w2,
                    'DescDesa', w3
                ]);
            }
        }
    }
}

