namespace SDD.Master {
    export interface MasterFormulirForm {
        NamaFormulir: Serenity.StringEditor;
        DescFormulir: Serenity.TextAreaEditor;
    }

    export class MasterFormulirForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterFormulir';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterFormulirForm.init)  {
                MasterFormulirForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(MasterFormulirForm, [
                    'NamaFormulir', w0,
                    'DescFormulir', w1
                ]);
            }
        }
    }
}

