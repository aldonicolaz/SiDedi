namespace SDD.Master {
    export interface MasterStatusForm {
        NamaStatus: Serenity.StringEditor;
    }

    export class MasterStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterStatusForm.init)  {
                MasterStatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MasterStatusForm, [
                    'NamaStatus', w0
                ]);
            }
        }
    }
}

