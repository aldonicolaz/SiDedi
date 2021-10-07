namespace SDD.Transaction {
    export interface ParentMessageForm {
        Option1: Serenity.RadioButtonEditor;
        Title: Serenity.StringEditor;
        Message: Serenity.StringEditor;
        Body: Serenity.TextAreaEditor;
        Detail: FcmMessageGrid;
    }

    export class ParentMessageForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.ParentMessage';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ParentMessageForm.init)  {
                ParentMessageForm.init = true;

                var s = Serenity;
                var w0 = s.RadioButtonEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;
                var w3 = FcmMessageGrid;

                Q.initFormType(ParentMessageForm, [
                    'Option1', w0,
                    'Title', w1,
                    'Message', w1,
                    'Body', w2,
                    'Detail', w3
                ]);
            }
        }
    }
}

