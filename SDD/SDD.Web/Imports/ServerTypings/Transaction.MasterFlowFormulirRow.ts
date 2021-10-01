namespace SDD.Transaction {
    export interface MasterFlowFormulirRow {
        IdFormFlow?: number;
        IdMasterForm?: number;
        Slaform?: number;
        DescForm?: string;
        IdDesa?: number;
        IdMasterFormNamaFormulir?: string;
        IdMasterFormDescFormulir?: string;
        IdDesaIdKecamatan?: number;
        IdDesaNamaDesa?: string;
        IdDesaLantitudeDesa?: string;
        IdDesaLongtitudeDesa?: string;
        IdDesaDescDesa?: string;
        IdDesaLogoDesa?: string;
        DetailFlowFormulir?: DetailFlowFormRow[];
    }

    export namespace MasterFlowFormulirRow {
        export const idProperty = 'IdFormFlow';
        export const nameProperty = 'DescForm';
        export const localTextPrefix = 'Transaction.MasterFlowFormulir';
        export const lookupKey = 'Transaction.MasterFlowFormulir';

        export function getLookup(): Q.Lookup<MasterFlowFormulirRow> {
            return Q.getLookup<MasterFlowFormulirRow>('Transaction.MasterFlowFormulir');
        }
        export const deletePermission = 'Transaction:MasterFlowFormulir';
        export const insertPermission = 'Transaction:MasterFlowFormulir';
        export const readPermission = 'Transaction:MasterFlowFormulir';
        export const updatePermission = 'Transaction:MasterFlowFormulir';

        export declare const enum Fields {
            IdFormFlow = "IdFormFlow",
            IdMasterForm = "IdMasterForm",
            Slaform = "Slaform",
            DescForm = "DescForm",
            IdDesa = "IdDesa",
            IdMasterFormNamaFormulir = "IdMasterFormNamaFormulir",
            IdMasterFormDescFormulir = "IdMasterFormDescFormulir",
            IdDesaIdKecamatan = "IdDesaIdKecamatan",
            IdDesaNamaDesa = "IdDesaNamaDesa",
            IdDesaLantitudeDesa = "IdDesaLantitudeDesa",
            IdDesaLongtitudeDesa = "IdDesaLongtitudeDesa",
            IdDesaDescDesa = "IdDesaDescDesa",
            IdDesaLogoDesa = "IdDesaLogoDesa",
            DetailFlowFormulir = "DetailFlowFormulir"
        }
    }
}

