namespace SDD.View {
    export interface VChartPenghasilanDesaRow {
        IdNumber?: number;
        CountTransaksi?: number;
        TotalPenghasilan?: number;
        Namadesa?: string;
        IdDesa?: number;
    }

    export namespace VChartPenghasilanDesaRow {
        export const idProperty = 'IdNumber';
        export const nameProperty = 'Namadesa';
        export const localTextPrefix = 'View.VChartPenghasilanDesa';
        export const deletePermission = 'View:VChartPenghasilanDesa';
        export const insertPermission = 'View:VChartPenghasilanDesa';
        export const readPermission = 'View:VChartPenghasilanDesa';
        export const updatePermission = 'View:VChartPenghasilanDesa';

        export declare const enum Fields {
            IdNumber = "IdNumber",
            CountTransaksi = "CountTransaksi",
            TotalPenghasilan = "TotalPenghasilan",
            Namadesa = "Namadesa",
            IdDesa = "IdDesa"
        }
    }
}

