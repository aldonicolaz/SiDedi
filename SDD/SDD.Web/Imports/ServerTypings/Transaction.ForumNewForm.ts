namespace SDD.Transaction {
    export interface ForumNewForm {
        IdMasterForum: Serenity.LookupEditor;
        DetailForum: Serenity.TextAreaEditor;
        FotoDokumenForum: Serenity.MultipleImageUploadEditor;
        HiddenUser: Serenity.RadioButtonEditor;
        Detail: DetailForumGrid;
    }

    export class ForumNewForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.ForumNew';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ForumNewForm.init)  {
                ForumNewForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.RadioButtonEditor;
                var w4 = DetailForumGrid;

                Q.initFormType(ForumNewForm, [
                    'IdMasterForum', w0,
                    'DetailForum', w1,
                    'FotoDokumenForum', w2,
                    'HiddenUser', w3,
                    'Detail', w4
                ]);
            }
        }
    }
}

