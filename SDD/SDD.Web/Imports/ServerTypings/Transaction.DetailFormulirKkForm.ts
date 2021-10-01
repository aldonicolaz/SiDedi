namespace SDD.Transaction {
    export interface DetailFormulirKkForm {
        IdMasterHub: Serenity.LookupEditor;
        Nik: Serenity.StringEditor;
        NamaLengkap: Serenity.StringEditor;
    }

    export class DetailFormulirKkForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.DetailFormulirKk';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DetailFormulirKkForm.init)  {
                DetailFormulirKkForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(DetailFormulirKkForm, [
                    'IdMasterHub', w0,
                    'Nik', w1,
                    'NamaLengkap', w1
                ]);
            }
        }
    }
}

