namespace SDD.Master {
    export interface MasterSatuanRow {
        IdSatuan?: number;
        NamaSatuan?: string;
        DescSatuan?: string;
    }

    export namespace MasterSatuanRow {
        export const idProperty = 'IdSatuan';
        export const nameProperty = 'NamaSatuan';
        export const localTextPrefix = 'Master.MasterSatuan';
        export const lookupKey = 'Master.MasterSatuan';

        export function getLookup(): Q.Lookup<MasterSatuanRow> {
            return Q.getLookup<MasterSatuanRow>('Master.MasterSatuan');
        }
        export const deletePermission = 'Master:MasterSatuan';
        export const insertPermission = 'Master:MasterSatuan';
        export const readPermission = 'Master:MasterSatuan';
        export const updatePermission = 'Master:MasterSatuan';

        export declare const enum Fields {
            IdSatuan = "IdSatuan",
            NamaSatuan = "NamaSatuan",
            DescSatuan = "DescSatuan"
        }
    }
}

