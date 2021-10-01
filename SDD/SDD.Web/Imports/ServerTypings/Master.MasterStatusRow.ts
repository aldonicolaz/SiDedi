namespace SDD.Master {
    export interface MasterStatusRow {
        IdStatus?: number;
        NamaStatus?: string;
    }

    export namespace MasterStatusRow {
        export const idProperty = 'IdStatus';
        export const nameProperty = 'NamaStatus';
        export const localTextPrefix = 'Master.MasterStatus';
        export const lookupKey = 'Master.MasterStatus';

        export function getLookup(): Q.Lookup<MasterStatusRow> {
            return Q.getLookup<MasterStatusRow>('Master.MasterStatus');
        }
        export const deletePermission = 'Master:MasterStatus';
        export const insertPermission = 'Master:MasterStatus';
        export const readPermission = 'Master:MasterStatus';
        export const updatePermission = 'Master:MasterStatus';

        export declare const enum Fields {
            IdStatus = "IdStatus",
            NamaStatus = "NamaStatus"
        }
    }
}

