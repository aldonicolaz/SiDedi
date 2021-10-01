namespace SDD.Master {
    export interface MasterDesaRow {
        IdDesa?: number;
        IdKecamatan?: number;
        NamaDesa?: string;
        LantitudeDesa?: string;
        LongtitudeDesa?: string;
        DescDesa?: string;
        LogoDesa?: string;
        NoKodeDesa?: string;
        IdKecamatanIdKabupaten?: number;
        IdKecamatanNamaKecamatan?: string;
        IdKecamatanLangtitudeKecamatan?: string;
        IdKecamatanLongtitudeKecamatan?: string;
        IdKecamatanKodePos?: string;
        IdKecamatanDecKecamatan?: string;
        IdKecamatanLogoKecamatan?: string;
    }

    export namespace MasterDesaRow {
        export const idProperty = 'IdDesa';
        export const nameProperty = 'NamaDesa';
        export const localTextPrefix = 'Master.MasterDesa';
        export const lookupKey = 'Master.MasterDesa';

        export function getLookup(): Q.Lookup<MasterDesaRow> {
            return Q.getLookup<MasterDesaRow>('Master.MasterDesa');
        }
        export const deletePermission = 'Master:MasterDesa';
        export const insertPermission = 'Master:MasterDesa';
        export const readPermission = 'Master:MasterDesa';
        export const updatePermission = 'Master:MasterDesa';

        export declare const enum Fields {
            IdDesa = "IdDesa",
            IdKecamatan = "IdKecamatan",
            NamaDesa = "NamaDesa",
            LantitudeDesa = "LantitudeDesa",
            LongtitudeDesa = "LongtitudeDesa",
            DescDesa = "DescDesa",
            LogoDesa = "LogoDesa",
            NoKodeDesa = "NoKodeDesa",
            IdKecamatanIdKabupaten = "IdKecamatanIdKabupaten",
            IdKecamatanNamaKecamatan = "IdKecamatanNamaKecamatan",
            IdKecamatanLangtitudeKecamatan = "IdKecamatanLangtitudeKecamatan",
            IdKecamatanLongtitudeKecamatan = "IdKecamatanLongtitudeKecamatan",
            IdKecamatanKodePos = "IdKecamatanKodePos",
            IdKecamatanDecKecamatan = "IdKecamatanDecKecamatan",
            IdKecamatanLogoKecamatan = "IdKecamatanLogoKecamatan"
        }
    }
}

