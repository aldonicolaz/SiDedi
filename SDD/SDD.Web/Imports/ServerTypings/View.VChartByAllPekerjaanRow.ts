namespace SDD.View {
    export interface VChartByAllPekerjaanRow {
        IdNumber?: number;
        CountTransaksi?: number;
        TotalPenghasilan?: number;
        IdPekerjaan?: number;
        NamaPekerjaan?: string;
    }

    export namespace VChartByAllPekerjaanRow {
        export const idProperty = 'IdNumber';
        export const nameProperty = 'NamaPekerjaan';
        export const localTextPrefix = 'View.VChartByAllPekerjaan';
        export const deletePermission = 'View:VChartByAllPekerjaan';
        export const insertPermission = 'View:VChartByAllPekerjaan';
        export const readPermission = 'View:VChartByAllPekerjaan';
        export const updatePermission = 'View:VChartByAllPekerjaan';

        export declare const enum Fields {
            IdNumber = "IdNumber",
            CountTransaksi = "CountTransaksi",
            TotalPenghasilan = "TotalPenghasilan",
            IdPekerjaan = "IdPekerjaan",
            NamaPekerjaan = "NamaPekerjaan"
        }
    }
}

