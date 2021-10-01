namespace SDD.Transaction {
    export interface DetailForumForm {
        DetailRespon: Serenity.TextAreaEditor;
        FotoDokumenRespon: Serenity.MultipleImageUploadEditor;
    }

    export class DetailForumForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.DetailForum';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DetailForumForm.init)  {
                DetailForumForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = s.MultipleImageUploadEditor;

                Q.initFormType(DetailForumForm, [
                    'DetailRespon', w0,
                    'FotoDokumenRespon', w1
                ]);
            }
        }
    }
}

