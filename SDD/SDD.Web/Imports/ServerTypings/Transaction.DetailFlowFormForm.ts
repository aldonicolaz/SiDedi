namespace SDD.Transaction {
    export interface DetailFlowFormForm {
        IdJabatan: Serenity.LookupEditor;
        UrutanFlow: Serenity.IntegerEditor;
        SlaDetail: Serenity.IntegerEditor;
    }

    export class DetailFlowFormForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.DetailFlowForm';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DetailFlowFormForm.init)  {
                DetailFlowFormForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(DetailFlowFormForm, [
                    'IdJabatan', w0,
                    'UrutanFlow', w1,
                    'SlaDetail', w1
                ]);
            }
        }
    }
}

