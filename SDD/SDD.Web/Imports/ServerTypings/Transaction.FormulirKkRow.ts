namespace SDD.Transaction {
    export interface FormulirKkRow {
        IdFormulirKk?: number;
        IdMasterFlow?: number;
        IdUser?: number;
        AlasanPemohon?: string;
        JumlahKk?: number;
        DokPendukungKK?: string;
        Timestamp?: string;
        LinkDocKk?: string;
        IdMasterFlowIdMasterForm?: number;
        IdMasterFlowSlaform?: number;
        IdMasterFlowDescForm?: string;
        IdMasterFlowIdDesa?: number;
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
        DetailFormulir?: DetailFormulirKkRow[];
    }

    export namespace FormulirKkRow {
        export const idProperty = 'IdFormulirKk';
        export const nameProperty = 'AlasanPemohon';
        export const localTextPrefix = 'Transaction.FormulirKk';
        export const deletePermission = 'Transaction:FormulirKk';
        export const insertPermission = 'Transaction:FormulirKk';
        export const readPermission = 'Transaction:FormulirKk';
        export const updatePermission = 'Transaction:FormulirKk';

        export declare const enum Fields {
            IdFormulirKk = "IdFormulirKk",
            IdMasterFlow = "IdMasterFlow",
            IdUser = "IdUser",
            AlasanPemohon = "AlasanPemohon",
            JumlahKk = "JumlahKk",
            DokPendukungKK = "DokPendukungKK",
            Timestamp = "Timestamp",
            LinkDocKk = "LinkDocKk",
            IdMasterFlowIdMasterForm = "IdMasterFlowIdMasterForm",
            IdMasterFlowSlaform = "IdMasterFlowSlaform",
            IdMasterFlowDescForm = "IdMasterFlowDescForm",
            IdMasterFlowIdDesa = "IdMasterFlowIdDesa",
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
            DetailFormulir = "DetailFormulir"
        }
    }
}

