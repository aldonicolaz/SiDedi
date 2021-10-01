namespace SDD.Master {
    export interface MasterHasilBudidayaRow {
        IdHasilBudidaya?: number;
        IdMasterBudidaya?: number;
        NamaHasil?: string;
        IdSatuanHasil?: number;
        Desc?: string;
        IdMasterBudidayaIdSatuanBudidaya?: number;
        IdMasterBudidayaNamaBudidaya?: string;
        IdMasterBudidayaIdPekerjaan?: number;
        IdSatuanHasilNamaSatuan?: string;
        IdSatuanHasilDescSatuan?: string;
    }

    export namespace MasterHasilBudidayaRow {
        export const idProperty = 'IdHasilBudidaya';
        export const nameProperty = 'NamaHasil';
        export const localTextPrefix = 'Master.MasterHasilBudidaya';
        export const lookupKey = 'Master.MasterHasilBudidaya';

        export function getLookup(): Q.Lookup<MasterHasilBudidayaRow> {
            return Q.getLookup<MasterHasilBudidayaRow>('Master.MasterHasilBudidaya');
        }
        export const deletePermission = 'Master:MasterHasilBudidaya';
        export const insertPermission = 'Master:MasterHasilBudidaya';
        export const readPermission = 'Master:MasterHasilBudidaya';
        export const updatePermission = 'Master:MasterHasilBudidaya';

        export declare const enum Fields {
            IdHasilBudidaya = "IdHasilBudidaya",
            IdMasterBudidaya = "IdMasterBudidaya",
            NamaHasil = "NamaHasil",
            IdSatuanHasil = "IdSatuanHasil",
            Desc = "Desc",
            IdMasterBudidayaIdSatuanBudidaya = "IdMasterBudidayaIdSatuanBudidaya",
            IdMasterBudidayaNamaBudidaya = "IdMasterBudidayaNamaBudidaya",
            IdMasterBudidayaIdPekerjaan = "IdMasterBudidayaIdPekerjaan",
            IdSatuanHasilNamaSatuan = "IdSatuanHasilNamaSatuan",
            IdSatuanHasilDescSatuan = "IdSatuanHasilDescSatuan"
        }
    }
}

