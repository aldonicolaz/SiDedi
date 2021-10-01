namespace SDD.Transaction {
    export interface FcmMessageUserForm {
        IdUser: Serenity.IntegerEditor;
        Message: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Body: Serenity.StringEditor;
        Action: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Response: Serenity.StringEditor;
        TimeStamp: Serenity.DateEditor;
        IdParentMessage: Serenity.IntegerEditor;
        StatusWa: Serenity.IntegerEditor;
    }

    export class FcmMessageUserForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.FcmMessageUser';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FcmMessageUserForm.init)  {
                FcmMessageUserForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(FcmMessageUserForm, [
                    'IdUser', w0,
                    'Message', w1,
                    'Title', w1,
                    'Body', w1,
                    'Action', w1,
                    'Status', w0,
                    'Response', w1,
                    'TimeStamp', w2,
                    'IdParentMessage', w0,
                    'StatusWa', w0
                ]);
            }
        }
    }
}

