namespace SDD.Transaction {
    export interface BannerForm {
        Image: Serenity.ImageUploadEditor;
        StatusAktif: Serenity.RadioButtonEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class BannerForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.Banner';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BannerForm.init)  {
                BannerForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;
                var w1 = s.RadioButtonEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(BannerForm, [
                    'Image', w0,
                    'StatusAktif', w1,
                    'Description', w2
                ]);
            }
        }
    }
}

