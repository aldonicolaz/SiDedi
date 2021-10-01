namespace SDD.Master {
    export interface MasterVersionRow {
        IdMasterVersion?: number;
        NamaVersion?: string;
        NumberVersion?: string;
        Description?: string;
        Timestamp?: string;
    }

    export namespace MasterVersionRow {
        export const idProperty = 'IdMasterVersion';
        export const nameProperty = 'NamaVersion';
        export const localTextPrefix = 'Master.MasterVersion';
        export const deletePermission = 'Master:MasterVersion';
        export const insertPermission = 'Master:MasterVersion';
        export const readPermission = 'Master:MasterVersion';
        export const updatePermission = 'Master:MasterVersion';

        export declare const enum Fields {
            IdMasterVersion = "IdMasterVersion",
            NamaVersion = "NamaVersion",
            NumberVersion = "NumberVersion",
            Description = "Description",
            Timestamp = "Timestamp"
        }
    }
}

