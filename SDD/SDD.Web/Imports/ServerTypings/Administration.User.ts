namespace SDD.Administration {
    export interface User {
        IdDesa?: number;
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        Address?: string;
        IdHubungan?: number;
        NoKTP?: string;
        NoKK?: string;
        PhoneNumber?: string;
        WaNumber?: string;
        Option1?: string;
        Option2?: string;
        Option3?: string;
        JenisKelamin?: number;
        TanggalLahir?: string;
        Description?: string;
        Pendidikan?: string;
        IdKecamatan?: number;
        IdKabupaten?: number;
        IdPropinsi?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        NamaDesa?: string;
        FcmToken?: string;
    }
}

