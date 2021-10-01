namespace SDD.View {
    export interface ViewAllPengajuanRow {
        NumberId?: number;
        IdNumber?: number;
        IdUserPengajuan?: number;
        IdMasterForm?: number;
        FormulirPengajuan?: string;
    }

    export namespace ViewAllPengajuanRow {
        export const idProperty = 'NumberId';
        export const nameProperty = 'FormulirPengajuan';
        export const localTextPrefix = 'View.ViewAllPengajuan';
        export const deletePermission = 'View:ViewAllPengajuan';
        export const insertPermission = 'View:ViewAllPengajuan';
        export const readPermission = 'View:ViewAllPengajuan';
        export const updatePermission = 'View:ViewAllPengajuan';

        export declare const enum Fields {
            NumberId = "NumberId",
            IdNumber = "IdNumber",
            IdUserPengajuan = "IdUserPengajuan",
            IdMasterForm = "IdMasterForm",
            FormulirPengajuan = "FormulirPengajuan"
        }
    }
}

