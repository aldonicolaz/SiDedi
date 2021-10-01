namespace SDD.Transaction {
    export interface UserNelayanForm {
        Desc: Serenity.TextAreaEditor;
        IdPekerjaan: Serenity.IntegerEditor;
        DetailNelayan: DetailKapalNelayanGrid;
    }

    export class UserNelayanForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.UserNelayan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserNelayanForm.init)  {
                UserNelayanForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = s.IntegerEditor;
                var w2 = DetailKapalNelayanGrid;

                Q.initFormType(UserNelayanForm, [
                    'Desc', w0,
                    'IdPekerjaan', w1,
                    'DetailNelayan', w2
                ]);
            }
        }
    }
}

