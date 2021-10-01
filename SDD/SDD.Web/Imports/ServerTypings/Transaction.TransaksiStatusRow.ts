namespace SDD.Transaction {
    export interface TransaksiStatusRow {
        IdTransaksi?: number;
        IdMasterForm?: number;
        IdStatus?: number;
        IdUserPengajuan?: number;
        Keterangan?: string;
        IdUserAparat?: number;
        TimeStamp?: string;
        DisplayName?: string;
        DisplayName1?: string;
        NamaStatus?: string;
        IdDesa?: number;
        IdMasterFormNamaFormulir?: string;
        IdMasterFormDescFormulir?: string;
        LinkFormulir?: string;
        NamaDesa?: string;
        IdFormulir?: number;
        Dokumen?: string;
        Info?: string;
        Jabatan?: string;
        IdTransaksiForm?: number;
    }

    export namespace TransaksiStatusRow {
        export const idProperty = 'IdTransaksi';
        export const nameProperty = 'Keterangan';
        export const localTextPrefix = 'Transaction.TransaksiStatus';
        export const deletePermission = 'Transaction:TransaksiStatus';
        export const insertPermission = 'Transaction:TransaksiStatus';
        export const readPermission = 'Transaction:TransaksiStatus';
        export const updatePermission = 'Transaction:TransaksiStatus';

        export declare const enum Fields {
            IdTransaksi = "IdTransaksi",
            IdMasterForm = "IdMasterForm",
            IdStatus = "IdStatus",
            IdUserPengajuan = "IdUserPengajuan",
            Keterangan = "Keterangan",
            IdUserAparat = "IdUserAparat",
            TimeStamp = "TimeStamp",
            DisplayName = "DisplayName",
            DisplayName1 = "DisplayName1",
            NamaStatus = "NamaStatus",
            IdDesa = "IdDesa",
            IdMasterFormNamaFormulir = "IdMasterFormNamaFormulir",
            IdMasterFormDescFormulir = "IdMasterFormDescFormulir",
            LinkFormulir = "LinkFormulir",
            NamaDesa = "NamaDesa",
            IdFormulir = "IdFormulir",
            Dokumen = "Dokumen",
            Info = "Info",
            Jabatan = "Jabatan",
            IdTransaksiForm = "IdTransaksiForm"
        }
    }
}

