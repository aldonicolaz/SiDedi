namespace SDD.Master {
    export interface MasterPekerjaanRow {
        IdPekerjaan?: number;
        NamaPekerjaan?: string;
        Desc?: string;
    }

    export namespace MasterPekerjaanRow {
        export const idProperty = 'IdPekerjaan';
        export const nameProperty = 'NamaPekerjaan';
        export const localTextPrefix = 'Master.MasterPekerjaan';
        export const lookupKey = 'Master.MasterPekerjaan';

        export function getLookup(): Q.Lookup<MasterPekerjaanRow> {
            return Q.getLookup<MasterPekerjaanRow>('Master.MasterPekerjaan');
        }
        export const deletePermission = 'Master:MasterPekerjaan';
        export const insertPermission = 'Master:MasterPekerjaan';
        export const readPermission = 'Master:MasterPekerjaan';
        export const updatePermission = 'Master:MasterPekerjaan';

        export declare const enum Fields {
            IdPekerjaan = "IdPekerjaan",
            NamaPekerjaan = "NamaPekerjaan",
            Desc = "Desc"
        }
    }
}

