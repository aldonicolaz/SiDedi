namespace SDD.View {
    export interface ViewProfilUserRow {
        UserId?: number;
        DisplayName?: string;
        Username?: string;
        Email?: string;
        Address?: string;
        IdHubungan?: number;
        NoKtp?: string;
        NoKk?: string;
        PhoneNumber?: string;
        WaNumber?: string;
        JenisKelamin?: number;
        TanggalLahir?: string;
        IdDesa?: number;
        Pendidikan?: string;
        IdKecamatan?: number;
        NamaDesa?: string;
        LogoDesa?: string;
        NoKodeDesa?: string;
        NamaKecamatan?: string;
        IdKabupaten?: number;
        NoKodeKecamatan?: string;
        KodePos?: string;
        NoKodeKabupaten?: string;
        IdPropinsi?: number;
        NamaKabupaten?: string;
        LogoKabupaten?: string;
        NamaPropinsi?: string;
        IbuKotaPropinsi?: string;
        LogoPropinsi?: string;
        NoKodePropinsi?: string;
        UserImage?: string;
    }

    export namespace ViewProfilUserRow {
        export const idProperty = 'UserId';
        export const nameProperty = 'DisplayName';
        export const localTextPrefix = 'View.ViewProfilUser';
        export const lookupKey = 'View.ViewProfilUser';

        export function getLookup(): Q.Lookup<ViewProfilUserRow> {
            return Q.getLookup<ViewProfilUserRow>('View.ViewProfilUser');
        }
        export const deletePermission = 'View:ViewProfilUser';
        export const insertPermission = 'View:ViewProfilUser';
        export const readPermission = 'View:ViewProfilUser';
        export const updatePermission = 'View:ViewProfilUser';

        export declare const enum Fields {
            UserId = "UserId",
            DisplayName = "DisplayName",
            Username = "Username",
            Email = "Email",
            Address = "Address",
            IdHubungan = "IdHubungan",
            NoKtp = "NoKtp",
            NoKk = "NoKk",
            PhoneNumber = "PhoneNumber",
            WaNumber = "WaNumber",
            JenisKelamin = "JenisKelamin",
            TanggalLahir = "TanggalLahir",
            IdDesa = "IdDesa",
            Pendidikan = "Pendidikan",
            IdKecamatan = "IdKecamatan",
            NamaDesa = "NamaDesa",
            LogoDesa = "LogoDesa",
            NoKodeDesa = "NoKodeDesa",
            NamaKecamatan = "NamaKecamatan",
            IdKabupaten = "IdKabupaten",
            NoKodeKecamatan = "NoKodeKecamatan",
            KodePos = "KodePos",
            NoKodeKabupaten = "NoKodeKabupaten",
            IdPropinsi = "IdPropinsi",
            NamaKabupaten = "NamaKabupaten",
            LogoKabupaten = "LogoKabupaten",
            NamaPropinsi = "NamaPropinsi",
            IbuKotaPropinsi = "IbuKotaPropinsi",
            LogoPropinsi = "LogoPropinsi",
            NoKodePropinsi = "NoKodePropinsi",
            UserImage = "UserImage"
        }
    }
}

