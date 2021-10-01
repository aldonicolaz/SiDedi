namespace SDD.Transaction {
    export interface UserPertanianPerkebunanRow {
        IdUserPertanian?: number;
        IdUser?: number;
        IdHasilBudidaya?: number;
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
        DetailPertanian?: DetailUserPertanianRow[];
    }

    export namespace UserPertanianPerkebunanRow {
        export const idProperty = 'IdUserPertanian';
        export const localTextPrefix = 'Transaction.UserPertanianPerkebunan';
        export const deletePermission = 'Transaction:UserPertanianPerkebunan';
        export const insertPermission = 'Transaction:UserPertanianPerkebunan';
        export const readPermission = 'Transaction:UserPertanianPerkebunan';
        export const updatePermission = 'Transaction:UserPertanianPerkebunan';

        export declare const enum Fields {
            IdUserPertanian = "IdUserPertanian",
            IdUser = "IdUser",
            IdHasilBudidaya = "IdHasilBudidaya",
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
            DetailPertanian = "DetailPertanian"
        }
    }
}

