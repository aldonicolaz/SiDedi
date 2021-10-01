namespace SDD.Transaction {
    export interface ForumForm {
        IdMasterForum: Serenity.LookupEditor;
        DetailForum: MyCustomEditor;
        FotoDokumenForum: Serenity.MultipleImageUploadEditor;
        HiddenUser: Serenity.RadioButtonEditor;
        Detail: DetailForumGrid;
    }

    export class ForumForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.Forum';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ForumForm.init)  {
                ForumForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = MyCustomEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.RadioButtonEditor;
                var w4 = DetailForumGrid;

                Q.initFormType(ForumForm, [
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

