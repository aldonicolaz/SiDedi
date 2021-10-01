/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace SDD.Administration {
    enum JenisKelamin {
        Pria = 1,
        Wanita = 2
    }
}
declare namespace SDD.Administration {
}
declare namespace SDD.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace SDD.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace SDD.Administration {
}
declare namespace SDD.Administration {
}
declare namespace SDD.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SDD.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace SDD.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace SDD.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace SDD.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace SDD.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace SDD.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace SDD.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace SDD.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace SDD.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace SDD.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace SDD.Administration {
    interface User {
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
declare namespace SDD.Administration {
}
declare namespace SDD.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        IdDesa: Serenity.LookupEditor;
        IdHubungan: Serenity.LookupEditor;
        NoKTP: Serenity.StringEditor;
        NoKK: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        WaNumber: Serenity.StringEditor;
        Option1: Serenity.StringEditor;
        Option2: Serenity.StringEditor;
        Option3: Serenity.StringEditor;
        JenisKelamin: Serenity.EnumEditor;
        TanggalLahir: Serenity.DateEditor;
        Pendidikan: Pendidikan;
        Description: Serenity.TextAreaEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SDD.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SDD.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace SDD.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace SDD.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace SDD.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace SDD.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        RoleName?: string;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            RoleName = "RoleName",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SDD.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace SDD.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace SDD.Administration {
    interface UserRow {
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
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
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
declare namespace SDD.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetProfile(request: Serenity.ListRequest, onSuccess?: (response: System.Collections.Generic.List<User>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List",
            GetProfile = "Administration/User/GetProfile"
        }
    }
}
declare namespace SDD.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace SDD.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace SDD.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace SDD.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace SDD.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace SDD {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace SDD {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace SDD {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace SDD {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace SDD.Master {
    interface DataBudidaya {
        IdBudidaya?: number;
        IdPekerjaan?: number;
        NamaBudidaya?: string;
        IdSatuanBudidaya?: number;
        detail?: DataHasilBudidaya[];
    }
}
declare namespace SDD.Master {
    interface DataHasilBudidaya {
        IdHasilBudidaya?: number;
        IdMasterBudidaya?: number;
        NamaHasil?: string;
        IdSatuanHasil?: number;
        Desc?: string;
    }
}
declare namespace SDD.Master {
    interface ListDesa extends Serenity.ServiceResponse {
        ListDataDesa?: MasterDesaRow[];
    }
}
declare namespace SDD.Master {
    interface ListKabupaten extends Serenity.ServiceResponse {
        ListDataKabupaten?: MasterKabupatenRow[];
    }
}
declare namespace SDD.Master {
    interface ListKecamatan extends Serenity.ServiceResponse {
        ListDataKecamatan?: MasterKecamatanRow[];
    }
}
declare namespace SDD.Master {
    interface ListTransaction extends Serenity.ServiceResponse {
        ListTransactionRow?: DataBudidaya[];
    }
}
declare namespace SDD.Master {
    interface ListTransactionHasil extends Serenity.ServiceResponse {
        ListMasterHasilBudidaya?: MasterHasilBudidayaRow[];
    }
}
declare namespace SDD.Master {
    interface ListTransactionMasterBudidaya extends Serenity.ServiceResponse {
        ListMasterBudidaya?: MasterBudidayaRow[];
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterBudidayaForm {
        IdPekerjaan: Serenity.LookupEditor;
        NamaBudidaya: Serenity.StringEditor;
        IdSatuanBudidaya: Serenity.LookupEditor;
        DetailBudidaya: MasterHasilBudidayaGrid;
    }
    class MasterBudidayaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterBudidayaRow {
        IdBudidaya?: number;
        IdSatuanBudidaya?: number;
        NamaBudidaya?: string;
        IdPekerjaan?: number;
        IdSatuanBudidayaNamaSatuan?: string;
        IdSatuanBudidayaDescSatuan?: string;
        IdPekerjaanNamaPekerjaan?: string;
        IdPekerjaanDesc?: string;
        DetailBudidaya?: MasterHasilBudidayaRow[];
    }
    namespace MasterBudidayaRow {
        const idProperty = "IdBudidaya";
        const nameProperty = "NamaBudidaya";
        const localTextPrefix = "Master.MasterBudidaya";
        const lookupKey = "Master.MasterBudidaya";
        function getLookup(): Q.Lookup<MasterBudidayaRow>;
        const deletePermission = "Master:MasterBudidaya";
        const insertPermission = "Master:MasterBudidaya";
        const readPermission = "Master:MasterBudidaya";
        const updatePermission = "Master:MasterBudidaya";
        const enum Fields {
            IdBudidaya = "IdBudidaya",
            IdSatuanBudidaya = "IdSatuanBudidaya",
            NamaBudidaya = "NamaBudidaya",
            IdPekerjaan = "IdPekerjaan",
            IdSatuanBudidayaNamaSatuan = "IdSatuanBudidayaNamaSatuan",
            IdSatuanBudidayaDescSatuan = "IdSatuanBudidayaDescSatuan",
            IdPekerjaanNamaPekerjaan = "IdPekerjaanNamaPekerjaan",
            IdPekerjaanDesc = "IdPekerjaanDesc",
            DetailBudidaya = "DetailBudidaya"
        }
    }
}
declare namespace SDD.Master {
    namespace MasterBudidayaService {
        const baseUrl = "Master/MasterBudidaya";
        function Create(request: Serenity.SaveRequest<MasterBudidayaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterBudidayaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterBudidayaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterBudidayaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetListMasterBudidaya(request: PostIdpekerjaan, onSuccess?: (response: ListTransactionMasterBudidaya) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetListHasilBudidaya(request: PostIdhasil, onSuccess?: (response: ListTransactionHasil) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListBudidaya(request: PostIdpekerjaan, onSuccess?: (response: ListTransaction) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterBudidaya/Create",
            Update = "Master/MasterBudidaya/Update",
            Delete = "Master/MasterBudidaya/Delete",
            Retrieve = "Master/MasterBudidaya/Retrieve",
            List = "Master/MasterBudidaya/List",
            GetListMasterBudidaya = "Master/MasterBudidaya/GetListMasterBudidaya",
            GetListHasilBudidaya = "Master/MasterBudidaya/GetListHasilBudidaya",
            ListBudidaya = "Master/MasterBudidaya/ListBudidaya"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterDesaForm {
        IdKecamatan: Serenity.LookupEditor;
        NamaDesa: Serenity.StringEditor;
        NoKodeDesa: Serenity.StringEditor;
        LantitudeDesa: Serenity.StringEditor;
        LongtitudeDesa: Serenity.StringEditor;
        LogoDesa: Serenity.ImageUploadEditor;
        DescDesa: Serenity.TextAreaEditor;
    }
    class MasterDesaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterDesaRow {
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
    namespace MasterDesaRow {
        const idProperty = "IdDesa";
        const nameProperty = "NamaDesa";
        const localTextPrefix = "Master.MasterDesa";
        const lookupKey = "Master.MasterDesa";
        function getLookup(): Q.Lookup<MasterDesaRow>;
        const deletePermission = "Master:MasterDesa";
        const insertPermission = "Master:MasterDesa";
        const readPermission = "Master:MasterDesa";
        const updatePermission = "Master:MasterDesa";
        const enum Fields {
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
declare namespace SDD.Master {
    namespace MasterDesaService {
        const baseUrl = "Master/MasterDesa";
        function Create(request: Serenity.SaveRequest<MasterDesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterDesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterDesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterDesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterDesa/Create",
            Update = "Master/MasterDesa/Update",
            Delete = "Master/MasterDesa/Delete",
            Retrieve = "Master/MasterDesa/Retrieve",
            List = "Master/MasterDesa/List"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterFormulirForm {
        NamaFormulir: Serenity.StringEditor;
        DescFormulir: Serenity.TextAreaEditor;
    }
    class MasterFormulirForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterFormulirRow {
        IdFormulir?: number;
        NamaFormulir?: string;
        DescFormulir?: string;
    }
    namespace MasterFormulirRow {
        const idProperty = "IdFormulir";
        const nameProperty = "NamaFormulir";
        const localTextPrefix = "Master.MasterFormulir";
        const lookupKey = "Master.MasterFormulir";
        function getLookup(): Q.Lookup<MasterFormulirRow>;
        const deletePermission = "Master:MasterFormulir";
        const insertPermission = "Master:MasterFormulir";
        const readPermission = "Master:MasterFormulir";
        const updatePermission = "Master:MasterFormulir";
        const enum Fields {
            IdFormulir = "IdFormulir",
            NamaFormulir = "NamaFormulir",
            DescFormulir = "DescFormulir"
        }
    }
}
declare namespace SDD.Master {
    namespace MasterFormulirService {
        const baseUrl = "Master/MasterFormulir";
        function Create(request: Serenity.SaveRequest<MasterFormulirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterFormulirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterFormulirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterFormulirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterFormulir/Create",
            Update = "Master/MasterFormulir/Update",
            Delete = "Master/MasterFormulir/Delete",
            Retrieve = "Master/MasterFormulir/Retrieve",
            List = "Master/MasterFormulir/List"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterForumForm {
        NamaForum: Serenity.StringEditor;
        Deskripsi: Serenity.TextAreaEditor;
    }
    class MasterForumForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterForumRow {
        IdMasterForum?: number;
        NamaForum?: string;
        Deskripsi?: string;
    }
    namespace MasterForumRow {
        const idProperty = "IdMasterForum";
        const nameProperty = "NamaForum";
        const localTextPrefix = "Master.MasterForum";
        const lookupKey = "Master.MasterForum";
        function getLookup(): Q.Lookup<MasterForumRow>;
        const deletePermission = "Master:MasterForum";
        const insertPermission = "Master:MasterForum";
        const readPermission = "Master:MasterForum";
        const updatePermission = "Master:MasterForum";
        const enum Fields {
            IdMasterForum = "IdMasterForum",
            NamaForum = "NamaForum",
            Deskripsi = "Deskripsi"
        }
    }
}
declare namespace SDD.Master {
    namespace MasterForumService {
        const baseUrl = "Master/MasterForum";
        function Create(request: Serenity.SaveRequest<MasterForumRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterForumRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterForumRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterForumRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterForum/Create",
            Update = "Master/MasterForum/Update",
            Delete = "Master/MasterForum/Delete",
            Retrieve = "Master/MasterForum/Retrieve",
            List = "Master/MasterForum/List"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterHasilBudidayaForm {
        NamaHasil: Serenity.StringEditor;
        IdSatuanHasil: Serenity.LookupEditor;
        Desc: Serenity.TextAreaEditor;
    }
    class MasterHasilBudidayaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterHasilBudidayaRow {
        IdHasilBudidaya?: number;
        IdMasterBudidaya?: number;
        NamaHasil?: string;
        IdSatuanHasil?: number;
        Desc?: string;
        IdMasterBudidayaIdSatuanBudidaya?: number;
        IdMasterBudidayaNamaBudidaya?: string;
        IdMasterBudidayaIdPekerjaan?: number;
        IdSatuanHasilNamaSatuan?: string;
        IdSatuanHasilDescSatuan?: string;
    }
    namespace MasterHasilBudidayaRow {
        const idProperty = "IdHasilBudidaya";
        const nameProperty = "NamaHasil";
        const localTextPrefix = "Master.MasterHasilBudidaya";
        const lookupKey = "Master.MasterHasilBudidaya";
        function getLookup(): Q.Lookup<MasterHasilBudidayaRow>;
        const deletePermission = "Master:MasterHasilBudidaya";
        const insertPermission = "Master:MasterHasilBudidaya";
        const readPermission = "Master:MasterHasilBudidaya";
        const updatePermission = "Master:MasterHasilBudidaya";
        const enum Fields {
            IdHasilBudidaya = "IdHasilBudidaya",
            IdMasterBudidaya = "IdMasterBudidaya",
            NamaHasil = "NamaHasil",
            IdSatuanHasil = "IdSatuanHasil",
            Desc = "Desc",
            IdMasterBudidayaIdSatuanBudidaya = "IdMasterBudidayaIdSatuanBudidaya",
            IdMasterBudidayaNamaBudidaya = "IdMasterBudidayaNamaBudidaya",
            IdMasterBudidayaIdPekerjaan = "IdMasterBudidayaIdPekerjaan",
            IdSatuanHasilNamaSatuan = "IdSatuanHasilNamaSatuan",
            IdSatuanHasilDescSatuan = "IdSatuanHasilDescSatuan"
        }
    }
}
declare namespace SDD.Master {
    namespace MasterHasilBudidayaService {
        const baseUrl = "Master/MasterHasilBudidaya";
        function Create(request: Serenity.SaveRequest<MasterHasilBudidayaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterHasilBudidayaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterHasilBudidayaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterHasilBudidayaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterHasilBudidaya/Create",
            Update = "Master/MasterHasilBudidaya/Update",
            Delete = "Master/MasterHasilBudidaya/Delete",
            Retrieve = "Master/MasterHasilBudidaya/Retrieve",
            List = "Master/MasterHasilBudidaya/List"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterHubunganForm {
        NamaHubungan: Serenity.StringEditor;
        KodeHubungan: Serenity.StringEditor;
        DescHubungan: Serenity.TextAreaEditor;
    }
    class MasterHubunganForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterHubunganRow {
        IdHubungan?: number;
        NamaHubungan?: string;
        KodeHubungan?: string;
        DescHubungan?: string;
    }
    namespace MasterHubunganRow {
        const idProperty = "IdHubungan";
        const nameProperty = "NamaHubungan";
        const localTextPrefix = "Master.MasterHubungan";
        const lookupKey = "Master.MasterHubungan";
        function getLookup(): Q.Lookup<MasterHubunganRow>;
        const deletePermission = "Master:MasterHubungan";
        const insertPermission = "Master:MasterHubungan";
        const readPermission = "Master:MasterHubungan";
        const updatePermission = "Master:MasterHubungan";
        const enum Fields {
            IdHubungan = "IdHubungan",
            NamaHubungan = "NamaHubungan",
            KodeHubungan = "KodeHubungan",
            DescHubungan = "DescHubungan"
        }
    }
}
declare namespace SDD.Master {
    namespace MasterHubunganService {
        const baseUrl = "Master/MasterHubungan";
        function Create(request: Serenity.SaveRequest<MasterHubunganRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterHubunganRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterHubunganRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterHubunganRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterHubungan/Create",
            Update = "Master/MasterHubungan/Update",
            Delete = "Master/MasterHubungan/Delete",
            Retrieve = "Master/MasterHubungan/Retrieve",
            List = "Master/MasterHubungan/List"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterJabatanForm {
        NamaJabatan: Serenity.StringEditor;
        Desc: Serenity.TextAreaEditor;
    }
    class MasterJabatanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterJabatanRow {
        IdJabatan?: number;
        NamaJabatan?: string;
        Desc?: string;
    }
    namespace MasterJabatanRow {
        const idProperty = "IdJabatan";
        const nameProperty = "NamaJabatan";
        const localTextPrefix = "Master.MasterJabatan";
        const lookupKey = "Master.MasterJabatan";
        function getLookup(): Q.Lookup<MasterJabatanRow>;
        const deletePermission = "Master:MasterJabatan";
        const insertPermission = "Master:MasterJabatan";
        const readPermission = "Master:MasterJabatan";
        const updatePermission = "Master:MasterJabatan";
        const enum Fields {
            IdJabatan = "IdJabatan",
            NamaJabatan = "NamaJabatan",
            Desc = "Desc"
        }
    }
}
declare namespace SDD.Master {
    namespace MasterJabatanService {
        const baseUrl = "Master/MasterJabatan";
        function Create(request: Serenity.SaveRequest<MasterJabatanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterJabatanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterJabatanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterJabatanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterJabatan/Create",
            Update = "Master/MasterJabatan/Update",
            Delete = "Master/MasterJabatan/Delete",
            Retrieve = "Master/MasterJabatan/Retrieve",
            List = "Master/MasterJabatan/List"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterKabupatenForm {
        IdPropinsi: Serenity.LookupEditor;
        NamaKabupaten: Serenity.StringEditor;
        NoKodeKabupaten: Serenity.StringEditor;
        Langtitudekabupaten: Serenity.StringEditor;
        LongtitudeKabupaten: Serenity.StringEditor;
        DescKabupaten: Serenity.TextAreaEditor;
        LogoKabupaten: Serenity.ImageUploadEditor;
    }
    class MasterKabupatenForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterKabupatenRow {
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
    namespace MasterKabupatenRow {
        const idProperty = "IdKabupaten";
        const nameProperty = "NamaKabupaten";
        const localTextPrefix = "Master.MasterKabupaten";
        const lookupKey = "Master.MasterKabupaten";
        function getLookup(): Q.Lookup<MasterKabupatenRow>;
        const deletePermission = "Master:MasterKabupaten";
        const insertPermission = "Master:MasterKabupaten";
        const readPermission = "Master:MasterKabupaten";
        const updatePermission = "Master:MasterKabupaten";
        const enum Fields {
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
declare namespace SDD.Master {
    namespace MasterKabupatenService {
        const baseUrl = "Master/MasterKabupaten";
        function Create(request: Serenity.SaveRequest<MasterKabupatenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterKabupatenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterKabupatenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterKabupatenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterKabupaten/Create",
            Update = "Master/MasterKabupaten/Update",
            Delete = "Master/MasterKabupaten/Delete",
            Retrieve = "Master/MasterKabupaten/Retrieve",
            List = "Master/MasterKabupaten/List"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterKecamatanForm {
        IdKabupaten: Serenity.LookupEditor;
        NamaKecamatan: Serenity.StringEditor;
        NoKodeKecamatan: Serenity.StringEditor;
        LangtitudeKecamatan: Serenity.StringEditor;
        LongtitudeKecamatan: Serenity.StringEditor;
        KodePos: Serenity.StringEditor;
        DecKecamatan: Serenity.TextAreaEditor;
        LogoKecamatan: Serenity.ImageUploadEditor;
    }
    class MasterKecamatanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterKecamatanRow {
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
    namespace MasterKecamatanRow {
        const idProperty = "IdKecamatan";
        const nameProperty = "NamaKecamatan";
        const localTextPrefix = "Master.MasterKecamatan";
        const lookupKey = "Master.MasterKecamatan";
        function getLookup(): Q.Lookup<MasterKecamatanRow>;
        const deletePermission = "Master:MasterKecamatan";
        const insertPermission = "Master:MasterKecamatan";
        const readPermission = "Master:MasterKecamatan";
        const updatePermission = "Master:MasterKecamatan";
        const enum Fields {
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
declare namespace SDD.Master {
    namespace MasterKecamatanService {
        const baseUrl = "Master/MasterKecamatan";
        function Create(request: Serenity.SaveRequest<MasterKecamatanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterKecamatanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterKecamatanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterKecamatanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterKecamatan/Create",
            Update = "Master/MasterKecamatan/Update",
            Delete = "Master/MasterKecamatan/Delete",
            Retrieve = "Master/MasterKecamatan/Retrieve",
            List = "Master/MasterKecamatan/List"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterPekerjaanForm {
        NamaPekerjaan: Serenity.StringEditor;
        Desc: Serenity.TextAreaEditor;
    }
    class MasterPekerjaanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterPekerjaanRow {
        IdPekerjaan?: number;
        NamaPekerjaan?: string;
        Desc?: string;
    }
    namespace MasterPekerjaanRow {
        const idProperty = "IdPekerjaan";
        const nameProperty = "NamaPekerjaan";
        const localTextPrefix = "Master.MasterPekerjaan";
        const lookupKey = "Master.MasterPekerjaan";
        function getLookup(): Q.Lookup<MasterPekerjaanRow>;
        const deletePermission = "Master:MasterPekerjaan";
        const insertPermission = "Master:MasterPekerjaan";
        const readPermission = "Master:MasterPekerjaan";
        const updatePermission = "Master:MasterPekerjaan";
        const enum Fields {
            IdPekerjaan = "IdPekerjaan",
            NamaPekerjaan = "NamaPekerjaan",
            Desc = "Desc"
        }
    }
}
declare namespace SDD.Master {
    namespace MasterPekerjaanService {
        const baseUrl = "Master/MasterPekerjaan";
        function Create(request: Serenity.SaveRequest<MasterPekerjaanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterPekerjaanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterPekerjaanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterPekerjaanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterPekerjaan/Create",
            Update = "Master/MasterPekerjaan/Update",
            Delete = "Master/MasterPekerjaan/Delete",
            Retrieve = "Master/MasterPekerjaan/Retrieve",
            List = "Master/MasterPekerjaan/List"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterPropinsiForm {
        NamaPropinsi: Serenity.StringEditor;
        IbuKotaPropinsi: Serenity.StringEditor;
        NoKodePropinsi: Serenity.StringEditor;
        LatitudePropinsi: Serenity.StringEditor;
        LongitudePropinsi: Serenity.StringEditor;
        DescPropinsi: Serenity.TextAreaEditor;
        LogoPropinsi: Serenity.ImageUploadEditor;
    }
    class MasterPropinsiForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterPropinsiRow {
        IdPropinsi?: number;
        NamaPropinsi?: string;
        IbuKotaPropinsi?: string;
        LatitudePropinsi?: string;
        LongitudePropinsi?: string;
        DescPropinsi?: string;
        LogoPropinsi?: string;
        NoKodePropinsi?: string;
    }
    namespace MasterPropinsiRow {
        const idProperty = "IdPropinsi";
        const nameProperty = "NamaPropinsi";
        const localTextPrefix = "Master.MasterPropinsi";
        const lookupKey = "Master.MasterPropinsi";
        function getLookup(): Q.Lookup<MasterPropinsiRow>;
        const deletePermission = "Master:MasterPropinsi";
        const insertPermission = "Master:MasterPropinsi";
        const readPermission = "Master:MasterPropinsi";
        const updatePermission = "Master:MasterPropinsi";
        const enum Fields {
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
declare namespace SDD.Master {
    namespace MasterPropinsiService {
        const baseUrl = "Master/MasterPropinsi";
        function Create(request: Serenity.SaveRequest<MasterPropinsiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterPropinsiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterPropinsiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterPropinsiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetListKabupaten(request: PostIdPropinsi, onSuccess?: (response: ListKabupaten) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetListKecamatan(request: PostIdKabupaten, onSuccess?: (response: ListKecamatan) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetListDesa(request: PostIdKecamatan, onSuccess?: (response: ListDesa) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterPropinsi/Create",
            Update = "Master/MasterPropinsi/Update",
            Delete = "Master/MasterPropinsi/Delete",
            Retrieve = "Master/MasterPropinsi/Retrieve",
            List = "Master/MasterPropinsi/List",
            GetListKabupaten = "Master/MasterPropinsi/GetListKabupaten",
            GetListKecamatan = "Master/MasterPropinsi/GetListKecamatan",
            GetListDesa = "Master/MasterPropinsi/GetListDesa"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterSatuanForm {
        NamaSatuan: Serenity.StringEditor;
        DescSatuan: Serenity.TextAreaEditor;
    }
    class MasterSatuanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterSatuanRow {
        IdSatuan?: number;
        NamaSatuan?: string;
        DescSatuan?: string;
    }
    namespace MasterSatuanRow {
        const idProperty = "IdSatuan";
        const nameProperty = "NamaSatuan";
        const localTextPrefix = "Master.MasterSatuan";
        const lookupKey = "Master.MasterSatuan";
        function getLookup(): Q.Lookup<MasterSatuanRow>;
        const deletePermission = "Master:MasterSatuan";
        const insertPermission = "Master:MasterSatuan";
        const readPermission = "Master:MasterSatuan";
        const updatePermission = "Master:MasterSatuan";
        const enum Fields {
            IdSatuan = "IdSatuan",
            NamaSatuan = "NamaSatuan",
            DescSatuan = "DescSatuan"
        }
    }
}
declare namespace SDD.Master {
    namespace MasterSatuanService {
        const baseUrl = "Master/MasterSatuan";
        function Create(request: Serenity.SaveRequest<MasterSatuanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterSatuanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterSatuanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterSatuanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterSatuan/Create",
            Update = "Master/MasterSatuan/Update",
            Delete = "Master/MasterSatuan/Delete",
            Retrieve = "Master/MasterSatuan/Retrieve",
            List = "Master/MasterSatuan/List"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterStatusForm {
        NamaStatus: Serenity.StringEditor;
    }
    class MasterStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterStatusRow {
        IdStatus?: number;
        NamaStatus?: string;
    }
    namespace MasterStatusRow {
        const idProperty = "IdStatus";
        const nameProperty = "NamaStatus";
        const localTextPrefix = "Master.MasterStatus";
        const lookupKey = "Master.MasterStatus";
        function getLookup(): Q.Lookup<MasterStatusRow>;
        const deletePermission = "Master:MasterStatus";
        const insertPermission = "Master:MasterStatus";
        const readPermission = "Master:MasterStatus";
        const updatePermission = "Master:MasterStatus";
        const enum Fields {
            IdStatus = "IdStatus",
            NamaStatus = "NamaStatus"
        }
    }
}
declare namespace SDD.Master {
    namespace MasterStatusService {
        const baseUrl = "Master/MasterStatus";
        function Create(request: Serenity.SaveRequest<MasterStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterStatus/Create",
            Update = "Master/MasterStatus/Update",
            Delete = "Master/MasterStatus/Delete",
            Retrieve = "Master/MasterStatus/Retrieve",
            List = "Master/MasterStatus/List"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterTujuanPengaduanForm {
        NamaTujuan: Serenity.StringEditor;
    }
    class MasterTujuanPengaduanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterTujuanPengaduanRow {
        IdMasterTujuan?: number;
        NamaTujuan?: string;
    }
    namespace MasterTujuanPengaduanRow {
        const idProperty = "IdMasterTujuan";
        const nameProperty = "NamaTujuan";
        const localTextPrefix = "Master.MasterTujuanPengaduan";
        const lookupKey = "Master.MasterTujuanPengaduan";
        function getLookup(): Q.Lookup<MasterTujuanPengaduanRow>;
        const deletePermission = "Master:MasterTujuanPengaduan";
        const insertPermission = "Master:MasterTujuanPengaduan";
        const readPermission = "Master:MasterTujuanPengaduan";
        const updatePermission = "Master:MasterTujuanPengaduan";
        const enum Fields {
            IdMasterTujuan = "IdMasterTujuan",
            NamaTujuan = "NamaTujuan"
        }
    }
}
declare namespace SDD.Master {
    namespace MasterTujuanPengaduanService {
        const baseUrl = "Master/MasterTujuanPengaduan";
        function Create(request: Serenity.SaveRequest<MasterTujuanPengaduanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterTujuanPengaduanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterTujuanPengaduanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterTujuanPengaduanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterTujuanPengaduan/Create",
            Update = "Master/MasterTujuanPengaduan/Update",
            Delete = "Master/MasterTujuanPengaduan/Delete",
            Retrieve = "Master/MasterTujuanPengaduan/Retrieve",
            List = "Master/MasterTujuanPengaduan/List"
        }
    }
}
declare namespace SDD.Master {
}
declare namespace SDD.Master {
    interface MasterVersionForm {
        NamaVersion: Serenity.StringEditor;
        NumberVersion: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class MasterVersionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Master {
    interface MasterVersionRow {
        IdMasterVersion?: number;
        NamaVersion?: string;
        NumberVersion?: string;
        Description?: string;
        Timestamp?: string;
    }
    namespace MasterVersionRow {
        const idProperty = "IdMasterVersion";
        const nameProperty = "NamaVersion";
        const localTextPrefix = "Master.MasterVersion";
        const deletePermission = "Master:MasterVersion";
        const insertPermission = "Master:MasterVersion";
        const readPermission = "Master:MasterVersion";
        const updatePermission = "Master:MasterVersion";
        const enum Fields {
            IdMasterVersion = "IdMasterVersion",
            NamaVersion = "NamaVersion",
            NumberVersion = "NumberVersion",
            Description = "Description",
            Timestamp = "Timestamp"
        }
    }
}
declare namespace SDD.Master {
    namespace MasterVersionService {
        const baseUrl = "Master/MasterVersion";
        function Create(request: Serenity.SaveRequest<MasterVersionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterVersionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterVersionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterVersionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MasterVersion/Create",
            Update = "Master/MasterVersion/Update",
            Delete = "Master/MasterVersion/Delete",
            Retrieve = "Master/MasterVersion/Retrieve",
            List = "Master/MasterVersion/List"
        }
    }
}
declare namespace SDD.Master {
    interface PostIdKabupaten extends Serenity.ServiceRequest {
        IdKabupaten?: number;
    }
}
declare namespace SDD.Master {
    interface PostIdKecamatan extends Serenity.ServiceRequest {
        IdKecamatan?: number;
    }
}
declare namespace SDD.Master {
    interface PostIdPropinsi extends Serenity.ServiceRequest {
        IdPropinsi?: number;
    }
}
declare namespace SDD.Master {
    interface PostIdhasil extends Serenity.ServiceRequest {
        IdBudidaya?: number;
    }
}
declare namespace SDD.Master {
    interface PostIdpekerjaan extends Serenity.ServiceRequest {
        IdPekerjaan?: number;
    }
}
declare namespace SDD.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SDD.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace SDD.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace SDD.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SDD.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace SDD {
    interface ScriptUserDefinition {
        UserId?: number;
        RoleId?: number;
        RoleName?: string;
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
        Roles?: string[];
        RolesId?: number[];
        IdDesa?: number;
    }
}
declare namespace SDD.Texts {
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface AparaturDesaForm {
        IdJabatan: Serenity.LookupEditor;
        StatusAparatur: Serenity.EnumEditor;
        PeriodeAwal: Serenity.DateEditor;
        PeriodeAkhir: Serenity.DateEditor;
        DescAparaturDesa: Serenity.TextAreaEditor;
    }
    class AparaturDesaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface AparaturDesaRow {
        IdAparaturDesa?: number;
        IdUser?: number;
        IdDesa?: number;
        IdJabatan?: number;
        StatusAparatur?: number;
        PeriodeAwal?: string;
        PeriodeAkhir?: string;
        DescAparaturDesa?: string;
        IdUserUsername?: string;
        IdUserDisplayName?: string;
        IdUserEmail?: string;
        IdUserSource?: string;
        IdUserPasswordHash?: string;
        IdUserPasswordSalt?: string;
        IdUserLastDirectoryUpdate?: string;
        IdUserUserImage?: string;
        IdUserInsertDate?: string;
        IdUserInsertUserId?: number;
        IdUserUpdateDate?: string;
        IdUserUpdateUserId?: number;
        IdUserIsActive?: number;
        IdUserAddress?: string;
        IdUserIdHubungan?: number;
        IdUserNoKtp?: string;
        IdUserNoKk?: string;
        IdUserPhoneNumber?: string;
        IdUserWaNumber?: string;
        IdUserOption1?: string;
        IdUserOption2?: string;
        IdUserOption3?: string;
        IdUserTanggalLahir?: string;
        IdUserDescription?: string;
        IdDesaIdKecamatan?: number;
        IdDesaNamaDesa?: string;
        IdDesaLantitudeDesa?: string;
        IdDesaLongtitudeDesa?: string;
        IdDesaDescDesa?: string;
        IdDesaLogoDesa?: string;
        IdJabatanNamaJabatan?: string;
        IdJabatanDesc?: string;
    }
    namespace AparaturDesaRow {
        const idProperty = "IdAparaturDesa";
        const nameProperty = "DescAparaturDesa";
        const localTextPrefix = "Transaction.AparaturDesa";
        const deletePermission = "Transaction:AparaturDesa";
        const insertPermission = "Transaction:AparaturDesa";
        const readPermission = "Transaction:AparaturDesa";
        const updatePermission = "Transaction:AparaturDesa";
        const enum Fields {
            IdAparaturDesa = "IdAparaturDesa",
            IdUser = "IdUser",
            IdDesa = "IdDesa",
            IdJabatan = "IdJabatan",
            StatusAparatur = "StatusAparatur",
            PeriodeAwal = "PeriodeAwal",
            PeriodeAkhir = "PeriodeAkhir",
            DescAparaturDesa = "DescAparaturDesa",
            IdUserUsername = "IdUserUsername",
            IdUserDisplayName = "IdUserDisplayName",
            IdUserEmail = "IdUserEmail",
            IdUserSource = "IdUserSource",
            IdUserPasswordHash = "IdUserPasswordHash",
            IdUserPasswordSalt = "IdUserPasswordSalt",
            IdUserLastDirectoryUpdate = "IdUserLastDirectoryUpdate",
            IdUserUserImage = "IdUserUserImage",
            IdUserInsertDate = "IdUserInsertDate",
            IdUserInsertUserId = "IdUserInsertUserId",
            IdUserUpdateDate = "IdUserUpdateDate",
            IdUserUpdateUserId = "IdUserUpdateUserId",
            IdUserIsActive = "IdUserIsActive",
            IdUserAddress = "IdUserAddress",
            IdUserIdHubungan = "IdUserIdHubungan",
            IdUserNoKtp = "IdUserNoKtp",
            IdUserNoKk = "IdUserNoKk",
            IdUserPhoneNumber = "IdUserPhoneNumber",
            IdUserWaNumber = "IdUserWaNumber",
            IdUserOption1 = "IdUserOption1",
            IdUserOption2 = "IdUserOption2",
            IdUserOption3 = "IdUserOption3",
            IdUserTanggalLahir = "IdUserTanggalLahir",
            IdUserDescription = "IdUserDescription",
            IdDesaIdKecamatan = "IdDesaIdKecamatan",
            IdDesaNamaDesa = "IdDesaNamaDesa",
            IdDesaLantitudeDesa = "IdDesaLantitudeDesa",
            IdDesaLongtitudeDesa = "IdDesaLongtitudeDesa",
            IdDesaDescDesa = "IdDesaDescDesa",
            IdDesaLogoDesa = "IdDesaLogoDesa",
            IdJabatanNamaJabatan = "IdJabatanNamaJabatan",
            IdJabatanDesc = "IdJabatanDesc"
        }
    }
}
declare namespace SDD.Transaction {
    namespace AparaturDesaService {
        const baseUrl = "Transaction/AparaturDesa";
        function Create(request: Serenity.SaveRequest<AparaturDesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AparaturDesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AparaturDesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AparaturDesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/AparaturDesa/Create",
            Update = "Transaction/AparaturDesa/Update",
            Delete = "Transaction/AparaturDesa/Delete",
            Retrieve = "Transaction/AparaturDesa/Retrieve",
            List = "Transaction/AparaturDesa/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface BannerForm {
        Image: Serenity.ImageUploadEditor;
        StatusAktif: Serenity.RadioButtonEditor;
        Description: Serenity.TextAreaEditor;
    }
    class BannerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface BannerRow {
        IdBanner?: number;
        Image?: string;
        UrlImage?: string;
        IdUser?: number;
        StatusAktif?: number;
        Description?: string;
        DisplayName?: string;
    }
    namespace BannerRow {
        const idProperty = "IdBanner";
        const nameProperty = "Image";
        const localTextPrefix = "Transaction.Banner";
        const deletePermission = "Transaction:Banner";
        const insertPermission = "Transaction:Banner";
        const readPermission = "Transaction:Banner";
        const updatePermission = "Transaction:Banner";
        const enum Fields {
            IdBanner = "IdBanner",
            Image = "Image",
            UrlImage = "UrlImage",
            IdUser = "IdUser",
            StatusAktif = "StatusAktif",
            Description = "Description",
            DisplayName = "DisplayName"
        }
    }
}
declare namespace SDD.Transaction {
    namespace BannerService {
        const baseUrl = "Transaction/Banner";
        function Create(request: Serenity.SaveRequest<BannerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BannerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BannerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BannerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/Banner/Create",
            Update = "Transaction/Banner/Update",
            Delete = "Transaction/Banner/Delete",
            Retrieve = "Transaction/Banner/Retrieve",
            List = "Transaction/Banner/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface DetailAktaLahirForm {
        NamaSaksi: Serenity.StringEditor;
        TglLahirSaksi: Serenity.DateEditor;
        PekerjaanSaksi: Serenity.StringEditor;
        NikSaksi: Serenity.StringEditor;
        Desc: Serenity.TextAreaEditor;
    }
    class DetailAktaLahirForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface DetailAktaLahirRow {
        IdDetailAktaLahir?: number;
        IdAktaLahir?: number;
        NamaSaksi?: string;
        TglLahirSaksi?: string;
        PekerjaanSaksi?: string;
        NikSaksi?: string;
        Desc?: string;
        IdAktaLahirIdFormFlow?: number;
        IdAktaLahirIdUserPelapor?: number;
        IdAktaLahirNamaBayi?: string;
        IdAktaLahirKelaminBayi?: number;
        IdAktaLahirTempatKelahiran?: string;
        IdAktaLahirHariKelahiran?: string;
        IdAktaLahirTglLahir?: string;
        IdAktaLahirWaktuKelahiran?: string;
        IdAktaLahirJenisKelahiran?: number;
        IdAktaLahirBeratBayi?: number;
        IdAktaLahirPanjangBayi?: number;
        IdAktaLahirAnakKe?: number;
        IdAktaLahirNamaIbu?: string;
        IdAktaLahirNikIbu?: string;
        IdAktaLahirPekerjaanIbu?: string;
        IdAktaLahirTglLahirIbu?: string;
        IdAktaLahirAlamatIbu?: string;
        IdAktaLahirNamaAyah?: string;
        IdAktaLahirTglLahirAyah?: string;
        IdAktaLahirPekerjaanAyah?: string;
        IdAktaLahirAlamatAyah?: string;
        IdAktaLahirNikAyah?: string;
        IdAktaLahirLinkDocAkta?: string;
    }
    namespace DetailAktaLahirRow {
        const idProperty = "IdDetailAktaLahir";
        const nameProperty = "NamaSaksi";
        const localTextPrefix = "Transaction.DetailAktaLahir";
        const deletePermission = "Transaction:DetailAktaLahir";
        const insertPermission = "Transaction:DetailAktaLahir";
        const readPermission = "Transaction:DetailAktaLahir";
        const updatePermission = "Transaction:DetailAktaLahir";
        const enum Fields {
            IdDetailAktaLahir = "IdDetailAktaLahir",
            IdAktaLahir = "IdAktaLahir",
            NamaSaksi = "NamaSaksi",
            TglLahirSaksi = "TglLahirSaksi",
            PekerjaanSaksi = "PekerjaanSaksi",
            NikSaksi = "NikSaksi",
            Desc = "Desc",
            IdAktaLahirIdFormFlow = "IdAktaLahirIdFormFlow",
            IdAktaLahirIdUserPelapor = "IdAktaLahirIdUserPelapor",
            IdAktaLahirNamaBayi = "IdAktaLahirNamaBayi",
            IdAktaLahirKelaminBayi = "IdAktaLahirKelaminBayi",
            IdAktaLahirTempatKelahiran = "IdAktaLahirTempatKelahiran",
            IdAktaLahirHariKelahiran = "IdAktaLahirHariKelahiran",
            IdAktaLahirTglLahir = "IdAktaLahirTglLahir",
            IdAktaLahirWaktuKelahiran = "IdAktaLahirWaktuKelahiran",
            IdAktaLahirJenisKelahiran = "IdAktaLahirJenisKelahiran",
            IdAktaLahirBeratBayi = "IdAktaLahirBeratBayi",
            IdAktaLahirPanjangBayi = "IdAktaLahirPanjangBayi",
            IdAktaLahirAnakKe = "IdAktaLahirAnakKe",
            IdAktaLahirNamaIbu = "IdAktaLahirNamaIbu",
            IdAktaLahirNikIbu = "IdAktaLahirNikIbu",
            IdAktaLahirPekerjaanIbu = "IdAktaLahirPekerjaanIbu",
            IdAktaLahirTglLahirIbu = "IdAktaLahirTglLahirIbu",
            IdAktaLahirAlamatIbu = "IdAktaLahirAlamatIbu",
            IdAktaLahirNamaAyah = "IdAktaLahirNamaAyah",
            IdAktaLahirTglLahirAyah = "IdAktaLahirTglLahirAyah",
            IdAktaLahirPekerjaanAyah = "IdAktaLahirPekerjaanAyah",
            IdAktaLahirAlamatAyah = "IdAktaLahirAlamatAyah",
            IdAktaLahirNikAyah = "IdAktaLahirNikAyah",
            IdAktaLahirLinkDocAkta = "IdAktaLahirLinkDocAkta"
        }
    }
}
declare namespace SDD.Transaction {
    namespace DetailAktaLahirService {
        const baseUrl = "Transaction/DetailAktaLahir";
        function Create(request: Serenity.SaveRequest<DetailAktaLahirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DetailAktaLahirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailAktaLahirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailAktaLahirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/DetailAktaLahir/Create",
            Update = "Transaction/DetailAktaLahir/Update",
            Delete = "Transaction/DetailAktaLahir/Delete",
            Retrieve = "Transaction/DetailAktaLahir/Retrieve",
            List = "Transaction/DetailAktaLahir/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface DetailFlowFormForm {
        IdJabatan: Serenity.LookupEditor;
        UrutanFlow: Serenity.IntegerEditor;
        SlaDetail: Serenity.IntegerEditor;
    }
    class DetailFlowFormForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface DetailFlowFormRow {
        IdDetailFlowForm?: number;
        IdFormFlow?: number;
        IdJabatan?: number;
        UrutanFlow?: number;
        SlaDetail?: number;
        IdFormFlowIdMasterForm?: number;
        IdFormFlowSlaform?: number;
        IdFormFlowDescForm?: string;
        IdFormFlowIdDesa?: number;
        IdJabatanNamaJabatan?: string;
        IdJabatanDesc?: string;
    }
    namespace DetailFlowFormRow {
        const idProperty = "IdDetailFlowForm";
        const localTextPrefix = "Transaction.DetailFlowForm";
        const deletePermission = "Transaction:DetailFlowForm";
        const insertPermission = "Transaction:DetailFlowForm";
        const readPermission = "Transaction:DetailFlowForm";
        const updatePermission = "Transaction:DetailFlowForm";
        const enum Fields {
            IdDetailFlowForm = "IdDetailFlowForm",
            IdFormFlow = "IdFormFlow",
            IdJabatan = "IdJabatan",
            UrutanFlow = "UrutanFlow",
            SlaDetail = "SlaDetail",
            IdFormFlowIdMasterForm = "IdFormFlowIdMasterForm",
            IdFormFlowSlaform = "IdFormFlowSlaform",
            IdFormFlowDescForm = "IdFormFlowDescForm",
            IdFormFlowIdDesa = "IdFormFlowIdDesa",
            IdJabatanNamaJabatan = "IdJabatanNamaJabatan",
            IdJabatanDesc = "IdJabatanDesc"
        }
    }
}
declare namespace SDD.Transaction {
    namespace DetailFlowFormService {
        const baseUrl = "Transaction/DetailFlowForm";
        function Create(request: Serenity.SaveRequest<DetailFlowFormRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DetailFlowFormRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailFlowFormRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailFlowFormRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/DetailFlowForm/Create",
            Update = "Transaction/DetailFlowForm/Update",
            Delete = "Transaction/DetailFlowForm/Delete",
            Retrieve = "Transaction/DetailFlowForm/Retrieve",
            List = "Transaction/DetailFlowForm/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface DetailFormulirKkForm {
        IdMasterHub: Serenity.LookupEditor;
        Nik: Serenity.StringEditor;
        NamaLengkap: Serenity.StringEditor;
    }
    class DetailFormulirKkForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface DetailFormulirKkRow {
        IdDetailKk?: number;
        IdFormulirKk?: number;
        IdMasterHub?: number;
        Nik?: string;
        NamaLengkap?: string;
        IdFormulirKkIdMasterFlow?: number;
        IdFormulirKkIdUser?: number;
        IdFormulirKkAlasanPemohon?: string;
        IdFormulirKkJumlahKk?: number;
        IdFormulirKkTimestamp?: string;
        IdFormulirKkLinkDocKk?: string;
        IdMasterHubNamaHubungan?: string;
        IdMasterHubKodeHubungan?: string;
        IdMasterHubDescHubungan?: string;
    }
    namespace DetailFormulirKkRow {
        const idProperty = "IdDetailKk";
        const nameProperty = "Nik";
        const localTextPrefix = "Transaction.DetailFormulirKk";
        const deletePermission = "Transaction:DetailFormulirKk";
        const insertPermission = "Transaction:DetailFormulirKk";
        const readPermission = "Transaction:DetailFormulirKk";
        const updatePermission = "Transaction:DetailFormulirKk";
        const enum Fields {
            IdDetailKk = "IdDetailKk",
            IdFormulirKk = "IdFormulirKk",
            IdMasterHub = "IdMasterHub",
            Nik = "Nik",
            NamaLengkap = "NamaLengkap",
            IdFormulirKkIdMasterFlow = "IdFormulirKkIdMasterFlow",
            IdFormulirKkIdUser = "IdFormulirKkIdUser",
            IdFormulirKkAlasanPemohon = "IdFormulirKkAlasanPemohon",
            IdFormulirKkJumlahKk = "IdFormulirKkJumlahKk",
            IdFormulirKkTimestamp = "IdFormulirKkTimestamp",
            IdFormulirKkLinkDocKk = "IdFormulirKkLinkDocKk",
            IdMasterHubNamaHubungan = "IdMasterHubNamaHubungan",
            IdMasterHubKodeHubungan = "IdMasterHubKodeHubungan",
            IdMasterHubDescHubungan = "IdMasterHubDescHubungan"
        }
    }
}
declare namespace SDD.Transaction {
    namespace DetailFormulirKkService {
        const baseUrl = "Transaction/DetailFormulirKk";
        function Create(request: Serenity.SaveRequest<DetailFormulirKkRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DetailFormulirKkRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailFormulirKkRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailFormulirKkRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/DetailFormulirKk/Create",
            Update = "Transaction/DetailFormulirKk/Update",
            Delete = "Transaction/DetailFormulirKk/Delete",
            Retrieve = "Transaction/DetailFormulirKk/Retrieve",
            List = "Transaction/DetailFormulirKk/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface DetailForumForm {
        DetailRespon: Serenity.TextAreaEditor;
        FotoDokumenRespon: Serenity.MultipleImageUploadEditor;
    }
    class DetailForumForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface DetailForumRow {
        IdDetailForum?: number;
        IdForum?: number;
        IdUserRespon?: number;
        DetailRespon?: string;
        FotoDokumenRespon?: string;
        Timestamp?: string;
        IdForumIdMasterForum?: number;
        IdForumIdUserInsert?: number;
        IdForumDetailForum?: string;
        IdForumFotoDokumenForum?: string;
        IdForumHiddenUser?: number;
        IdForumTimestamp?: string;
        IdUserResponUsername?: string;
        IdUserResponDisplayName?: string;
        IdUserResponEmail?: string;
        IdUserResponSource?: string;
        IdUserResponPasswordHash?: string;
        IdUserResponPasswordSalt?: string;
        IdUserResponLastDirectoryUpdate?: string;
        IdUserResponUserImage?: string;
        IdUserResponInsertDate?: string;
        IdUserResponInsertUserId?: number;
        IdUserResponUpdateDate?: string;
        IdUserResponUpdateUserId?: number;
        IdUserResponIsActive?: number;
        IdUserResponAddress?: string;
        IdUserResponIdHubungan?: number;
        IdUserResponNoKtp?: string;
        IdUserResponNoKk?: string;
        IdUserResponPhoneNumber?: string;
        IdUserResponWaNumber?: string;
        IdUserResponOption1?: string;
        IdUserResponOption2?: string;
        IdUserResponOption3?: string;
        IdUserResponJenisKelamin?: number;
        IdUserResponTanggalLahir?: string;
        IdUserResponDescription?: string;
        IdUserResponIdDesa?: number;
        IdUserResponPendidikan?: string;
        IdUserResponIdVersion?: number;
        IdUserResponFcmToken?: string;
    }
    namespace DetailForumRow {
        const idProperty = "IdDetailForum";
        const nameProperty = "DetailRespon";
        const localTextPrefix = "Transaction.DetailForum";
        const deletePermission = "Transaction:DetailForum";
        const insertPermission = "Transaction:DetailForum";
        const readPermission = "Transaction:DetailForum";
        const updatePermission = "Transaction:DetailForum";
        const enum Fields {
            IdDetailForum = "IdDetailForum",
            IdForum = "IdForum",
            IdUserRespon = "IdUserRespon",
            DetailRespon = "DetailRespon",
            FotoDokumenRespon = "FotoDokumenRespon",
            Timestamp = "Timestamp",
            IdForumIdMasterForum = "IdForumIdMasterForum",
            IdForumIdUserInsert = "IdForumIdUserInsert",
            IdForumDetailForum = "IdForumDetailForum",
            IdForumFotoDokumenForum = "IdForumFotoDokumenForum",
            IdForumHiddenUser = "IdForumHiddenUser",
            IdForumTimestamp = "IdForumTimestamp",
            IdUserResponUsername = "IdUserResponUsername",
            IdUserResponDisplayName = "IdUserResponDisplayName",
            IdUserResponEmail = "IdUserResponEmail",
            IdUserResponSource = "IdUserResponSource",
            IdUserResponPasswordHash = "IdUserResponPasswordHash",
            IdUserResponPasswordSalt = "IdUserResponPasswordSalt",
            IdUserResponLastDirectoryUpdate = "IdUserResponLastDirectoryUpdate",
            IdUserResponUserImage = "IdUserResponUserImage",
            IdUserResponInsertDate = "IdUserResponInsertDate",
            IdUserResponInsertUserId = "IdUserResponInsertUserId",
            IdUserResponUpdateDate = "IdUserResponUpdateDate",
            IdUserResponUpdateUserId = "IdUserResponUpdateUserId",
            IdUserResponIsActive = "IdUserResponIsActive",
            IdUserResponAddress = "IdUserResponAddress",
            IdUserResponIdHubungan = "IdUserResponIdHubungan",
            IdUserResponNoKtp = "IdUserResponNoKtp",
            IdUserResponNoKk = "IdUserResponNoKk",
            IdUserResponPhoneNumber = "IdUserResponPhoneNumber",
            IdUserResponWaNumber = "IdUserResponWaNumber",
            IdUserResponOption1 = "IdUserResponOption1",
            IdUserResponOption2 = "IdUserResponOption2",
            IdUserResponOption3 = "IdUserResponOption3",
            IdUserResponJenisKelamin = "IdUserResponJenisKelamin",
            IdUserResponTanggalLahir = "IdUserResponTanggalLahir",
            IdUserResponDescription = "IdUserResponDescription",
            IdUserResponIdDesa = "IdUserResponIdDesa",
            IdUserResponPendidikan = "IdUserResponPendidikan",
            IdUserResponIdVersion = "IdUserResponIdVersion",
            IdUserResponFcmToken = "IdUserResponFcmToken"
        }
    }
}
declare namespace SDD.Transaction {
    namespace DetailForumService {
        const baseUrl = "Transaction/DetailForum";
        function Create(request: Serenity.SaveRequest<DetailForumRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DetailForumRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailForumRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailForumRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/DetailForum/Create",
            Update = "Transaction/DetailForum/Update",
            Delete = "Transaction/DetailForum/Delete",
            Retrieve = "Transaction/DetailForum/Retrieve",
            List = "Transaction/DetailForum/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface DetailKapalNelayanForm {
        StatusKapal: Serenity.EnumEditor;
        TypeKapal: TypeKapal;
        LokasiSandarKapal: Serenity.TextAreaEditor;
        HasilBulanan: Serenity.DecimalEditor;
    }
    class DetailKapalNelayanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface DetailKapalNelayanRow {
        IdKapalNelayan?: number;
        IdUserNelayan?: number;
        StatusKapal?: number;
        TypeKapal?: string;
        LokasiSandarKapal?: string;
        HasilBulanan?: number;
    }
    namespace DetailKapalNelayanRow {
        const idProperty = "IdKapalNelayan";
        const nameProperty = "TypeKapal";
        const localTextPrefix = "Transaction.DetailKapalNelayan";
        const deletePermission = "Transaction:DetailKapalNelayan";
        const insertPermission = "Transaction:DetailKapalNelayan";
        const readPermission = "Transaction:DetailKapalNelayan";
        const updatePermission = "Transaction:DetailKapalNelayan";
        const enum Fields {
            IdKapalNelayan = "IdKapalNelayan",
            IdUserNelayan = "IdUserNelayan",
            StatusKapal = "StatusKapal",
            TypeKapal = "TypeKapal",
            LokasiSandarKapal = "LokasiSandarKapal",
            HasilBulanan = "HasilBulanan"
        }
    }
}
declare namespace SDD.Transaction {
    namespace DetailKapalNelayanService {
        const baseUrl = "Transaction/DetailKapalNelayan";
        function Create(request: Serenity.SaveRequest<DetailKapalNelayanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DetailKapalNelayanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailKapalNelayanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailKapalNelayanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/DetailKapalNelayan/Create",
            Update = "Transaction/DetailKapalNelayan/Update",
            Delete = "Transaction/DetailKapalNelayan/Delete",
            Retrieve = "Transaction/DetailKapalNelayan/Retrieve",
            List = "Transaction/DetailKapalNelayan/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface DetailPengaduanForm {
        Tanggapan: Serenity.TextAreaEditor;
    }
    class DetailPengaduanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface DetailPengaduanRow {
        IdDetailPengaduan?: number;
        IdPengaduan?: number;
        IdUserPenanggap?: number;
        Tanggapan?: string;
        Timestamp?: string;
        IdPengaduanIdUserPengadu?: number;
        IdPengaduanIdDesa?: number;
        IdPengaduanIdMasterTujuan?: number;
        IdPengaduanPerihalPengaduan?: string;
        IdPengaduanFotoDokumen?: string;
        IdPengaduanTimestamp?: string;
        IdUserPenanggapUsername?: string;
        DisplayName?: string;
        IdUserPenanggapEmail?: string;
        IdUserPenanggapSource?: string;
        IdUserPenanggapPasswordHash?: string;
        IdUserPenanggapPasswordSalt?: string;
        IdUserPenanggapLastDirectoryUpdate?: string;
        IdUserPenanggapUserImage?: string;
        IdUserPenanggapInsertDate?: string;
        IdUserPenanggapInsertUserId?: number;
        IdUserPenanggapUpdateDate?: string;
        IdUserPenanggapUpdateUserId?: number;
        IdUserPenanggapIsActive?: number;
        IdUserPenanggapAddress?: string;
        IdUserPenanggapIdHubungan?: number;
        IdUserPenanggapNoKtp?: string;
        IdUserPenanggapNoKk?: string;
        IdUserPenanggapPhoneNumber?: string;
        IdUserPenanggapWaNumber?: string;
        IdUserPenanggapOption1?: string;
        IdUserPenanggapOption2?: string;
        IdUserPenanggapOption3?: string;
        IdUserPenanggapJenisKelamin?: number;
        IdUserPenanggapTanggalLahir?: string;
        IdUserPenanggapDescription?: string;
        IdUserPenanggapIdDesa?: number;
        IdUserPenanggapPendidikan?: string;
        IdUserPenanggapIdVersion?: number;
        IdUserPenanggapFcmToken?: string;
    }
    namespace DetailPengaduanRow {
        const idProperty = "IdDetailPengaduan";
        const nameProperty = "Tanggapan";
        const localTextPrefix = "Transaction.DetailPengaduan";
        const lookupKey = "Transaction.DetailPengaduan";
        function getLookup(): Q.Lookup<DetailPengaduanRow>;
        const deletePermission = "Transaction:DetailPengaduan";
        const insertPermission = "Transaction:DetailPengaduan";
        const readPermission = "Transaction:DetailPengaduan";
        const updatePermission = "Transaction:DetailPengaduan";
        const enum Fields {
            IdDetailPengaduan = "IdDetailPengaduan",
            IdPengaduan = "IdPengaduan",
            IdUserPenanggap = "IdUserPenanggap",
            Tanggapan = "Tanggapan",
            Timestamp = "Timestamp",
            IdPengaduanIdUserPengadu = "IdPengaduanIdUserPengadu",
            IdPengaduanIdDesa = "IdPengaduanIdDesa",
            IdPengaduanIdMasterTujuan = "IdPengaduanIdMasterTujuan",
            IdPengaduanPerihalPengaduan = "IdPengaduanPerihalPengaduan",
            IdPengaduanFotoDokumen = "IdPengaduanFotoDokumen",
            IdPengaduanTimestamp = "IdPengaduanTimestamp",
            IdUserPenanggapUsername = "IdUserPenanggapUsername",
            DisplayName = "DisplayName",
            IdUserPenanggapEmail = "IdUserPenanggapEmail",
            IdUserPenanggapSource = "IdUserPenanggapSource",
            IdUserPenanggapPasswordHash = "IdUserPenanggapPasswordHash",
            IdUserPenanggapPasswordSalt = "IdUserPenanggapPasswordSalt",
            IdUserPenanggapLastDirectoryUpdate = "IdUserPenanggapLastDirectoryUpdate",
            IdUserPenanggapUserImage = "IdUserPenanggapUserImage",
            IdUserPenanggapInsertDate = "IdUserPenanggapInsertDate",
            IdUserPenanggapInsertUserId = "IdUserPenanggapInsertUserId",
            IdUserPenanggapUpdateDate = "IdUserPenanggapUpdateDate",
            IdUserPenanggapUpdateUserId = "IdUserPenanggapUpdateUserId",
            IdUserPenanggapIsActive = "IdUserPenanggapIsActive",
            IdUserPenanggapAddress = "IdUserPenanggapAddress",
            IdUserPenanggapIdHubungan = "IdUserPenanggapIdHubungan",
            IdUserPenanggapNoKtp = "IdUserPenanggapNoKtp",
            IdUserPenanggapNoKk = "IdUserPenanggapNoKk",
            IdUserPenanggapPhoneNumber = "IdUserPenanggapPhoneNumber",
            IdUserPenanggapWaNumber = "IdUserPenanggapWaNumber",
            IdUserPenanggapOption1 = "IdUserPenanggapOption1",
            IdUserPenanggapOption2 = "IdUserPenanggapOption2",
            IdUserPenanggapOption3 = "IdUserPenanggapOption3",
            IdUserPenanggapJenisKelamin = "IdUserPenanggapJenisKelamin",
            IdUserPenanggapTanggalLahir = "IdUserPenanggapTanggalLahir",
            IdUserPenanggapDescription = "IdUserPenanggapDescription",
            IdUserPenanggapIdDesa = "IdUserPenanggapIdDesa",
            IdUserPenanggapPendidikan = "IdUserPenanggapPendidikan",
            IdUserPenanggapIdVersion = "IdUserPenanggapIdVersion",
            IdUserPenanggapFcmToken = "IdUserPenanggapFcmToken"
        }
    }
}
declare namespace SDD.Transaction {
    namespace DetailPengaduanService {
        const baseUrl = "Transaction/DetailPengaduan";
        function Create(request: Serenity.SaveRequest<DetailPengaduanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DetailPengaduanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailPengaduanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailPengaduanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/DetailPengaduan/Create",
            Update = "Transaction/DetailPengaduan/Update",
            Delete = "Transaction/DetailPengaduan/Delete",
            Retrieve = "Transaction/DetailPengaduan/Retrieve",
            List = "Transaction/DetailPengaduan/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface DetailUserPerdaganganForm {
        TypeLapak: Serenity.EnumEditor;
        LuasLapak: Serenity.DecimalEditor;
        StatusLapak: Serenity.EnumEditor;
        AlamatLapak: Serenity.TextAreaEditor;
        JumPekerja: Serenity.IntegerEditor;
        SemuaBiayaBulanan: Serenity.DecimalEditor;
        PenghasilanBulanan: Serenity.DecimalEditor;
        Desc: Serenity.TextAreaEditor;
    }
    class DetailUserPerdaganganForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface DetailUserPerdaganganRow {
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
    namespace DetailUserPerdaganganRow {
        const idProperty = "IdDetailPerdagangan";
        const nameProperty = "AlamatLapak";
        const localTextPrefix = "Transaction.DetailUserPerdagangan";
        const deletePermission = "Transaction:DetailUserPerdagangan";
        const insertPermission = "Transaction:DetailUserPerdagangan";
        const readPermission = "Transaction:DetailUserPerdagangan";
        const updatePermission = "Transaction:DetailUserPerdagangan";
        const enum Fields {
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
declare namespace SDD.Transaction {
    namespace DetailUserPerdaganganService {
        const baseUrl = "Transaction/DetailUserPerdagangan";
        function Create(request: Serenity.SaveRequest<DetailUserPerdaganganRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DetailUserPerdaganganRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailUserPerdaganganRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailUserPerdaganganRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/DetailUserPerdagangan/Create",
            Update = "Transaction/DetailUserPerdagangan/Update",
            Delete = "Transaction/DetailUserPerdagangan/Delete",
            Retrieve = "Transaction/DetailUserPerdagangan/Retrieve",
            List = "Transaction/DetailUserPerdagangan/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface DetailUserPertanianForm {
        IdSatuanPendukung: Serenity.LookupEditor;
        AlatBahanPendukung: Serenity.StringEditor;
        QuantityPendukung: Serenity.IntegerEditor;
        NominalPendukung: Serenity.DecimalEditor;
        TotalNominalPendukung: Serenity.DecimalEditor;
        Desc: Serenity.TextAreaEditor;
    }
    class DetailUserPertanianForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface DetailUserPertanianRow {
        IdDetailPertanian?: number;
        IdSatuanPendukung?: number;
        AlatBahanPendukung?: string;
        QuantityPendukung?: number;
        NominalPendukung?: number;
        TotalNominalPendukung?: number;
        Desc?: string;
        IdUserPertanian?: number;
        IdSatuanPendukungNamaSatuan?: string;
        IdSatuanPendukungDescSatuan?: string;
        IdUserPertanianIdUser?: number;
        IdUserPertanianIdHasilBudidaya?: number;
        IdUserPertanianLuasLahan?: number;
        IdUserPertanianJumlahPekerja?: number;
        IdUserPertanianPeriodePanen?: number;
        IdUserPertanianHasilPanen?: number;
        IdUserPertanianNominalHasilPanen?: number;
    }
    namespace DetailUserPertanianRow {
        const idProperty = "IdDetailPertanian";
        const nameProperty = "AlatBahanPendukung";
        const localTextPrefix = "Transaction.DetailUserPertanian";
        const deletePermission = "Transaction:DetailUserPertanian";
        const insertPermission = "Transaction:DetailUserPertanian";
        const readPermission = "Transaction:DetailUserPertanian";
        const updatePermission = "Transaction:DetailUserPertanian";
        const enum Fields {
            IdDetailPertanian = "IdDetailPertanian",
            IdSatuanPendukung = "IdSatuanPendukung",
            AlatBahanPendukung = "AlatBahanPendukung",
            QuantityPendukung = "QuantityPendukung",
            NominalPendukung = "NominalPendukung",
            TotalNominalPendukung = "TotalNominalPendukung",
            Desc = "Desc",
            IdUserPertanian = "IdUserPertanian",
            IdSatuanPendukungNamaSatuan = "IdSatuanPendukungNamaSatuan",
            IdSatuanPendukungDescSatuan = "IdSatuanPendukungDescSatuan",
            IdUserPertanianIdUser = "IdUserPertanianIdUser",
            IdUserPertanianIdHasilBudidaya = "IdUserPertanianIdHasilBudidaya",
            IdUserPertanianLuasLahan = "IdUserPertanianLuasLahan",
            IdUserPertanianJumlahPekerja = "IdUserPertanianJumlahPekerja",
            IdUserPertanianPeriodePanen = "IdUserPertanianPeriodePanen",
            IdUserPertanianHasilPanen = "IdUserPertanianHasilPanen",
            IdUserPertanianNominalHasilPanen = "IdUserPertanianNominalHasilPanen"
        }
    }
}
declare namespace SDD.Transaction {
    namespace DetailUserPertanianService {
        const baseUrl = "Transaction/DetailUserPertanian";
        function Create(request: Serenity.SaveRequest<DetailUserPertanianRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DetailUserPertanianRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailUserPertanianRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailUserPertanianRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/DetailUserPertanian/Create",
            Update = "Transaction/DetailUserPertanian/Update",
            Delete = "Transaction/DetailUserPertanian/Delete",
            Retrieve = "Transaction/DetailUserPertanian/Retrieve",
            List = "Transaction/DetailUserPertanian/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface DetailUserPeternakanPerikananForm {
        IdSatuanPendukung: Serenity.LookupEditor;
        AlatBahanPendukung: Serenity.StringEditor;
        QuantityPendukung: Serenity.IntegerEditor;
        NominalPendukung: Serenity.DecimalEditor;
        TotalNominalPendukung: Serenity.DecimalEditor;
        Desc: Serenity.TextAreaEditor;
    }
    class DetailUserPeternakanPerikananForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface DetailUserPeternakanPerikananRow {
        IdDetailPeternakan?: number;
        IdSatuanPendukung?: number;
        AlatBahanPendukung?: string;
        QuantityPendukung?: number;
        NominalPendukung?: number;
        TotalNominalPendukung?: number;
        Desc?: string;
        IdUserPerikanan?: number;
        IdSatuanPendukungNamaSatuan?: string;
        IdSatuanPendukungDescSatuan?: string;
        IdUserPerikananIdUser?: number;
        IdUserPerikananIdHasilBudidaya?: number;
        IdUserPerikananTotalBibit?: number;
        IdUserPerikananLuasLahan?: number;
        IdUserPerikananJumlahPekerja?: number;
        IdUserPerikananPeriodePanen?: number;
        IdUserPerikananHasilPanen?: number;
        IdUserPerikananNominalHasilPanen?: number;
    }
    namespace DetailUserPeternakanPerikananRow {
        const idProperty = "IdDetailPeternakan";
        const nameProperty = "AlatBahanPendukung";
        const localTextPrefix = "Transaction.DetailUserPeternakanPerikanan";
        const deletePermission = "Transaction:DetailUserPeternakanPerikanan";
        const insertPermission = "Transaction:DetailUserPeternakanPerikanan";
        const readPermission = "Transaction:DetailUserPeternakanPerikanan";
        const updatePermission = "Transaction:DetailUserPeternakanPerikanan";
        const enum Fields {
            IdDetailPeternakan = "IdDetailPeternakan",
            IdSatuanPendukung = "IdSatuanPendukung",
            AlatBahanPendukung = "AlatBahanPendukung",
            QuantityPendukung = "QuantityPendukung",
            NominalPendukung = "NominalPendukung",
            TotalNominalPendukung = "TotalNominalPendukung",
            Desc = "Desc",
            IdUserPerikanan = "IdUserPerikanan",
            IdSatuanPendukungNamaSatuan = "IdSatuanPendukungNamaSatuan",
            IdSatuanPendukungDescSatuan = "IdSatuanPendukungDescSatuan",
            IdUserPerikananIdUser = "IdUserPerikananIdUser",
            IdUserPerikananIdHasilBudidaya = "IdUserPerikananIdHasilBudidaya",
            IdUserPerikananTotalBibit = "IdUserPerikananTotalBibit",
            IdUserPerikananLuasLahan = "IdUserPerikananLuasLahan",
            IdUserPerikananJumlahPekerja = "IdUserPerikananJumlahPekerja",
            IdUserPerikananPeriodePanen = "IdUserPerikananPeriodePanen",
            IdUserPerikananHasilPanen = "IdUserPerikananHasilPanen",
            IdUserPerikananNominalHasilPanen = "IdUserPerikananNominalHasilPanen"
        }
    }
}
declare namespace SDD.Transaction {
    namespace DetailUserPeternakanPerikananService {
        const baseUrl = "Transaction/DetailUserPeternakanPerikanan";
        function Create(request: Serenity.SaveRequest<DetailUserPeternakanPerikananRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DetailUserPeternakanPerikananRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailUserPeternakanPerikananRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailUserPeternakanPerikananRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/DetailUserPeternakanPerikanan/Create",
            Update = "Transaction/DetailUserPeternakanPerikanan/Update",
            Delete = "Transaction/DetailUserPeternakanPerikanan/Delete",
            Retrieve = "Transaction/DetailUserPeternakanPerikanan/Retrieve",
            List = "Transaction/DetailUserPeternakanPerikanan/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface FcmMessageForm {
        IdUser: Serenity.LookupEditor;
    }
    class FcmMessageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface FcmMessageRow {
        IdMessage?: number;
        IdUser?: number;
        Message?: string;
        Title?: string;
        Body?: string;
        Action?: string;
        Status?: number;
        Response?: string;
        TimeStamp?: string;
        IdParentMessage?: number;
        StatusWa?: number;
        IdUserUsername?: string;
        IdUserDisplayName?: string;
        IdUserEmail?: string;
        IdUserSource?: string;
        IdUserPasswordHash?: string;
        IdUserPasswordSalt?: string;
        IdUserLastDirectoryUpdate?: string;
        IdUserUserImage?: string;
        IdUserInsertDate?: string;
        IdUserInsertUserId?: number;
        IdUserUpdateDate?: string;
        IdUserUpdateUserId?: number;
        IdUserIsActive?: number;
        IdUserAddress?: string;
        IdUserIdHubungan?: number;
        IdUserNoKtp?: string;
        IdUserNoKk?: string;
        IdUserPhoneNumber?: string;
        IdUserWaNumber?: string;
        IdUserOption1?: string;
        IdUserOption2?: string;
        IdUserOption3?: string;
        IdUserJenisKelamin?: number;
        IdUserTanggalLahir?: string;
        IdUserDescription?: string;
        IdUserIdDesa?: number;
        IdUserPendidikan?: string;
        IdUserIdVersion?: number;
        IdUserFcmToken?: string;
        IdParentMessageMessage?: string;
        IdParentMessageTitle?: string;
        IdParentMessageBody?: string;
        IdParentMessageTimeStamp?: string;
        IdParentMessageOption1?: number;
        IdParentMessageOption2?: number;
    }
    namespace FcmMessageRow {
        const idProperty = "IdMessage";
        const nameProperty = "Message";
        const localTextPrefix = "Transaction.FcmMessage";
        const deletePermission = "Transaction:FcmMessage";
        const insertPermission = "Transaction:FcmMessage";
        const readPermission = "Transaction:FcmMessage";
        const updatePermission = "Transaction:FcmMessage";
        const enum Fields {
            IdMessage = "IdMessage",
            IdUser = "IdUser",
            Message = "Message",
            Title = "Title",
            Body = "Body",
            Action = "Action",
            Status = "Status",
            Response = "Response",
            TimeStamp = "TimeStamp",
            IdParentMessage = "IdParentMessage",
            StatusWa = "StatusWa",
            IdUserUsername = "IdUserUsername",
            IdUserDisplayName = "IdUserDisplayName",
            IdUserEmail = "IdUserEmail",
            IdUserSource = "IdUserSource",
            IdUserPasswordHash = "IdUserPasswordHash",
            IdUserPasswordSalt = "IdUserPasswordSalt",
            IdUserLastDirectoryUpdate = "IdUserLastDirectoryUpdate",
            IdUserUserImage = "IdUserUserImage",
            IdUserInsertDate = "IdUserInsertDate",
            IdUserInsertUserId = "IdUserInsertUserId",
            IdUserUpdateDate = "IdUserUpdateDate",
            IdUserUpdateUserId = "IdUserUpdateUserId",
            IdUserIsActive = "IdUserIsActive",
            IdUserAddress = "IdUserAddress",
            IdUserIdHubungan = "IdUserIdHubungan",
            IdUserNoKtp = "IdUserNoKtp",
            IdUserNoKk = "IdUserNoKk",
            IdUserPhoneNumber = "IdUserPhoneNumber",
            IdUserWaNumber = "IdUserWaNumber",
            IdUserOption1 = "IdUserOption1",
            IdUserOption2 = "IdUserOption2",
            IdUserOption3 = "IdUserOption3",
            IdUserJenisKelamin = "IdUserJenisKelamin",
            IdUserTanggalLahir = "IdUserTanggalLahir",
            IdUserDescription = "IdUserDescription",
            IdUserIdDesa = "IdUserIdDesa",
            IdUserPendidikan = "IdUserPendidikan",
            IdUserIdVersion = "IdUserIdVersion",
            IdUserFcmToken = "IdUserFcmToken",
            IdParentMessageMessage = "IdParentMessageMessage",
            IdParentMessageTitle = "IdParentMessageTitle",
            IdParentMessageBody = "IdParentMessageBody",
            IdParentMessageTimeStamp = "IdParentMessageTimeStamp",
            IdParentMessageOption1 = "IdParentMessageOption1",
            IdParentMessageOption2 = "IdParentMessageOption2"
        }
    }
}
declare namespace SDD.Transaction {
    namespace FcmMessageService {
        const baseUrl = "Transaction/FcmMessage";
        function Create(request: Serenity.SaveRequest<FcmMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FcmMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FcmMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FcmMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/FcmMessage/Create",
            Update = "Transaction/FcmMessage/Update",
            Delete = "Transaction/FcmMessage/Delete",
            Retrieve = "Transaction/FcmMessage/Retrieve",
            List = "Transaction/FcmMessage/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface FcmMessageUserForm {
        IdUser: Serenity.IntegerEditor;
        Message: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Body: Serenity.StringEditor;
        Action: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Response: Serenity.StringEditor;
        TimeStamp: Serenity.DateEditor;
        IdParentMessage: Serenity.IntegerEditor;
        StatusWa: Serenity.IntegerEditor;
    }
    class FcmMessageUserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface FcmMessageUserRow {
        IdMessage?: number;
        IdUser?: number;
        Message?: string;
        Title?: string;
        Body?: string;
        Action?: string;
        Status?: number;
        Response?: string;
        TimeStamp?: string;
        IdParentMessage?: number;
        StatusWa?: number;
        IdUserUsername?: string;
        IdUserDisplayName?: string;
        IdUserEmail?: string;
        IdUserSource?: string;
        IdUserPasswordHash?: string;
        IdUserPasswordSalt?: string;
        IdUserLastDirectoryUpdate?: string;
        IdUserUserImage?: string;
        IdUserInsertDate?: string;
        IdUserInsertUserId?: number;
        IdUserUpdateDate?: string;
        IdUserUpdateUserId?: number;
        IdUserIsActive?: number;
        IdUserAddress?: string;
        IdUserIdHubungan?: number;
        IdUserNoKtp?: string;
        IdUserNoKk?: string;
        IdUserPhoneNumber?: string;
        IdUserWaNumber?: string;
        IdUserOption1?: string;
        IdUserOption2?: string;
        IdUserOption3?: string;
        IdUserJenisKelamin?: number;
        IdUserTanggalLahir?: string;
        IdUserDescription?: string;
        IdUserIdDesa?: number;
        IdUserPendidikan?: string;
        IdUserIdVersion?: number;
        IdUserFcmToken?: string;
        IdParentMessageMessage?: string;
        IdParentMessageTitle?: string;
        IdParentMessageBody?: string;
        IdParentMessageTimeStamp?: string;
        IdParentMessageOption1?: number;
        IdParentMessageOption2?: number;
        IdParentMessageIdUserShare?: number;
    }
    namespace FcmMessageUserRow {
        const idProperty = "IdMessage";
        const nameProperty = "Message";
        const localTextPrefix = "Transaction.FcmMessageUser";
        const deletePermission = "Transaction:FcmMessageUser";
        const insertPermission = "Transaction:FcmMessageUser";
        const readPermission = "Transaction:FcmMessageUser";
        const updatePermission = "Transaction:FcmMessageUser";
        const enum Fields {
            IdMessage = "IdMessage",
            IdUser = "IdUser",
            Message = "Message",
            Title = "Title",
            Body = "Body",
            Action = "Action",
            Status = "Status",
            Response = "Response",
            TimeStamp = "TimeStamp",
            IdParentMessage = "IdParentMessage",
            StatusWa = "StatusWa",
            IdUserUsername = "IdUserUsername",
            IdUserDisplayName = "IdUserDisplayName",
            IdUserEmail = "IdUserEmail",
            IdUserSource = "IdUserSource",
            IdUserPasswordHash = "IdUserPasswordHash",
            IdUserPasswordSalt = "IdUserPasswordSalt",
            IdUserLastDirectoryUpdate = "IdUserLastDirectoryUpdate",
            IdUserUserImage = "IdUserUserImage",
            IdUserInsertDate = "IdUserInsertDate",
            IdUserInsertUserId = "IdUserInsertUserId",
            IdUserUpdateDate = "IdUserUpdateDate",
            IdUserUpdateUserId = "IdUserUpdateUserId",
            IdUserIsActive = "IdUserIsActive",
            IdUserAddress = "IdUserAddress",
            IdUserIdHubungan = "IdUserIdHubungan",
            IdUserNoKtp = "IdUserNoKtp",
            IdUserNoKk = "IdUserNoKk",
            IdUserPhoneNumber = "IdUserPhoneNumber",
            IdUserWaNumber = "IdUserWaNumber",
            IdUserOption1 = "IdUserOption1",
            IdUserOption2 = "IdUserOption2",
            IdUserOption3 = "IdUserOption3",
            IdUserJenisKelamin = "IdUserJenisKelamin",
            IdUserTanggalLahir = "IdUserTanggalLahir",
            IdUserDescription = "IdUserDescription",
            IdUserIdDesa = "IdUserIdDesa",
            IdUserPendidikan = "IdUserPendidikan",
            IdUserIdVersion = "IdUserIdVersion",
            IdUserFcmToken = "IdUserFcmToken",
            IdParentMessageMessage = "IdParentMessageMessage",
            IdParentMessageTitle = "IdParentMessageTitle",
            IdParentMessageBody = "IdParentMessageBody",
            IdParentMessageTimeStamp = "IdParentMessageTimeStamp",
            IdParentMessageOption1 = "IdParentMessageOption1",
            IdParentMessageOption2 = "IdParentMessageOption2",
            IdParentMessageIdUserShare = "IdParentMessageIdUserShare"
        }
    }
}
declare namespace SDD.Transaction {
    namespace FcmMessageUserService {
        const baseUrl = "Transaction/FcmMessageUser";
        function Create(request: Serenity.SaveRequest<FcmMessageUserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FcmMessageUserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FcmMessageUserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FcmMessageUserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/FcmMessageUser/Create",
            Update = "Transaction/FcmMessageUser/Update",
            Delete = "Transaction/FcmMessageUser/Delete",
            Retrieve = "Transaction/FcmMessageUser/Retrieve",
            List = "Transaction/FcmMessageUser/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface FormulirAktaKelahiranForm {
        NamaBayi: Serenity.StringEditor;
        KelaminBayi: Serenity.EnumEditor;
        TempatKelahiran: Serenity.StringEditor;
        HariKelahiran: HariKelahiran;
        TglLahir: Serenity.DateEditor;
        WaktuKelahiran: Serenity.StringEditor;
        JenisKelahiran: Serenity.EnumEditor;
        BeratBayi: Serenity.DecimalEditor;
        PanjangBayi: Serenity.DecimalEditor;
        AnakKe: Serenity.IntegerEditor;
        NamaIbu: Serenity.StringEditor;
        NikIbu: Serenity.StringEditor;
        PekerjaanIbu: Serenity.StringEditor;
        TglLahirIbu: Serenity.DateEditor;
        AlamatIbu: Serenity.TextAreaEditor;
        NamaAyah: Serenity.StringEditor;
        TglLahirAyah: Serenity.DateEditor;
        PekerjaanAyah: Serenity.StringEditor;
        AlamatAyah: Serenity.TextAreaEditor;
        NikAyah: Serenity.StringEditor;
        DetailFormulir: DetailAktaLahirGrid;
    }
    class FormulirAktaKelahiranForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface FormulirAktaKelahiranRow {
        IdFormAktaKelahiran?: number;
        IdFormFlow?: number;
        IdUserPelapor?: number;
        NamaBayi?: string;
        KelaminBayi?: number;
        TempatKelahiran?: string;
        HariKelahiran?: string;
        TglLahir?: string;
        WaktuKelahiran?: string;
        JenisKelahiran?: number;
        BeratBayi?: number;
        PanjangBayi?: number;
        AnakKe?: number;
        NamaIbu?: string;
        NikIbu?: string;
        PekerjaanIbu?: string;
        TglLahirIbu?: string;
        AlamatIbu?: string;
        NamaAyah?: string;
        TglLahirAyah?: string;
        PekerjaanAyah?: string;
        AlamatAyah?: string;
        NikAyah?: string;
        LinkDocAkta?: string;
        IdFormFlowIdMasterForm?: number;
        IdFormFlowSlaform?: number;
        IdFormFlowDescForm?: string;
        IdFormFlowIdDesa?: number;
        IdUserPelaporUsername?: string;
        IdUserPelaporDisplayName?: string;
        IdUserPelaporEmail?: string;
        IdUserPelaporSource?: string;
        IdUserPelaporPasswordHash?: string;
        IdUserPelaporPasswordSalt?: string;
        IdUserPelaporLastDirectoryUpdate?: string;
        IdUserPelaporUserImage?: string;
        IdUserPelaporInsertDate?: string;
        IdUserPelaporInsertUserId?: number;
        IdUserPelaporUpdateDate?: string;
        IdUserPelaporUpdateUserId?: number;
        IdUserPelaporIsActive?: number;
        IdUserPelaporAddress?: string;
        IdUserPelaporIdHubungan?: number;
        IdUserPelaporNoKtp?: string;
        IdUserPelaporNoKk?: string;
        IdUserPelaporPhoneNumber?: string;
        IdUserPelaporWaNumber?: string;
        IdUserPelaporOption1?: string;
        IdUserPelaporOption2?: string;
        IdUserPelaporOption3?: string;
        IdUserPelaporJenisKelamin?: number;
        IdUserPelaporTanggalLahir?: string;
        IdUserPelaporDescription?: string;
        DetailFormulir?: DetailAktaLahirRow[];
        Timestamp?: string;
    }
    namespace FormulirAktaKelahiranRow {
        const idProperty = "IdFormAktaKelahiran";
        const nameProperty = "NamaBayi";
        const localTextPrefix = "Transaction.FormulirAktaKelahiran";
        const deletePermission = "Transaction:FormulirAktaKelahiran";
        const insertPermission = "Transaction:FormulirAktaKelahiran";
        const readPermission = "Transaction:FormulirAktaKelahiran";
        const updatePermission = "Transaction:FormulirAktaKelahiran";
        const enum Fields {
            IdFormAktaKelahiran = "IdFormAktaKelahiran",
            IdFormFlow = "IdFormFlow",
            IdUserPelapor = "IdUserPelapor",
            NamaBayi = "NamaBayi",
            KelaminBayi = "KelaminBayi",
            TempatKelahiran = "TempatKelahiran",
            HariKelahiran = "HariKelahiran",
            TglLahir = "TglLahir",
            WaktuKelahiran = "WaktuKelahiran",
            JenisKelahiran = "JenisKelahiran",
            BeratBayi = "BeratBayi",
            PanjangBayi = "PanjangBayi",
            AnakKe = "AnakKe",
            NamaIbu = "NamaIbu",
            NikIbu = "NikIbu",
            PekerjaanIbu = "PekerjaanIbu",
            TglLahirIbu = "TglLahirIbu",
            AlamatIbu = "AlamatIbu",
            NamaAyah = "NamaAyah",
            TglLahirAyah = "TglLahirAyah",
            PekerjaanAyah = "PekerjaanAyah",
            AlamatAyah = "AlamatAyah",
            NikAyah = "NikAyah",
            LinkDocAkta = "LinkDocAkta",
            IdFormFlowIdMasterForm = "IdFormFlowIdMasterForm",
            IdFormFlowSlaform = "IdFormFlowSlaform",
            IdFormFlowDescForm = "IdFormFlowDescForm",
            IdFormFlowIdDesa = "IdFormFlowIdDesa",
            IdUserPelaporUsername = "IdUserPelaporUsername",
            IdUserPelaporDisplayName = "IdUserPelaporDisplayName",
            IdUserPelaporEmail = "IdUserPelaporEmail",
            IdUserPelaporSource = "IdUserPelaporSource",
            IdUserPelaporPasswordHash = "IdUserPelaporPasswordHash",
            IdUserPelaporPasswordSalt = "IdUserPelaporPasswordSalt",
            IdUserPelaporLastDirectoryUpdate = "IdUserPelaporLastDirectoryUpdate",
            IdUserPelaporUserImage = "IdUserPelaporUserImage",
            IdUserPelaporInsertDate = "IdUserPelaporInsertDate",
            IdUserPelaporInsertUserId = "IdUserPelaporInsertUserId",
            IdUserPelaporUpdateDate = "IdUserPelaporUpdateDate",
            IdUserPelaporUpdateUserId = "IdUserPelaporUpdateUserId",
            IdUserPelaporIsActive = "IdUserPelaporIsActive",
            IdUserPelaporAddress = "IdUserPelaporAddress",
            IdUserPelaporIdHubungan = "IdUserPelaporIdHubungan",
            IdUserPelaporNoKtp = "IdUserPelaporNoKtp",
            IdUserPelaporNoKk = "IdUserPelaporNoKk",
            IdUserPelaporPhoneNumber = "IdUserPelaporPhoneNumber",
            IdUserPelaporWaNumber = "IdUserPelaporWaNumber",
            IdUserPelaporOption1 = "IdUserPelaporOption1",
            IdUserPelaporOption2 = "IdUserPelaporOption2",
            IdUserPelaporOption3 = "IdUserPelaporOption3",
            IdUserPelaporJenisKelamin = "IdUserPelaporJenisKelamin",
            IdUserPelaporTanggalLahir = "IdUserPelaporTanggalLahir",
            IdUserPelaporDescription = "IdUserPelaporDescription",
            DetailFormulir = "DetailFormulir",
            Timestamp = "Timestamp"
        }
    }
}
declare namespace SDD.Transaction {
    namespace FormulirAktaKelahiranService {
        const baseUrl = "Transaction/FormulirAktaKelahiran";
        function Create(request: Serenity.SaveRequest<FormulirAktaKelahiranRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FormulirAktaKelahiranRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FormulirAktaKelahiranRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FormulirAktaKelahiranRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/FormulirAktaKelahiran/Create",
            Update = "Transaction/FormulirAktaKelahiran/Update",
            Delete = "Transaction/FormulirAktaKelahiran/Delete",
            Retrieve = "Transaction/FormulirAktaKelahiran/Retrieve",
            List = "Transaction/FormulirAktaKelahiran/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface FormulirKkForm {
        AlasanPemohon: Serenity.StringEditor;
        JumlahKk: Serenity.IntegerEditor;
        DokPendukungKK: Serenity.MultipleImageUploadEditor;
        DetailFormulir: DetailFormulirKkGrid;
    }
    class FormulirKkForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface FormulirKkRow {
        IdFormulirKk?: number;
        IdMasterFlow?: number;
        IdUser?: number;
        AlasanPemohon?: string;
        JumlahKk?: number;
        DokPendukungKK?: string;
        Timestamp?: string;
        LinkDocKk?: string;
        IdMasterFlowIdMasterForm?: number;
        IdMasterFlowSlaform?: number;
        IdMasterFlowDescForm?: string;
        IdMasterFlowIdDesa?: number;
        IdUserUsername?: string;
        IdUserDisplayName?: string;
        IdUserEmail?: string;
        IdUserSource?: string;
        IdUserPasswordHash?: string;
        IdUserPasswordSalt?: string;
        IdUserLastDirectoryUpdate?: string;
        IdUserUserImage?: string;
        IdUserInsertDate?: string;
        IdUserInsertUserId?: number;
        IdUserUpdateDate?: string;
        IdUserUpdateUserId?: number;
        IdUserIsActive?: number;
        IdUserAddress?: string;
        IdUserIdHubungan?: number;
        IdUserNoKtp?: string;
        IdUserNoKk?: string;
        IdUserPhoneNumber?: string;
        IdUserWaNumber?: string;
        IdUserOption1?: string;
        IdUserOption2?: string;
        IdUserOption3?: string;
        IdUserTanggalLahir?: string;
        IdUserDescription?: string;
        DetailFormulir?: DetailFormulirKkRow[];
    }
    namespace FormulirKkRow {
        const idProperty = "IdFormulirKk";
        const nameProperty = "AlasanPemohon";
        const localTextPrefix = "Transaction.FormulirKk";
        const deletePermission = "Transaction:FormulirKk";
        const insertPermission = "Transaction:FormulirKk";
        const readPermission = "Transaction:FormulirKk";
        const updatePermission = "Transaction:FormulirKk";
        const enum Fields {
            IdFormulirKk = "IdFormulirKk",
            IdMasterFlow = "IdMasterFlow",
            IdUser = "IdUser",
            AlasanPemohon = "AlasanPemohon",
            JumlahKk = "JumlahKk",
            DokPendukungKK = "DokPendukungKK",
            Timestamp = "Timestamp",
            LinkDocKk = "LinkDocKk",
            IdMasterFlowIdMasterForm = "IdMasterFlowIdMasterForm",
            IdMasterFlowSlaform = "IdMasterFlowSlaform",
            IdMasterFlowDescForm = "IdMasterFlowDescForm",
            IdMasterFlowIdDesa = "IdMasterFlowIdDesa",
            IdUserUsername = "IdUserUsername",
            IdUserDisplayName = "IdUserDisplayName",
            IdUserEmail = "IdUserEmail",
            IdUserSource = "IdUserSource",
            IdUserPasswordHash = "IdUserPasswordHash",
            IdUserPasswordSalt = "IdUserPasswordSalt",
            IdUserLastDirectoryUpdate = "IdUserLastDirectoryUpdate",
            IdUserUserImage = "IdUserUserImage",
            IdUserInsertDate = "IdUserInsertDate",
            IdUserInsertUserId = "IdUserInsertUserId",
            IdUserUpdateDate = "IdUserUpdateDate",
            IdUserUpdateUserId = "IdUserUpdateUserId",
            IdUserIsActive = "IdUserIsActive",
            IdUserAddress = "IdUserAddress",
            IdUserIdHubungan = "IdUserIdHubungan",
            IdUserNoKtp = "IdUserNoKtp",
            IdUserNoKk = "IdUserNoKk",
            IdUserPhoneNumber = "IdUserPhoneNumber",
            IdUserWaNumber = "IdUserWaNumber",
            IdUserOption1 = "IdUserOption1",
            IdUserOption2 = "IdUserOption2",
            IdUserOption3 = "IdUserOption3",
            IdUserTanggalLahir = "IdUserTanggalLahir",
            IdUserDescription = "IdUserDescription",
            DetailFormulir = "DetailFormulir"
        }
    }
}
declare namespace SDD.Transaction {
    namespace FormulirKkService {
        const baseUrl = "Transaction/FormulirKk";
        function Create(request: Serenity.SaveRequest<FormulirKkRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FormulirKkRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FormulirKkRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FormulirKkRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/FormulirKk/Create",
            Update = "Transaction/FormulirKk/Update",
            Delete = "Transaction/FormulirKk/Delete",
            Retrieve = "Transaction/FormulirKk/Retrieve",
            List = "Transaction/FormulirKk/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface FormulirKtpForm {
        IdFFowForm: Serenity.IntegerEditor;
        TypePermohonan: TypePermohonan;
        DokPendukung: Serenity.MultipleImageUploadEditor;
        Desc: Serenity.TextAreaEditor;
    }
    class FormulirKtpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface FormulirKtpRow {
        IdFormulirKtp?: number;
        IdFFowForm?: number;
        TypePermohonan?: string;
        DokPendukung?: string;
        Desc?: string;
        IdUserDisplayName?: string;
        IdUser?: number;
        LinkDocKTP?: string;
        Timestamp?: string;
    }
    namespace FormulirKtpRow {
        const idProperty = "IdFormulirKtp";
        const nameProperty = "TypePermohonan";
        const localTextPrefix = "Transaction.FormulirKtp";
        const deletePermission = "Transaction:FormulirKtp";
        const insertPermission = "Transaction:FormulirKtp";
        const readPermission = "Transaction:FormulirKtp";
        const updatePermission = "Transaction:FormulirKtp";
        const enum Fields {
            IdFormulirKtp = "IdFormulirKtp",
            IdFFowForm = "IdFFowForm",
            TypePermohonan = "TypePermohonan",
            DokPendukung = "DokPendukung",
            Desc = "Desc",
            IdUserDisplayName = "IdUserDisplayName",
            IdUser = "IdUser",
            LinkDocKTP = "LinkDocKTP",
            Timestamp = "Timestamp"
        }
    }
}
declare namespace SDD.Transaction {
    namespace FormulirKtpService {
        const baseUrl = "Transaction/FormulirKtp";
        function Create(request: Serenity.SaveRequest<FormulirKtpRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FormulirKtpRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FormulirKtpRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FormulirKtpRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/FormulirKtp/Create",
            Update = "Transaction/FormulirKtp/Update",
            Delete = "Transaction/FormulirKtp/Delete",
            Retrieve = "Transaction/FormulirKtp/Retrieve",
            List = "Transaction/FormulirKtp/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface ForumForm {
        IdMasterForum: Serenity.LookupEditor;
        DetailForum: MyCustomEditor;
        FotoDokumenForum: Serenity.MultipleImageUploadEditor;
        HiddenUser: Serenity.RadioButtonEditor;
        Detail: DetailForumGrid;
    }
    class ForumForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface ForumNewForm {
        IdMasterForum: Serenity.LookupEditor;
        DetailForum: Serenity.TextAreaEditor;
        FotoDokumenForum: Serenity.MultipleImageUploadEditor;
        HiddenUser: Serenity.RadioButtonEditor;
        Detail: DetailForumGrid;
    }
    class ForumNewForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface ForumNewRow {
        IdForum?: number;
        IdMasterForum?: number;
        IdUserInsert?: number;
        DetailForum?: string;
        FotoDokumenForum?: string;
        HiddenUser?: number;
        Timestamp?: string;
        IdMasterForumNamaForum?: string;
        IdMasterForumDeskripsi?: string;
        IdUserInsertUsername?: string;
        IdUserInsertDisplayName?: string;
        IdUserInsertEmail?: string;
        IdUserInsertSource?: string;
        IdUserInsertPasswordHash?: string;
        IdUserInsertPasswordSalt?: string;
        IdUserInsertLastDirectoryUpdate?: string;
        IdUserInsertUserImage?: string;
        IdUserInsertInsertDate?: string;
        IdUserInsertInsertUserId?: number;
        IdUserInsertUpdateDate?: string;
        IdUserInsertUpdateUserId?: number;
        IdUserInsertIsActive?: number;
        IdUserInsertAddress?: string;
        IdUserInsertIdHubungan?: number;
        IdUserInsertNoKtp?: string;
        IdUserInsertNoKk?: string;
        IdUserInsertPhoneNumber?: string;
        IdUserInsertWaNumber?: string;
        IdUserInsertOption1?: string;
        IdUserInsertOption2?: string;
        IdUserInsertOption3?: string;
        IdUserInsertJenisKelamin?: number;
        IdUserInsertTanggalLahir?: string;
        IdUserInsertDescription?: string;
        IdUserInsertIdDesa?: number;
        IdUserInsertPendidikan?: string;
        IdUserInsertIdVersion?: number;
        IdUserInsertFcmToken?: string;
        Detail?: DetailForumRow[];
    }
    namespace ForumNewRow {
        const idProperty = "IdForum";
        const nameProperty = "DetailForum";
        const localTextPrefix = "Transaction.ForumNew";
        const deletePermission = "Transaction:ForumNew";
        const insertPermission = "Transaction:ForumNew";
        const readPermission = "Transaction:ForumNew";
        const updatePermission = "Transaction:ForumNew";
        const enum Fields {
            IdForum = "IdForum",
            IdMasterForum = "IdMasterForum",
            IdUserInsert = "IdUserInsert",
            DetailForum = "DetailForum",
            FotoDokumenForum = "FotoDokumenForum",
            HiddenUser = "HiddenUser",
            Timestamp = "Timestamp",
            IdMasterForumNamaForum = "IdMasterForumNamaForum",
            IdMasterForumDeskripsi = "IdMasterForumDeskripsi",
            IdUserInsertUsername = "IdUserInsertUsername",
            IdUserInsertDisplayName = "IdUserInsertDisplayName",
            IdUserInsertEmail = "IdUserInsertEmail",
            IdUserInsertSource = "IdUserInsertSource",
            IdUserInsertPasswordHash = "IdUserInsertPasswordHash",
            IdUserInsertPasswordSalt = "IdUserInsertPasswordSalt",
            IdUserInsertLastDirectoryUpdate = "IdUserInsertLastDirectoryUpdate",
            IdUserInsertUserImage = "IdUserInsertUserImage",
            IdUserInsertInsertDate = "IdUserInsertInsertDate",
            IdUserInsertInsertUserId = "IdUserInsertInsertUserId",
            IdUserInsertUpdateDate = "IdUserInsertUpdateDate",
            IdUserInsertUpdateUserId = "IdUserInsertUpdateUserId",
            IdUserInsertIsActive = "IdUserInsertIsActive",
            IdUserInsertAddress = "IdUserInsertAddress",
            IdUserInsertIdHubungan = "IdUserInsertIdHubungan",
            IdUserInsertNoKtp = "IdUserInsertNoKtp",
            IdUserInsertNoKk = "IdUserInsertNoKk",
            IdUserInsertPhoneNumber = "IdUserInsertPhoneNumber",
            IdUserInsertWaNumber = "IdUserInsertWaNumber",
            IdUserInsertOption1 = "IdUserInsertOption1",
            IdUserInsertOption2 = "IdUserInsertOption2",
            IdUserInsertOption3 = "IdUserInsertOption3",
            IdUserInsertJenisKelamin = "IdUserInsertJenisKelamin",
            IdUserInsertTanggalLahir = "IdUserInsertTanggalLahir",
            IdUserInsertDescription = "IdUserInsertDescription",
            IdUserInsertIdDesa = "IdUserInsertIdDesa",
            IdUserInsertPendidikan = "IdUserInsertPendidikan",
            IdUserInsertIdVersion = "IdUserInsertIdVersion",
            IdUserInsertFcmToken = "IdUserInsertFcmToken",
            Detail = "Detail"
        }
    }
}
declare namespace SDD.Transaction {
    namespace ForumNewService {
        const baseUrl = "Transaction/ForumNew";
        function Create(request: Serenity.SaveRequest<ForumNewRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ForumNewRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ForumNewRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ForumNewRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/ForumNew/Create",
            Update = "Transaction/ForumNew/Update",
            Delete = "Transaction/ForumNew/Delete",
            Retrieve = "Transaction/ForumNew/Retrieve",
            List = "Transaction/ForumNew/List"
        }
    }
}
declare namespace SDD.Transaction {
    interface ForumRow {
        IdForum?: number;
        IdMasterForum?: number;
        IdUserInsert?: number;
        DetailForum?: string;
        FotoDokumenForum?: string;
        HiddenUser?: number;
        Timestamp?: string;
        IdMasterForumNamaForum?: string;
        IdMasterForumDeskripsi?: string;
        IdUserInsertUsername?: string;
        IdUserInsertDisplayName?: string;
        IdUserInsertEmail?: string;
        IdUserInsertSource?: string;
        IdUserInsertPasswordHash?: string;
        IdUserInsertPasswordSalt?: string;
        IdUserInsertLastDirectoryUpdate?: string;
        IdUserInsertUserImage?: string;
        IdUserInsertInsertDate?: string;
        IdUserInsertInsertUserId?: number;
        IdUserInsertUpdateDate?: string;
        IdUserInsertUpdateUserId?: number;
        IdUserInsertIsActive?: number;
        IdUserInsertAddress?: string;
        IdUserInsertIdHubungan?: number;
        IdUserInsertNoKtp?: string;
        IdUserInsertNoKk?: string;
        IdUserInsertPhoneNumber?: string;
        IdUserInsertWaNumber?: string;
        IdUserInsertOption1?: string;
        IdUserInsertOption2?: string;
        IdUserInsertOption3?: string;
        IdUserInsertJenisKelamin?: number;
        IdUserInsertTanggalLahir?: string;
        IdUserInsertDescription?: string;
        IdUserInsertIdDesa?: number;
        IdUserInsertPendidikan?: string;
        IdUserInsertIdVersion?: number;
        IdUserInsertFcmToken?: string;
        Detail?: DetailForumRow[];
    }
    namespace ForumRow {
        const idProperty = "IdForum";
        const nameProperty = "DetailForum";
        const localTextPrefix = "Transaction.Forum";
        const deletePermission = "Transaction:Forum";
        const insertPermission = "Transaction:Forum";
        const readPermission = "Transaction:Forum";
        const updatePermission = "Transaction:Forum";
        const enum Fields {
            IdForum = "IdForum",
            IdMasterForum = "IdMasterForum",
            IdUserInsert = "IdUserInsert",
            DetailForum = "DetailForum",
            FotoDokumenForum = "FotoDokumenForum",
            HiddenUser = "HiddenUser",
            Timestamp = "Timestamp",
            IdMasterForumNamaForum = "IdMasterForumNamaForum",
            IdMasterForumDeskripsi = "IdMasterForumDeskripsi",
            IdUserInsertUsername = "IdUserInsertUsername",
            IdUserInsertDisplayName = "IdUserInsertDisplayName",
            IdUserInsertEmail = "IdUserInsertEmail",
            IdUserInsertSource = "IdUserInsertSource",
            IdUserInsertPasswordHash = "IdUserInsertPasswordHash",
            IdUserInsertPasswordSalt = "IdUserInsertPasswordSalt",
            IdUserInsertLastDirectoryUpdate = "IdUserInsertLastDirectoryUpdate",
            IdUserInsertUserImage = "IdUserInsertUserImage",
            IdUserInsertInsertDate = "IdUserInsertInsertDate",
            IdUserInsertInsertUserId = "IdUserInsertInsertUserId",
            IdUserInsertUpdateDate = "IdUserInsertUpdateDate",
            IdUserInsertUpdateUserId = "IdUserInsertUpdateUserId",
            IdUserInsertIsActive = "IdUserInsertIsActive",
            IdUserInsertAddress = "IdUserInsertAddress",
            IdUserInsertIdHubungan = "IdUserInsertIdHubungan",
            IdUserInsertNoKtp = "IdUserInsertNoKtp",
            IdUserInsertNoKk = "IdUserInsertNoKk",
            IdUserInsertPhoneNumber = "IdUserInsertPhoneNumber",
            IdUserInsertWaNumber = "IdUserInsertWaNumber",
            IdUserInsertOption1 = "IdUserInsertOption1",
            IdUserInsertOption2 = "IdUserInsertOption2",
            IdUserInsertOption3 = "IdUserInsertOption3",
            IdUserInsertJenisKelamin = "IdUserInsertJenisKelamin",
            IdUserInsertTanggalLahir = "IdUserInsertTanggalLahir",
            IdUserInsertDescription = "IdUserInsertDescription",
            IdUserInsertIdDesa = "IdUserInsertIdDesa",
            IdUserInsertPendidikan = "IdUserInsertPendidikan",
            IdUserInsertIdVersion = "IdUserInsertIdVersion",
            IdUserInsertFcmToken = "IdUserInsertFcmToken",
            Detail = "Detail"
        }
    }
}
declare namespace SDD.Transaction {
    namespace ForumService {
        const baseUrl = "Transaction/Forum";
        function Create(request: Serenity.SaveRequest<ForumRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ForumRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ForumRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ForumRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/Forum/Create",
            Update = "Transaction/Forum/Update",
            Delete = "Transaction/Forum/Delete",
            Retrieve = "Transaction/Forum/Retrieve",
            List = "Transaction/Forum/List"
        }
    }
}
declare namespace SDD.Transaction {
    enum GetStatusKapal {
        Sewa = 1,
        Milik = 2
    }
}
declare namespace SDD.Transaction {
    enum GetStatusLapak {
        Sewa = 1,
        Milik = 2
    }
}
declare namespace SDD.Transaction {
    enum GetTipeLapak {
        Offline = 1,
        Online = 2
    }
}
declare namespace SDD.Transaction {
    enum GetTrackStatus {
        NonAktif = 0,
        Aktif = 1
    }
}
declare namespace SDD.Transaction {
    enum GetTypePerusahaan {
        Pns = 1,
        Swasta = 2
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface InfoDesaForm {
        TitleInfo: Serenity.StringEditor;
        ShortDescInfo: MyCustomEditor;
        BodyInfo: MyCustomEditor;
        Image: Serenity.ImageUploadEditor;
    }
    class InfoDesaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface InfoDesaRow {
        IdInfoDesa?: number;
        IdUser?: number;
        Image?: string;
        BodyInfo?: string;
        TitleInfo?: string;
        ShortDescInfo?: string;
        Timestamp?: string;
        DisplayName?: string;
    }
    namespace InfoDesaRow {
        const idProperty = "IdInfoDesa";
        const nameProperty = "Image";
        const localTextPrefix = "Transaction.InfoDesa";
        const deletePermission = "Transaction:InfoDesa";
        const insertPermission = "Transaction:InfoDesa";
        const readPermission = "Transaction:InfoDesa";
        const updatePermission = "Transaction:InfoDesa";
        const enum Fields {
            IdInfoDesa = "IdInfoDesa",
            IdUser = "IdUser",
            Image = "Image",
            BodyInfo = "BodyInfo",
            TitleInfo = "TitleInfo",
            ShortDescInfo = "ShortDescInfo",
            Timestamp = "Timestamp",
            DisplayName = "DisplayName"
        }
    }
}
declare namespace SDD.Transaction {
    namespace InfoDesaService {
        const baseUrl = "Transaction/InfoDesa";
        function Create(request: Serenity.SaveRequest<InfoDesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InfoDesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InfoDesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InfoDesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/InfoDesa/Create",
            Update = "Transaction/InfoDesa/Update",
            Delete = "Transaction/InfoDesa/Delete",
            Retrieve = "Transaction/InfoDesa/Retrieve",
            List = "Transaction/InfoDesa/List"
        }
    }
}
declare namespace SDD.Transaction {
    enum JenisKelahiran {
        Caesar = 1,
        Normal = 2
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface MasterFlowFormulirForm {
        IdMasterForm: Serenity.LookupEditor;
        Slaform: Serenity.IntegerEditor;
        DescForm: Serenity.TextAreaEditor;
        IdDesa: Serenity.LookupEditor;
        DetailFlowFormulir: DetailFlowFormGrid;
    }
    class MasterFlowFormulirForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface MasterFlowFormulirRow {
        IdFormFlow?: number;
        IdMasterForm?: number;
        Slaform?: number;
        DescForm?: string;
        IdDesa?: number;
        IdMasterFormNamaFormulir?: string;
        IdMasterFormDescFormulir?: string;
        IdDesaIdKecamatan?: number;
        IdDesaNamaDesa?: string;
        IdDesaLantitudeDesa?: string;
        IdDesaLongtitudeDesa?: string;
        IdDesaDescDesa?: string;
        IdDesaLogoDesa?: string;
        DetailFlowFormulir?: DetailFlowFormRow[];
    }
    namespace MasterFlowFormulirRow {
        const idProperty = "IdFormFlow";
        const nameProperty = "DescForm";
        const localTextPrefix = "Transaction.MasterFlowFormulir";
        const lookupKey = "Transaction.MasterFlowFormulir";
        function getLookup(): Q.Lookup<MasterFlowFormulirRow>;
        const deletePermission = "Transaction:MasterFlowFormulir";
        const insertPermission = "Transaction:MasterFlowFormulir";
        const readPermission = "Transaction:MasterFlowFormulir";
        const updatePermission = "Transaction:MasterFlowFormulir";
        const enum Fields {
            IdFormFlow = "IdFormFlow",
            IdMasterForm = "IdMasterForm",
            Slaform = "Slaform",
            DescForm = "DescForm",
            IdDesa = "IdDesa",
            IdMasterFormNamaFormulir = "IdMasterFormNamaFormulir",
            IdMasterFormDescFormulir = "IdMasterFormDescFormulir",
            IdDesaIdKecamatan = "IdDesaIdKecamatan",
            IdDesaNamaDesa = "IdDesaNamaDesa",
            IdDesaLantitudeDesa = "IdDesaLantitudeDesa",
            IdDesaLongtitudeDesa = "IdDesaLongtitudeDesa",
            IdDesaDescDesa = "IdDesaDescDesa",
            IdDesaLogoDesa = "IdDesaLogoDesa",
            DetailFlowFormulir = "DetailFlowFormulir"
        }
    }
}
declare namespace SDD.Transaction {
    namespace MasterFlowFormulirService {
        const baseUrl = "Transaction/MasterFlowFormulir";
        function Create(request: Serenity.SaveRequest<MasterFlowFormulirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterFlowFormulirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterFlowFormulirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterFlowFormulirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/MasterFlowFormulir/Create",
            Update = "Transaction/MasterFlowFormulir/Update",
            Delete = "Transaction/MasterFlowFormulir/Delete",
            Retrieve = "Transaction/MasterFlowFormulir/Retrieve",
            List = "Transaction/MasterFlowFormulir/List"
        }
    }
}
declare namespace SDD.Transaction {
    enum MyEnumStatus {
        NonAktif = 0,
        Aktif = 1
    }
}
declare namespace SDD.Transaction {
    enum MyEnumStatushide {
        Show = 0,
        Hidden = 1
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface ParentMessageForm {
        Title: Serenity.StringEditor;
        Message: MyCustomEditor;
        Body: MyCustomEditor;
        Detail: FcmMessageGrid;
    }
    class ParentMessageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface ParentMessageRow {
        IdParentMessage?: number;
        Message?: string;
        Title?: string;
        Body?: string;
        TimeStamp?: string;
        Option1?: number;
        Option2?: number;
        Detail?: FcmMessageRow[];
        IdUserShare?: number;
        DisplayName?: string;
    }
    namespace ParentMessageRow {
        const idProperty = "IdParentMessage";
        const nameProperty = "Message";
        const localTextPrefix = "Transaction.ParentMessage";
        const deletePermission = "Transaction:ParentMessage";
        const insertPermission = "Transaction:ParentMessage";
        const readPermission = "Transaction:ParentMessage";
        const updatePermission = "Transaction:ParentMessage";
        const enum Fields {
            IdParentMessage = "IdParentMessage",
            Message = "Message",
            Title = "Title",
            Body = "Body",
            TimeStamp = "TimeStamp",
            Option1 = "Option1",
            Option2 = "Option2",
            Detail = "Detail",
            IdUserShare = "IdUserShare",
            DisplayName = "DisplayName"
        }
    }
}
declare namespace SDD.Transaction {
    namespace ParentMessageService {
        const baseUrl = "Transaction/ParentMessage";
        function Create(request: Serenity.SaveRequest<ParentMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ParentMessageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ParentMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ParentMessageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/ParentMessage/Create",
            Update = "Transaction/ParentMessage/Update",
            Delete = "Transaction/ParentMessage/Delete",
            Retrieve = "Transaction/ParentMessage/Retrieve",
            List = "Transaction/ParentMessage/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface PengaduanForm {
        IdPengaduan: Serenity.IntegerEditor;
        IdMasterTujuan: Serenity.LookupEditor;
        PerihalPengaduan: MyCustomEditor;
        FotoDokumen: Serenity.MultipleImageUploadEditor;
        Timestamp: Serenity.DateEditor;
        DetailPengaduan: DetailPengaduanGrid;
    }
    class PengaduanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface PengaduanRow {
        IdPengaduan?: number;
        IdUserPengadu?: number;
        IdDesa?: number;
        IdMasterTujuan?: number;
        PerihalPengaduan?: string;
        FotoDokumen?: string;
        Timestamp?: string;
        DetailPengaduan?: DetailPengaduanRow[];
        IdUserPengaduUsername?: string;
        IdUserPengaduDisplayName?: string;
        IdUserPengaduEmail?: string;
        IdUserPengaduSource?: string;
        IdUserPengaduPasswordHash?: string;
        IdUserPengaduPasswordSalt?: string;
        IdUserPengaduLastDirectoryUpdate?: string;
        IdUserPengaduUserImage?: string;
        IdUserPengaduInsertDate?: string;
        IdUserPengaduInsertUserId?: number;
        IdUserPengaduUpdateDate?: string;
        IdUserPengaduUpdateUserId?: number;
        IdUserPengaduIsActive?: number;
        IdUserPengaduAddress?: string;
        IdUserPengaduIdHubungan?: number;
        IdUserPengaduNoKtp?: string;
        IdUserPengaduNoKk?: string;
        IdUserPengaduPhoneNumber?: string;
        IdUserPengaduWaNumber?: string;
        IdUserPengaduOption1?: string;
        IdUserPengaduOption2?: string;
        IdUserPengaduOption3?: string;
        IdUserPengaduJenisKelamin?: number;
        IdUserPengaduTanggalLahir?: string;
        IdUserPengaduDescription?: string;
        IdUserPengaduIdDesa?: number;
        IdUserPengaduPendidikan?: string;
        IdUserPengaduIdVersion?: number;
        IdUserPengaduFcmToken?: string;
        IdDesaIdKecamatan?: number;
        IdDesaNamaDesa?: string;
        IdDesaLantitudeDesa?: string;
        IdDesaLongtitudeDesa?: string;
        IdDesaDescDesa?: string;
        IdDesaLogoDesa?: string;
        IdDesaNoKodeDesa?: string;
        IdMasterTujuanNamaTujuan?: string;
    }
    namespace PengaduanRow {
        const idProperty = "IdPengaduan";
        const nameProperty = "PerihalPengaduan";
        const localTextPrefix = "Transaction.Pengaduan";
        const lookupKey = "Transaction.Pengaduan";
        function getLookup(): Q.Lookup<PengaduanRow>;
        const deletePermission = "Transaction:Pengaduan";
        const insertPermission = "Transaction:Pengaduan";
        const readPermission = "Transaction:Pengaduan";
        const updatePermission = "Transaction:Pengaduan";
        const enum Fields {
            IdPengaduan = "IdPengaduan",
            IdUserPengadu = "IdUserPengadu",
            IdDesa = "IdDesa",
            IdMasterTujuan = "IdMasterTujuan",
            PerihalPengaduan = "PerihalPengaduan",
            FotoDokumen = "FotoDokumen",
            Timestamp = "Timestamp",
            DetailPengaduan = "DetailPengaduan",
            IdUserPengaduUsername = "IdUserPengaduUsername",
            IdUserPengaduDisplayName = "IdUserPengaduDisplayName",
            IdUserPengaduEmail = "IdUserPengaduEmail",
            IdUserPengaduSource = "IdUserPengaduSource",
            IdUserPengaduPasswordHash = "IdUserPengaduPasswordHash",
            IdUserPengaduPasswordSalt = "IdUserPengaduPasswordSalt",
            IdUserPengaduLastDirectoryUpdate = "IdUserPengaduLastDirectoryUpdate",
            IdUserPengaduUserImage = "IdUserPengaduUserImage",
            IdUserPengaduInsertDate = "IdUserPengaduInsertDate",
            IdUserPengaduInsertUserId = "IdUserPengaduInsertUserId",
            IdUserPengaduUpdateDate = "IdUserPengaduUpdateDate",
            IdUserPengaduUpdateUserId = "IdUserPengaduUpdateUserId",
            IdUserPengaduIsActive = "IdUserPengaduIsActive",
            IdUserPengaduAddress = "IdUserPengaduAddress",
            IdUserPengaduIdHubungan = "IdUserPengaduIdHubungan",
            IdUserPengaduNoKtp = "IdUserPengaduNoKtp",
            IdUserPengaduNoKk = "IdUserPengaduNoKk",
            IdUserPengaduPhoneNumber = "IdUserPengaduPhoneNumber",
            IdUserPengaduWaNumber = "IdUserPengaduWaNumber",
            IdUserPengaduOption1 = "IdUserPengaduOption1",
            IdUserPengaduOption2 = "IdUserPengaduOption2",
            IdUserPengaduOption3 = "IdUserPengaduOption3",
            IdUserPengaduJenisKelamin = "IdUserPengaduJenisKelamin",
            IdUserPengaduTanggalLahir = "IdUserPengaduTanggalLahir",
            IdUserPengaduDescription = "IdUserPengaduDescription",
            IdUserPengaduIdDesa = "IdUserPengaduIdDesa",
            IdUserPengaduPendidikan = "IdUserPengaduPendidikan",
            IdUserPengaduIdVersion = "IdUserPengaduIdVersion",
            IdUserPengaduFcmToken = "IdUserPengaduFcmToken",
            IdDesaIdKecamatan = "IdDesaIdKecamatan",
            IdDesaNamaDesa = "IdDesaNamaDesa",
            IdDesaLantitudeDesa = "IdDesaLantitudeDesa",
            IdDesaLongtitudeDesa = "IdDesaLongtitudeDesa",
            IdDesaDescDesa = "IdDesaDescDesa",
            IdDesaLogoDesa = "IdDesaLogoDesa",
            IdDesaNoKodeDesa = "IdDesaNoKodeDesa",
            IdMasterTujuanNamaTujuan = "IdMasterTujuanNamaTujuan"
        }
    }
}
declare namespace SDD.Transaction {
    namespace PengaduanService {
        const baseUrl = "Transaction/Pengaduan";
        function Create(request: Serenity.SaveRequest<PengaduanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PengaduanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PengaduanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PengaduanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/Pengaduan/Create",
            Update = "Transaction/Pengaduan/Update",
            Delete = "Transaction/Pengaduan/Delete",
            Retrieve = "Transaction/Pengaduan/Retrieve",
            List = "Transaction/Pengaduan/List"
        }
    }
}
declare namespace SDD.Transaction {
    enum StatusAparat {
        Satu = 1,
        Dua = 2
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface TransaksiStatusForm {
        IdMasterForm: Serenity.LookupEditor;
        IdUserPengajuan: Serenity.LookupEditor;
        IdStatus: Serenity.LookupEditor;
        LinkFormulir: Serenity.StringEditor;
        DokumenFormulir: StaticTextBlock;
        Dokumen: Serenity.MultipleImageUploadEditor;
        Keterangan: Serenity.TextAreaEditor;
        IdUserAparat: Serenity.IntegerEditor;
        TimeStamp: Serenity.DateEditor;
    }
    class TransaksiStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface TransaksiStatusRow {
        IdTransaksi?: number;
        IdMasterForm?: number;
        IdStatus?: number;
        IdUserPengajuan?: number;
        Keterangan?: string;
        IdUserAparat?: number;
        TimeStamp?: string;
        DisplayName?: string;
        DisplayName1?: string;
        NamaStatus?: string;
        IdDesa?: number;
        IdMasterFormNamaFormulir?: string;
        IdMasterFormDescFormulir?: string;
        LinkFormulir?: string;
        NamaDesa?: string;
        IdFormulir?: number;
        Dokumen?: string;
        Info?: string;
        Jabatan?: string;
        IdTransaksiForm?: number;
    }
    namespace TransaksiStatusRow {
        const idProperty = "IdTransaksi";
        const nameProperty = "Keterangan";
        const localTextPrefix = "Transaction.TransaksiStatus";
        const deletePermission = "Transaction:TransaksiStatus";
        const insertPermission = "Transaction:TransaksiStatus";
        const readPermission = "Transaction:TransaksiStatus";
        const updatePermission = "Transaction:TransaksiStatus";
        const enum Fields {
            IdTransaksi = "IdTransaksi",
            IdMasterForm = "IdMasterForm",
            IdStatus = "IdStatus",
            IdUserPengajuan = "IdUserPengajuan",
            Keterangan = "Keterangan",
            IdUserAparat = "IdUserAparat",
            TimeStamp = "TimeStamp",
            DisplayName = "DisplayName",
            DisplayName1 = "DisplayName1",
            NamaStatus = "NamaStatus",
            IdDesa = "IdDesa",
            IdMasterFormNamaFormulir = "IdMasterFormNamaFormulir",
            IdMasterFormDescFormulir = "IdMasterFormDescFormulir",
            LinkFormulir = "LinkFormulir",
            NamaDesa = "NamaDesa",
            IdFormulir = "IdFormulir",
            Dokumen = "Dokumen",
            Info = "Info",
            Jabatan = "Jabatan",
            IdTransaksiForm = "IdTransaksiForm"
        }
    }
}
declare namespace SDD.Transaction {
    namespace TransaksiStatusService {
        const baseUrl = "Transaction/TransaksiStatus";
        function Create(request: Serenity.SaveRequest<TransaksiStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TransaksiStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransaksiStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransaksiStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/TransaksiStatus/Create",
            Update = "Transaction/TransaksiStatus/Update",
            Delete = "Transaction/TransaksiStatus/Delete",
            Retrieve = "Transaction/TransaksiStatus/Retrieve",
            List = "Transaction/TransaksiStatus/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface UserKaryawanForm {
        TypePerusahaan: Serenity.EnumEditor;
        StatusKaryawan: StatusKaryawan;
        RatarataPenghasilan: Serenity.DecimalEditor;
        NamaperusahaanUsaha: Serenity.StringEditor;
        AlamatPerusahanUsaha: Serenity.TextAreaEditor;
        Desc: Serenity.TextAreaEditor;
        IdPekerjaan: Serenity.IntegerEditor;
    }
    class UserKaryawanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface UserKaryawanRow {
        IdUserKaryawan?: number;
        IdUser?: number;
        TypePerusahaan?: number;
        StatusKaryawan?: string;
        RatarataPenghasilan?: number;
        NamaperusahaanUsaha?: string;
        AlamatPerusahanUsaha?: string;
        Desc?: string;
        IduserDisplayName?: string;
        IdPekerjaan?: number;
        IdPekerjaanNamaPekerjaan?: string;
    }
    namespace UserKaryawanRow {
        const idProperty = "IdUserKaryawan";
        const nameProperty = "StatusKaryawan";
        const localTextPrefix = "Transaction.UserKaryawan";
        const deletePermission = "Transaction:UserKaryawan";
        const insertPermission = "Transaction:UserKaryawan";
        const readPermission = "Transaction:UserKaryawan";
        const updatePermission = "Transaction:UserKaryawan";
        const enum Fields {
            IdUserKaryawan = "IdUserKaryawan",
            IdUser = "IdUser",
            TypePerusahaan = "TypePerusahaan",
            StatusKaryawan = "StatusKaryawan",
            RatarataPenghasilan = "RatarataPenghasilan",
            NamaperusahaanUsaha = "NamaperusahaanUsaha",
            AlamatPerusahanUsaha = "AlamatPerusahanUsaha",
            Desc = "Desc",
            IduserDisplayName = "IduserDisplayName",
            IdPekerjaan = "IdPekerjaan",
            IdPekerjaanNamaPekerjaan = "IdPekerjaanNamaPekerjaan"
        }
    }
}
declare namespace SDD.Transaction {
    namespace UserKaryawanService {
        const baseUrl = "Transaction/UserKaryawan";
        function Create(request: Serenity.SaveRequest<UserKaryawanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserKaryawanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserKaryawanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserKaryawanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/UserKaryawan/Create",
            Update = "Transaction/UserKaryawan/Update",
            Delete = "Transaction/UserKaryawan/Delete",
            Retrieve = "Transaction/UserKaryawan/Retrieve",
            List = "Transaction/UserKaryawan/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface UserNelayanForm {
        Desc: Serenity.TextAreaEditor;
        IdPekerjaan: Serenity.IntegerEditor;
        DetailNelayan: DetailKapalNelayanGrid;
    }
    class UserNelayanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface UserNelayanRow {
        IdUserNelayan?: number;
        IdUser?: number;
        Desc?: string;
        IduserDisplayName?: string;
        DetailNelayan?: DetailKapalNelayanRow[];
        IdPekerjaan?: number;
        IdPekerjaanNamaPekerjaan?: string;
    }
    namespace UserNelayanRow {
        const idProperty = "IdUserNelayan";
        const nameProperty = "Desc";
        const localTextPrefix = "Transaction.UserNelayan";
        const deletePermission = "Transaction:UserNelayan";
        const insertPermission = "Transaction:UserNelayan";
        const readPermission = "Transaction:UserNelayan";
        const updatePermission = "Transaction:UserNelayan";
        const enum Fields {
            IdUserNelayan = "IdUserNelayan",
            IdUser = "IdUser",
            Desc = "Desc",
            IduserDisplayName = "IduserDisplayName",
            DetailNelayan = "DetailNelayan",
            IdPekerjaan = "IdPekerjaan",
            IdPekerjaanNamaPekerjaan = "IdPekerjaanNamaPekerjaan"
        }
    }
}
declare namespace SDD.Transaction {
    namespace UserNelayanService {
        const baseUrl = "Transaction/UserNelayan";
        function Create(request: Serenity.SaveRequest<UserNelayanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserNelayanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserNelayanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserNelayanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/UserNelayan/Create",
            Update = "Transaction/UserNelayan/Update",
            Delete = "Transaction/UserNelayan/Delete",
            Retrieve = "Transaction/UserNelayan/Retrieve",
            List = "Transaction/UserNelayan/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface UserPerdaganganForm {
        NamaBrandToko: Serenity.StringEditor;
        JenisDagangan: JenisDagangan;
        Desc: Serenity.TextAreaEditor;
        IdPekerjaan: Serenity.IntegerEditor;
        DetailPerdagangan: DetailUserPerdaganganGrid;
    }
    class UserPerdaganganForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface UserPerdaganganRow {
        IdUserPerdagangan?: number;
        Iduser?: number;
        NamaBrandToko?: string;
        JenisDagangan?: string;
        Desc?: string;
        IduserUsername?: string;
        IduserDisplayName?: string;
        IduserEmail?: string;
        IduserSource?: string;
        IduserPasswordHash?: string;
        IduserPasswordSalt?: string;
        IduserLastDirectoryUpdate?: string;
        IduserUserImage?: string;
        IduserInsertDate?: string;
        IduserInsertUserId?: number;
        IduserUpdateDate?: string;
        IduserUpdateUserId?: number;
        IduserIsActive?: number;
        IduserAddress?: string;
        IduserIdHubungan?: number;
        IduserNoKtp?: string;
        IduserNoKk?: string;
        IduserPhoneNumber?: string;
        IduserWaNumber?: string;
        IduserOption1?: string;
        IduserOption2?: string;
        IduserOption3?: string;
        IduserTanggalLahir?: string;
        IduserDescription?: string;
        DetailPerdagangan?: DetailUserPerdaganganRow[];
        IdPekerjaan?: number;
        IdPekerjaanNamaPekerjaan?: string;
    }
    namespace UserPerdaganganRow {
        const idProperty = "IdUserPerdagangan";
        const nameProperty = "NamaBrandToko";
        const localTextPrefix = "Transaction.UserPerdagangan";
        const deletePermission = "Transaction:UserPerdagangan";
        const insertPermission = "Transaction:UserPerdagangan";
        const readPermission = "Transaction:UserPerdagangan";
        const updatePermission = "Transaction:UserPerdagangan";
        const enum Fields {
            IdUserPerdagangan = "IdUserPerdagangan",
            Iduser = "Iduser",
            NamaBrandToko = "NamaBrandToko",
            JenisDagangan = "JenisDagangan",
            Desc = "Desc",
            IduserUsername = "IduserUsername",
            IduserDisplayName = "IduserDisplayName",
            IduserEmail = "IduserEmail",
            IduserSource = "IduserSource",
            IduserPasswordHash = "IduserPasswordHash",
            IduserPasswordSalt = "IduserPasswordSalt",
            IduserLastDirectoryUpdate = "IduserLastDirectoryUpdate",
            IduserUserImage = "IduserUserImage",
            IduserInsertDate = "IduserInsertDate",
            IduserInsertUserId = "IduserInsertUserId",
            IduserUpdateDate = "IduserUpdateDate",
            IduserUpdateUserId = "IduserUpdateUserId",
            IduserIsActive = "IduserIsActive",
            IduserAddress = "IduserAddress",
            IduserIdHubungan = "IduserIdHubungan",
            IduserNoKtp = "IduserNoKtp",
            IduserNoKk = "IduserNoKk",
            IduserPhoneNumber = "IduserPhoneNumber",
            IduserWaNumber = "IduserWaNumber",
            IduserOption1 = "IduserOption1",
            IduserOption2 = "IduserOption2",
            IduserOption3 = "IduserOption3",
            IduserTanggalLahir = "IduserTanggalLahir",
            IduserDescription = "IduserDescription",
            DetailPerdagangan = "DetailPerdagangan",
            IdPekerjaan = "IdPekerjaan",
            IdPekerjaanNamaPekerjaan = "IdPekerjaanNamaPekerjaan"
        }
    }
}
declare namespace SDD.Transaction {
    namespace UserPerdaganganService {
        const baseUrl = "Transaction/UserPerdagangan";
        function Create(request: Serenity.SaveRequest<UserPerdaganganRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserPerdaganganRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserPerdaganganRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserPerdaganganRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/UserPerdagangan/Create",
            Update = "Transaction/UserPerdagangan/Update",
            Delete = "Transaction/UserPerdagangan/Delete",
            Retrieve = "Transaction/UserPerdagangan/Retrieve",
            List = "Transaction/UserPerdagangan/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface UserPerikananPeternakanForm {
        Option1: Serenity.LookupEditor;
        IdHasilBudidaya: Serenity.LookupEditor;
        TotalBibit: Serenity.DecimalEditor;
        LuasLahan: Serenity.DecimalEditor;
        JumlahPekerja: Serenity.IntegerEditor;
        PeriodePanen: Serenity.IntegerEditor;
        HasilPanen: Serenity.DecimalEditor;
        NominalHasilPanen: Serenity.DecimalEditor;
        DetailPeternakan: DetailUserPeternakanPerikananGrid;
    }
    class UserPerikananPeternakanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface UserPerikananPeternakanRow {
        IdUserPerikanan?: number;
        IdUser?: number;
        IdHasilBudidaya?: number;
        TotalBibit?: number;
        LuasLahan?: number;
        JumlahPekerja?: number;
        PeriodePanen?: number;
        HasilPanen?: number;
        NominalHasilPanen?: number;
        Option1?: number;
        IdUserUsername?: string;
        IdUserDisplayName?: string;
        IdUserEmail?: string;
        IdUserSource?: string;
        IdUserPasswordHash?: string;
        IdUserPasswordSalt?: string;
        IdUserLastDirectoryUpdate?: string;
        IdUserUserImage?: string;
        IdUserInsertDate?: string;
        IdUserInsertUserId?: number;
        IdUserUpdateDate?: string;
        IdUserUpdateUserId?: number;
        IdUserIsActive?: number;
        IdUserAddress?: string;
        IdUserIdHubungan?: number;
        IdUserNoKtp?: string;
        IdUserNoKk?: string;
        IdUserPhoneNumber?: string;
        IdUserWaNumber?: string;
        IdUserOption1?: string;
        IdUserOption2?: string;
        IdUserOption3?: string;
        IdUserTanggalLahir?: string;
        IdUserDescription?: string;
        IdHasilBudidayaIdMasterBudidaya?: number;
        IdHasilBudidayaNamaHasil?: string;
        IdHasilBudidayaIdSatuanHasil?: number;
        IdHasilBudidayaDesc?: string;
        DetailPeternakan?: DetailUserPeternakanPerikananRow[];
    }
    namespace UserPerikananPeternakanRow {
        const idProperty = "IdUserPerikanan";
        const localTextPrefix = "Transaction.UserPerikananPeternakan";
        const deletePermission = "Transaction:UserPerikananPeternakan";
        const insertPermission = "Transaction:UserPerikananPeternakan";
        const readPermission = "Transaction:UserPerikananPeternakan";
        const updatePermission = "Transaction:UserPerikananPeternakan";
        const enum Fields {
            IdUserPerikanan = "IdUserPerikanan",
            IdUser = "IdUser",
            IdHasilBudidaya = "IdHasilBudidaya",
            TotalBibit = "TotalBibit",
            LuasLahan = "LuasLahan",
            JumlahPekerja = "JumlahPekerja",
            PeriodePanen = "PeriodePanen",
            HasilPanen = "HasilPanen",
            NominalHasilPanen = "NominalHasilPanen",
            Option1 = "Option1",
            IdUserUsername = "IdUserUsername",
            IdUserDisplayName = "IdUserDisplayName",
            IdUserEmail = "IdUserEmail",
            IdUserSource = "IdUserSource",
            IdUserPasswordHash = "IdUserPasswordHash",
            IdUserPasswordSalt = "IdUserPasswordSalt",
            IdUserLastDirectoryUpdate = "IdUserLastDirectoryUpdate",
            IdUserUserImage = "IdUserUserImage",
            IdUserInsertDate = "IdUserInsertDate",
            IdUserInsertUserId = "IdUserInsertUserId",
            IdUserUpdateDate = "IdUserUpdateDate",
            IdUserUpdateUserId = "IdUserUpdateUserId",
            IdUserIsActive = "IdUserIsActive",
            IdUserAddress = "IdUserAddress",
            IdUserIdHubungan = "IdUserIdHubungan",
            IdUserNoKtp = "IdUserNoKtp",
            IdUserNoKk = "IdUserNoKk",
            IdUserPhoneNumber = "IdUserPhoneNumber",
            IdUserWaNumber = "IdUserWaNumber",
            IdUserOption1 = "IdUserOption1",
            IdUserOption2 = "IdUserOption2",
            IdUserOption3 = "IdUserOption3",
            IdUserTanggalLahir = "IdUserTanggalLahir",
            IdUserDescription = "IdUserDescription",
            IdHasilBudidayaIdMasterBudidaya = "IdHasilBudidayaIdMasterBudidaya",
            IdHasilBudidayaNamaHasil = "IdHasilBudidayaNamaHasil",
            IdHasilBudidayaIdSatuanHasil = "IdHasilBudidayaIdSatuanHasil",
            IdHasilBudidayaDesc = "IdHasilBudidayaDesc",
            DetailPeternakan = "DetailPeternakan"
        }
    }
}
declare namespace SDD.Transaction {
    namespace UserPerikananPeternakanService {
        const baseUrl = "Transaction/UserPerikananPeternakan";
        function Create(request: Serenity.SaveRequest<UserPerikananPeternakanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserPerikananPeternakanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserPerikananPeternakanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserPerikananPeternakanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/UserPerikananPeternakan/Create",
            Update = "Transaction/UserPerikananPeternakan/Update",
            Delete = "Transaction/UserPerikananPeternakan/Delete",
            Retrieve = "Transaction/UserPerikananPeternakan/Retrieve",
            List = "Transaction/UserPerikananPeternakan/List"
        }
    }
}
declare namespace SDD.Transaction {
}
declare namespace SDD.Transaction {
    interface UserPertanianPerkebunanForm {
        Option1: Serenity.LookupEditor;
        IdHasilBudidaya: Serenity.LookupEditor;
        LuasLahan: Serenity.DecimalEditor;
        JumlahPekerja: Serenity.IntegerEditor;
        PeriodePanen: Serenity.IntegerEditor;
        HasilPanen: Serenity.DecimalEditor;
        NominalHasilPanen: Serenity.DecimalEditor;
        DetailPertanian: DetailUserPertanianGrid;
    }
    class UserPertanianPerkebunanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.Transaction {
    interface UserPertanianPerkebunanRow {
        IdUserPertanian?: number;
        IdUser?: number;
        IdHasilBudidaya?: number;
        LuasLahan?: number;
        JumlahPekerja?: number;
        PeriodePanen?: number;
        HasilPanen?: number;
        NominalHasilPanen?: number;
        Option1?: number;
        IdUserUsername?: string;
        IdUserDisplayName?: string;
        IdUserEmail?: string;
        IdUserSource?: string;
        IdUserPasswordHash?: string;
        IdUserPasswordSalt?: string;
        IdUserLastDirectoryUpdate?: string;
        IdUserUserImage?: string;
        IdUserInsertDate?: string;
        IdUserInsertUserId?: number;
        IdUserUpdateDate?: string;
        IdUserUpdateUserId?: number;
        IdUserIsActive?: number;
        IdUserAddress?: string;
        IdUserIdHubungan?: number;
        IdUserNoKtp?: string;
        IdUserNoKk?: string;
        IdUserPhoneNumber?: string;
        IdUserWaNumber?: string;
        IdUserOption1?: string;
        IdUserOption2?: string;
        IdUserOption3?: string;
        IdUserTanggalLahir?: string;
        IdUserDescription?: string;
        IdHasilBudidayaIdMasterBudidaya?: number;
        IdHasilBudidayaNamaHasil?: string;
        IdHasilBudidayaIdSatuanHasil?: number;
        IdHasilBudidayaDesc?: string;
        DetailPertanian?: DetailUserPertanianRow[];
    }
    namespace UserPertanianPerkebunanRow {
        const idProperty = "IdUserPertanian";
        const localTextPrefix = "Transaction.UserPertanianPerkebunan";
        const deletePermission = "Transaction:UserPertanianPerkebunan";
        const insertPermission = "Transaction:UserPertanianPerkebunan";
        const readPermission = "Transaction:UserPertanianPerkebunan";
        const updatePermission = "Transaction:UserPertanianPerkebunan";
        const enum Fields {
            IdUserPertanian = "IdUserPertanian",
            IdUser = "IdUser",
            IdHasilBudidaya = "IdHasilBudidaya",
            LuasLahan = "LuasLahan",
            JumlahPekerja = "JumlahPekerja",
            PeriodePanen = "PeriodePanen",
            HasilPanen = "HasilPanen",
            NominalHasilPanen = "NominalHasilPanen",
            Option1 = "Option1",
            IdUserUsername = "IdUserUsername",
            IdUserDisplayName = "IdUserDisplayName",
            IdUserEmail = "IdUserEmail",
            IdUserSource = "IdUserSource",
            IdUserPasswordHash = "IdUserPasswordHash",
            IdUserPasswordSalt = "IdUserPasswordSalt",
            IdUserLastDirectoryUpdate = "IdUserLastDirectoryUpdate",
            IdUserUserImage = "IdUserUserImage",
            IdUserInsertDate = "IdUserInsertDate",
            IdUserInsertUserId = "IdUserInsertUserId",
            IdUserUpdateDate = "IdUserUpdateDate",
            IdUserUpdateUserId = "IdUserUpdateUserId",
            IdUserIsActive = "IdUserIsActive",
            IdUserAddress = "IdUserAddress",
            IdUserIdHubungan = "IdUserIdHubungan",
            IdUserNoKtp = "IdUserNoKtp",
            IdUserNoKk = "IdUserNoKk",
            IdUserPhoneNumber = "IdUserPhoneNumber",
            IdUserWaNumber = "IdUserWaNumber",
            IdUserOption1 = "IdUserOption1",
            IdUserOption2 = "IdUserOption2",
            IdUserOption3 = "IdUserOption3",
            IdUserTanggalLahir = "IdUserTanggalLahir",
            IdUserDescription = "IdUserDescription",
            IdHasilBudidayaIdMasterBudidaya = "IdHasilBudidayaIdMasterBudidaya",
            IdHasilBudidayaNamaHasil = "IdHasilBudidayaNamaHasil",
            IdHasilBudidayaIdSatuanHasil = "IdHasilBudidayaIdSatuanHasil",
            IdHasilBudidayaDesc = "IdHasilBudidayaDesc",
            DetailPertanian = "DetailPertanian"
        }
    }
}
declare namespace SDD.Transaction {
    namespace UserPertanianPerkebunanService {
        const baseUrl = "Transaction/UserPertanianPerkebunan";
        function Create(request: Serenity.SaveRequest<UserPertanianPerkebunanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserPertanianPerkebunanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserPertanianPerkebunanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserPertanianPerkebunanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transaction/UserPertanianPerkebunan/Create",
            Update = "Transaction/UserPertanianPerkebunan/Update",
            Delete = "Transaction/UserPertanianPerkebunan/Delete",
            Retrieve = "Transaction/UserPertanianPerkebunan/Retrieve",
            List = "Transaction/UserPertanianPerkebunan/List"
        }
    }
}
declare namespace SDD.View {
    interface ListResponse extends Serenity.ServiceResponse {
        ListStatusResponse?: StatusResponse[];
    }
}
declare namespace SDD.View {
    interface ListTransaction extends Serenity.ServiceResponse {
        ListTransactionRow?: ViewUserPenghasilanRow[];
    }
}
declare namespace SDD.View {
    interface PostIdUser extends Serenity.ServiceRequest {
        IdUser?: number;
    }
}
declare namespace SDD.View {
    interface PostUser extends Serenity.ServiceRequest {
        IdUser?: number;
    }
}
declare namespace SDD.View {
    interface StatusResponse extends Serenity.ServiceResponse {
        Status?: number;
        Response?: string;
    }
}
declare namespace SDD.View {
}
declare namespace SDD.View {
    interface VChartByAllPekerjaanForm {
        CountTransaksi: Serenity.IntegerEditor;
        TotalPenghasilan: Serenity.DecimalEditor;
        IdPekerjaan: Serenity.IntegerEditor;
        NamaPekerjaan: Serenity.StringEditor;
    }
    class VChartByAllPekerjaanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.View {
    interface VChartByAllPekerjaanRow {
        IdNumber?: number;
        CountTransaksi?: number;
        TotalPenghasilan?: number;
        IdPekerjaan?: number;
        NamaPekerjaan?: string;
    }
    namespace VChartByAllPekerjaanRow {
        const idProperty = "IdNumber";
        const nameProperty = "NamaPekerjaan";
        const localTextPrefix = "View.VChartByAllPekerjaan";
        const deletePermission = "View:VChartByAllPekerjaan";
        const insertPermission = "View:VChartByAllPekerjaan";
        const readPermission = "View:VChartByAllPekerjaan";
        const updatePermission = "View:VChartByAllPekerjaan";
        const enum Fields {
            IdNumber = "IdNumber",
            CountTransaksi = "CountTransaksi",
            TotalPenghasilan = "TotalPenghasilan",
            IdPekerjaan = "IdPekerjaan",
            NamaPekerjaan = "NamaPekerjaan"
        }
    }
}
declare namespace SDD.View {
    namespace VChartByAllPekerjaanService {
        const baseUrl = "View/VChartByAllPekerjaan";
        function Create(request: Serenity.SaveRequest<VChartByAllPekerjaanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VChartByAllPekerjaanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VChartByAllPekerjaanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VChartByAllPekerjaanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "View/VChartByAllPekerjaan/Create",
            Update = "View/VChartByAllPekerjaan/Update",
            Delete = "View/VChartByAllPekerjaan/Delete",
            Retrieve = "View/VChartByAllPekerjaan/Retrieve",
            List = "View/VChartByAllPekerjaan/List"
        }
    }
}
declare namespace SDD.View {
}
declare namespace SDD.View {
    interface VChartPenghasilanDesaForm {
        Namadesa: Serenity.StringEditor;
        TotalPenghasilan: Serenity.DecimalEditor;
    }
    class VChartPenghasilanDesaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.View {
    interface VChartPenghasilanDesaRow {
        IdNumber?: number;
        CountTransaksi?: number;
        TotalPenghasilan?: number;
        Namadesa?: string;
        IdDesa?: number;
    }
    namespace VChartPenghasilanDesaRow {
        const idProperty = "IdNumber";
        const nameProperty = "Namadesa";
        const localTextPrefix = "View.VChartPenghasilanDesa";
        const deletePermission = "View:VChartPenghasilanDesa";
        const insertPermission = "View:VChartPenghasilanDesa";
        const readPermission = "View:VChartPenghasilanDesa";
        const updatePermission = "View:VChartPenghasilanDesa";
        const enum Fields {
            IdNumber = "IdNumber",
            CountTransaksi = "CountTransaksi",
            TotalPenghasilan = "TotalPenghasilan",
            Namadesa = "Namadesa",
            IdDesa = "IdDesa"
        }
    }
}
declare namespace SDD.View {
    namespace VChartPenghasilanDesaService {
        const baseUrl = "View/VChartPenghasilanDesa";
        function Create(request: Serenity.SaveRequest<VChartPenghasilanDesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VChartPenghasilanDesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VChartPenghasilanDesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VChartPenghasilanDesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPdf(request: Serenity.ListRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListId(request: Serenity.ListRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "View/VChartPenghasilanDesa/Create",
            Update = "View/VChartPenghasilanDesa/Update",
            Delete = "View/VChartPenghasilanDesa/Delete",
            Retrieve = "View/VChartPenghasilanDesa/Retrieve",
            List = "View/VChartPenghasilanDesa/List",
            ListPdf = "View/VChartPenghasilanDesa/ListPdf",
            ListId = "View/VChartPenghasilanDesa/ListId"
        }
    }
}
declare namespace SDD.View {
}
declare namespace SDD.View {
    interface ViewAllPengajuanForm {
        IdNumber: Serenity.StringEditor;
        IdUserPengajuan: Serenity.IntegerEditor;
        IdMasterForm: Serenity.IntegerEditor;
        FormulirPengajuan: Serenity.StringEditor;
    }
    class ViewAllPengajuanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.View {
    interface ViewAllPengajuanRow {
        NumberId?: number;
        IdNumber?: number;
        IdUserPengajuan?: number;
        IdMasterForm?: number;
        FormulirPengajuan?: string;
    }
    namespace ViewAllPengajuanRow {
        const idProperty = "NumberId";
        const nameProperty = "FormulirPengajuan";
        const localTextPrefix = "View.ViewAllPengajuan";
        const deletePermission = "View:ViewAllPengajuan";
        const insertPermission = "View:ViewAllPengajuan";
        const readPermission = "View:ViewAllPengajuan";
        const updatePermission = "View:ViewAllPengajuan";
        const enum Fields {
            NumberId = "NumberId",
            IdNumber = "IdNumber",
            IdUserPengajuan = "IdUserPengajuan",
            IdMasterForm = "IdMasterForm",
            FormulirPengajuan = "FormulirPengajuan"
        }
    }
}
declare namespace SDD.View {
    namespace ViewAllPengajuanService {
        const baseUrl = "View/ViewAllPengajuan";
        function Create(request: Serenity.SaveRequest<ViewAllPengajuanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ViewAllPengajuanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewAllPengajuanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewAllPengajuanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "View/ViewAllPengajuan/Create",
            Update = "View/ViewAllPengajuan/Update",
            Delete = "View/ViewAllPengajuan/Delete",
            Retrieve = "View/ViewAllPengajuan/Retrieve",
            List = "View/ViewAllPengajuan/List"
        }
    }
}
declare namespace SDD.View {
}
declare namespace SDD.View {
    interface ViewAllPenghasilanForm {
        UserId: Serenity.IntegerEditor;
        DisplayName: Serenity.StringEditor;
        Username: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        IdHubungan: Serenity.IntegerEditor;
        NoKtp: Serenity.StringEditor;
        NoKk: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        WaNumber: Serenity.StringEditor;
        JenisKelamin: Serenity.StringEditor;
        TanggalLahir: Serenity.DateEditor;
        IdDesa: Serenity.StringEditor;
        NamaDesa: Serenity.StringEditor;
        IdKecamatan: Serenity.IntegerEditor;
        NamaKecamatan: Serenity.StringEditor;
        IdKabupaten: Serenity.IntegerEditor;
        NamaKabupaten: Serenity.StringEditor;
        IdPropinsi: Serenity.IntegerEditor;
        NamaPropinsi: Serenity.StringEditor;
        TotalPenghasilanPeternakan: Serenity.DecimalEditor;
        TotalPenghasilanPertanian: Serenity.DecimalEditor;
        TotalPenghasilanNelayan: Serenity.DecimalEditor;
        TotalPenghasilanKaryawan: Serenity.DecimalEditor;
        TotalPenghasilanPerdagangan: Serenity.DecimalEditor;
        TotalPenghasilan: Serenity.DecimalEditor;
    }
    class ViewAllPenghasilanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.View {
    interface ViewAllPenghasilanRow {
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
    namespace ViewAllPenghasilanRow {
        const idProperty = "IdNumber";
        const nameProperty = "DisplayName";
        const localTextPrefix = "View.ViewAllPenghasilan";
        const deletePermission = "View:ViewAllPenghasilan";
        const insertPermission = "View:ViewAllPenghasilan";
        const readPermission = "View:ViewAllPenghasilan";
        const updatePermission = "View:ViewAllPenghasilan";
        const enum Fields {
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
declare namespace SDD.View {
    namespace ViewAllPenghasilanService {
        const baseUrl = "View/ViewAllPenghasilan";
        function Create(request: Serenity.SaveRequest<ViewAllPenghasilanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ViewAllPenghasilanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewAllPenghasilanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewAllPenghasilanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "View/ViewAllPenghasilan/Create",
            Update = "View/ViewAllPenghasilan/Update",
            Delete = "View/ViewAllPenghasilan/Delete",
            Retrieve = "View/ViewAllPenghasilan/Retrieve",
            List = "View/ViewAllPenghasilan/List"
        }
    }
}
declare namespace SDD.View {
}
declare namespace SDD.View {
    interface ViewMaasterFormForm {
        IdFormFlow: Serenity.IntegerEditor;
        NamaFormulir: Serenity.StringEditor;
        IdFormulir: Serenity.IntegerEditor;
        Slaform: Serenity.IntegerEditor;
        DescForm: Serenity.StringEditor;
        NamaDesa: Serenity.StringEditor;
        NamaKecamatan: Serenity.StringEditor;
        KodePos: Serenity.StringEditor;
        ReqForm: Serenity.StringEditor;
    }
    class ViewMaasterFormForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.View {
    interface ViewMaasterFormRow {
        IdNumber?: number;
        IdFormFlow?: number;
        NamaFormulir?: string;
        IdFormulir?: number;
        Slaform?: number;
        DescForm?: string;
        NamaDesa?: string;
        NamaKecamatan?: string;
        KodePos?: string;
        ReqForm?: string;
    }
    namespace ViewMaasterFormRow {
        const idProperty = "IdNumber";
        const nameProperty = "NamaFormulir";
        const localTextPrefix = "View.ViewMaasterForm";
        const lookupKey = "View.ViewMaasterForm";
        function getLookup(): Q.Lookup<ViewMaasterFormRow>;
        const deletePermission = "View:ViewMaasterForm";
        const insertPermission = "View:ViewMaasterForm";
        const readPermission = "View:ViewMaasterForm";
        const updatePermission = "View:ViewMaasterForm";
        const enum Fields {
            IdNumber = "IdNumber",
            IdFormFlow = "IdFormFlow",
            NamaFormulir = "NamaFormulir",
            IdFormulir = "IdFormulir",
            Slaform = "Slaform",
            DescForm = "DescForm",
            NamaDesa = "NamaDesa",
            NamaKecamatan = "NamaKecamatan",
            KodePos = "KodePos",
            ReqForm = "ReqForm"
        }
    }
}
declare namespace SDD.View {
    namespace ViewMaasterFormService {
        const baseUrl = "View/ViewMaasterForm";
        function Create(request: Serenity.SaveRequest<ViewMaasterFormRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ViewMaasterFormRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewMaasterFormRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewMaasterFormRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "View/ViewMaasterForm/Create",
            Update = "View/ViewMaasterForm/Update",
            Delete = "View/ViewMaasterForm/Delete",
            Retrieve = "View/ViewMaasterForm/Retrieve",
            List = "View/ViewMaasterForm/List"
        }
    }
}
declare namespace SDD.View {
}
declare namespace SDD.View {
    interface ViewProfilUserForm {
        DisplayName: Serenity.StringEditor;
        Username: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        IdHubungan: Serenity.IntegerEditor;
        NoKtp: Serenity.StringEditor;
        NoKk: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        WaNumber: Serenity.StringEditor;
        JenisKelamin: Serenity.IntegerEditor;
        TanggalLahir: Serenity.DateEditor;
        IdDesa: Serenity.StringEditor;
        Pendidikan: Serenity.StringEditor;
        IdKecamatan: Serenity.IntegerEditor;
        NamaDesa: Serenity.StringEditor;
        LogoDesa: Serenity.StringEditor;
        NoKodeDesa: Serenity.StringEditor;
        NamaKecamatan: Serenity.StringEditor;
        IdKabupaten: Serenity.IntegerEditor;
        NoKodeKecamatan: Serenity.StringEditor;
        KodePos: Serenity.StringEditor;
        NoKodeKabupaten: Serenity.StringEditor;
        IdPropinsi: Serenity.IntegerEditor;
        NamaKabupaten: Serenity.StringEditor;
        LogoKabupaten: Serenity.StringEditor;
        NamaPropinsi: Serenity.StringEditor;
        IbuKotaPropinsi: Serenity.StringEditor;
        LogoPropinsi: Serenity.StringEditor;
        NoKodePropinsi: Serenity.StringEditor;
        UserImage: Serenity.StringEditor;
    }
    class ViewProfilUserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.View {
    interface ViewProfilUserRow {
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
    namespace ViewProfilUserRow {
        const idProperty = "UserId";
        const nameProperty = "DisplayName";
        const localTextPrefix = "View.ViewProfilUser";
        const lookupKey = "View.ViewProfilUser";
        function getLookup(): Q.Lookup<ViewProfilUserRow>;
        const deletePermission = "View:ViewProfilUser";
        const insertPermission = "View:ViewProfilUser";
        const readPermission = "View:ViewProfilUser";
        const updatePermission = "View:ViewProfilUser";
        const enum Fields {
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
declare namespace SDD.View {
    namespace ViewProfilUserService {
        const baseUrl = "View/ViewProfilUser";
        function Create(request: Serenity.SaveRequest<ViewProfilUserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ViewProfilUserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewProfilUserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewProfilUserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function CekUser(request: PostIdUser, onSuccess?: (response: StatusResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "View/ViewProfilUser/Create",
            Update = "View/ViewProfilUser/Update",
            Delete = "View/ViewProfilUser/Delete",
            Retrieve = "View/ViewProfilUser/Retrieve",
            List = "View/ViewProfilUser/List",
            CekUser = "View/ViewProfilUser/CekUser"
        }
    }
}
declare namespace SDD.View {
}
declare namespace SDD.View {
    interface ViewTransaksiFormulirForm {
        NamaStatus: Serenity.StringEditor;
        Formulir: Serenity.StringEditor;
        DokumenFormulir: StaticTextBlock;
        Dokumen: Serenity.MultipleImageUploadEditor;
        Info: Serenity.TextAreaEditor;
    }
    class ViewTransaksiFormulirForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.View {
    interface ViewTransaksiFormulirRow {
        IdTransaksi?: number;
        IdTransaksiForm?: number;
        IdUserPengajuan?: number;
        IdUserAparat?: number;
        Info?: string;
        TimeStamp?: string;
        IdMasterForm?: number;
        IdStatus?: number;
        IdFormulir?: number;
        Formulir?: string;
        Dokumen?: string;
        NamaStatus?: string;
    }
    namespace ViewTransaksiFormulirRow {
        const idProperty = "IdTransaksi";
        const nameProperty = "Info";
        const localTextPrefix = "View.ViewTransaksiFormulir";
        const deletePermission = "View:ViewTransaksiFormulir";
        const insertPermission = "View:ViewTransaksiFormulir";
        const readPermission = "View:ViewTransaksiFormulir";
        const updatePermission = "View:ViewTransaksiFormulir";
        const enum Fields {
            IdTransaksi = "IdTransaksi",
            IdTransaksiForm = "IdTransaksiForm",
            IdUserPengajuan = "IdUserPengajuan",
            IdUserAparat = "IdUserAparat",
            Info = "Info",
            TimeStamp = "TimeStamp",
            IdMasterForm = "IdMasterForm",
            IdStatus = "IdStatus",
            IdFormulir = "IdFormulir",
            Formulir = "Formulir",
            Dokumen = "Dokumen",
            NamaStatus = "NamaStatus"
        }
    }
}
declare namespace SDD.View {
    namespace ViewTransaksiFormulirService {
        const baseUrl = "View/ViewTransaksiFormulir";
        function Create(request: Serenity.SaveRequest<ViewTransaksiFormulirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ViewTransaksiFormulirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewTransaksiFormulirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewTransaksiFormulirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "View/ViewTransaksiFormulir/Create",
            Update = "View/ViewTransaksiFormulir/Update",
            Delete = "View/ViewTransaksiFormulir/Delete",
            Retrieve = "View/ViewTransaksiFormulir/Retrieve",
            List = "View/ViewTransaksiFormulir/List"
        }
    }
}
declare namespace SDD.View {
}
declare namespace SDD.View {
    interface ViewUserPengajuanForm {
        IdNumber: Serenity.StringEditor;
        Formulir: Serenity.StringEditor;
        Dokumen: Serenity.StringEditor;
    }
    class ViewUserPengajuanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.View {
    interface ViewUserPengajuanRow {
        NumberId?: number;
        IdNumber?: number;
        UserPengaju?: number;
        IdFormulir?: number;
        Formulir?: string;
        Dokumen?: string;
    }
    namespace ViewUserPengajuanRow {
        const idProperty = "NumberId";
        const nameProperty = "Formulir";
        const localTextPrefix = "View.ViewUserPengajuan";
        const deletePermission = "View:ViewUserPengajuan";
        const insertPermission = "View:ViewUserPengajuan";
        const readPermission = "View:ViewUserPengajuan";
        const updatePermission = "View:ViewUserPengajuan";
        const enum Fields {
            NumberId = "NumberId",
            IdNumber = "IdNumber",
            UserPengaju = "UserPengaju",
            IdFormulir = "IdFormulir",
            Formulir = "Formulir",
            Dokumen = "Dokumen"
        }
    }
}
declare namespace SDD.View {
    namespace ViewUserPengajuanService {
        const baseUrl = "View/ViewUserPengajuan";
        function Create(request: Serenity.SaveRequest<ViewUserPengajuanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ViewUserPengajuanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewUserPengajuanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewUserPengajuanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "View/ViewUserPengajuan/Create",
            Update = "View/ViewUserPengajuan/Update",
            Delete = "View/ViewUserPengajuan/Delete",
            Retrieve = "View/ViewUserPengajuan/Retrieve",
            List = "View/ViewUserPengajuan/List"
        }
    }
}
declare namespace SDD.View {
}
declare namespace SDD.View {
    interface ViewUserPenghasilanForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        WaNumber: Serenity.StringEditor;
        TotalHasil: Serenity.DecimalEditor;
        NamaPekerjaan: Serenity.StringEditor;
        NamaDesa: Serenity.StringEditor;
        NamaKecamatan: Serenity.StringEditor;
        NamaKabupaten: Serenity.StringEditor;
        NamaPropinsi: Serenity.StringEditor;
    }
    class ViewUserPenghasilanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SDD.View {
    interface ViewUserPenghasilanRow {
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
    namespace ViewUserPenghasilanRow {
        const idProperty = "NumberId";
        const nameProperty = "DisplayName";
        const localTextPrefix = "View.ViewUserPenghasilan";
        const deletePermission = "View:ViewUserPenghasilan";
        const insertPermission = "View:ViewUserPenghasilan";
        const readPermission = "View:ViewUserPenghasilan";
        const updatePermission = "View:ViewUserPenghasilan";
        const enum Fields {
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
declare namespace SDD.View {
    namespace ViewUserPenghasilanService {
        const baseUrl = "View/ViewUserPenghasilan";
        function Create(request: Serenity.SaveRequest<ViewUserPenghasilanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ViewUserPenghasilanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewUserPenghasilanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewUserPenghasilanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPekerjaanUser(request: PostUser, onSuccess?: (response: ListTransaction) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "View/ViewUserPenghasilan/Create",
            Update = "View/ViewUserPenghasilan/Update",
            Delete = "View/ViewUserPenghasilan/Delete",
            Retrieve = "View/ViewUserPenghasilan/Retrieve",
            List = "View/ViewUserPenghasilan/List",
            ListPekerjaanUser = "View/ViewUserPenghasilan/ListPekerjaanUser"
        }
    }
}
declare namespace SDD.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace SDD.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace SDD.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SDD.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace SDD.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace SDD.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace SDD.Administration {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class Pendidikan extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace SDD.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SDD.Administration {
    import fld = UserRow.Fields;
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): fld[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace SDD.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SDD.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SDD.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace SDD.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace SDD.LanguageList {
    function getValue(): string[][];
}
declare namespace SDD.ScriptInitialization {
}
declare namespace SDD {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace SDD.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace SDD.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace SDD.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace SDD.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace SDD.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SDD.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace SDD {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace SDD.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace SDD.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace SDD.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace SDD.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace SDD.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace SDD.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace SDD.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace SDD.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace SDD.Master {
    class MasterBudidayaDialog extends Serenity.EntityDialog<MasterBudidayaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterBudidayaForm;
    }
}
declare namespace SDD.Master {
    class MasterBudidayaGrid extends Serenity.EntityGrid<MasterBudidayaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterBudidayaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Master {
    class MasterDesaDialog extends Serenity.EntityDialog<MasterDesaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterDesaForm;
    }
}
declare namespace SDD.Master {
    class MasterDesaGrid extends Serenity.EntityGrid<MasterDesaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterDesaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.Master {
    class MasterFormulirDialog extends Serenity.EntityDialog<MasterFormulirRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterFormulirForm;
    }
}
declare namespace SDD.Master {
    class MasterFormulirGrid extends Serenity.EntityGrid<MasterFormulirRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterFormulirDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Master {
    class MasterForumDialog extends Serenity.EntityDialog<MasterForumRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterForumForm;
    }
}
declare namespace SDD.Master {
    class MasterForumGrid extends Serenity.EntityGrid<MasterForumRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterForumDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Master {
    class MasterHasilBudidayaDialog extends Common.GridEditorDialog<MasterHasilBudidayaRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterHasilBudidayaForm;
    }
}
declare namespace SDD.Master {
    class MasterHasilBudidayaGrid extends Common.GridEditorBase<MasterHasilBudidayaRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterHasilBudidayaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Master {
    class MasterHubunganDialog extends Serenity.EntityDialog<MasterHubunganRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterHubunganForm;
    }
}
declare namespace SDD.Master {
    class MasterHubunganGrid extends Serenity.EntityGrid<MasterHubunganRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterHubunganDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Master {
    class MasterJabatanDialog extends Serenity.EntityDialog<MasterJabatanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterJabatanForm;
    }
}
declare namespace SDD.Master {
    class MasterJabatanGrid extends Serenity.EntityGrid<MasterJabatanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterJabatanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Master {
    class MasterKabupatenDialog extends Serenity.EntityDialog<MasterKabupatenRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterKabupatenForm;
    }
}
declare namespace SDD.Master {
    class MasterKabupatenGrid extends Serenity.EntityGrid<MasterKabupatenRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterKabupatenDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.Master {
    class MasterKecamatanDialog extends Serenity.EntityDialog<MasterKecamatanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterKecamatanForm;
    }
}
declare namespace SDD.Master {
    class MasterKecamatanGrid extends Serenity.EntityGrid<MasterKecamatanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterKecamatanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.Master {
    class MasterPekerjaanDialog extends Serenity.EntityDialog<MasterPekerjaanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterPekerjaanForm;
    }
}
declare namespace SDD.Master {
    class MasterPekerjaanGrid extends Serenity.EntityGrid<MasterPekerjaanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterPekerjaanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Master {
    class MasterPropinsiDialog extends Serenity.EntityDialog<MasterPropinsiRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterPropinsiForm;
    }
}
declare namespace SDD.Master {
    class MasterPropinsiGrid extends Serenity.EntityGrid<MasterPropinsiRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterPropinsiDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.Master {
    class MasterSatuanDialog extends Serenity.EntityDialog<MasterSatuanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterSatuanForm;
    }
}
declare namespace SDD.Master {
    class MasterSatuanGrid extends Serenity.EntityGrid<MasterSatuanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterSatuanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Master {
    class MasterStatusDialog extends Serenity.EntityDialog<MasterStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterStatusForm;
    }
}
declare namespace SDD.Master {
    class MasterStatusGrid extends Serenity.EntityGrid<MasterStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Master {
    class MasterTujuanPengaduanDialog extends Serenity.EntityDialog<MasterTujuanPengaduanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterTujuanPengaduanForm;
    }
}
declare namespace SDD.Master {
    class MasterTujuanPengaduanGrid extends Serenity.EntityGrid<MasterTujuanPengaduanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterTujuanPengaduanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Master {
    class MasterVersionDialog extends Serenity.EntityDialog<MasterVersionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterVersionForm;
    }
}
declare namespace SDD.Master {
    class MasterVersionGrid extends Serenity.EntityGrid<MasterVersionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterVersionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace SDD.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class AparaturDesaDialog extends Serenity.EntityDialog<AparaturDesaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AparaturDesaForm;
    }
}
declare namespace SDD.Transaction {
    class AparaturDesaGrid extends Serenity.EntityGrid<AparaturDesaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AparaturDesaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class BannerDialog extends Serenity.EntityDialog<BannerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BannerForm;
    }
}
declare namespace SDD.Transaction {
    class BannerGrid extends Serenity.EntityGrid<BannerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BannerDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.Transaction {
    class DetailAktaLahirDialog extends Common.GridEditorDialog<DetailAktaLahirRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DetailAktaLahirForm;
    }
}
declare namespace SDD.Transaction {
    class DetailAktaLahirGrid extends Common.GridEditorBase<DetailAktaLahirRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DetailAktaLahirDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class DetailFlowFormDialog extends Common.GridEditorDialog<DetailFlowFormRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DetailFlowFormForm;
    }
}
declare namespace SDD.Transaction {
    class DetailFlowFormGrid extends Common.GridEditorBase<DetailFlowFormRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DetailFlowFormDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class DetailFormulirKkDialog extends Common.GridEditorDialog<DetailFormulirKkRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DetailFormulirKkForm;
    }
}
declare namespace SDD.Transaction {
    class DetailFormulirKkGrid extends Common.GridEditorBase<DetailFormulirKkRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DetailFormulirKkDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class DetailForumDialog extends Common.GridEditorDialog<DetailForumRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DetailForumForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace SDD.Transaction {
    class DetailForumGrid extends Common.GridEditorBase<DetailForumRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DetailForumDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class DetailKapalNelayanDialog extends Common.GridEditorDialog<DetailKapalNelayanRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DetailKapalNelayanForm;
    }
}
declare namespace SDD.Transaction {
    class DetailKapalNelayanGrid extends Common.GridEditorBase<DetailKapalNelayanRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DetailKapalNelayanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class TypeKapal extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class DetailPengaduanDialog extends Common.GridEditorDialog<DetailPengaduanRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DetailPengaduanForm;
        constructor();
    }
}
declare namespace SDD.Transaction {
    class DetailPengaduanGrid extends Common.GridEditorBase<DetailPengaduanRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DetailPengaduanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class DetailUserPerdaganganDialog extends Common.GridEditorDialog<DetailUserPerdaganganRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DetailUserPerdaganganForm;
    }
}
declare namespace SDD.Transaction {
    class DetailUserPerdaganganGrid extends Common.GridEditorBase<DetailUserPerdaganganRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DetailUserPerdaganganDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class DetailUserPertanianDialog extends Common.GridEditorDialog<DetailUserPertanianRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DetailUserPertanianForm;
    }
}
declare namespace SDD.Transaction {
    class DetailUserPertanianGrid extends Common.GridEditorBase<DetailUserPertanianRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DetailUserPertanianDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class DetailUserPeternakanPerikananDialog extends Common.GridEditorDialog<DetailUserPeternakanPerikananRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DetailUserPeternakanPerikananForm;
    }
}
declare namespace SDD.Transaction {
    class DetailUserPeternakanPerikananGrid extends Common.GridEditorBase<DetailUserPeternakanPerikananRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DetailUserPeternakanPerikananDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class FcmMessageDialog extends Common.GridEditorDialog<FcmMessageRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FcmMessageForm;
        constructor();
    }
}
declare namespace SDD.Transaction {
    class FcmMessageGrid extends Common.GridEditorBase<FcmMessageRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FcmMessageDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SDD.Transaction {
    class FcmMessageUserDialog extends Serenity.EntityDialog<FcmMessageUserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FcmMessageUserForm;
    }
}
declare namespace SDD.Transaction {
    class FcmMessageUserGrid extends Serenity.EntityGrid<FcmMessageUserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FcmMessageUserDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class FormulirAktaKelahiranDialog extends Serenity.EntityDialog<FormulirAktaKelahiranRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FormulirAktaKelahiranForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace SDD.Transaction {
    class FormulirAktaKelahiranGrid extends Serenity.EntityGrid<FormulirAktaKelahiranRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FormulirAktaKelahiranDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.Transaction {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class HariKelahiran extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class FormulirKkDialog extends Serenity.EntityDialog<FormulirKkRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FormulirKkForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace SDD.Transaction {
    class FormulirKkGrid extends Serenity.EntityGrid<FormulirKkRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FormulirKkDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.Transaction {
    class FormulirKtpDialog extends Serenity.EntityDialog<FormulirKtpRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FormulirKtpForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace SDD.Transaction {
    class FormulirKtpGrid extends Serenity.EntityGrid<FormulirKtpRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FormulirKtpDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.Transaction {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class TypePermohonan extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class ForumDialog extends Serenity.EntityDialog<ForumRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ForumForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace SDD.Transaction {
    class ForumGrid extends Serenity.EntityGrid<ForumRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ForumDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class ForumNewDialog extends Serenity.EntityDialog<ForumNewRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ForumNewForm;
    }
}
declare namespace SDD.Transaction {
    class ForumNewGrid extends Serenity.EntityGrid<ForumNewRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ForumNewDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class InfoDesaDialog extends Serenity.EntityDialog<InfoDesaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InfoDesaForm;
    }
}
declare namespace SDD.Transaction {
    class InfoDesaGrid extends Serenity.EntityGrid<InfoDesaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InfoDesaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.Transaction {
    class MasterFlowFormulirDialog extends Serenity.EntityDialog<MasterFlowFormulirRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MasterFlowFormulirForm;
    }
}
declare namespace SDD.Transaction {
    class MasterFlowFormulirGrid extends Serenity.EntityGrid<MasterFlowFormulirRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterFlowFormulirDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class MyCustomEditor extends Serenity.HtmlContentEditor {
        constructor(textArea: JQuery, opt?: Serenity.HtmlContentEditorOptions);
        protected getConfig(): Serenity.CKEditorConfig;
        get_value(): string;
    }
    function trimNewlineEnd(text: string): string;
}
declare namespace SDD.Transaction {
    class ParentMessageDialog extends Serenity.EntityDialog<ParentMessageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ParentMessageForm;
        constructor();
    }
}
declare namespace SDD.Transaction {
    class ParentMessageGrid extends Serenity.EntityGrid<ParentMessageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ParentMessageDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class PengaduanDialog extends Serenity.EntityDialog<PengaduanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PengaduanForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace SDD.Transaction {
    class PengaduanGrid extends Serenity.EntityGrid<PengaduanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PengaduanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.Transaction {
    class TransaksiStatusDialog extends Serenity.EntityDialog<TransaksiStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected DokumenFormulir: any;
        protected form: TransaksiStatusForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace SDD.Transaction {
    class TransaksiStatusGrid extends Serenity.EntityGrid<TransaksiStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransaksiStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.Transaction {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class StatusKaryawan extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class UserKaryawanDialog extends Serenity.EntityDialog<UserKaryawanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UserKaryawanForm;
    }
}
declare namespace SDD.Transaction {
    class UserKaryawanGrid extends Serenity.EntityGrid<UserKaryawanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserKaryawanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class UserNelayanDialog extends Serenity.EntityDialog<UserNelayanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UserNelayanForm;
    }
}
declare namespace SDD.Transaction {
    class UserNelayanGrid extends Serenity.EntityGrid<UserNelayanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserNelayanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class JenisDagangan extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class UserPerdaganganDialog extends Serenity.EntityDialog<UserPerdaganganRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UserPerdaganganForm;
    }
}
declare namespace SDD.Transaction {
    class UserPerdaganganGrid extends Serenity.EntityGrid<UserPerdaganganRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserPerdaganganDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class UserPerikananPeternakanDialog extends Serenity.EntityDialog<UserPerikananPeternakanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UserPerikananPeternakanForm;
    }
}
declare namespace SDD.Transaction {
    class UserPerikananPeternakanGrid extends Serenity.EntityGrid<UserPerikananPeternakanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserPerikananPeternakanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.Transaction {
    class UserPertanianPerkebunanDialog extends Serenity.EntityDialog<UserPertanianPerkebunanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UserPertanianPerkebunanForm;
    }
}
declare namespace SDD.Transaction {
    class UserPertanianPerkebunanGrid extends Serenity.EntityGrid<UserPertanianPerkebunanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserPertanianPerkebunanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.View {
    class VChartByAllPekerjaanDialog extends Serenity.EntityDialog<VChartByAllPekerjaanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VChartByAllPekerjaanForm;
    }
}
declare namespace SDD.View {
    class VChartByAllPekerjaanGrid extends Serenity.EntityGrid<VChartByAllPekerjaanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VChartByAllPekerjaanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.View {
    class VChartPenghasilanDesaDialog extends Serenity.EntityDialog<VChartPenghasilanDesaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VChartPenghasilanDesaForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace SDD.View {
    class VChartPenghasilanDesaGrid extends Serenity.EntityGrid<VChartPenghasilanDesaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VChartPenghasilanDesaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace SDD.View {
    class ViewAllPengajuanDialog extends Serenity.EntityDialog<ViewAllPengajuanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ViewAllPengajuanForm;
    }
}
declare namespace SDD.View {
    class ViewAllPengajuanGrid extends Serenity.EntityGrid<ViewAllPengajuanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ViewAllPengajuanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.View {
    class ViewAllPenghasilanDialog extends Serenity.EntityDialog<ViewAllPenghasilanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ViewAllPenghasilanForm;
    }
}
declare namespace SDD.View {
    class ViewAllPenghasilanGrid extends Serenity.EntityGrid<ViewAllPenghasilanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ViewAllPenghasilanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.View {
    class ViewMaasterFormDialog extends Serenity.EntityDialog<ViewMaasterFormRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ViewMaasterFormForm;
    }
}
declare namespace SDD.View {
    class ViewMaasterFormGrid extends Serenity.EntityGrid<ViewMaasterFormRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ViewMaasterFormDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.View {
    class ViewProfilUserDialog extends Serenity.EntityDialog<ViewProfilUserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ViewProfilUserForm;
    }
}
declare namespace SDD.View {
    class ViewProfilUserGrid extends Serenity.EntityGrid<ViewProfilUserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ViewProfilUserDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.View {
    class ViewTransaksiFormulirDialog extends Serenity.EntityDialog<ViewTransaksiFormulirRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ViewTransaksiFormulirForm;
        protected DokumenFormulir: any;
        protected afterLoadEntity(): void;
    }
}
declare namespace SDD.View {
    class ViewTransaksiFormulirGrid extends Serenity.EntityGrid<ViewTransaksiFormulirRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ViewTransaksiFormulirDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SDD.View {
    class ViewUserPengajuanDialog extends Serenity.EntityDialog<ViewUserPengajuanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ViewUserPengajuanForm;
    }
}
declare namespace SDD.View {
    class ViewUserPengajuanGrid extends Serenity.EntityGrid<ViewUserPengajuanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ViewUserPengajuanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SDD.View {
    class ViewUserPenghasilanDialog extends Serenity.EntityDialog<ViewUserPenghasilanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ViewUserPenghasilanForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace SDD.View {
    class ViewUserPenghasilanGrid extends Serenity.EntityGrid<ViewUserPenghasilanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ViewUserPenghasilanDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
    }
}
