namespace SDD.Master {
    export interface MasterHasilBudidayaForm {
        NamaHasil: Serenity.StringEditor;
        IdSatuanHasil: Serenity.LookupEditor;
        Desc: Serenity.TextAreaEditor;
    }

    export class MasterHasilBudidayaForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterHasilBudidaya';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterHasilBudidayaForm.init)  {
                MasterHasilBudidayaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(MasterHasilBudidayaForm, [
                    'NamaHasil', w0,
                    'IdSatuanHasil', w1,
                    'Desc', w2
                ]);
            }
        }
    }
}

