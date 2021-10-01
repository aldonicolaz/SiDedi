namespace SDD.Master {
    export interface MasterHubunganRow {
        IdHubungan?: number;
        NamaHubungan?: string;
        KodeHubungan?: string;
        DescHubungan?: string;
    }

    export namespace MasterHubunganRow {
        export const idProperty = 'IdHubungan';
        export const nameProperty = 'NamaHubungan';
        export const localTextPrefix = 'Master.MasterHubungan';
        export const lookupKey = 'Master.MasterHubungan';

        export function getLookup(): Q.Lookup<MasterHubunganRow> {
            return Q.getLookup<MasterHubunganRow>('Master.MasterHubungan');
        }
        export const deletePermission = 'Master:MasterHubungan';
        export const insertPermission = 'Master:MasterHubungan';
        export const readPermission = 'Master:MasterHubungan';
        export const updatePermission = 'Master:MasterHubungan';

        export declare const enum Fields {
            IdHubungan = "IdHubungan",
            NamaHubungan = "NamaHubungan",
            KodeHubungan = "KodeHubungan",
            DescHubungan = "DescHubungan"
        }
    }
}

