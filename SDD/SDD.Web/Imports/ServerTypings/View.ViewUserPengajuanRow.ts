namespace SDD.View {
    export interface ViewUserPengajuanRow {
        NumberId?: number;
        IdNumber?: number;
        UserPengaju?: number;
        IdFormulir?: number;
        Formulir?: string;
        Dokumen?: string;
    }

    export namespace ViewUserPengajuanRow {
        export const idProperty = 'NumberId';
        export const nameProperty = 'Formulir';
        export const localTextPrefix = 'View.ViewUserPengajuan';
        export const deletePermission = 'View:ViewUserPengajuan';
        export const insertPermission = 'View:ViewUserPengajuan';
        export const readPermission = 'View:ViewUserPengajuan';
        export const updatePermission = 'View:ViewUserPengajuan';

        export declare const enum Fields {
            NumberId = "NumberId",
            IdNumber = "IdNumber",
            UserPengaju = "UserPengaju",
            IdFormulir = "IdFormulir",
            Formulir = "Formulir",
            Dokumen = "Dokumen"
        }
    }
}

