namespace SDD.Transaction {
    export interface FcmMessageForm {
        IdUser: Serenity.LookupEditor;
    }

    export class FcmMessageForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.FcmMessage';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FcmMessageForm.init)  {
                FcmMessageForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(FcmMessageForm, [
                    'IdUser', w0
                ]);
            }
        }
    }
}

