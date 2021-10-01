namespace SDD.Master {
    export interface MasterPropinsiForm {
        NamaPropinsi: Serenity.StringEditor;
        IbuKotaPropinsi: Serenity.StringEditor;
        NoKodePropinsi: Serenity.StringEditor;
        LatitudePropinsi: Serenity.StringEditor;
        LongitudePropinsi: Serenity.StringEditor;
        DescPropinsi: Serenity.TextAreaEditor;
        LogoPropinsi: Serenity.ImageUploadEditor;
    }

    export class MasterPropinsiForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterPropinsi';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterPropinsiForm.init)  {
                MasterPropinsiForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.ImageUploadEditor;

                Q.initFormType(MasterPropinsiForm, [
                    'NamaPropinsi', w0,
                    'IbuKotaPropinsi', w0,
                    'NoKodePropinsi', w0,
                    'LatitudePropinsi', w0,
                    'LongitudePropinsi', w0,
                    'DescPropinsi', w1,
                    'LogoPropinsi', w2
                ]);
            }
        }
    }
}

