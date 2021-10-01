namespace SDD.Transaction {
    export interface FormulirAktaKelahiranForm {
        NamaBayi: Serenity.StringEditor;
        KelaminBayi: Serenity.EnumEditor;
        TempatKelahiran: Serenity.StringEditor;
        HariKelahiran: HariKelahiran;
        TglLahir: Serenity.DateEditor;
        WaktuKelahiran: Serenity.StringEditor;
        JenisKelahiran: Serenity.EnumEditor;
        BeratBayi: Serenity.DecimalEditor;
        PanjangBayi: Serenity.DecimalEditor;
        AnakKe: Serenity.IntegerEditor;
        NamaIbu: Serenity.StringEditor;
        NikIbu: Serenity.StringEditor;
        PekerjaanIbu: Serenity.StringEditor;
        TglLahirIbu: Serenity.DateEditor;
        AlamatIbu: Serenity.TextAreaEditor;
        NamaAyah: Serenity.StringEditor;
        TglLahirAyah: Serenity.DateEditor;
        PekerjaanAyah: Serenity.StringEditor;
        AlamatAyah: Serenity.TextAreaEditor;
        NikAyah: Serenity.StringEditor;
        DetailFormulir: DetailAktaLahirGrid;
    }

    export class FormulirAktaKelahiranForm extends Serenity.PrefixedContext {
        static formKey = 'Transaction.FormulirAktaKelahiran';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FormulirAktaKelahiranForm.init)  {
                FormulirAktaKelahiranForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = HariKelahiran;
                var w3 = s.DateEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.IntegerEditor;
                var w6 = s.TextAreaEditor;
                var w7 = DetailAktaLahirGrid;

                Q.initFormType(FormulirAktaKelahiranForm, [
                    'NamaBayi', w0,
                    'KelaminBayi', w1,
                    'TempatKelahiran', w0,
                    'HariKelahiran', w2,
                    'TglLahir', w3,
                    'WaktuKelahiran', w0,
                    'JenisKelahiran', w1,
                    'BeratBayi', w4,
                    'PanjangBayi', w4,
                    'AnakKe', w5,
                    'NamaIbu', w0,
                    'NikIbu', w0,
                    'PekerjaanIbu', w0,
                    'TglLahirIbu', w3,
                    'AlamatIbu', w6,
                    'NamaAyah', w0,
                    'TglLahirAyah', w3,
                    'PekerjaanAyah', w0,
                    'AlamatAyah', w6,
                    'NikAyah', w0,
                    'DetailFormulir', w7
                ]);
            }
        }
    }
}

