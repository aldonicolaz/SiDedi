namespace SDD.Transaction {
    export interface DetailFlowFormRow {
        IdDetailFlowForm?: number;
        IdFormFlow?: number;
        IdJabatan?: number;
        UrutanFlow?: number;
        SlaDetail?: number;
        IdFormFlowIdMasterForm?: number;
        IdFormFlowSlaform?: number;
        IdFormFlowDescForm?: string;
        IdFormFlowIdDesa?: number;
        IdJabatanNamaJabatan?: string;
        IdJabatanDesc?: string;
    }

    export namespace DetailFlowFormRow {
        export const idProperty = 'IdDetailFlowForm';
        export const localTextPrefix = 'Transaction.DetailFlowForm';
        export const deletePermission = 'Transaction:DetailFlowForm';
        export const insertPermission = 'Transaction:DetailFlowForm';
        export const readPermission = 'Transaction:DetailFlowForm';
        export const updatePermission = 'Transaction:DetailFlowForm';

        export declare const enum Fields {
            IdDetailFlowForm = "IdDetailFlowForm",
            IdFormFlow = "IdFormFlow",
            IdJabatan = "IdJabatan",
            UrutanFlow = "UrutanFlow",
            SlaDetail = "SlaDetail",
            IdFormFlowIdMasterForm = "IdFormFlowIdMasterForm",
            IdFormFlowSlaform = "IdFormFlowSlaform",
            IdFormFlowDescForm = "IdFormFlowDescForm",
            IdFormFlowIdDesa = "IdFormFlowIdDesa",
            IdJabatanNamaJabatan = "IdJabatanNamaJabatan",
            IdJabatanDesc = "IdJabatanDesc"
        }
    }
}

