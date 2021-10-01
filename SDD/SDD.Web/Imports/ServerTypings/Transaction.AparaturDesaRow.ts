namespace SDD.Transaction {
    export interface AparaturDesaRow {
        IdAparaturDesa?: number;
        IdUser?: number;
        IdDesa?: number;
        IdJabatan?: number;
        StatusAparatur?: number;
        PeriodeAwal?: string;
        PeriodeAkhir?: string;
        DescAparaturDesa?: string;
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
        IdDesaIdKecamatan?: number;
        IdDesaNamaDesa?: string;
        IdDesaLantitudeDesa?: string;
        IdDesaLongtitudeDesa?: string;
        IdDesaDescDesa?: string;
        IdDesaLogoDesa?: string;
        IdJabatanNamaJabatan?: string;
        IdJabatanDesc?: string;
    }

    export namespace AparaturDesaRow {
        export const idProperty = 'IdAparaturDesa';
        export const nameProperty = 'DescAparaturDesa';
        export const localTextPrefix = 'Transaction.AparaturDesa';
        export const deletePermission = 'Transaction:AparaturDesa';
        export const insertPermission = 'Transaction:AparaturDesa';
        export const readPermission = 'Transaction:AparaturDesa';
        export const updatePermission = 'Transaction:AparaturDesa';

        export declare const enum Fields {
            IdAparaturDesa = "IdAparaturDesa",
            IdUser = "IdUser",
            IdDesa = "IdDesa",
            IdJabatan = "IdJabatan",
            StatusAparatur = "StatusAparatur",
            PeriodeAwal = "PeriodeAwal",
            PeriodeAkhir = "PeriodeAkhir",
            DescAparaturDesa = "DescAparaturDesa",
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
            IdDesaIdKecamatan = "IdDesaIdKecamatan",
            IdDesaNamaDesa = "IdDesaNamaDesa",
            IdDesaLantitudeDesa = "IdDesaLantitudeDesa",
            IdDesaLongtitudeDesa = "IdDesaLongtitudeDesa",
            IdDesaDescDesa = "IdDesaDescDesa",
            IdDesaLogoDesa = "IdDesaLogoDesa",
            IdJabatanNamaJabatan = "IdJabatanNamaJabatan",
            IdJabatanDesc = "IdJabatanDesc"
        }
    }
}

