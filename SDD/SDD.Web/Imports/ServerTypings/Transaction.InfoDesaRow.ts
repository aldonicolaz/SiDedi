namespace SDD.Transaction {
    export interface InfoDesaRow {
        IdInfoDesa?: number;
        IdUser?: number;
        Image?: string;
        BodyInfo?: string;
        TitleInfo?: string;
        ShortDescInfo?: string;
        Timestamp?: string;
        DisplayName?: string;
    }

    export namespace InfoDesaRow {
        export const idProperty = 'IdInfoDesa';
        export const nameProperty = 'Image';
        export const localTextPrefix = 'Transaction.InfoDesa';
        export const deletePermission = 'Transaction:InfoDesa';
        export const insertPermission = 'Transaction:InfoDesa';
        export const readPermission = 'Transaction:InfoDesa';
        export const updatePermission = 'Transaction:InfoDesa';

        export declare const enum Fields {
            IdInfoDesa = "IdInfoDesa",
            IdUser = "IdUser",
            Image = "Image",
            BodyInfo = "BodyInfo",
            TitleInfo = "TitleInfo",
            ShortDescInfo = "ShortDescInfo",
            Timestamp = "Timestamp",
            DisplayName = "DisplayName"
        }
    }
}

