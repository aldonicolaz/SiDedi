namespace SDD.Master {
    export interface MasterJabatanRow {
        IdJabatan?: number;
        NamaJabatan?: string;
        Desc?: string;
    }

    export namespace MasterJabatanRow {
        export const idProperty = 'IdJabatan';
        export const nameProperty = 'NamaJabatan';
        export const localTextPrefix = 'Master.MasterJabatan';
        export const lookupKey = 'Master.MasterJabatan';

        export function getLookup(): Q.Lookup<MasterJabatanRow> {
            return Q.getLookup<MasterJabatanRow>('Master.MasterJabatan');
        }
        export const deletePermission = 'Master:MasterJabatan';
        export const insertPermission = 'Master:MasterJabatan';
        export const readPermission = 'Master:MasterJabatan';
        export const updatePermission = 'Master:MasterJabatan';

        export declare const enum Fields {
            IdJabatan = "IdJabatan",
            NamaJabatan = "NamaJabatan",
            Desc = "Desc"
        }
    }
}

