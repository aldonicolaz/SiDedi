namespace SDD.View {
    export interface ViewTransaksiFormulirForm {
        NamaStatus: Serenity.StringEditor;
        Formulir: Serenity.StringEditor;
        DokumenFormulir: StaticTextBlock;
        Dokumen: Serenity.MultipleImageUploadEditor;
        Info: Serenity.TextAreaEditor;
    }

    export class ViewTransaksiFormulirForm extends Serenity.PrefixedContext {
        static formKey = 'View.ViewTransaksiFormulir';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ViewTransaksiFormulirForm.init)  {
                ViewTransaksiFormulirForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = StaticTextBlock;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(ViewTransaksiFormulirForm, [
                    'NamaStatus', w0,
                    'Formulir', w0,
                    'DokumenFormulir', w1,
                    'Dokumen', w2,
                    'Info', w3
                ]);
            }
        }
    }
}

