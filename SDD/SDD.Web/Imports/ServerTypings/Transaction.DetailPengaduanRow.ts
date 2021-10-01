namespace SDD.Transaction {
    export interface DetailPengaduanRow {
        IdDetailPengaduan?: number;
        IdPengaduan?: number;
        IdUserPenanggap?: number;
        Tanggapan?: string;
        Timestamp?: string;
        IdPengaduanIdUserPengadu?: number;
        IdPengaduanIdDesa?: number;
        IdPengaduanIdMasterTujuan?: number;
        IdPengaduanPerihalPengaduan?: string;
        IdPengaduanFotoDokumen?: string;
        IdPengaduanTimestamp?: string;
        IdUserPenanggapUsername?: string;
        DisplayName?: string;
        IdUserPenanggapEmail?: string;
        IdUserPenanggapSource?: string;
        IdUserPenanggapPasswordHash?: string;
        IdUserPenanggapPasswordSalt?: string;
        IdUserPenanggapLastDirectoryUpdate?: string;
        IdUserPenanggapUserImage?: string;
        IdUserPenanggapInsertDate?: string;
        IdUserPenanggapInsertUserId?: number;
        IdUserPenanggapUpdateDate?: string;
        IdUserPenanggapUpdateUserId?: number;
        IdUserPenanggapIsActive?: number;
        IdUserPenanggapAddress?: string;
        IdUserPenanggapIdHubungan?: number;
        IdUserPenanggapNoKtp?: string;
        IdUserPenanggapNoKk?: string;
        IdUserPenanggapPhoneNumber?: string;
        IdUserPenanggapWaNumber?: string;
        IdUserPenanggapOption1?: string;
        IdUserPenanggapOption2?: string;
        IdUserPenanggapOption3?: string;
        IdUserPenanggapJenisKelamin?: number;
        IdUserPenanggapTanggalLahir?: string;
        IdUserPenanggapDescription?: string;
        IdUserPenanggapIdDesa?: number;
        IdUserPenanggapPendidikan?: string;
        IdUserPenanggapIdVersion?: number;
        IdUserPenanggapFcmToken?: string;
    }

    export namespace DetailPengaduanRow {
        export const idProperty = 'IdDetailPengaduan';
        export const nameProperty = 'Tanggapan';
        export const localTextPrefix = 'Transaction.DetailPengaduan';
        export const lookupKey = 'Transaction.DetailPengaduan';

        export function getLookup(): Q.Lookup<DetailPengaduanRow> {
            return Q.getLookup<DetailPengaduanRow>('Transaction.DetailPengaduan');
        }
        export const deletePermission = 'Transaction:DetailPengaduan';
        export const insertPermission = 'Transaction:DetailPengaduan';
        export const readPermission = 'Transaction:DetailPengaduan';
        export const updatePermission = 'Transaction:DetailPengaduan';

        export declare const enum Fields {
            IdDetailPengaduan = "IdDetailPengaduan",
            IdPengaduan = "IdPengaduan",
            IdUserPenanggap = "IdUserPenanggap",
            Tanggapan = "Tanggapan",
            Timestamp = "Timestamp",
            IdPengaduanIdUserPengadu = "IdPengaduanIdUserPengadu",
            IdPengaduanIdDesa = "IdPengaduanIdDesa",
            IdPengaduanIdMasterTujuan = "IdPengaduanIdMasterTujuan",
            IdPengaduanPerihalPengaduan = "IdPengaduanPerihalPengaduan",
            IdPengaduanFotoDokumen = "IdPengaduanFotoDokumen",
            IdPengaduanTimestamp = "IdPengaduanTimestamp",
            IdUserPenanggapUsername = "IdUserPenanggapUsername",
            DisplayName = "DisplayName",
            IdUserPenanggapEmail = "IdUserPenanggapEmail",
            IdUserPenanggapSource = "IdUserPenanggapSource",
            IdUserPenanggapPasswordHash = "IdUserPenanggapPasswordHash",
            IdUserPenanggapPasswordSalt = "IdUserPenanggapPasswordSalt",
            IdUserPenanggapLastDirectoryUpdate = "IdUserPenanggapLastDirectoryUpdate",
            IdUserPenanggapUserImage = "IdUserPenanggapUserImage",
            IdUserPenanggapInsertDate = "IdUserPenanggapInsertDate",
            IdUserPenanggapInsertUserId = "IdUserPenanggapInsertUserId",
            IdUserPenanggapUpdateDate = "IdUserPenanggapUpdateDate",
            IdUserPenanggapUpdateUserId = "IdUserPenanggapUpdateUserId",
            IdUserPenanggapIsActive = "IdUserPenanggapIsActive",
            IdUserPenanggapAddress = "IdUserPenanggapAddress",
            IdUserPenanggapIdHubungan = "IdUserPenanggapIdHubungan",
            IdUserPenanggapNoKtp = "IdUserPenanggapNoKtp",
            IdUserPenanggapNoKk = "IdUserPenanggapNoKk",
            IdUserPenanggapPhoneNumber = "IdUserPenanggapPhoneNumber",
            IdUserPenanggapWaNumber = "IdUserPenanggapWaNumber",
            IdUserPenanggapOption1 = "IdUserPenanggapOption1",
            IdUserPenanggapOption2 = "IdUserPenanggapOption2",
            IdUserPenanggapOption3 = "IdUserPenanggapOption3",
            IdUserPenanggapJenisKelamin = "IdUserPenanggapJenisKelamin",
            IdUserPenanggapTanggalLahir = "IdUserPenanggapTanggalLahir",
            IdUserPenanggapDescription = "IdUserPenanggapDescription",
            IdUserPenanggapIdDesa = "IdUserPenanggapIdDesa",
            IdUserPenanggapPendidikan = "IdUserPenanggapPendidikan",
            IdUserPenanggapIdVersion = "IdUserPenanggapIdVersion",
            IdUserPenanggapFcmToken = "IdUserPenanggapFcmToken"
        }
    }
}

