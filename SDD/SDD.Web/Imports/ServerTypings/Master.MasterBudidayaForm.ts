namespace SDD.Master {
    export interface MasterBudidayaForm {
        IdPekerjaan: Serenity.LookupEditor;
        NamaBudidaya: Serenity.StringEditor;
        IdSatuanBudidaya: Serenity.LookupEditor;
        DetailBudidaya: MasterHasilBudidayaGrid;
    }

    export class MasterBudidayaForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterBudidaya';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterBudidayaForm.init)  {
                MasterBudidayaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = MasterHasilBudidayaGrid;

                Q.initFormType(MasterBudidayaForm, [
                    'IdPekerjaan', w0,
                    'NamaBudidaya', w1,
                    'IdSatuanBudidaya', w0,
                    'DetailBudidaya', w2
                ]);
            }
        }
    }
}

