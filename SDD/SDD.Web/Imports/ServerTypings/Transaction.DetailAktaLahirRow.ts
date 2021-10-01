namespace SDD.Transaction {
    export interface DetailAktaLahirRow {
        IdDetailAktaLahir?: number;
        IdAktaLahir?: number;
        NamaSaksi?: string;
        TglLahirSaksi?: string;
        PekerjaanSaksi?: string;
        NikSaksi?: string;
        Desc?: string;
        IdAktaLahirIdFormFlow?: number;
        IdAktaLahirIdUserPelapor?: number;
        IdAktaLahirNamaBayi?: string;
        IdAktaLahirKelaminBayi?: number;
        IdAktaLahirTempatKelahiran?: string;
        IdAktaLahirHariKelahiran?: string;
        IdAktaLahirTglLahir?: string;
        IdAktaLahirWaktuKelahiran?: string;
        IdAktaLahirJenisKelahiran?: number;
        IdAktaLahirBeratBayi?: number;
        IdAktaLahirPanjangBayi?: number;
        IdAktaLahirAnakKe?: number;
        IdAktaLahirNamaIbu?: string;
        IdAktaLahirNikIbu?: string;
        IdAktaLahirPekerjaanIbu?: string;
        IdAktaLahirTglLahirIbu?: string;
        IdAktaLahirAlamatIbu?: string;
        IdAktaLahirNamaAyah?: string;
        IdAktaLahirTglLahirAyah?: string;
        IdAktaLahirPekerjaanAyah?: string;
        IdAktaLahirAlamatAyah?: string;
        IdAktaLahirNikAyah?: string;
        IdAktaLahirLinkDocAkta?: string;
    }

    export namespace DetailAktaLahirRow {
        export const idProperty = 'IdDetailAktaLahir';
        export const nameProperty = 'NamaSaksi';
        export const localTextPrefix = 'Transaction.DetailAktaLahir';
        export const deletePermission = 'Transaction:DetailAktaLahir';
        export const insertPermission = 'Transaction:DetailAktaLahir';
        export const readPermission = 'Transaction:DetailAktaLahir';
        export const updatePermission = 'Transaction:DetailAktaLahir';

        export declare const enum Fields {
            IdDetailAktaLahir = "IdDetailAktaLahir",
            IdAktaLahir = "IdAktaLahir",
            NamaSaksi = "NamaSaksi",
            TglLahirSaksi = "TglLahirSaksi",
            PekerjaanSaksi = "PekerjaanSaksi",
            NikSaksi = "NikSaksi",
            Desc = "Desc",
            IdAktaLahirIdFormFlow = "IdAktaLahirIdFormFlow",
            IdAktaLahirIdUserPelapor = "IdAktaLahirIdUserPelapor",
            IdAktaLahirNamaBayi = "IdAktaLahirNamaBayi",
            IdAktaLahirKelaminBayi = "IdAktaLahirKelaminBayi",
            IdAktaLahirTempatKelahiran = "IdAktaLahirTempatKelahiran",
            IdAktaLahirHariKelahiran = "IdAktaLahirHariKelahiran",
            IdAktaLahirTglLahir = "IdAktaLahirTglLahir",
            IdAktaLahirWaktuKelahiran = "IdAktaLahirWaktuKelahiran",
            IdAktaLahirJenisKelahiran = "IdAktaLahirJenisKelahiran",
            IdAktaLahirBeratBayi = "IdAktaLahirBeratBayi",
            IdAktaLahirPanjangBayi = "IdAktaLahirPanjangBayi",
            IdAktaLahirAnakKe = "IdAktaLahirAnakKe",
            IdAktaLahirNamaIbu = "IdAktaLahirNamaIbu",
            IdAktaLahirNikIbu = "IdAktaLahirNikIbu",
            IdAktaLahirPekerjaanIbu = "IdAktaLahirPekerjaanIbu",
            IdAktaLahirTglLahirIbu = "IdAktaLahirTglLahirIbu",
            IdAktaLahirAlamatIbu = "IdAktaLahirAlamatIbu",
            IdAktaLahirNamaAyah = "IdAktaLahirNamaAyah",
            IdAktaLahirTglLahirAyah = "IdAktaLahirTglLahirAyah",
            IdAktaLahirPekerjaanAyah = "IdAktaLahirPekerjaanAyah",
            IdAktaLahirAlamatAyah = "IdAktaLahirAlamatAyah",
            IdAktaLahirNikAyah = "IdAktaLahirNikAyah",
            IdAktaLahirLinkDocAkta = "IdAktaLahirLinkDocAkta"
        }
    }
}

