namespace SDD.Transaction {
    export interface ParentMessageForm {
        Title: Serenity.StringEditor;
        Message: MyCustomEditor;
        Body: MyCustomEditor;
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
                var w0 = s.StringEditor;
                var w1 = MyCustomEditor;
                var w2 = FcmMessageGrid;

                Q.initFormType(ParentMessageForm, [
                    'Title', w0,
                    'Message', w1,
                    'Body', w1,
                    'Detail', w2
                ]);
            }
        }
    }
}

