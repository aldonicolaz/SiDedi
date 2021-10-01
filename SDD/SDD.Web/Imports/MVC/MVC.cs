using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Master
        {
            public static class MasterBudidaya
            {
                public const string MasterBudidayaIndex = "~/Modules/Master/MasterBudidaya/MasterBudidayaIndex.cshtml";
            }

            public static class MasterDesa
            {
                public const string MasterDesaIndex = "~/Modules/Master/MasterDesa/MasterDesaIndex.cshtml";
            }

            public static class MasterFormulir
            {
                public const string MasterFormulirIndex = "~/Modules/Master/MasterFormulir/MasterFormulirIndex.cshtml";
            }

            public static class MasterForum
            {
                public const string MasterForumIndex = "~/Modules/Master/MasterForum/MasterForumIndex.cshtml";
            }

            public static class MasterHasilBudidaya
            {
                public const string MasterHasilBudidayaIndex = "~/Modules/Master/MasterHasilBudidaya/MasterHasilBudidayaIndex.cshtml";
            }

            public static class MasterHubungan
            {
                public const string MasterHubunganIndex = "~/Modules/Master/MasterHubungan/MasterHubunganIndex.cshtml";
            }

            public static class MasterJabatan
            {
                public const string MasterJabatanIndex = "~/Modules/Master/MasterJabatan/MasterJabatanIndex.cshtml";
            }

            public static class MasterKabupaten
            {
                public const string MasterKabupatenIndex = "~/Modules/Master/MasterKabupaten/MasterKabupatenIndex.cshtml";
            }

            public static class MasterKecamatan
            {
                public const string MasterKecamatanIndex = "~/Modules/Master/MasterKecamatan/MasterKecamatanIndex.cshtml";
            }

            public static class MasterPekerjaan
            {
                public const string MasterPekerjaanIndex = "~/Modules/Master/MasterPekerjaan/MasterPekerjaanIndex.cshtml";
            }

            public static class MasterPropinsi
            {
                public const string MasterPropinsiIndex = "~/Modules/Master/MasterPropinsi/MasterPropinsiIndex.cshtml";
            }

            public static class MasterSatuan
            {
                public const string MasterSatuanIndex = "~/Modules/Master/MasterSatuan/MasterSatuanIndex.cshtml";
            }

            public static class MasterStatus
            {
                public const string MasterStatusIndex = "~/Modules/Master/MasterStatus/MasterStatusIndex.cshtml";
            }

            public static class MasterTujuanPengaduan
            {
                public const string MasterTujuanPengaduanIndex = "~/Modules/Master/MasterTujuanPengaduan/MasterTujuanPengaduanIndex.cshtml";
            }

            public static class MasterVersion
            {
                public const string MasterVersionIndex = "~/Modules/Master/MasterVersion/MasterVersionIndex.cshtml";
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class Transaction
        {
            public static class AparaturDesa
            {
                public const string AparaturDesaIndex = "~/Modules/Transaction/AparaturDesa/AparaturDesaIndex.cshtml";
            }

            public static class Banner
            {
                public const string BannerIndex = "~/Modules/Transaction/Banner/BannerIndex.cshtml";
            }

            public static class DetailAktaLahir
            {
                public const string DetailAktaLahirIndex = "~/Modules/Transaction/DetailAktaLahir/DetailAktaLahirIndex.cshtml";
            }

            public static class DetailFlowForm
            {
                public const string DetailFlowFormIndex = "~/Modules/Transaction/DetailFlowForm/DetailFlowFormIndex.cshtml";
            }

            public static class DetailFormulirKk
            {
                public const string DetailFormulirKkIndex = "~/Modules/Transaction/DetailFormulirKk/DetailFormulirKkIndex.cshtml";
            }

            public static class DetailForum
            {
                public const string DetailForumIndex = "~/Modules/Transaction/DetailForum/DetailForumIndex.cshtml";
            }

            public static class DetailKapalNelayan
            {
                public const string DetailKapalNelayanIndex = "~/Modules/Transaction/DetailKapalNelayan/DetailKapalNelayanIndex.cshtml";
            }

            public static class DetailPengaduan
            {
                public const string DetailPengaduanIndex = "~/Modules/Transaction/DetailPengaduan/DetailPengaduanIndex.cshtml";
            }

            public static class DetailUserPerdagangan
            {
                public const string DetailUserPerdaganganIndex = "~/Modules/Transaction/DetailUserPerdagangan/DetailUserPerdaganganIndex.cshtml";
            }

            public static class DetailUserPertanian
            {
                public const string DetailUserPertanianIndex = "~/Modules/Transaction/DetailUserPertanian/DetailUserPertanianIndex.cshtml";
            }

            public static class DetailUserPeternakanPerikanan
            {
                public const string DetailUserPeternakanPerikananIndex = "~/Modules/Transaction/DetailUserPeternakanPerikanan/DetailUserPeternakanPerikananIndex.cshtml";
            }

            public static class FcmMessage
            {
                public const string FcmMessageIndex = "~/Modules/Transaction/FcmMessage/FcmMessageIndex.cshtml";
            }

            public static class FcmMessageUser
            {
                public const string FcmMessageUserIndex = "~/Modules/Transaction/FcmMessageUser/FcmMessageUserIndex.cshtml";
            }

            public static class FormulirAktaKelahiran
            {
                public const string FormulirAktaKelahiranIndex = "~/Modules/Transaction/FormulirAktaKelahiran/FormulirAktaKelahiranIndex.cshtml";
            }

            public static class FormulirKk
            {
                public const string FormulirKkIndex = "~/Modules/Transaction/FormulirKk/FormulirKkIndex.cshtml";
            }

            public static class FormulirKtp
            {
                public const string FormulirKtpIndex = "~/Modules/Transaction/FormulirKtp/FormulirKtpIndex.cshtml";
            }

            public static class Forum
            {
                public const string ForumIndex = "~/Modules/Transaction/Forum/ForumIndex.cshtml";
            }

            public static class ForumNew
            {
                public const string ForumNewIndex = "~/Modules/Transaction/ForumNew/ForumNewIndex.cshtml";
            }

            public static class InfoDesa
            {
                public const string InfoDesaIndex = "~/Modules/Transaction/InfoDesa/InfoDesaIndex.cshtml";
            }

            public static class MasterFlowFormulir
            {
                public const string MasterFlowFormulirIndex = "~/Modules/Transaction/MasterFlowFormulir/MasterFlowFormulirIndex.cshtml";
            }

            public static class ParentMessage
            {
                public const string ParentMessageIndex = "~/Modules/Transaction/ParentMessage/ParentMessageIndex.cshtml";
            }

            public static class Pengaduan
            {
                public const string PengaduanIndex = "~/Modules/Transaction/Pengaduan/PengaduanIndex.cshtml";
            }

            public static class TransaksiStatus
            {
                public const string TransaksiStatusIndex = "~/Modules/Transaction/TransaksiStatus/TransaksiStatusIndex.cshtml";
            }

            public static class UserKaryawan
            {
                public const string UserKaryawanIndex = "~/Modules/Transaction/UserKaryawan/UserKaryawanIndex.cshtml";
            }

            public static class UserNelayan
            {
                public const string UserNelayanIndex = "~/Modules/Transaction/UserNelayan/UserNelayanIndex.cshtml";
            }

            public static class UserPerdagangan
            {
                public const string UserPerdaganganIndex = "~/Modules/Transaction/UserPerdagangan/UserPerdaganganIndex.cshtml";
            }

            public static class UserPerikananPeternakan
            {
                public const string UserPerikananPeternakanIndex = "~/Modules/Transaction/UserPerikananPeternakan/UserPerikananPeternakanIndex.cshtml";
            }

            public static class UserPertanianPerkebunan
            {
                public const string UserPertanianPerkebunanIndex = "~/Modules/Transaction/UserPertanianPerkebunan/UserPertanianPerkebunanIndex.cshtml";
            }

        }

        public static class View
        {
            public static class VChartByAllPekerjaan
            {
                public const string VChartByAllPekerjaanIndex = "~/Modules/View/VChartByAllPekerjaan/VChartByAllPekerjaanIndex.cshtml";
            }

            public static class VChartPenghasilanDesa
            {
                public const string VChartPenghasilanDesaIndex = "~/Modules/View/VChartPenghasilanDesa/VChartPenghasilanDesaIndex.cshtml";
            }

            public static class ViewAllPengajuan
            {
                public const string ViewAllPengajuanIndex = "~/Modules/View/ViewAllPengajuan/ViewAllPengajuanIndex.cshtml";
            }

            public static class ViewAllPenghasilan
            {
                public const string ViewAllPenghasilanIndex = "~/Modules/View/ViewAllPenghasilan/ViewAllPenghasilanIndex.cshtml";
            }

            public static class ViewMaasterForm
            {
                public const string ViewMaasterFormIndex = "~/Modules/View/ViewMaasterForm/ViewMaasterFormIndex.cshtml";
            }

            public static class ViewProfilUser
            {
                public const string ViewProfilUserIndex = "~/Modules/View/ViewProfilUser/ViewProfilUserIndex.cshtml";
            }

            public static class ViewTransaksiFormulir
            {
                public const string ViewTransaksiFormulirIndex = "~/Modules/View/ViewTransaksiFormulir/ViewTransaksiFormulirIndex.cshtml";
            }

            public static class ViewUserPengajuan
            {
                public const string ViewUserPengajuanIndex = "~/Modules/View/ViewUserPengajuan/ViewUserPengajuanIndex.cshtml";
            }

            public static class ViewUserPenghasilan
            {
                public const string ViewUserPenghasilanIndex = "~/Modules/View/ViewUserPenghasilan/ViewUserPenghasilanIndex.cshtml";
            }
        }
    }
}

