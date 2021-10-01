namespace SDD.Transaction {
    export interface DetailUserPertanianRow {
        IdDetailPertanian?: number;
        IdSatuanPendukung?: number;
        AlatBahanPendukung?: string;
        QuantityPendukung?: number;
        NominalPendukung?: number;
        TotalNominalPendukung?: number;
        Desc?: string;
        IdUserPertanian?: number;
        IdSatuanPendukungNamaSatuan?: string;
        IdSatuanPendukungDescSatuan?: string;
        IdUserPertanianIdUser?: number;
        IdUserPertanianIdHasilBudidaya?: number;
        IdUserPertanianLuasLahan?: number;
        IdUserPertanianJumlahPekerja?: number;
        IdUserPertanianPeriodePanen?: number;
        IdUserPertanianHasilPanen?: number;
        IdUserPertanianNominalHasilPanen?: number;
    }

    export namespace DetailUserPertanianRow {
        export const idProperty = 'IdDetailPertanian';
        export const nameProperty = 'AlatBahanPendukung';
        export const localTextPrefix = 'Transaction.DetailUserPertanian';
        export const deletePermission = 'Transaction:DetailUserPertanian';
        export const insertPermission = 'Transaction:DetailUserPertanian';
        export const readPermission = 'Transaction:DetailUserPertanian';
        export const updatePermission = 'Transaction:DetailUserPertanian';

        export declare const enum Fields {
            IdDetailPertanian = "IdDetailPertanian",
            IdSatuanPendukung = "IdSatuanPendukung",
            AlatBahanPendukung = "AlatBahanPendukung",
            QuantityPendukung = "QuantityPendukung",
            NominalPendukung = "NominalPendukung",
            TotalNominalPendukung = "TotalNominalPendukung",
            Desc = "Desc",
            IdUserPertanian = "IdUserPertanian",
            IdSatuanPendukungNamaSatuan = "IdSatuanPendukungNamaSatuan",
            IdSatuanPendukungDescSatuan = "IdSatuanPendukungDescSatuan",
            IdUserPertanianIdUser = "IdUserPertanianIdUser",
            IdUserPertanianIdHasilBudidaya = "IdUserPertanianIdHasilBudidaya",
            IdUserPertanianLuasLahan = "IdUserPertanianLuasLahan",
            IdUserPertanianJumlahPekerja = "IdUserPertanianJumlahPekerja",
            IdUserPertanianPeriodePanen = "IdUserPertanianPeriodePanen",
            IdUserPertanianHasilPanen = "IdUserPertanianHasilPanen",
            IdUserPertanianNominalHasilPanen = "IdUserPertanianNominalHasilPanen"
        }
    }
}

