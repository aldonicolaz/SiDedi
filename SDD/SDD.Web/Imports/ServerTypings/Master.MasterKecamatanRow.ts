namespace SDD.Master {
    export interface MasterKecamatanRow {
        IdKecamatan?: number;
        IdKabupaten?: number;
        NamaKecamatan?: string;
        LangtitudeKecamatan?: string;
        LongtitudeKecamatan?: string;
        KodePos?: string;
        DecKecamatan?: string;
        LogoKecamatan?: string;
        NoKodeKecamatan?: string;
        IdKabupatenIdPropinsi?: number;
        IdKabupatenNamaKabupaten?: string;
        IdKabupatenLangtitudekabupaten?: string;
        IdKabupatenLongtitudeKabupaten?: string;
        IdKabupatenDescKabupaten?: string;
        IdKabupatenLogoKabupaten?: string;
    }

    export namespace MasterKecamatanRow {
        export const idProperty = 'IdKecamatan';
        export const nameProperty = 'NamaKecamatan';
        export const localTextPrefix = 'Master.MasterKecamatan';
        export const lookupKey = 'Master.MasterKecamatan';

        export function getLookup(): Q.Lookup<MasterKecamatanRow> {
            return Q.getLookup<MasterKecamatanRow>('Master.MasterKecamatan');
        }
        export const deletePermission = 'Master:MasterKecamatan';
        export const insertPermission = 'Master:MasterKecamatan';
        export const readPermission = 'Master:MasterKecamatan';
        export const updatePermission = 'Master:MasterKecamatan';

        export declare const enum Fields {
            IdKecamatan = "IdKecamatan",
            IdKabupaten = "IdKabupaten",
            NamaKecamatan = "NamaKecamatan",
            LangtitudeKecamatan = "LangtitudeKecamatan",
            LongtitudeKecamatan = "LongtitudeKecamatan",
            KodePos = "KodePos",
            DecKecamatan = "DecKecamatan",
            LogoKecamatan = "LogoKecamatan",
            NoKodeKecamatan = "NoKodeKecamatan",
            IdKabupatenIdPropinsi = "IdKabupatenIdPropinsi",
            IdKabupatenNamaKabupaten = "IdKabupatenNamaKabupaten",
            IdKabupatenLangtitudekabupaten = "IdKabupatenLangtitudekabupaten",
            IdKabupatenLongtitudeKabupaten = "IdKabupatenLongtitudeKabupaten",
            IdKabupatenDescKabupaten = "IdKabupatenDescKabupaten",
            IdKabupatenLogoKabupaten = "IdKabupatenLogoKabupaten"
        }
    }
}

