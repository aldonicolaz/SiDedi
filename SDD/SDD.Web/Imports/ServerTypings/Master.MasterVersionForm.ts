namespace SDD.Master {
    export interface MasterVersionForm {
        NamaVersion: Serenity.StringEditor;
        NumberVersion: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class MasterVersionForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterVersion';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterVersionForm.init)  {
                MasterVersionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(MasterVersionForm, [
                    'NamaVersion', w0,
                    'NumberVersion', w0,
                    'Description', w1
                ]);
            }
        }
    }
}

