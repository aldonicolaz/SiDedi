namespace SDD.Transaction {
    export interface FormulirKtpRow {
        IdFormulirKtp?: number;
        IdFFowForm?: number;
        TypePermohonan?: string;
        DokPendukung?: string;
        Desc?: string;
        IdUserDisplayName?: string;
        IdUser?: number;
        LinkDocKTP?: string;
        Timestamp?: string;
    }

    export namespace FormulirKtpRow {
        export const idProperty = 'IdFormulirKtp';
        export const nameProperty = 'TypePermohonan';
        export const localTextPrefix = 'Transaction.FormulirKtp';
        export const deletePermission = 'Transaction:FormulirKtp';
        export const insertPermission = 'Transaction:FormulirKtp';
        export const readPermission = 'Transaction:FormulirKtp';
        export const updatePermission = 'Transaction:FormulirKtp';

        export declare const enum Fields {
            IdFormulirKtp = "IdFormulirKtp",
            IdFFowForm = "IdFFowForm",
            TypePermohonan = "TypePermohonan",
            DokPendukung = "DokPendukung",
            Desc = "Desc",
            IdUserDisplayName = "IdUserDisplayName",
            IdUser = "IdUser",
            LinkDocKTP = "LinkDocKTP",
            Timestamp = "Timestamp"
        }
    }
}

