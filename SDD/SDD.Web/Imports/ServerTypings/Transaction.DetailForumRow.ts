namespace SDD.Transaction {
    export interface DetailForumRow {
        IdDetailForum?: number;
        IdForum?: number;
        IdUserRespon?: number;
        DetailRespon?: string;
        FotoDokumenRespon?: string;
        Timestamp?: string;
        IdForumIdMasterForum?: number;
        IdForumIdUserInsert?: number;
        IdForumDetailForum?: string;
        IdForumFotoDokumenForum?: string;
        IdForumHiddenUser?: number;
        IdForumTimestamp?: string;
        IdUserResponUsername?: string;
        IdUserResponDisplayName?: string;
        IdUserResponEmail?: string;
        IdUserResponSource?: string;
        IdUserResponPasswordHash?: string;
        IdUserResponPasswordSalt?: string;
        IdUserResponLastDirectoryUpdate?: string;
        IdUserResponUserImage?: string;
        IdUserResponInsertDate?: string;
        IdUserResponInsertUserId?: number;
        IdUserResponUpdateDate?: string;
        IdUserResponUpdateUserId?: number;
        IdUserResponIsActive?: number;
        IdUserResponAddress?: string;
        IdUserResponIdHubungan?: number;
        IdUserResponNoKtp?: string;
        IdUserResponNoKk?: string;
        IdUserResponPhoneNumber?: string;
        IdUserResponWaNumber?: string;
        IdUserResponOption1?: string;
        IdUserResponOption2?: string;
        IdUserResponOption3?: string;
        IdUserResponJenisKelamin?: number;
        IdUserResponTanggalLahir?: string;
        IdUserResponDescription?: string;
        IdUserResponIdDesa?: number;
        IdUserResponPendidikan?: string;
        IdUserResponIdVersion?: number;
        IdUserResponFcmToken?: string;
    }

    export namespace DetailForumRow {
        export const idProperty = 'IdDetailForum';
        export const nameProperty = 'DetailRespon';
        export const localTextPrefix = 'Transaction.DetailForum';
        export const deletePermission = 'Transaction:DetailForum';
        export const insertPermission = 'Transaction:DetailForum';
        export const readPermission = 'Transaction:DetailForum';
        export const updatePermission = 'Transaction:DetailForum';

        export declare const enum Fields {
            IdDetailForum = "IdDetailForum",
            IdForum = "IdForum",
            IdUserRespon = "IdUserRespon",
            DetailRespon = "DetailRespon",
            FotoDokumenRespon = "FotoDokumenRespon",
            Timestamp = "Timestamp",
            IdForumIdMasterForum = "IdForumIdMasterForum",
            IdForumIdUserInsert = "IdForumIdUserInsert",
            IdForumDetailForum = "IdForumDetailForum",
            IdForumFotoDokumenForum = "IdForumFotoDokumenForum",
            IdForumHiddenUser = "IdForumHiddenUser",
            IdForumTimestamp = "IdForumTimestamp",
            IdUserResponUsername = "IdUserResponUsername",
            IdUserResponDisplayName = "IdUserResponDisplayName",
            IdUserResponEmail = "IdUserResponEmail",
            IdUserResponSource = "IdUserResponSource",
            IdUserResponPasswordHash = "IdUserResponPasswordHash",
            IdUserResponPasswordSalt = "IdUserResponPasswordSalt",
            IdUserResponLastDirectoryUpdate = "IdUserResponLastDirectoryUpdate",
            IdUserResponUserImage = "IdUserResponUserImage",
            IdUserResponInsertDate = "IdUserResponInsertDate",
            IdUserResponInsertUserId = "IdUserResponInsertUserId",
            IdUserResponUpdateDate = "IdUserResponUpdateDate",
            IdUserResponUpdateUserId = "IdUserResponUpdateUserId",
            IdUserResponIsActive = "IdUserResponIsActive",
            IdUserResponAddress = "IdUserResponAddress",
            IdUserResponIdHubungan = "IdUserResponIdHubungan",
            IdUserResponNoKtp = "IdUserResponNoKtp",
            IdUserResponNoKk = "IdUserResponNoKk",
            IdUserResponPhoneNumber = "IdUserResponPhoneNumber",
            IdUserResponWaNumber = "IdUserResponWaNumber",
            IdUserResponOption1 = "IdUserResponOption1",
            IdUserResponOption2 = "IdUserResponOption2",
            IdUserResponOption3 = "IdUserResponOption3",
            IdUserResponJenisKelamin = "IdUserResponJenisKelamin",
            IdUserResponTanggalLahir = "IdUserResponTanggalLahir",
            IdUserResponDescription = "IdUserResponDescription",
            IdUserResponIdDesa = "IdUserResponIdDesa",
            IdUserResponPendidikan = "IdUserResponPendidikan",
            IdUserResponIdVersion = "IdUserResponIdVersion",
            IdUserResponFcmToken = "IdUserResponFcmToken"
        }
    }
}

