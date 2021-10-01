namespace SDD.Transaction {
    export interface DetailPengaduanForm {
        Tanggapan: Serenity.TextAreaEditor;
    }

    export class DetailPengaduanForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.DetailPengaduan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DetailPengaduanForm.init)  {
                DetailPengaduanForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;

                Q.initFormType(DetailPengaduanForm, [
                    'Tanggapan', w0
                ]);
            }
        }
    }
}

