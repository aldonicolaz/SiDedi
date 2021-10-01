namespace SDD.Master {
    export interface MasterBudidayaRow {
        IdBudidaya?: number;
        IdSatuanBudidaya?: number;
        NamaBudidaya?: string;
        IdPekerjaan?: number;
        IdSatuanBudidayaNamaSatuan?: string;
        IdSatuanBudidayaDescSatuan?: string;
        IdPekerjaanNamaPekerjaan?: string;
        IdPekerjaanDesc?: string;
        DetailBudidaya?: MasterHasilBudidayaRow[];
    }

    export namespace MasterBudidayaRow {
        export const idProperty = 'IdBudidaya';
        export const nameProperty = 'NamaBudidaya';
        export const localTextPrefix = 'Master.MasterBudidaya';
        export const lookupKey = 'Master.MasterBudidaya';

        export function getLookup(): Q.Lookup<MasterBudidayaRow> {
            return Q.getLookup<MasterBudidayaRow>('Master.MasterBudidaya');
        }
        export const deletePermission = 'Master:MasterBudidaya';
        export const insertPermission = 'Master:MasterBudidaya';
        export const readPermission = 'Master:MasterBudidaya';
        export const updatePermission = 'Master:MasterBudidaya';

        export declare const enum Fields {
            IdBudidaya = "IdBudidaya",
            IdSatuanBudidaya = "IdSatuanBudidaya",
            NamaBudidaya = "NamaBudidaya",
            IdPekerjaan = "IdPekerjaan",
            IdSatuanBudidayaNamaSatuan = "IdSatuanBudidayaNamaSatuan",
            IdSatuanBudidayaDescSatuan = "IdSatuanBudidayaDescSatuan",
            IdPekerjaanNamaPekerjaan = "IdPekerjaanNamaPekerjaan",
            IdPekerjaanDesc = "IdPekerjaanDesc",
            DetailBudidaya = "DetailBudidaya"
        }
    }
}

