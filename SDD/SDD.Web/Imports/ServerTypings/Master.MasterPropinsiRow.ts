namespace SDD.Master {
    export interface MasterPropinsiRow {
        IdPropinsi?: number;
        NamaPropinsi?: string;
        IbuKotaPropinsi?: string;
        LatitudePropinsi?: string;
        LongitudePropinsi?: string;
        DescPropinsi?: string;
        LogoPropinsi?: string;
        NoKodePropinsi?: string;
    }

    export namespace MasterPropinsiRow {
        export const idProperty = 'IdPropinsi';
        export const nameProperty = 'NamaPropinsi';
        export const localTextPrefix = 'Master.MasterPropinsi';
        export const lookupKey = 'Master.MasterPropinsi';

        export function getLookup(): Q.Lookup<MasterPropinsiRow> {
            return Q.getLookup<MasterPropinsiRow>('Master.MasterPropinsi');
        }
        export const deletePermission = 'Master:MasterPropinsi';
        export const insertPermission = 'Master:MasterPropinsi';
        export const readPermission = 'Master:MasterPropinsi';
        export const updatePermission = 'Master:MasterPropinsi';

        export declare const enum Fields {
            IdPropinsi = "IdPropinsi",
            NamaPropinsi = "NamaPropinsi",
            IbuKotaPropinsi = "IbuKotaPropinsi",
            LatitudePropinsi = "LatitudePropinsi",
            LongitudePropinsi = "LongitudePropinsi",
            DescPropinsi = "DescPropinsi",
            LogoPropinsi = "LogoPropinsi",
            NoKodePropinsi = "NoKodePropinsi"
        }
    }
}

