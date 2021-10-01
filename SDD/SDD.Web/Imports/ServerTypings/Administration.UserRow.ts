namespace SDD.Administration {
    export interface UserRow {
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
        NamaHubungan?: string;
        IdDesaNamaDesa?: string;
        Pendidikan?: string;
        FcmToken?: string;
        IdVersion?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace UserRow {
        export const idProperty = 'UserId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Administration.User';
        export const lookupKey = 'Administration.User';

        export function getLookup(): Q.Lookup<UserRow> {
            return Q.getLookup<UserRow>('Administration.User');
        }
        export const deletePermission = 'Administration:Security';
        export const insertPermission = 'Administration:Security';
        export const readPermission = 'Administration:Security';
        export const updatePermission = 'Administration:Security';

        export declare const enum Fields {
            IdDesa = "IdDesa",
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            Address = "Address",
            IdHubungan = "IdHubungan",
            NoKTP = "NoKTP",
            NoKK = "NoKK",
            PhoneNumber = "PhoneNumber",
            WaNumber = "WaNumber",
            Option1 = "Option1",
            Option2 = "Option2",
            Option3 = "Option3",
            JenisKelamin = "JenisKelamin",
            TanggalLahir = "TanggalLahir",
            Description = "Description",
            NamaHubungan = "NamaHubungan",
            IdDesaNamaDesa = "IdDesaNamaDesa",
            Pendidikan = "Pendidikan",
            FcmToken = "FcmToken",
            IdVersion = "IdVersion",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

