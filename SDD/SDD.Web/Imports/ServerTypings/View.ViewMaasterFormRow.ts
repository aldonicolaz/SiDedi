namespace SDD.View {
    export interface ViewMaasterFormRow {
        IdNumber?: number;
        IdFormFlow?: number;
        NamaFormulir?: string;
        IdFormulir?: number;
        Slaform?: number;
        DescForm?: string;
        NamaDesa?: string;
        NamaKecamatan?: string;
        KodePos?: string;
        ReqForm?: string;
    }

    export namespace ViewMaasterFormRow {
        export const idProperty = 'IdNumber';
        export const nameProperty = 'NamaFormulir';
        export const localTextPrefix = 'View.ViewMaasterForm';
        export const lookupKey = 'View.ViewMaasterForm';

        export function getLookup(): Q.Lookup<ViewMaasterFormRow> {
            return Q.getLookup<ViewMaasterFormRow>('View.ViewMaasterForm');
        }
        export const deletePermission = 'View:ViewMaasterForm';
        export const insertPermission = 'View:ViewMaasterForm';
        export const readPermission = 'View:ViewMaasterForm';
        export const updatePermission = 'View:ViewMaasterForm';

        export declare const enum Fields {
            IdNumber = "IdNumber",
            IdFormFlow = "IdFormFlow",
            NamaFormulir = "NamaFormulir",
            IdFormulir = "IdFormulir",
            Slaform = "Slaform",
            DescForm = "DescForm",
            NamaDesa = "NamaDesa",
            NamaKecamatan = "NamaKecamatan",
            KodePos = "KodePos",
            ReqForm = "ReqForm"
        }
    }
}

