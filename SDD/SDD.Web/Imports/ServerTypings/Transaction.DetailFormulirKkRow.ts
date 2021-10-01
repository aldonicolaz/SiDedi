namespace SDD.Transaction {
    export interface DetailFormulirKkRow {
        IdDetailKk?: number;
        IdFormulirKk?: number;
        IdMasterHub?: number;
        Nik?: string;
        NamaLengkap?: string;
        IdFormulirKkIdMasterFlow?: number;
        IdFormulirKkIdUser?: number;
        IdFormulirKkAlasanPemohon?: string;
        IdFormulirKkJumlahKk?: number;
        IdFormulirKkTimestamp?: string;
        IdFormulirKkLinkDocKk?: string;
        IdMasterHubNamaHubungan?: string;
        IdMasterHubKodeHubungan?: string;
        IdMasterHubDescHubungan?: string;
    }

    export namespace DetailFormulirKkRow {
        export const idProperty = 'IdDetailKk';
        export const nameProperty = 'Nik';
        export const localTextPrefix = 'Transaction.DetailFormulirKk';
        export const deletePermission = 'Transaction:DetailFormulirKk';
        export const insertPermission = 'Transaction:DetailFormulirKk';
        export const readPermission = 'Transaction:DetailFormulirKk';
        export const updatePermission = 'Transaction:DetailFormulirKk';

        export declare const enum Fields {
            IdDetailKk = "IdDetailKk",
            IdFormulirKk = "IdFormulirKk",
            IdMasterHub = "IdMasterHub",
            Nik = "Nik",
            NamaLengkap = "NamaLengkap",
            IdFormulirKkIdMasterFlow = "IdFormulirKkIdMasterFlow",
            IdFormulirKkIdUser = "IdFormulirKkIdUser",
            IdFormulirKkAlasanPemohon = "IdFormulirKkAlasanPemohon",
            IdFormulirKkJumlahKk = "IdFormulirKkJumlahKk",
            IdFormulirKkTimestamp = "IdFormulirKkTimestamp",
            IdFormulirKkLinkDocKk = "IdFormulirKkLinkDocKk",
            IdMasterHubNamaHubungan = "IdMasterHubNamaHubungan",
            IdMasterHubKodeHubungan = "IdMasterHubKodeHubungan",
            IdMasterHubDescHubungan = "IdMasterHubDescHubungan"
        }
    }
}

