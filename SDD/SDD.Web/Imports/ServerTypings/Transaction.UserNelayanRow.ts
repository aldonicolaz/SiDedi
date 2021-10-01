namespace SDD.Transaction {
    export interface UserNelayanRow {
        IdUserNelayan?: number;
        IdUser?: number;
        Desc?: string;
        IduserDisplayName?: string;
        DetailNelayan?: DetailKapalNelayanRow[];
        IdPekerjaan?: number;
        IdPekerjaanNamaPekerjaan?: string;
    }

    export namespace UserNelayanRow {
        export const idProperty = 'IdUserNelayan';
        export const nameProperty = 'Desc';
        export const localTextPrefix = 'Transaction.UserNelayan';
        export const deletePermission = 'Transaction:UserNelayan';
        export const insertPermission = 'Transaction:UserNelayan';
        export const readPermission = 'Transaction:UserNelayan';
        export const updatePermission = 'Transaction:UserNelayan';

        export declare const enum Fields {
            IdUserNelayan = "IdUserNelayan",
            IdUser = "IdUser",
            Desc = "Desc",
            IduserDisplayName = "IduserDisplayName",
            DetailNelayan = "DetailNelayan",
            IdPekerjaan = "IdPekerjaan",
            IdPekerjaanNamaPekerjaan = "IdPekerjaanNamaPekerjaan"
        }
    }
}

