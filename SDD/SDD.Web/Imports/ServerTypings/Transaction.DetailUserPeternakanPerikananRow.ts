namespace SDD.Transaction {
    export interface DetailUserPeternakanPerikananRow {
        IdDetailPeternakan?: number;
        IdSatuanPendukung?: number;
        AlatBahanPendukung?: string;
        QuantityPendukung?: number;
        NominalPendukung?: number;
        TotalNominalPendukung?: number;
        Desc?: string;
        IdUserPerikanan?: number;
        IdSatuanPendukungNamaSatuan?: string;
        IdSatuanPendukungDescSatuan?: string;
        IdUserPerikananIdUser?: number;
        IdUserPerikananIdHasilBudidaya?: number;
        IdUserPerikananTotalBibit?: number;
        IdUserPerikananLuasLahan?: number;
        IdUserPerikananJumlahPekerja?: number;
        IdUserPerikananPeriodePanen?: number;
        IdUserPerikananHasilPanen?: number;
        IdUserPerikananNominalHasilPanen?: number;
    }

    export namespace DetailUserPeternakanPerikananRow {
        export const idProperty = 'IdDetailPeternakan';
        export const nameProperty = 'AlatBahanPendukung';
        export const localTextPrefix = 'Transaction.DetailUserPeternakanPerikanan';
        export const deletePermission = 'Transaction:DetailUserPeternakanPerikanan';
        export const insertPermission = 'Transaction:DetailUserPeternakanPerikanan';
        export const readPermission = 'Transaction:DetailUserPeternakanPerikanan';
        export const updatePermission = 'Transaction:DetailUserPeternakanPerikanan';

        export declare const enum Fields {
            IdDetailPeternakan = "IdDetailPeternakan",
            IdSatuanPendukung = "IdSatuanPendukung",
            AlatBahanPendukung = "AlatBahanPendukung",
            QuantityPendukung = "QuantityPendukung",
            NominalPendukung = "NominalPendukung",
            TotalNominalPendukung = "TotalNominalPendukung",
            Desc = "Desc",
            IdUserPerikanan = "IdUserPerikanan",
            IdSatuanPendukungNamaSatuan = "IdSatuanPendukungNamaSatuan",
            IdSatuanPendukungDescSatuan = "IdSatuanPendukungDescSatuan",
            IdUserPerikananIdUser = "IdUserPerikananIdUser",
            IdUserPerikananIdHasilBudidaya = "IdUserPerikananIdHasilBudidaya",
            IdUserPerikananTotalBibit = "IdUserPerikananTotalBibit",
            IdUserPerikananLuasLahan = "IdUserPerikananLuasLahan",
            IdUserPerikananJumlahPekerja = "IdUserPerikananJumlahPekerja",
            IdUserPerikananPeriodePanen = "IdUserPerikananPeriodePanen",
            IdUserPerikananHasilPanen = "IdUserPerikananHasilPanen",
            IdUserPerikananNominalHasilPanen = "IdUserPerikananNominalHasilPanen"
        }
    }
}

