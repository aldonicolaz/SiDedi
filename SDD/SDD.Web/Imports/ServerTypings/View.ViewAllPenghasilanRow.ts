namespace SDD.View {
    export interface ViewAllPenghasilanRow {
        IdNumber?: number;
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
        JenisKelamin?: string;
        TanggalLahir?: string;
        IdDesa?: number;
        NamaDesa?: string;
        IdKecamatan?: number;
        NamaKecamatan?: string;
        IdKabupaten?: number;
        NamaKabupaten?: string;
        IdPropinsi?: number;
        NamaPropinsi?: string;
        TotalPenghasilanPeternakan?: number;
        TotalPenghasilanPertanian?: number;
        TotalPenghasilanNelayan?: number;
        TotalPenghasilanKaryawan?: number;
        TotalPenghasilanPerdagangan?: number;
        TotalPenghasilan?: number;
    }

    export namespace ViewAllPenghasilanRow {
        export const idProperty = 'IdNumber';
        export const nameProperty = 'DisplayName';
        export const localTextPrefix = 'View.ViewAllPenghasilan';
        export const deletePermission = 'View:ViewAllPenghasilan';
        export const insertPermission = 'View:ViewAllPenghasilan';
        export const readPermission = 'View:ViewAllPenghasilan';
        export const updatePermission = 'View:ViewAllPenghasilan';

        export declare const enum Fields {
            IdNumber = "IdNumber",
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
            NamaDesa = "NamaDesa",
            IdKecamatan = "IdKecamatan",
            NamaKecamatan = "NamaKecamatan",
            IdKabupaten = "IdKabupaten",
            NamaKabupaten = "NamaKabupaten",
            IdPropinsi = "IdPropinsi",
            NamaPropinsi = "NamaPropinsi",
            TotalPenghasilanPeternakan = "TotalPenghasilanPeternakan",
            TotalPenghasilanPertanian = "TotalPenghasilanPertanian",
            TotalPenghasilanNelayan = "TotalPenghasilanNelayan",
            TotalPenghasilanKaryawan = "TotalPenghasilanKaryawan",
            TotalPenghasilanPerdagangan = "TotalPenghasilanPerdagangan",
            TotalPenghasilan = "TotalPenghasilan"
        }
    }
}

