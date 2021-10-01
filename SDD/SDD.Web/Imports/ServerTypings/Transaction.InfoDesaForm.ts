namespace SDD.Transaction {
    export interface InfoDesaForm {
        TitleInfo: Serenity.StringEditor;
        ShortDescInfo: MyCustomEditor;
        BodyInfo: MyCustomEditor;
        Image: Serenity.ImageUploadEditor;
    }

    export class InfoDesaForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.InfoDesa';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InfoDesaForm.init)  {
                InfoDesaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = MyCustomEditor;
                var w2 = s.ImageUploadEditor;

                Q.initFormType(InfoDesaForm, [
                    'TitleInfo', w0,
                    'ShortDescInfo', w1,
                    'BodyInfo', w1,
                    'Image', w2
                ]);
            }
        }
    }
}

