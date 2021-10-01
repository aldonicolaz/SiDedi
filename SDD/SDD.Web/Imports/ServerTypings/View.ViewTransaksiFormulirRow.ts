namespace SDD.View {
    export interface ViewTransaksiFormulirRow {
        IdTransaksi?: number;
        IdTransaksiForm?: number;
        IdUserPengajuan?: number;
        IdUserAparat?: number;
        Info?: string;
        TimeStamp?: string;
        IdMasterForm?: number;
        IdStatus?: number;
        IdFormulir?: number;
        Formulir?: string;
        Dokumen?: string;
        NamaStatus?: string;
    }

    export namespace ViewTransaksiFormulirRow {
        export const idProperty = 'IdTransaksi';
        export const nameProperty = 'Info';
        export const localTextPrefix = 'View.ViewTransaksiFormulir';
        export const deletePermission = 'View:ViewTransaksiFormulir';
        export const insertPermission = 'View:ViewTransaksiFormulir';
        export const readPermission = 'View:ViewTransaksiFormulir';
        export const updatePermission = 'View:ViewTransaksiFormulir';

        export declare const enum Fields {
            IdTransaksi = "IdTransaksi",
            IdTransaksiForm = "IdTransaksiForm",
            IdUserPengajuan = "IdUserPengajuan",
            IdUserAparat = "IdUserAparat",
            Info = "Info",
            TimeStamp = "TimeStamp",
            IdMasterForm = "IdMasterForm",
            IdStatus = "IdStatus",
            IdFormulir = "IdFormulir",
            Formulir = "Formulir",
            Dokumen = "Dokumen",
            NamaStatus = "NamaStatus"
        }
    }
}

