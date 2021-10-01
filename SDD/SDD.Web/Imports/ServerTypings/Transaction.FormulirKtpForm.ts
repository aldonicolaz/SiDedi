namespace SDD.Transaction {
    export interface FormulirKtpForm {
        IdFFowForm: Serenity.IntegerEditor;
        TypePermohonan: TypePermohonan;
        DokPendukung: Serenity.MultipleImageUploadEditor;
        Desc: Serenity.TextAreaEditor;
    }

    export class FormulirKtpForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.FormulirKtp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FormulirKtpForm.init)  {
                FormulirKtpForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = TypePermohonan;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(FormulirKtpForm, [
                    'IdFFowForm', w0,
                    'TypePermohonan', w1,
                    'DokPendukung', w2,
                    'Desc', w3
                ]);
            }
        }
    }
}

