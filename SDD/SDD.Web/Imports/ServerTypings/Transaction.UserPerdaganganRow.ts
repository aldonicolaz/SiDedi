namespace SDD.Transaction {
    export interface UserPerdaganganRow {
        IdUserPerdagangan?: number;
        Iduser?: number;
        NamaBrandToko?: string;
        JenisDagangan?: string;
        Desc?: string;
        IduserUsername?: string;
        IduserDisplayName?: string;
        IduserEmail?: string;
        IduserSource?: string;
        IduserPasswordHash?: string;
        IduserPasswordSalt?: string;
        IduserLastDirectoryUpdate?: string;
        IduserUserImage?: string;
        IduserInsertDate?: string;
        IduserInsertUserId?: number;
        IduserUpdateDate?: string;
        IduserUpdateUserId?: number;
        IduserIsActive?: number;
        IduserAddress?: string;
        IduserIdHubungan?: number;
        IduserNoKtp?: string;
        IduserNoKk?: string;
        IduserPhoneNumber?: string;
        IduserWaNumber?: string;
        IduserOption1?: string;
        IduserOption2?: string;
        IduserOption3?: string;
        IduserTanggalLahir?: string;
        IduserDescription?: string;
        DetailPerdagangan?: DetailUserPerdaganganRow[];
        IdPekerjaan?: number;
        IdPekerjaanNamaPekerjaan?: string;
    }

    export namespace UserPerdaganganRow {
        export const idProperty = 'IdUserPerdagangan';
        export const nameProperty = 'NamaBrandToko';
        export const localTextPrefix = 'Transaction.UserPerdagangan';
        export const deletePermission = 'Transaction:UserPerdagangan';
        export const insertPermission = 'Transaction:UserPerdagangan';
        export const readPermission = 'Transaction:UserPerdagangan';
        export const updatePermission = 'Transaction:UserPerdagangan';

        export declare const enum Fields {
            IdUserPerdagangan = "IdUserPerdagangan",
            Iduser = "Iduser",
            NamaBrandToko = "NamaBrandToko",
            JenisDagangan = "JenisDagangan",
            Desc = "Desc",
            IduserUsername = "IduserUsername",
            IduserDisplayName = "IduserDisplayName",
            IduserEmail = "IduserEmail",
            IduserSource = "IduserSource",
            IduserPasswordHash = "IduserPasswordHash",
            IduserPasswordSalt = "IduserPasswordSalt",
            IduserLastDirectoryUpdate = "IduserLastDirectoryUpdate",
            IduserUserImage = "IduserUserImage",
            IduserInsertDate = "IduserInsertDate",
            IduserInsertUserId = "IduserInsertUserId",
            IduserUpdateDate = "IduserUpdateDate",
            IduserUpdateUserId = "IduserUpdateUserId",
            IduserIsActive = "IduserIsActive",
            IduserAddress = "IduserAddress",
            IduserIdHubungan = "IduserIdHubungan",
            IduserNoKtp = "IduserNoKtp",
            IduserNoKk = "IduserNoKk",
            IduserPhoneNumber = "IduserPhoneNumber",
            IduserWaNumber = "IduserWaNumber",
            IduserOption1 = "IduserOption1",
            IduserOption2 = "IduserOption2",
            IduserOption3 = "IduserOption3",
            IduserTanggalLahir = "IduserTanggalLahir",
            IduserDescription = "IduserDescription",
            DetailPerdagangan = "DetailPerdagangan",
            IdPekerjaan = "IdPekerjaan",
            IdPekerjaanNamaPekerjaan = "IdPekerjaanNamaPekerjaan"
        }
    }
}

