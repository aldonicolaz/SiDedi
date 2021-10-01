namespace SDD.Transaction {
    export interface ForumRow {
        IdForum?: number;
        IdMasterForum?: number;
        IdUserInsert?: number;
        DetailForum?: string;
        FotoDokumenForum?: string;
        HiddenUser?: number;
        Timestamp?: string;
        IdMasterForumNamaForum?: string;
        IdMasterForumDeskripsi?: string;
        IdUserInsertUsername?: string;
        IdUserInsertDisplayName?: string;
        IdUserInsertEmail?: string;
        IdUserInsertSource?: string;
        IdUserInsertPasswordHash?: string;
        IdUserInsertPasswordSalt?: string;
        IdUserInsertLastDirectoryUpdate?: string;
        IdUserInsertUserImage?: string;
        IdUserInsertInsertDate?: string;
        IdUserInsertInsertUserId?: number;
        IdUserInsertUpdateDate?: string;
        IdUserInsertUpdateUserId?: number;
        IdUserInsertIsActive?: number;
        IdUserInsertAddress?: string;
        IdUserInsertIdHubungan?: number;
        IdUserInsertNoKtp?: string;
        IdUserInsertNoKk?: string;
        IdUserInsertPhoneNumber?: string;
        IdUserInsertWaNumber?: string;
        IdUserInsertOption1?: string;
        IdUserInsertOption2?: string;
        IdUserInsertOption3?: string;
        IdUserInsertJenisKelamin?: number;
        IdUserInsertTanggalLahir?: string;
        IdUserInsertDescription?: string;
        IdUserInsertIdDesa?: number;
        IdUserInsertPendidikan?: string;
        IdUserInsertIdVersion?: number;
        IdUserInsertFcmToken?: string;
        Detail?: DetailForumRow[];
    }

    export namespace ForumRow {
        export const idProperty = 'IdForum';
        export const nameProperty = 'DetailForum';
        export const localTextPrefix = 'Transaction.Forum';
        export const deletePermission = 'Transaction:Forum';
        export const insertPermission = 'Transaction:Forum';
        export const readPermission = 'Transaction:Forum';
        export const updatePermission = 'Transaction:Forum';

        export declare const enum Fields {
            IdForum = "IdForum",
            IdMasterForum = "IdMasterForum",
            IdUserInsert = "IdUserInsert",
            DetailForum = "DetailForum",
            FotoDokumenForum = "FotoDokumenForum",
            HiddenUser = "HiddenUser",
            Timestamp = "Timestamp",
            IdMasterForumNamaForum = "IdMasterForumNamaForum",
            IdMasterForumDeskripsi = "IdMasterForumDeskripsi",
            IdUserInsertUsername = "IdUserInsertUsername",
            IdUserInsertDisplayName = "IdUserInsertDisplayName",
            IdUserInsertEmail = "IdUserInsertEmail",
            IdUserInsertSource = "IdUserInsertSource",
            IdUserInsertPasswordHash = "IdUserInsertPasswordHash",
            IdUserInsertPasswordSalt = "IdUserInsertPasswordSalt",
            IdUserInsertLastDirectoryUpdate = "IdUserInsertLastDirectoryUpdate",
            IdUserInsertUserImage = "IdUserInsertUserImage",
            IdUserInsertInsertDate = "IdUserInsertInsertDate",
            IdUserInsertInsertUserId = "IdUserInsertInsertUserId",
            IdUserInsertUpdateDate = "IdUserInsertUpdateDate",
            IdUserInsertUpdateUserId = "IdUserInsertUpdateUserId",
            IdUserInsertIsActive = "IdUserInsertIsActive",
            IdUserInsertAddress = "IdUserInsertAddress",
            IdUserInsertIdHubungan = "IdUserInsertIdHubungan",
            IdUserInsertNoKtp = "IdUserInsertNoKtp",
            IdUserInsertNoKk = "IdUserInsertNoKk",
            IdUserInsertPhoneNumber = "IdUserInsertPhoneNumber",
            IdUserInsertWaNumber = "IdUserInsertWaNumber",
            IdUserInsertOption1 = "IdUserInsertOption1",
            IdUserInsertOption2 = "IdUserInsertOption2",
            IdUserInsertOption3 = "IdUserInsertOption3",
            IdUserInsertJenisKelamin = "IdUserInsertJenisKelamin",
            IdUserInsertTanggalLahir = "IdUserInsertTanggalLahir",
            IdUserInsertDescription = "IdUserInsertDescription",
            IdUserInsertIdDesa = "IdUserInsertIdDesa",
            IdUserInsertPendidikan = "IdUserInsertPendidikan",
            IdUserInsertIdVersion = "IdUserInsertIdVersion",
            IdUserInsertFcmToken = "IdUserInsertFcmToken",
            Detail = "Detail"
        }
    }
}

