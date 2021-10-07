using Serenity;
using Serenity.Extensibility;

namespace SDD
{
    [NestedLocalTexts]
    public static partial class Texts
    {
        public static class Db
        {
            public static class Administration
            {
                public static class Translation
                {
                    public static LocalText EntityPlural = "Translations";
                    public static LocalText Key = "Local Text Key";
                    public static LocalText SourceLanguage = "Source Language";
                    public static LocalText SourceText = "Effective Translation in Source Language";
                    public static LocalText TargetLanguage = "Target Language";
                    public static LocalText TargetText = "Effective Translation in Target Language";
                    public static LocalText CustomText = "User Translation in Target Language";
                    public static LocalText OverrideConfirmation = "Overwrite user translation with clicked text?";
                    public static LocalText SaveChangesButton = "Save Changes";
                }
            }
        }

        public static class Forms
        {
            public static class Membership
            {
                public static class ChangePassword
                {
                    public static LocalText FormTitle = "Ganti Kata Sandi";
                    public static LocalText SubmitButton = "Ganti Kata Sandi";
                    public static LocalText Success = "Kata Sandi berhasil diubah.";
                }

                public static class ForgotPassword
                {
                    public static LocalText FormInfo = "Silahkan masukkan Email terdaftar.";
                    public static LocalText FormTitle = "Lupa Kata Sandi";
                    public static LocalText SubmitButton = "Reset Kata Sandi";
                    public static LocalText Success = "Instruksi Reset Kata Sandi berhasil dikirim ke Email terdaftar.";
                    public static LocalText BackToLogin = "Saya sudah mengingat Kata Sandi";
                }

                public static class ResetPassword
                {
                    public static LocalText EmailSubject = "Reset Kata Sandi";
                    public static LocalText FormTitle = "Reset Kata Sandi";
                    public static LocalText SubmitButton = "Reset Kata Sandi";
                    public static LocalText Success = "Kata Sandi anda berhasil diubah.";
                    public static LocalText BackToLogin = "Saya sudah mengingat Kata Sandi. Batal Reset!";
                }

                public static class Login
                {
                    public static LocalText FormTitle = "SIDEDI Desa Digital";
                    public static LocalText SignInButton = "Masuk";
                    public static LocalText ForgotPassword = "Lupa Kata Sandi?";
                    public static LocalText SignUpButton = "Daftar Baru";
                    public static LocalText RememberMe = "Ingat saya";
                    public static LocalText OR = "Atau";
                    public static LocalText FacebookButton = "Masuk melalui Facebook";
                    public static LocalText GoogleButton = "Masuk melalui Google+";
                }

                public static class SignUp
                {
                    public static LocalText ActivateEmailSubject = "Activate Your SIDEDI Account";
                    public static LocalText ActivationCompleteMessage = "Akunmu berhasil diaktivasi. " + 
                        "Silahkan gunakan Email dan Password yang baru anda daftarkan";
                    public static LocalText FormInfo = "Silahkan Isi data diri untuk membuat Akun.";
                    public static LocalText FormTitle = "Daftar Akun SIDEDI";
                    public static LocalText SubmitButton = "Daftar";
                    public static LocalText Success = "Instruksi untuk aktivasi akun SIDEDI  " + 
                        "Sudah dikirim ke Email yang anda daftarkan. Silahkan cek Inbox Email anda.";

                    public static LocalText DisplayName = "Nama Lengkap";
                    public static LocalText Email = "E-mail";
                    public static LocalText ConfirmEmail = "Konfirmasi Email";
                    public static LocalText Password = "Kata Sandi";
                    public static LocalText ConfirmPassword = "Konfirmasi Kata Sandi";

                    public static LocalText AcceptTerms = "Saya setuju dengan persyaratan";
                    public static LocalText BackToLogin = "Saya sudah memiliki akun";
                }
            }
        }

        public static class Navigation
        {
            public static LocalText LogoutLink = "Keluar";
            public static LocalText SiteTitle = "SIDEDI";
        }

        public static class Site
        {
            public static class AccessDenied
            {
                public static LocalText PageTitle = "Akses Ditolak";
                public static LocalText LackPermissions = "Anda tidak memiliki izin akses ke Page ini!";
                public static LocalText NotLoggedIn = "Anda harus login terlebih dahulu untuk masuk k Page ini";
                public static LocalText ClickToChangeUser = "Masuk dengan akun lain";
                public static LocalText ClickToLogin = "Kembali ke Halaman Login";
            }

            public static class Dashboard
            {
                public static LocalText ContentDescription =
                    "a sample with random data (from free <em><a href = \"https://almsaeedstudio.com/\" target= \"_blank\">" +
                    "AdminLTE theme</a></em>)";
            }

            public static class BasicProgressDialog
            {
                public static LocalText CancelTitle = "Operation cancelled. Waiting for in progress calls to complete...";
                public static LocalText PleaseWait = "Menunggu...";
            }

            public static class BulkServiceAction
            {
                public static LocalText AllHadErrorsFormat = "All {0} record(s) that are processed had errors!";
                public static LocalText AllSuccessFormat = "Finished processing on {0} record(s) with success.";
                public static LocalText ConfirmationFormat = "Perform this operation on {0} selected record(s)?";
                public static LocalText ErrorCount = "{0} error(s)";
                public static LocalText NothingToProcess = "Please select some records to process!";
                public static LocalText SomeHadErrorsFormat = "Finished processing on {0} record(s) with success. {1} record(s) had errors!";
                public static LocalText SuccessCount = "{0} done";
            }

            public static class UserDialog
            {
                public static LocalText EditPermissionsButton = "Ubah Akses";
                public static LocalText EditRolesButton = "Ubah Roles";
            }

            public static class UserRoleDialog
            {
                public static LocalText DialogTitle = "Ubah User Roles ({0})";
                public static LocalText SaveSuccess = "Berhasil Mengubah user roles.";
            }

            public static class UserPermissionDialog
            {
                public static LocalText DialogTitle = "Ubah User Akses ({0})";
                public static LocalText SaveSuccess = "Updated user permissions.";
                public static LocalText Permission = "Akses";
                public static LocalText Grant = "Grant";
                public static LocalText Revoke = "Revoke";
            }

            public static class RolePermissionDialog
            {
                public static LocalText EditButton = "Ubah Akes";
                public static LocalText DialogTitle = "Ubah Role Akses ({0})";
                public static LocalText SaveSuccess = "Updated role Akes.";
            }

            public static class Layout
            {
                public static LocalText FooterCopyright = "Copyright (c) 2015.";
                public static LocalText FooterInfo = "Serenity Platform";
                public static LocalText FooterRights = "All rights reserved.";
                public static LocalText GeneralSettings = "General Settings";
                public static LocalText Language = "Language";
                public static LocalText Theme = "Theme";
                public static LocalText ThemeBlack = "Black";
                public static LocalText ThemeBlackLight = "Black Light";
                public static LocalText ThemeBlue = "Blue";
                public static LocalText ThemeBlueLight = "Blue Light";
                public static LocalText ThemeGreen = "Green";
                public static LocalText ThemeGreenLight = "Green Light";
                public static LocalText ThemePurple = "Purple";
                public static LocalText ThemePurpleLight = "Purple Light";
                public static LocalText ThemeRed = "Red";
                public static LocalText ThemeRedLight = "Red Light";
                public static LocalText ThemeYellow = "Yellow";
                public static LocalText ThemeYellowLight = "Yellow Light";
            }

            public static class ValidationError
            {
                public static LocalText Title = "ERROR";
            }
        }

        public static partial class Validation
        {
            public static LocalText AuthenticationError = "Username dan Kata Sandi Salah!";
            public static LocalText CurrentPasswordMismatch = "Kata Sandi Sebelumnya Tidak Benar!";
            public static LocalText MinRequiredPasswordLength = "Karakter Password Terlalu Pendek (min {0})!";
            public static LocalText InvalidResetToken = "Masa berlaku Reset Kata Sandi sudah berakhir!";
            public static LocalText InvalidActivateToken = "Masa berlaku  aktivasi Email sudah berakhir!!";
            public static LocalText CantFindUserWithEmail = "Tidak menemukan user dengan email tersebut!";
            public static LocalText EmailInUse = "Email sudah terdaftar!";
            public static LocalText EmailConfirm = "Email konfirmasi harus sama!";
            public static LocalText DeleteForeignKeyError = "Can't delete record. '{0}' table has " +
                "records that depends on this one!";
            public static LocalText SavePrimaryKeyError = "Can't save record. There is another record with the same {1} value!";
        }
    }
}