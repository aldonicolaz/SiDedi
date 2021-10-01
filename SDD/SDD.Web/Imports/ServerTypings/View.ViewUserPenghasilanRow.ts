namespace SDD.View {
    export interface ViewUserPenghasilanRow {
        NumberId?: number;
        UserId?: number;
        DisplayName?: string;
        Email?: string;
        NoKtp?: string;
        NoKk?: string;
        PhoneNumber?: string;
        WaNumber?: string;
        TotalHasil?: number;
        IdPekerjaan?: number;
        NamaPekerjaan?: string;
        IdDesa?: number;
        NamaDesa?: string;
        IdKecamatan?: number;
        NamaKecamatan?: string;
        IdKabupaten?: number;
        NamaKabupaten?: string;
        IdPropinsi?: number;
        NamaPropinsi?: string;
    }

    export namespace ViewUserPenghasilanRow {
        export const idProperty = 'NumberId';
        export const nameProperty = 'DisplayName';
        export const localTextPrefix = 'View.ViewUserPenghasilan';
        export const deletePermission = 'View:ViewUserPenghasilan';
        export const insertPermission = 'View:ViewUserPenghasilan';
        export const readPermission = 'View:ViewUserPenghasilan';
        export const updatePermission = 'View:ViewUserPenghasilan';

        export declare const enum Fields {
            NumberId = "NumberId",
            UserId = "UserId",
            DisplayName = "DisplayName",
            Email = "Email",
            NoKtp = "NoKtp",
            NoKk = "NoKk",
            PhoneNumber = "PhoneNumber",
            WaNumber = "WaNumber",
            TotalHasil = "TotalHasil",
            IdPekerjaan = "IdPekerjaan",
            NamaPekerjaan = "NamaPekerjaan",
            IdDesa = "IdDesa",
            NamaDesa = "NamaDesa",
            IdKecamatan = "IdKecamatan",
            NamaKecamatan = "NamaKecamatan",
            IdKabupaten = "IdKabupaten",
            NamaKabupaten = "NamaKabupaten",
            IdPropinsi = "IdPropinsi",
            NamaPropinsi = "NamaPropinsi"
        }
    }
}

