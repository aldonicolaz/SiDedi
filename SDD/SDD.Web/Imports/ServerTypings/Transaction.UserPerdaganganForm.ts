namespace SDD.Transaction {
    export interface UserPerdaganganForm {
        NamaBrandToko: Serenity.StringEditor;
        JenisDagangan: JenisDagangan;
        Desc: Serenity.TextAreaEditor;
        IdPekerjaan: Serenity.IntegerEditor;
        DetailPerdagangan: DetailUserPerdaganganGrid;
    }

    export class UserPerdaganganForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.UserPerdagangan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserPerdaganganForm.init)  {
                UserPerdaganganForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = JenisDagangan;
                var w2 = s.TextAreaEditor;
                var w3 = s.IntegerEditor;
                var w4 = DetailUserPerdaganganGrid;

                Q.initFormType(UserPerdaganganForm, [
                    'NamaBrandToko', w0,
                    'JenisDagangan', w1,
                    'Desc', w2,
                    'IdPekerjaan', w3,
                    'DetailPerdagangan', w4
                ]);
            }
        }
    }
}

