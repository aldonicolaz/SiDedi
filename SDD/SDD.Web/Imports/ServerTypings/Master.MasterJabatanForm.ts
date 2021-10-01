namespace SDD.Master {
    export interface MasterJabatanForm {
        NamaJabatan: Serenity.StringEditor;
        Desc: Serenity.TextAreaEditor;
    }

    export class MasterJabatanForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterJabatan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterJabatanForm.init)  {
                MasterJabatanForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(MasterJabatanForm, [
                    'NamaJabatan', w0,
                    'Desc', w1
                ]);
            }
        }
    }
}

