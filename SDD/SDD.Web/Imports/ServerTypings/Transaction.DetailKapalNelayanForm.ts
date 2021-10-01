namespace SDD.Transaction {
    export interface DetailKapalNelayanForm {
        StatusKapal: Serenity.EnumEditor;
        TypeKapal: TypeKapal;
        LokasiSandarKapal: Serenity.TextAreaEditor;
        HasilBulanan: Serenity.DecimalEditor;
    }

    export class DetailKapalNelayanForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.DetailKapalNelayan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DetailKapalNelayanForm.init)  {
                DetailKapalNelayanForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = TypeKapal;
                var w2 = s.TextAreaEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(DetailKapalNelayanForm, [
                    'StatusKapal', w0,
                    'TypeKapal', w1,
                    'LokasiSandarKapal', w2,
                    'HasilBulanan', w3
                ]);
            }
        }
    }
}

