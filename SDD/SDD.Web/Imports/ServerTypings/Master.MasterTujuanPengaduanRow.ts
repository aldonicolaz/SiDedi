namespace SDD.Master {
    export interface MasterTujuanPengaduanRow {
        IdMasterTujuan?: number;
        NamaTujuan?: string;
    }

    export namespace MasterTujuanPengaduanRow {
        export const idProperty = 'IdMasterTujuan';
        export const nameProperty = 'NamaTujuan';
        export const localTextPrefix = 'Master.MasterTujuanPengaduan';
        export const lookupKey = 'Master.MasterTujuanPengaduan';

        export function getLookup(): Q.Lookup<MasterTujuanPengaduanRow> {
            return Q.getLookup<MasterTujuanPengaduanRow>('Master.MasterTujuanPengaduan');
        }
        export const deletePermission = 'Master:MasterTujuanPengaduan';
        export const insertPermission = 'Master:MasterTujuanPengaduan';
        export const readPermission = 'Master:MasterTujuanPengaduan';
        export const updatePermission = 'Master:MasterTujuanPengaduan';

        export declare const enum Fields {
            IdMasterTujuan = "IdMasterTujuan",
            NamaTujuan = "NamaTujuan"
        }
    }
}

