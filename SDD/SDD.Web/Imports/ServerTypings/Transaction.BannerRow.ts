namespace SDD.Transaction {
    export interface BannerRow {
        IdBanner?: number;
        Image?: string;
        UrlImage?: string;
        IdUser?: number;
        StatusAktif?: number;
        Description?: string;
        DisplayName?: string;
    }

    export namespace BannerRow {
        export const idProperty = 'IdBanner';
        export const nameProperty = 'Image';
        export const localTextPrefix = 'Transaction.Banner';
        export const deletePermission = 'Transaction:Banner';
        export const insertPermission = 'Transaction:Banner';
        export const readPermission = 'Transaction:Banner';
        export const updatePermission = 'Transaction:Banner';

        export declare const enum Fields {
            IdBanner = "IdBanner",
            Image = "Image",
            UrlImage = "UrlImage",
            IdUser = "IdUser",
            StatusAktif = "StatusAktif",
            Description = "Description",
            DisplayName = "DisplayName"
        }
    }
}

