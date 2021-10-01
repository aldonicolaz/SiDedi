namespace SDD.Master {
    export interface MasterKabupatenRow {
        IdKabupaten?: number;
        IdPropinsi?: number;
        NamaKabupaten?: string;
        Langtitudekabupaten?: string;
        LongtitudeKabupaten?: string;
        DescKabupaten?: string;
        LogoKabupaten?: string;
        NoKodeKabupaten?: string;
        IdPropinsiNamaPropinsi?: string;
        IdPropinsiIbuKotaPropinsi?: string;
        IdPropinsiLatitudePropinsi?: string;
        IdPropinsiLongitudePropinsi?: string;
        IdPropinsiDescPropinsi?: string;
        IdPropinsiLogoPropinsi?: string;
    }

    export namespace MasterKabupatenRow {
        export const idProperty = 'IdKabupaten';
        export const nameProperty = 'NamaKabupaten';
        export const localTextPrefix = 'Master.MasterKabupaten';
        export const lookupKey = 'Master.MasterKabupaten';

        export function getLookup(): Q.Lookup<MasterKabupatenRow> {
            return Q.getLookup<MasterKabupatenRow>('Master.MasterKabupaten');
        }
        export const deletePermission = 'Master:MasterKabupaten';
        export const insertPermission = 'Master:MasterKabupaten';
        export const readPermission = 'Master:MasterKabupaten';
        export const updatePermission = 'Master:MasterKabupaten';

        export declare const enum Fields {
            IdKabupaten = "IdKabupaten",
            IdPropinsi = "IdPropinsi",
            NamaKabupaten = "NamaKabupaten",
            Langtitudekabupaten = "Langtitudekabupaten",
            LongtitudeKabupaten = "LongtitudeKabupaten",
            DescKabupaten = "DescKabupaten",
            LogoKabupaten = "LogoKabupaten",
            NoKodeKabupaten = "NoKodeKabupaten",
            IdPropinsiNamaPropinsi = "IdPropinsiNamaPropinsi",
            IdPropinsiIbuKotaPropinsi = "IdPropinsiIbuKotaPropinsi",
            IdPropinsiLatitudePropinsi = "IdPropinsiLatitudePropinsi",
            IdPropinsiLongitudePropinsi = "IdPropinsiLongitudePropinsi",
            IdPropinsiDescPropinsi = "IdPropinsiDescPropinsi",
            IdPropinsiLogoPropinsi = "IdPropinsiLogoPropinsi"
        }
    }
}

