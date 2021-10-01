namespace SDD.Master {
    export interface MasterFormulirRow {
        IdFormulir?: number;
        NamaFormulir?: string;
        DescFormulir?: string;
    }

    export namespace MasterFormulirRow {
        export const idProperty = 'IdFormulir';
        export const nameProperty = 'NamaFormulir';
        export const localTextPrefix = 'Master.MasterFormulir';
        export const lookupKey = 'Master.MasterFormulir';

        export function getLookup(): Q.Lookup<MasterFormulirRow> {
            return Q.getLookup<MasterFormulirRow>('Master.MasterFormulir');
        }
        export const deletePermission = 'Master:MasterFormulir';
        export const insertPermission = 'Master:MasterFormulir';
        export const readPermission = 'Master:MasterFormulir';
        export const updatePermission = 'Master:MasterFormulir';

        export declare const enum Fields {
            IdFormulir = "IdFormulir",
            NamaFormulir = "NamaFormulir",
            DescFormulir = "DescFormulir"
        }
    }
}

