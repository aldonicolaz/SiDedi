namespace SDD.Transaction {
    export interface PengaduanRow {
        IdPengaduan?: number;
        IdUserPengadu?: number;
        IdDesa?: number;
        IdMasterTujuan?: number;
        PerihalPengaduan?: string;
        FotoDokumen?: string;
        Timestamp?: string;
        DetailPengaduan?: DetailPengaduanRow[];
        IdUserPengaduUsername?: string;
        IdUserPengaduDisplayName?: string;
        IdUserPengaduEmail?: string;
        IdUserPengaduSource?: string;
        IdUserPengaduPasswordHash?: string;
        IdUserPengaduPasswordSalt?: string;
        IdUserPengaduLastDirectoryUpdate?: string;
        IdUserPengaduUserImage?: string;
        IdUserPengaduInsertDate?: string;
        IdUserPengaduInsertUserId?: number;
        IdUserPengaduUpdateDate?: string;
        IdUserPengaduUpdateUserId?: number;
        IdUserPengaduIsActive?: number;
        IdUserPengaduAddress?: string;
        IdUserPengaduIdHubungan?: number;
        IdUserPengaduNoKtp?: string;
        IdUserPengaduNoKk?: string;
        IdUserPengaduPhoneNumber?: string;
        IdUserPengaduWaNumber?: string;
        IdUserPengaduOption1?: string;
        IdUserPengaduOption2?: string;
        IdUserPengaduOption3?: string;
        IdUserPengaduJenisKelamin?: number;
        IdUserPengaduTanggalLahir?: string;
        IdUserPengaduDescription?: string;
        IdUserPengaduIdDesa?: number;
        IdUserPengaduPendidikan?: string;
        IdUserPengaduIdVersion?: number;
        IdUserPengaduFcmToken?: string;
        IdDesaIdKecamatan?: number;
        IdDesaNamaDesa?: string;
        IdDesaLantitudeDesa?: string;
        IdDesaLongtitudeDesa?: string;
        IdDesaDescDesa?: string;
        IdDesaLogoDesa?: string;
        IdDesaNoKodeDesa?: string;
        IdMasterTujuanNamaTujuan?: string;
    }

    export namespace PengaduanRow {
        export const idProperty = 'IdPengaduan';
        export const nameProperty = 'PerihalPengaduan';
        export const localTextPrefix = 'Transaction.Pengaduan';
        export const lookupKey = 'Transaction.Pengaduan';

        export function getLookup(): Q.Lookup<PengaduanRow> {
            return Q.getLookup<PengaduanRow>('Transaction.Pengaduan');
        }
        export const deletePermission = 'Transaction:Pengaduan';
        export const insertPermission = 'Transaction:Pengaduan';
        export const readPermission = 'Transaction:Pengaduan';
        export const updatePermission = 'Transaction:Pengaduan';

        export declare const enum Fields {
            IdPengaduan = "IdPengaduan",
            IdUserPengadu = "IdUserPengadu",
            IdDesa = "IdDesa",
            IdMasterTujuan = "IdMasterTujuan",
            PerihalPengaduan = "PerihalPengaduan",
            FotoDokumen = "FotoDokumen",
            Timestamp = "Timestamp",
            DetailPengaduan = "DetailPengaduan",
            IdUserPengaduUsername = "IdUserPengaduUsername",
            IdUserPengaduDisplayName = "IdUserPengaduDisplayName",
            IdUserPengaduEmail = "IdUserPengaduEmail",
            IdUserPengaduSource = "IdUserPengaduSource",
            IdUserPengaduPasswordHash = "IdUserPengaduPasswordHash",
            IdUserPengaduPasswordSalt = "IdUserPengaduPasswordSalt",
            IdUserPengaduLastDirectoryUpdate = "IdUserPengaduLastDirectoryUpdate",
            IdUserPengaduUserImage = "IdUserPengaduUserImage",
            IdUserPengaduInsertDate = "IdUserPengaduInsertDate",
            IdUserPengaduInsertUserId = "IdUserPengaduInsertUserId",
            IdUserPengaduUpdateDate = "IdUserPengaduUpdateDate",
            IdUserPengaduUpdateUserId = "IdUserPengaduUpdateUserId",
            IdUserPengaduIsActive = "IdUserPengaduIsActive",
            IdUserPengaduAddress = "IdUserPengaduAddress",
            IdUserPengaduIdHubungan = "IdUserPengaduIdHubungan",
            IdUserPengaduNoKtp = "IdUserPengaduNoKtp",
            IdUserPengaduNoKk = "IdUserPengaduNoKk",
            IdUserPengaduPhoneNumber = "IdUserPengaduPhoneNumber",
            IdUserPengaduWaNumber = "IdUserPengaduWaNumber",
            IdUserPengaduOption1 = "IdUserPengaduOption1",
            IdUserPengaduOption2 = "IdUserPengaduOption2",
            IdUserPengaduOption3 = "IdUserPengaduOption3",
            IdUserPengaduJenisKelamin = "IdUserPengaduJenisKelamin",
            IdUserPengaduTanggalLahir = "IdUserPengaduTanggalLahir",
            IdUserPengaduDescription = "IdUserPengaduDescription",
            IdUserPengaduIdDesa = "IdUserPengaduIdDesa",
            IdUserPengaduPendidikan = "IdUserPengaduPendidikan",
            IdUserPengaduIdVersion = "IdUserPengaduIdVersion",
            IdUserPengaduFcmToken = "IdUserPengaduFcmToken",
            IdDesaIdKecamatan = "IdDesaIdKecamatan",
            IdDesaNamaDesa = "IdDesaNamaDesa",
            IdDesaLantitudeDesa = "IdDesaLantitudeDesa",
            IdDesaLongtitudeDesa = "IdDesaLongtitudeDesa",
            IdDesaDescDesa = "IdDesaDescDesa",
            IdDesaLogoDesa = "IdDesaLogoDesa",
            IdDesaNoKodeDesa = "IdDesaNoKodeDesa",
            IdMasterTujuanNamaTujuan = "IdMasterTujuanNamaTujuan"
        }
    }
}

