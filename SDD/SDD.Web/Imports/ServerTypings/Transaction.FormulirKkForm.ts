namespace SDD.Transaction {
    export interface FormulirKkForm {
        AlasanPemohon: Serenity.StringEditor;
        JumlahKk: Serenity.IntegerEditor;
        DokPendukungKK: Serenity.MultipleImageUploadEditor;
        DetailFormulir: DetailFormulirKkGrid;
    }

    export class FormulirKkForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.FormulirKk';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FormulirKkForm.init)  {
                FormulirKkForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = DetailFormulirKkGrid;

                Q.initFormType(FormulirKkForm, [
                    'AlasanPemohon', w0,
                    'JumlahKk', w1,
                    'DokPendukungKK', w2,
                    'DetailFormulir', w3
                ]);
            }
        }
    }
}

