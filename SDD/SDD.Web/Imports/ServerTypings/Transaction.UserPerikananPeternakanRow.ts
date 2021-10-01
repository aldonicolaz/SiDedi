namespace SDD.Transaction {
    export interface UserPerikananPeternakanRow {
        IdUserPerikanan?: number;
        IdUser?: number;
        IdHasilBudidaya?: number;
        TotalBibit?: number;
        LuasLahan?: number;
        JumlahPekerja?: number;
        PeriodePanen?: number;
        HasilPanen?: number;
        NominalHasilPanen?: number;
        Option1?: number;
        IdUserUsername?: string;
        IdUserDisplayName?: string;
        IdUserEmail?: string;
        IdUserSource?: string;
        IdUserPasswordHash?: string;
        IdUserPasswordSalt?: string;
        IdUserLastDirectoryUpdate?: string;
        IdUserUserImage?: string;
        IdUserInsertDate?: string;
        IdUserInsertUserId?: number;
        IdUserUpdateDate?: string;
        IdUserUpdateUserId?: number;
        IdUserIsActive?: number;
        IdUserAddress?: string;
        IdUserIdHubungan?: number;
        IdUserNoKtp?: string;
        IdUserNoKk?: string;
        IdUserPhoneNumber?: string;
        IdUserWaNumber?: string;
        IdUserOption1?: string;
        IdUserOption2?: string;
        IdUserOption3?: string;
        IdUserTanggalLahir?: string;
        IdUserDescription?: string;
        IdHasilBudidayaIdMasterBudidaya?: number;
        IdHasilBudidayaNamaHasil?: string;
        IdHasilBudidayaIdSatuanHasil?: number;
        IdHasilBudidayaDesc?: string;
        DetailPeternakan?: DetailUserPeternakanPerikananRow[];
    }

    export namespace UserPerikananPeternakanRow {
        export const idProperty = 'IdUserPerikanan';
        export const localTextPrefix = 'Transaction.UserPerikananPeternakan';
        export const deletePermission = 'Transaction:UserPerikananPeternakan';
        export const insertPermission = 'Transaction:UserPerikananPeternakan';
        export const readPermission = 'Transaction:UserPerikananPeternakan';
        export const updatePermission = 'Transaction:UserPerikananPeternakan';

        export declare const enum Fields {
            IdUserPerikanan = "IdUserPerikanan",
            IdUser = "IdUser",
            IdHasilBudidaya = "IdHasilBudidaya",
            TotalBibit = "TotalBibit",
            LuasLahan = "LuasLahan",
            JumlahPekerja = "JumlahPekerja",
            PeriodePanen = "PeriodePanen",
            HasilPanen = "HasilPanen",
            NominalHasilPanen = "NominalHasilPanen",
            Option1 = "Option1",
            IdUserUsername = "IdUserUsername",
            IdUserDisplayName = "IdUserDisplayName",
            IdUserEmail = "IdUserEmail",
            IdUserSource = "IdUserSource",
            IdUserPasswordHash = "IdUserPasswordHash",
            IdUserPasswordSalt = "IdUserPasswordSalt",
            IdUserLastDirectoryUpdate = "IdUserLastDirectoryUpdate",
            IdUserUserImage = "IdUserUserImage",
            IdUserInsertDate = "IdUserInsertDate",
            IdUserInsertUserId = "IdUserInsertUserId",
            IdUserUpdateDate = "IdUserUpdateDate",
            IdUserUpdateUserId = "IdUserUpdateUserId",
            IdUserIsActive = "IdUserIsActive",
            IdUserAddress = "IdUserAddress",
            IdUserIdHubungan = "IdUserIdHubungan",
            IdUserNoKtp = "IdUserNoKtp",
            IdUserNoKk = "IdUserNoKk",
            IdUserPhoneNumber = "IdUserPhoneNumber",
            IdUserWaNumber = "IdUserWaNumber",
            IdUserOption1 = "IdUserOption1",
            IdUserOption2 = "IdUserOption2",
            IdUserOption3 = "IdUserOption3",
            IdUserTanggalLahir = "IdUserTanggalLahir",
            IdUserDescription = "IdUserDescription",
            IdHasilBudidayaIdMasterBudidaya = "IdHasilBudidayaIdMasterBudidaya",
            IdHasilBudidayaNamaHasil = "IdHasilBudidayaNamaHasil",
            IdHasilBudidayaIdSatuanHasil = "IdHasilBudidayaIdSatuanHasil",
            IdHasilBudidayaDesc = "IdHasilBudidayaDesc",
            DetailPeternakan = "DetailPeternakan"
        }
    }
}

