namespace SDD.Master {
    export interface MasterPekerjaanForm {
        NamaPekerjaan: Serenity.StringEditor;
        Desc: Serenity.TextAreaEditor;
    }

    export class MasterPekerjaanForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterPekerjaan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterPekerjaanForm.init)  {
                MasterPekerjaanForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(MasterPekerjaanForm, [
                    'NamaPekerjaan', w0,
                    'Desc', w1
                ]);
            }
        }
    }
}

