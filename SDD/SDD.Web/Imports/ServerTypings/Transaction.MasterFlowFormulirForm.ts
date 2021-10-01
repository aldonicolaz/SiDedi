namespace SDD.Transaction {
    export interface MasterFlowFormulirForm {
        IdMasterForm: Serenity.LookupEditor;
        Slaform: Serenity.IntegerEditor;
        DescForm: Serenity.TextAreaEditor;
        IdDesa: Serenity.LookupEditor;
        DetailFlowFormulir: DetailFlowFormGrid;
    }

    export class MasterFlowFormulirForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.MasterFlowFormulir';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterFlowFormulirForm.init)  {
                MasterFlowFormulirForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.TextAreaEditor;
                var w3 = DetailFlowFormGrid;

                Q.initFormType(MasterFlowFormulirForm, [
                    'IdMasterForm', w0,
                    'Slaform', w1,
                    'DescForm', w2,
                    'IdDesa', w0,
                    'DetailFlowFormulir', w3
                ]);
            }
        }
    }
}

