namespace SDD.Transaction {
    export interface PengaduanForm {
        IdPengaduan: Serenity.IntegerEditor;
        IdMasterTujuan: Serenity.LookupEditor;
        PerihalPengaduan: MyCustomEditor;
        FotoDokumen: Serenity.MultipleImageUploadEditor;
        Timestamp: Serenity.DateEditor;
        DetailPengaduan: DetailPengaduanGrid;
    }

    export class PengaduanForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.Pengaduan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PengaduanForm.init)  {
                PengaduanForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;
                var w2 = MyCustomEditor;
                var w3 = s.MultipleImageUploadEditor;
                var w4 = s.DateEditor;
                var w5 = DetailPengaduanGrid;

                Q.initFormType(PengaduanForm, [
                    'IdPengaduan', w0,
                    'IdMasterTujuan', w1,
                    'PerihalPengaduan', w2,
                    'FotoDokumen', w3,
                    'Timestamp', w4,
                    'DetailPengaduan', w5
                ]);
            }
        }
    }
}

