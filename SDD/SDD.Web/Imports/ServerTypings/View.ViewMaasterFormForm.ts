namespace SDD.View {
    export interface ViewMaasterFormForm {
        IdFormFlow: Serenity.IntegerEditor;
        NamaFormulir: Serenity.StringEditor;
        IdFormulir: Serenity.IntegerEditor;
        Slaform: Serenity.IntegerEditor;
        DescForm: Serenity.StringEditor;
        NamaDesa: Serenity.StringEditor;
        NamaKecamatan: Serenity.StringEditor;
        KodePos: Serenity.StringEditor;
        ReqForm: Serenity.StringEditor;
    }

    export class ViewMaasterFormForm extends Serenity.PrefixedContext {
        static formKey = 'View.ViewMaasterForm';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ViewMaasterFormForm.init)  {
                ViewMaasterFormForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(ViewMaasterFormForm, [
                    'IdFormFlow', w0,
                    'NamaFormulir', w1,
                    'IdFormulir', w0,
                    'Slaform', w0,
                    'DescForm', w1,
                    'NamaDesa', w1,
                    'NamaKecamatan', w1,
                    'KodePos', w1,
                    'ReqForm', w1
                ]);
            }
        }
    }
}

