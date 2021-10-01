namespace SDD.Master {
    export interface MasterHubunganForm {
        NamaHubungan: Serenity.StringEditor;
        KodeHubungan: Serenity.StringEditor;
        DescHubungan: Serenity.TextAreaEditor;
    }

    export class MasterHubunganForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterHubungan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterHubunganForm.init)  {
                MasterHubunganForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(MasterHubunganForm, [
                    'NamaHubungan', w0,
                    'KodeHubungan', w0,
                    'DescHubungan', w1
                ]);
            }
        }
    }
}

