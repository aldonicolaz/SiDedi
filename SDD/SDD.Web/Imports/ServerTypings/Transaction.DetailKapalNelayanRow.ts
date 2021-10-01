namespace SDD.Transaction {
    export interface DetailKapalNelayanRow {
        IdKapalNelayan?: number;
        IdUserNelayan?: number;
        StatusKapal?: number;
        TypeKapal?: string;
        LokasiSandarKapal?: string;
        HasilBulanan?: number;
    }

    export namespace DetailKapalNelayanRow {
        export const idProperty = 'IdKapalNelayan';
        export const nameProperty = 'TypeKapal';
        export const localTextPrefix = 'Transaction.DetailKapalNelayan';
        export const deletePermission = 'Transaction:DetailKapalNelayan';
        export const insertPermission = 'Transaction:DetailKapalNelayan';
        export const readPermission = 'Transaction:DetailKapalNelayan';
        export const updatePermission = 'Transaction:DetailKapalNelayan';

        export declare const enum Fields {
            IdKapalNelayan = "IdKapalNelayan",
            IdUserNelayan = "IdUserNelayan",
            StatusKapal = "StatusKapal",
            TypeKapal = "TypeKapal",
            LokasiSandarKapal = "LokasiSandarKapal",
            HasilBulanan = "HasilBulanan"
        }
    }
}

