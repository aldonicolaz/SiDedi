namespace SDD.Transaction {
    export interface TransaksiStatusForm {
        IdMasterForm: Serenity.LookupEditor;
        IdUserPengajuan: Serenity.LookupEditor;
        IdStatus: Serenity.LookupEditor;
        LinkFormulir: Serenity.StringEditor;
        DokumenFormulir: StaticTextBlock;
        Dokumen: Serenity.MultipleImageUploadEditor;
        Keterangan: Serenity.TextAreaEditor;
        IdUserAparat: Serenity.IntegerEditor;
        TimeStamp: Serenity.DateEditor;
    }

    export class TransaksiStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.TransaksiStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransaksiStatusForm.init)  {
                TransaksiStatusForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = StaticTextBlock;
                var w3 = s.MultipleImageUploadEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.IntegerEditor;
                var w6 = s.DateEditor;

                Q.initFormType(TransaksiStatusForm, [
                    'IdMasterForm', w0,
                    'IdUserPengajuan', w0,
                    'IdStatus', w0,
                    'LinkFormulir', w1,
                    'DokumenFormulir', w2,
                    'Dokumen', w3,
                    'Keterangan', w4,
                    'IdUserAparat', w5,
                    'TimeStamp', w6
                ]);
            }
        }
    }
}

