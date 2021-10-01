namespace SDD.Master {
    export interface MasterSatuanForm {
        NamaSatuan: Serenity.StringEditor;
        DescSatuan: Serenity.TextAreaEditor;
    }

    export class MasterSatuanForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterSatuan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterSatuanForm.init)  {
                MasterSatuanForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(MasterSatuanForm, [
                    'NamaSatuan', w0,
                    'DescSatuan', w1
                ]);
            }
        }
    }
}

