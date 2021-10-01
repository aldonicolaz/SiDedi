namespace SDD.Transaction {
    export interface UserKaryawanRow {
        IdUserKaryawan?: number;
        IdUser?: number;
        TypePerusahaan?: number;
        StatusKaryawan?: string;
        RatarataPenghasilan?: number;
        NamaperusahaanUsaha?: string;
        AlamatPerusahanUsaha?: string;
        Desc?: string;
        IduserDisplayName?: string;
        IdPekerjaan?: number;
        IdPekerjaanNamaPekerjaan?: string;
    }

    export namespace UserKaryawanRow {
        export const idProperty = 'IdUserKaryawan';
        export const nameProperty = 'StatusKaryawan';
        export const localTextPrefix = 'Transaction.UserKaryawan';
        export const deletePermission = 'Transaction:UserKaryawan';
        export const insertPermission = 'Transaction:UserKaryawan';
        export const readPermission = 'Transaction:UserKaryawan';
        export const updatePermission = 'Transaction:UserKaryawan';

        export declare const enum Fields {
            IdUserKaryawan = "IdUserKaryawan",
            IdUser = "IdUser",
            TypePerusahaan = "TypePerusahaan",
            StatusKaryawan = "StatusKaryawan",
            RatarataPenghasilan = "RatarataPenghasilan",
            NamaperusahaanUsaha = "NamaperusahaanUsaha",
            AlamatPerusahanUsaha = "AlamatPerusahanUsaha",
            Desc = "Desc",
            IduserDisplayName = "IduserDisplayName",
            IdPekerjaan = "IdPekerjaan",
            IdPekerjaanNamaPekerjaan = "IdPekerjaanNamaPekerjaan"
        }
    }
}

