namespace SDD.Master {
    export interface MasterForumRow {
        IdMasterForum?: number;
        NamaForum?: string;
        Deskripsi?: string;
    }

    export namespace MasterForumRow {
        export const idProperty = 'IdMasterForum';
        export const nameProperty = 'NamaForum';
        export const localTextPrefix = 'Master.MasterForum';
        export const lookupKey = 'Master.MasterForum';

        export function getLookup(): Q.Lookup<MasterForumRow> {
            return Q.getLookup<MasterForumRow>('Master.MasterForum');
        }
        export const deletePermission = 'Master:MasterForum';
        export const insertPermission = 'Master:MasterForum';
        export const readPermission = 'Master:MasterForum';
        export const updatePermission = 'Master:MasterForum';

        export declare const enum Fields {
            IdMasterForum = "IdMasterForum",
            NamaForum = "NamaForum",
            Deskripsi = "Deskripsi"
        }
    }
}

