namespace SDD.Transaction {
    export interface DetailUserPerdaganganRow {
        IdDetailPerdagangan?: number;
        IdUserPerdagangan?: number;
        TypeLapak?: number;
        LuasLapak?: number;
        StatusLapak?: number;
        AlamatLapak?: string;
        JumPekerja?: number;
        SemuaBiayaBulanan?: number;
        PenghasilanBulanan?: number;
        Desc?: string;
        IdUserPerdaganganIduser?: number;
        IdUserPerdaganganNamaBrandToko?: string;
        IdUserPerdaganganJenisDagangan?: string;
        IdUserPerdaganganDesc?: string;
    }

    export namespace DetailUserPerdaganganRow {
        export const idProperty = 'IdDetailPerdagangan';
        export const nameProperty = 'AlamatLapak';
        export const localTextPrefix = 'Transaction.DetailUserPerdagangan';
        export const deletePermission = 'Transaction:DetailUserPerdagangan';
        export const insertPermission = 'Transaction:DetailUserPerdagangan';
        export const readPermission = 'Transaction:DetailUserPerdagangan';
        export const updatePermission = 'Transaction:DetailUserPerdagangan';

        export declare const enum Fields {
            IdDetailPerdagangan = "IdDetailPerdagangan",
            IdUserPerdagangan = "IdUserPerdagangan",
            TypeLapak = "TypeLapak",
            LuasLapak = "LuasLapak",
            StatusLapak = "StatusLapak",
            AlamatLapak = "AlamatLapak",
            JumPekerja = "JumPekerja",
            SemuaBiayaBulanan = "SemuaBiayaBulanan",
            PenghasilanBulanan = "PenghasilanBulanan",
            Desc = "Desc",
            IdUserPerdaganganIduser = "IdUserPerdaganganIduser",
            IdUserPerdaganganNamaBrandToko = "IdUserPerdaganganNamaBrandToko",
            IdUserPerdaganganJenisDagangan = "IdUserPerdaganganJenisDagangan",
            IdUserPerdaganganDesc = "IdUserPerdaganganDesc"
        }
    }
}

