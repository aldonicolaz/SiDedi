namespace SDD.Transaction {
    export interface FcmMessageUserRow {
        IdMessage?: number;
        IdUser?: number;
        Message?: string;
        Title?: string;
        Body?: string;
        Action?: string;
        Status?: number;
        Response?: string;
        TimeStamp?: string;
        IdParentMessage?: number;
        StatusWa?: number;
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
        IdUserJenisKelamin?: number;
        IdUserTanggalLahir?: string;
        IdUserDescription?: string;
        IdUserIdDesa?: number;
        IdUserPendidikan?: string;
        IdUserIdVersion?: number;
        IdUserFcmToken?: string;
        IdParentMessageMessage?: string;
        IdParentMessageTitle?: string;
        IdParentMessageBody?: string;
        IdParentMessageTimeStamp?: string;
        IdParentMessageOption1?: number;
        IdParentMessageOption2?: number;
        IdParentMessageIdUserShare?: number;
    }

    export namespace FcmMessageUserRow {
        export const idProperty = 'IdMessage';
        export const nameProperty = 'Message';
        export const localTextPrefix = 'Transaction.FcmMessageUser';
        export const deletePermission = 'Transaction:FcmMessageUser';
        export const insertPermission = 'Transaction:FcmMessageUser';
        export const readPermission = 'Transaction:FcmMessageUser';
        export const updatePermission = 'Transaction:FcmMessageUser';

        export declare const enum Fields {
            IdMessage = "IdMessage",
            IdUser = "IdUser",
            Message = "Message",
            Title = "Title",
            Body = "Body",
            Action = "Action",
            Status = "Status",
            Response = "Response",
            TimeStamp = "TimeStamp",
            IdParentMessage = "IdParentMessage",
            StatusWa = "StatusWa",
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
            IdUserJenisKelamin = "IdUserJenisKelamin",
            IdUserTanggalLahir = "IdUserTanggalLahir",
            IdUserDescription = "IdUserDescription",
            IdUserIdDesa = "IdUserIdDesa",
            IdUserPendidikan = "IdUserPendidikan",
            IdUserIdVersion = "IdUserIdVersion",
            IdUserFcmToken = "IdUserFcmToken",
            IdParentMessageMessage = "IdParentMessageMessage",
            IdParentMessageTitle = "IdParentMessageTitle",
            IdParentMessageBody = "IdParentMessageBody",
            IdParentMessageTimeStamp = "IdParentMessageTimeStamp",
            IdParentMessageOption1 = "IdParentMessageOption1",
            IdParentMessageOption2 = "IdParentMessageOption2",
            IdParentMessageIdUserShare = "IdParentMessageIdUserShare"
        }
    }
}

