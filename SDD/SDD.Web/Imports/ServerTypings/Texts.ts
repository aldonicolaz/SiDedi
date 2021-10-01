namespace SDD.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const Address: string;
                export const Description: string;
                export const DisplayName: string;
                export const Email: string;
                export const FcmToken: string;
                export const IdDesa: string;
                export const IdDesaNamaDesa: string;
                export const IdHubungan: string;
                export const IdVersion: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const JenisKelamin: string;
                export const LastDirectoryUpdate: string;
                export const NamaHubungan: string;
                export const NoKK: string;
                export const NoKTP: string;
                export const Option1: string;
                export const Option2: string;
                export const Option3: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Pendidikan: string;
                export const PhoneNumber: string;
                export const Source: string;
                export const TanggalLahir: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
                export const WaNumber: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const RoleName: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Master {

            namespace MasterBudidaya {
                export const DetailBudidaya: string;
                export const IdBudidaya: string;
                export const IdPekerjaan: string;
                export const IdPekerjaanDesc: string;
                export const IdPekerjaanNamaPekerjaan: string;
                export const IdSatuanBudidaya: string;
                export const IdSatuanBudidayaDescSatuan: string;
                export const IdSatuanBudidayaNamaSatuan: string;
                export const NamaBudidaya: string;
            }

            namespace MasterDesa {
                export const DescDesa: string;
                export const IdDesa: string;
                export const IdKecamatan: string;
                export const IdKecamatanDecKecamatan: string;
                export const IdKecamatanIdKabupaten: string;
                export const IdKecamatanKodePos: string;
                export const IdKecamatanLangtitudeKecamatan: string;
                export const IdKecamatanLogoKecamatan: string;
                export const IdKecamatanLongtitudeKecamatan: string;
                export const IdKecamatanNamaKecamatan: string;
                export const LantitudeDesa: string;
                export const LogoDesa: string;
                export const LongtitudeDesa: string;
                export const NamaDesa: string;
                export const NoKodeDesa: string;
            }

            namespace MasterFormulir {
                export const DescFormulir: string;
                export const IdFormulir: string;
                export const NamaFormulir: string;
            }

            namespace MasterForum {
                export const Deskripsi: string;
                export const IdMasterForum: string;
                export const NamaForum: string;
            }

            namespace MasterHasilBudidaya {
                export const Desc: string;
                export const IdHasilBudidaya: string;
                export const IdMasterBudidaya: string;
                export const IdMasterBudidayaIdPekerjaan: string;
                export const IdMasterBudidayaIdSatuanBudidaya: string;
                export const IdMasterBudidayaNamaBudidaya: string;
                export const IdSatuanHasil: string;
                export const IdSatuanHasilDescSatuan: string;
                export const IdSatuanHasilNamaSatuan: string;
                export const NamaHasil: string;
            }

            namespace MasterHubungan {
                export const DescHubungan: string;
                export const IdHubungan: string;
                export const KodeHubungan: string;
                export const NamaHubungan: string;
            }

            namespace MasterJabatan {
                export const Desc: string;
                export const IdJabatan: string;
                export const NamaJabatan: string;
            }

            namespace MasterKabupaten {
                export const DescKabupaten: string;
                export const IdKabupaten: string;
                export const IdPropinsi: string;
                export const IdPropinsiDescPropinsi: string;
                export const IdPropinsiIbuKotaPropinsi: string;
                export const IdPropinsiLatitudePropinsi: string;
                export const IdPropinsiLogoPropinsi: string;
                export const IdPropinsiLongitudePropinsi: string;
                export const IdPropinsiNamaPropinsi: string;
                export const Langtitudekabupaten: string;
                export const LogoKabupaten: string;
                export const LongtitudeKabupaten: string;
                export const NamaKabupaten: string;
                export const NoKodeKabupaten: string;
            }

            namespace MasterKecamatan {
                export const DecKecamatan: string;
                export const IdKabupaten: string;
                export const IdKabupatenDescKabupaten: string;
                export const IdKabupatenIdPropinsi: string;
                export const IdKabupatenLangtitudekabupaten: string;
                export const IdKabupatenLogoKabupaten: string;
                export const IdKabupatenLongtitudeKabupaten: string;
                export const IdKabupatenNamaKabupaten: string;
                export const IdKecamatan: string;
                export const KodePos: string;
                export const LangtitudeKecamatan: string;
                export const LogoKecamatan: string;
                export const LongtitudeKecamatan: string;
                export const NamaKecamatan: string;
                export const NoKodeKecamatan: string;
            }

            namespace MasterPekerjaan {
                export const Desc: string;
                export const IdPekerjaan: string;
                export const NamaPekerjaan: string;
            }

            namespace MasterPropinsi {
                export const DescPropinsi: string;
                export const IbuKotaPropinsi: string;
                export const IdPropinsi: string;
                export const LatitudePropinsi: string;
                export const LogoPropinsi: string;
                export const LongitudePropinsi: string;
                export const NamaPropinsi: string;
                export const NoKodePropinsi: string;
            }

            namespace MasterSatuan {
                export const DescSatuan: string;
                export const IdSatuan: string;
                export const NamaSatuan: string;
            }

            namespace MasterStatus {
                export const IdStatus: string;
                export const NamaStatus: string;
            }

            namespace MasterTujuanPengaduan {
                export const IdMasterTujuan: string;
                export const NamaTujuan: string;
            }

            namespace MasterVersion {
                export const Description: string;
                export const IdMasterVersion: string;
                export const NamaVersion: string;
                export const NumberVersion: string;
                export const Timestamp: string;
            }
        }

        namespace Transaction {

            namespace AparaturDesa {
                export const DescAparaturDesa: string;
                export const IdAparaturDesa: string;
                export const IdDesa: string;
                export const IdDesaDescDesa: string;
                export const IdDesaIdKecamatan: string;
                export const IdDesaLantitudeDesa: string;
                export const IdDesaLogoDesa: string;
                export const IdDesaLongtitudeDesa: string;
                export const IdDesaNamaDesa: string;
                export const IdJabatan: string;
                export const IdJabatanDesc: string;
                export const IdJabatanNamaJabatan: string;
                export const IdUser: string;
                export const IdUserAddress: string;
                export const IdUserDescription: string;
                export const IdUserDisplayName: string;
                export const IdUserEmail: string;
                export const IdUserIdHubungan: string;
                export const IdUserInsertDate: string;
                export const IdUserInsertUserId: string;
                export const IdUserIsActive: string;
                export const IdUserLastDirectoryUpdate: string;
                export const IdUserNoKk: string;
                export const IdUserNoKtp: string;
                export const IdUserOption1: string;
                export const IdUserOption2: string;
                export const IdUserOption3: string;
                export const IdUserPasswordHash: string;
                export const IdUserPasswordSalt: string;
                export const IdUserPhoneNumber: string;
                export const IdUserSource: string;
                export const IdUserTanggalLahir: string;
                export const IdUserUpdateDate: string;
                export const IdUserUpdateUserId: string;
                export const IdUserUserImage: string;
                export const IdUserUsername: string;
                export const IdUserWaNumber: string;
                export const PeriodeAkhir: string;
                export const PeriodeAwal: string;
                export const StatusAparatur: string;
            }

            namespace Banner {
                export const Description: string;
                export const DisplayName: string;
                export const IdBanner: string;
                export const IdUser: string;
                export const Image: string;
                export const StatusAktif: string;
                export const UrlImage: string;
            }

            namespace DetailAktaLahir {
                export const Desc: string;
                export const IdAktaLahir: string;
                export const IdAktaLahirAlamatAyah: string;
                export const IdAktaLahirAlamatIbu: string;
                export const IdAktaLahirAnakKe: string;
                export const IdAktaLahirBeratBayi: string;
                export const IdAktaLahirHariKelahiran: string;
                export const IdAktaLahirIdFormFlow: string;
                export const IdAktaLahirIdUserPelapor: string;
                export const IdAktaLahirJenisKelahiran: string;
                export const IdAktaLahirKelaminBayi: string;
                export const IdAktaLahirLinkDocAkta: string;
                export const IdAktaLahirNamaAyah: string;
                export const IdAktaLahirNamaBayi: string;
                export const IdAktaLahirNamaIbu: string;
                export const IdAktaLahirNikAyah: string;
                export const IdAktaLahirNikIbu: string;
                export const IdAktaLahirPanjangBayi: string;
                export const IdAktaLahirPekerjaanAyah: string;
                export const IdAktaLahirPekerjaanIbu: string;
                export const IdAktaLahirTempatKelahiran: string;
                export const IdAktaLahirTglLahir: string;
                export const IdAktaLahirTglLahirAyah: string;
                export const IdAktaLahirTglLahirIbu: string;
                export const IdAktaLahirWaktuKelahiran: string;
                export const IdDetailAktaLahir: string;
                export const NamaSaksi: string;
                export const NikSaksi: string;
                export const PekerjaanSaksi: string;
                export const TglLahirSaksi: string;
            }

            namespace DetailFlowForm {
                export const IdDetailFlowForm: string;
                export const IdFormFlow: string;
                export const IdFormFlowDescForm: string;
                export const IdFormFlowIdDesa: string;
                export const IdFormFlowIdMasterForm: string;
                export const IdFormFlowSlaform: string;
                export const IdJabatan: string;
                export const IdJabatanDesc: string;
                export const IdJabatanNamaJabatan: string;
                export const SlaDetail: string;
                export const UrutanFlow: string;
            }

            namespace DetailFormulirKk {
                export const IdDetailKk: string;
                export const IdFormulirKk: string;
                export const IdFormulirKkAlasanPemohon: string;
                export const IdFormulirKkIdMasterFlow: string;
                export const IdFormulirKkIdUser: string;
                export const IdFormulirKkJumlahKk: string;
                export const IdFormulirKkLinkDocKk: string;
                export const IdFormulirKkTimestamp: string;
                export const IdMasterHub: string;
                export const IdMasterHubDescHubungan: string;
                export const IdMasterHubKodeHubungan: string;
                export const IdMasterHubNamaHubungan: string;
                export const NamaLengkap: string;
                export const Nik: string;
            }

            namespace DetailForum {
                export const DetailRespon: string;
                export const FotoDokumenRespon: string;
                export const IdDetailForum: string;
                export const IdForum: string;
                export const IdForumDetailForum: string;
                export const IdForumFotoDokumenForum: string;
                export const IdForumHiddenUser: string;
                export const IdForumIdMasterForum: string;
                export const IdForumIdUserInsert: string;
                export const IdForumTimestamp: string;
                export const IdUserRespon: string;
                export const IdUserResponAddress: string;
                export const IdUserResponDescription: string;
                export const IdUserResponDisplayName: string;
                export const IdUserResponEmail: string;
                export const IdUserResponFcmToken: string;
                export const IdUserResponIdDesa: string;
                export const IdUserResponIdHubungan: string;
                export const IdUserResponIdVersion: string;
                export const IdUserResponInsertDate: string;
                export const IdUserResponInsertUserId: string;
                export const IdUserResponIsActive: string;
                export const IdUserResponJenisKelamin: string;
                export const IdUserResponLastDirectoryUpdate: string;
                export const IdUserResponNoKk: string;
                export const IdUserResponNoKtp: string;
                export const IdUserResponOption1: string;
                export const IdUserResponOption2: string;
                export const IdUserResponOption3: string;
                export const IdUserResponPasswordHash: string;
                export const IdUserResponPasswordSalt: string;
                export const IdUserResponPendidikan: string;
                export const IdUserResponPhoneNumber: string;
                export const IdUserResponSource: string;
                export const IdUserResponTanggalLahir: string;
                export const IdUserResponUpdateDate: string;
                export const IdUserResponUpdateUserId: string;
                export const IdUserResponUserImage: string;
                export const IdUserResponUsername: string;
                export const IdUserResponWaNumber: string;
                export const Timestamp: string;
            }

            namespace DetailKapalNelayan {
                export const HasilBulanan: string;
                export const IdKapalNelayan: string;
                export const IdUserNelayan: string;
                export const LokasiSandarKapal: string;
                export const StatusKapal: string;
                export const TypeKapal: string;
            }

            namespace DetailPengaduan {
                export const DisplayName: string;
                export const IdDetailPengaduan: string;
                export const IdPengaduan: string;
                export const IdPengaduanFotoDokumen: string;
                export const IdPengaduanIdDesa: string;
                export const IdPengaduanIdMasterTujuan: string;
                export const IdPengaduanIdUserPengadu: string;
                export const IdPengaduanPerihalPengaduan: string;
                export const IdPengaduanTimestamp: string;
                export const IdUserPenanggap: string;
                export const IdUserPenanggapAddress: string;
                export const IdUserPenanggapDescription: string;
                export const IdUserPenanggapEmail: string;
                export const IdUserPenanggapFcmToken: string;
                export const IdUserPenanggapIdDesa: string;
                export const IdUserPenanggapIdHubungan: string;
                export const IdUserPenanggapIdVersion: string;
                export const IdUserPenanggapInsertDate: string;
                export const IdUserPenanggapInsertUserId: string;
                export const IdUserPenanggapIsActive: string;
                export const IdUserPenanggapJenisKelamin: string;
                export const IdUserPenanggapLastDirectoryUpdate: string;
                export const IdUserPenanggapNoKk: string;
                export const IdUserPenanggapNoKtp: string;
                export const IdUserPenanggapOption1: string;
                export const IdUserPenanggapOption2: string;
                export const IdUserPenanggapOption3: string;
                export const IdUserPenanggapPasswordHash: string;
                export const IdUserPenanggapPasswordSalt: string;
                export const IdUserPenanggapPendidikan: string;
                export const IdUserPenanggapPhoneNumber: string;
                export const IdUserPenanggapSource: string;
                export const IdUserPenanggapTanggalLahir: string;
                export const IdUserPenanggapUpdateDate: string;
                export const IdUserPenanggapUpdateUserId: string;
                export const IdUserPenanggapUserImage: string;
                export const IdUserPenanggapUsername: string;
                export const IdUserPenanggapWaNumber: string;
                export const Tanggapan: string;
                export const Timestamp: string;
            }

            namespace DetailUserPerdagangan {
                export const AlamatLapak: string;
                export const Desc: string;
                export const IdDetailPerdagangan: string;
                export const IdUserPerdagangan: string;
                export const IdUserPerdaganganDesc: string;
                export const IdUserPerdaganganIduser: string;
                export const IdUserPerdaganganJenisDagangan: string;
                export const IdUserPerdaganganNamaBrandToko: string;
                export const JumPekerja: string;
                export const LuasLapak: string;
                export const PenghasilanBulanan: string;
                export const SemuaBiayaBulanan: string;
                export const StatusLapak: string;
                export const TypeLapak: string;
            }

            namespace DetailUserPertanian {
                export const AlatBahanPendukung: string;
                export const Desc: string;
                export const IdDetailPertanian: string;
                export const IdSatuanPendukung: string;
                export const IdSatuanPendukungDescSatuan: string;
                export const IdSatuanPendukungNamaSatuan: string;
                export const IdUserPertanian: string;
                export const IdUserPertanianHasilPanen: string;
                export const IdUserPertanianIdHasilBudidaya: string;
                export const IdUserPertanianIdUser: string;
                export const IdUserPertanianJumlahPekerja: string;
                export const IdUserPertanianLuasLahan: string;
                export const IdUserPertanianNominalHasilPanen: string;
                export const IdUserPertanianPeriodePanen: string;
                export const NominalPendukung: string;
                export const QuantityPendukung: string;
                export const TotalNominalPendukung: string;
            }

            namespace DetailUserPeternakanPerikanan {
                export const AlatBahanPendukung: string;
                export const Desc: string;
                export const IdDetailPeternakan: string;
                export const IdSatuanPendukung: string;
                export const IdSatuanPendukungDescSatuan: string;
                export const IdSatuanPendukungNamaSatuan: string;
                export const IdUserPerikanan: string;
                export const IdUserPerikananHasilPanen: string;
                export const IdUserPerikananIdHasilBudidaya: string;
                export const IdUserPerikananIdUser: string;
                export const IdUserPerikananJumlahPekerja: string;
                export const IdUserPerikananLuasLahan: string;
                export const IdUserPerikananNominalHasilPanen: string;
                export const IdUserPerikananPeriodePanen: string;
                export const IdUserPerikananTotalBibit: string;
                export const NominalPendukung: string;
                export const QuantityPendukung: string;
                export const TotalNominalPendukung: string;
            }

            namespace FcmMessage {
                export const Action: string;
                export const Body: string;
                export const IdMessage: string;
                export const IdParentMessage: string;
                export const IdParentMessageBody: string;
                export const IdParentMessageMessage: string;
                export const IdParentMessageOption1: string;
                export const IdParentMessageOption2: string;
                export const IdParentMessageTimeStamp: string;
                export const IdParentMessageTitle: string;
                export const IdUser: string;
                export const IdUserAddress: string;
                export const IdUserDescription: string;
                export const IdUserDisplayName: string;
                export const IdUserEmail: string;
                export const IdUserFcmToken: string;
                export const IdUserIdDesa: string;
                export const IdUserIdHubungan: string;
                export const IdUserIdVersion: string;
                export const IdUserInsertDate: string;
                export const IdUserInsertUserId: string;
                export const IdUserIsActive: string;
                export const IdUserJenisKelamin: string;
                export const IdUserLastDirectoryUpdate: string;
                export const IdUserNoKk: string;
                export const IdUserNoKtp: string;
                export const IdUserOption1: string;
                export const IdUserOption2: string;
                export const IdUserOption3: string;
                export const IdUserPasswordHash: string;
                export const IdUserPasswordSalt: string;
                export const IdUserPendidikan: string;
                export const IdUserPhoneNumber: string;
                export const IdUserSource: string;
                export const IdUserTanggalLahir: string;
                export const IdUserUpdateDate: string;
                export const IdUserUpdateUserId: string;
                export const IdUserUserImage: string;
                export const IdUserUsername: string;
                export const IdUserWaNumber: string;
                export const Message: string;
                export const Response: string;
                export const Status: string;
                export const StatusWa: string;
                export const TimeStamp: string;
                export const Title: string;
            }

            namespace FcmMessageUser {
                export const Action: string;
                export const Body: string;
                export const IdMessage: string;
                export const IdParentMessage: string;
                export const IdParentMessageBody: string;
                export const IdParentMessageIdUserShare: string;
                export const IdParentMessageMessage: string;
                export const IdParentMessageOption1: string;
                export const IdParentMessageOption2: string;
                export const IdParentMessageTimeStamp: string;
                export const IdParentMessageTitle: string;
                export const IdUser: string;
                export const IdUserAddress: string;
                export const IdUserDescription: string;
                export const IdUserDisplayName: string;
                export const IdUserEmail: string;
                export const IdUserFcmToken: string;
                export const IdUserIdDesa: string;
                export const IdUserIdHubungan: string;
                export const IdUserIdVersion: string;
                export const IdUserInsertDate: string;
                export const IdUserInsertUserId: string;
                export const IdUserIsActive: string;
                export const IdUserJenisKelamin: string;
                export const IdUserLastDirectoryUpdate: string;
                export const IdUserNoKk: string;
                export const IdUserNoKtp: string;
                export const IdUserOption1: string;
                export const IdUserOption2: string;
                export const IdUserOption3: string;
                export const IdUserPasswordHash: string;
                export const IdUserPasswordSalt: string;
                export const IdUserPendidikan: string;
                export const IdUserPhoneNumber: string;
                export const IdUserSource: string;
                export const IdUserTanggalLahir: string;
                export const IdUserUpdateDate: string;
                export const IdUserUpdateUserId: string;
                export const IdUserUserImage: string;
                export const IdUserUsername: string;
                export const IdUserWaNumber: string;
                export const Message: string;
                export const Response: string;
                export const Status: string;
                export const StatusWa: string;
                export const TimeStamp: string;
                export const Title: string;
            }

            namespace FormulirAktaKelahiran {
                export const AlamatAyah: string;
                export const AlamatIbu: string;
                export const AnakKe: string;
                export const BeratBayi: string;
                export const DetailFormulir: string;
                export const HariKelahiran: string;
                export const IdFormAktaKelahiran: string;
                export const IdFormFlow: string;
                export const IdFormFlowDescForm: string;
                export const IdFormFlowIdDesa: string;
                export const IdFormFlowIdMasterForm: string;
                export const IdFormFlowSlaform: string;
                export const IdUserPelapor: string;
                export const IdUserPelaporAddress: string;
                export const IdUserPelaporDescription: string;
                export const IdUserPelaporDisplayName: string;
                export const IdUserPelaporEmail: string;
                export const IdUserPelaporIdHubungan: string;
                export const IdUserPelaporInsertDate: string;
                export const IdUserPelaporInsertUserId: string;
                export const IdUserPelaporIsActive: string;
                export const IdUserPelaporJenisKelamin: string;
                export const IdUserPelaporLastDirectoryUpdate: string;
                export const IdUserPelaporNoKk: string;
                export const IdUserPelaporNoKtp: string;
                export const IdUserPelaporOption1: string;
                export const IdUserPelaporOption2: string;
                export const IdUserPelaporOption3: string;
                export const IdUserPelaporPasswordHash: string;
                export const IdUserPelaporPasswordSalt: string;
                export const IdUserPelaporPhoneNumber: string;
                export const IdUserPelaporSource: string;
                export const IdUserPelaporTanggalLahir: string;
                export const IdUserPelaporUpdateDate: string;
                export const IdUserPelaporUpdateUserId: string;
                export const IdUserPelaporUserImage: string;
                export const IdUserPelaporUsername: string;
                export const IdUserPelaporWaNumber: string;
                export const JenisKelahiran: string;
                export const KelaminBayi: string;
                export const LinkDocAkta: string;
                export const NamaAyah: string;
                export const NamaBayi: string;
                export const NamaIbu: string;
                export const NikAyah: string;
                export const NikIbu: string;
                export const PanjangBayi: string;
                export const PekerjaanAyah: string;
                export const PekerjaanIbu: string;
                export const TempatKelahiran: string;
                export const TglLahir: string;
                export const TglLahirAyah: string;
                export const TglLahirIbu: string;
                export const Timestamp: string;
                export const WaktuKelahiran: string;
            }

            namespace FormulirKk {
                export const AlasanPemohon: string;
                export const DetailFormulir: string;
                export const DokPendukungKK: string;
                export const IdFormulirKk: string;
                export const IdMasterFlow: string;
                export const IdMasterFlowDescForm: string;
                export const IdMasterFlowIdDesa: string;
                export const IdMasterFlowIdMasterForm: string;
                export const IdMasterFlowSlaform: string;
                export const IdUser: string;
                export const IdUserAddress: string;
                export const IdUserDescription: string;
                export const IdUserDisplayName: string;
                export const IdUserEmail: string;
                export const IdUserIdHubungan: string;
                export const IdUserInsertDate: string;
                export const IdUserInsertUserId: string;
                export const IdUserIsActive: string;
                export const IdUserLastDirectoryUpdate: string;
                export const IdUserNoKk: string;
                export const IdUserNoKtp: string;
                export const IdUserOption1: string;
                export const IdUserOption2: string;
                export const IdUserOption3: string;
                export const IdUserPasswordHash: string;
                export const IdUserPasswordSalt: string;
                export const IdUserPhoneNumber: string;
                export const IdUserSource: string;
                export const IdUserTanggalLahir: string;
                export const IdUserUpdateDate: string;
                export const IdUserUpdateUserId: string;
                export const IdUserUserImage: string;
                export const IdUserUsername: string;
                export const IdUserWaNumber: string;
                export const JumlahKk: string;
                export const LinkDocKk: string;
                export const Timestamp: string;
            }

            namespace FormulirKtp {
                export const Desc: string;
                export const DokPendukung: string;
                export const IdFFowForm: string;
                export const IdFormulirKtp: string;
                export const IdUser: string;
                export const IdUserDisplayName: string;
                export const LinkDocKTP: string;
                export const Timestamp: string;
                export const TypePermohonan: string;
            }

            namespace Forum {
                export const Detail: string;
                export const DetailForum: string;
                export const FotoDokumenForum: string;
                export const HiddenUser: string;
                export const IdForum: string;
                export const IdMasterForum: string;
                export const IdMasterForumDeskripsi: string;
                export const IdMasterForumNamaForum: string;
                export const IdUserInsert: string;
                export const IdUserInsertAddress: string;
                export const IdUserInsertDescription: string;
                export const IdUserInsertDisplayName: string;
                export const IdUserInsertEmail: string;
                export const IdUserInsertFcmToken: string;
                export const IdUserInsertIdDesa: string;
                export const IdUserInsertIdHubungan: string;
                export const IdUserInsertIdVersion: string;
                export const IdUserInsertInsertDate: string;
                export const IdUserInsertInsertUserId: string;
                export const IdUserInsertIsActive: string;
                export const IdUserInsertJenisKelamin: string;
                export const IdUserInsertLastDirectoryUpdate: string;
                export const IdUserInsertNoKk: string;
                export const IdUserInsertNoKtp: string;
                export const IdUserInsertOption1: string;
                export const IdUserInsertOption2: string;
                export const IdUserInsertOption3: string;
                export const IdUserInsertPasswordHash: string;
                export const IdUserInsertPasswordSalt: string;
                export const IdUserInsertPendidikan: string;
                export const IdUserInsertPhoneNumber: string;
                export const IdUserInsertSource: string;
                export const IdUserInsertTanggalLahir: string;
                export const IdUserInsertUpdateDate: string;
                export const IdUserInsertUpdateUserId: string;
                export const IdUserInsertUserImage: string;
                export const IdUserInsertUsername: string;
                export const IdUserInsertWaNumber: string;
                export const Timestamp: string;
            }

            namespace ForumNew {
                export const Detail: string;
                export const DetailForum: string;
                export const FotoDokumenForum: string;
                export const HiddenUser: string;
                export const IdForum: string;
                export const IdMasterForum: string;
                export const IdMasterForumDeskripsi: string;
                export const IdMasterForumNamaForum: string;
                export const IdUserInsert: string;
                export const IdUserInsertAddress: string;
                export const IdUserInsertDescription: string;
                export const IdUserInsertDisplayName: string;
                export const IdUserInsertEmail: string;
                export const IdUserInsertFcmToken: string;
                export const IdUserInsertIdDesa: string;
                export const IdUserInsertIdHubungan: string;
                export const IdUserInsertIdVersion: string;
                export const IdUserInsertInsertDate: string;
                export const IdUserInsertInsertUserId: string;
                export const IdUserInsertIsActive: string;
                export const IdUserInsertJenisKelamin: string;
                export const IdUserInsertLastDirectoryUpdate: string;
                export const IdUserInsertNoKk: string;
                export const IdUserInsertNoKtp: string;
                export const IdUserInsertOption1: string;
                export const IdUserInsertOption2: string;
                export const IdUserInsertOption3: string;
                export const IdUserInsertPasswordHash: string;
                export const IdUserInsertPasswordSalt: string;
                export const IdUserInsertPendidikan: string;
                export const IdUserInsertPhoneNumber: string;
                export const IdUserInsertSource: string;
                export const IdUserInsertTanggalLahir: string;
                export const IdUserInsertUpdateDate: string;
                export const IdUserInsertUpdateUserId: string;
                export const IdUserInsertUserImage: string;
                export const IdUserInsertUsername: string;
                export const IdUserInsertWaNumber: string;
                export const Timestamp: string;
            }

            namespace InfoDesa {
                export const BodyInfo: string;
                export const DisplayName: string;
                export const IdInfoDesa: string;
                export const IdUser: string;
                export const Image: string;
                export const ShortDescInfo: string;
                export const Timestamp: string;
                export const TitleInfo: string;
            }

            namespace MasterFlowFormulir {
                export const DescForm: string;
                export const DetailFlowFormulir: string;
                export const IdDesa: string;
                export const IdDesaDescDesa: string;
                export const IdDesaIdKecamatan: string;
                export const IdDesaLantitudeDesa: string;
                export const IdDesaLogoDesa: string;
                export const IdDesaLongtitudeDesa: string;
                export const IdDesaNamaDesa: string;
                export const IdFormFlow: string;
                export const IdMasterForm: string;
                export const IdMasterFormDescFormulir: string;
                export const IdMasterFormNamaFormulir: string;
                export const Slaform: string;
            }

            namespace ParentMessage {
                export const Body: string;
                export const Detail: string;
                export const DisplayName: string;
                export const IdParentMessage: string;
                export const IdUserShare: string;
                export const Message: string;
                export const Option1: string;
                export const Option2: string;
                export const TimeStamp: string;
                export const Title: string;
            }

            namespace Pengaduan {
                export const DetailPengaduan: string;
                export const FotoDokumen: string;
                export const IdDesa: string;
                export const IdDesaDescDesa: string;
                export const IdDesaIdKecamatan: string;
                export const IdDesaLantitudeDesa: string;
                export const IdDesaLogoDesa: string;
                export const IdDesaLongtitudeDesa: string;
                export const IdDesaNamaDesa: string;
                export const IdDesaNoKodeDesa: string;
                export const IdMasterTujuan: string;
                export const IdMasterTujuanNamaTujuan: string;
                export const IdPengaduan: string;
                export const IdUserPengadu: string;
                export const IdUserPengaduAddress: string;
                export const IdUserPengaduDescription: string;
                export const IdUserPengaduDisplayName: string;
                export const IdUserPengaduEmail: string;
                export const IdUserPengaduFcmToken: string;
                export const IdUserPengaduIdDesa: string;
                export const IdUserPengaduIdHubungan: string;
                export const IdUserPengaduIdVersion: string;
                export const IdUserPengaduInsertDate: string;
                export const IdUserPengaduInsertUserId: string;
                export const IdUserPengaduIsActive: string;
                export const IdUserPengaduJenisKelamin: string;
                export const IdUserPengaduLastDirectoryUpdate: string;
                export const IdUserPengaduNoKk: string;
                export const IdUserPengaduNoKtp: string;
                export const IdUserPengaduOption1: string;
                export const IdUserPengaduOption2: string;
                export const IdUserPengaduOption3: string;
                export const IdUserPengaduPasswordHash: string;
                export const IdUserPengaduPasswordSalt: string;
                export const IdUserPengaduPendidikan: string;
                export const IdUserPengaduPhoneNumber: string;
                export const IdUserPengaduSource: string;
                export const IdUserPengaduTanggalLahir: string;
                export const IdUserPengaduUpdateDate: string;
                export const IdUserPengaduUpdateUserId: string;
                export const IdUserPengaduUserImage: string;
                export const IdUserPengaduUsername: string;
                export const IdUserPengaduWaNumber: string;
                export const PerihalPengaduan: string;
                export const Timestamp: string;
            }

            namespace TransaksiStatus {
                export const DisplayName: string;
                export const DisplayName1: string;
                export const Dokumen: string;
                export const IdDesa: string;
                export const IdFormulir: string;
                export const IdMasterForm: string;
                export const IdMasterFormDescFormulir: string;
                export const IdMasterFormNamaFormulir: string;
                export const IdStatus: string;
                export const IdTransaksi: string;
                export const IdTransaksiForm: string;
                export const IdUserAparat: string;
                export const IdUserPengajuan: string;
                export const Info: string;
                export const Jabatan: string;
                export const Keterangan: string;
                export const LinkFormulir: string;
                export const NamaDesa: string;
                export const NamaStatus: string;
                export const TimeStamp: string;
            }

            namespace UserKaryawan {
                export const AlamatPerusahanUsaha: string;
                export const Desc: string;
                export const IdPekerjaan: string;
                export const IdPekerjaanNamaPekerjaan: string;
                export const IdUser: string;
                export const IdUserKaryawan: string;
                export const IduserDisplayName: string;
                export const NamaperusahaanUsaha: string;
                export const RatarataPenghasilan: string;
                export const StatusKaryawan: string;
                export const TypePerusahaan: string;
            }

            namespace UserNelayan {
                export const Desc: string;
                export const DetailNelayan: string;
                export const IdPekerjaan: string;
                export const IdPekerjaanNamaPekerjaan: string;
                export const IdUser: string;
                export const IdUserNelayan: string;
                export const IduserDisplayName: string;
            }

            namespace UserPerdagangan {
                export const Desc: string;
                export const DetailPerdagangan: string;
                export const IdPekerjaan: string;
                export const IdPekerjaanNamaPekerjaan: string;
                export const IdUserPerdagangan: string;
                export const Iduser: string;
                export const IduserAddress: string;
                export const IduserDescription: string;
                export const IduserDisplayName: string;
                export const IduserEmail: string;
                export const IduserIdHubungan: string;
                export const IduserInsertDate: string;
                export const IduserInsertUserId: string;
                export const IduserIsActive: string;
                export const IduserLastDirectoryUpdate: string;
                export const IduserNoKk: string;
                export const IduserNoKtp: string;
                export const IduserOption1: string;
                export const IduserOption2: string;
                export const IduserOption3: string;
                export const IduserPasswordHash: string;
                export const IduserPasswordSalt: string;
                export const IduserPhoneNumber: string;
                export const IduserSource: string;
                export const IduserTanggalLahir: string;
                export const IduserUpdateDate: string;
                export const IduserUpdateUserId: string;
                export const IduserUserImage: string;
                export const IduserUsername: string;
                export const IduserWaNumber: string;
                export const JenisDagangan: string;
                export const NamaBrandToko: string;
            }

            namespace UserPerikananPeternakan {
                export const DetailPeternakan: string;
                export const HasilPanen: string;
                export const IdHasilBudidaya: string;
                export const IdHasilBudidayaDesc: string;
                export const IdHasilBudidayaIdMasterBudidaya: string;
                export const IdHasilBudidayaIdSatuanHasil: string;
                export const IdHasilBudidayaNamaHasil: string;
                export const IdUser: string;
                export const IdUserAddress: string;
                export const IdUserDescription: string;
                export const IdUserDisplayName: string;
                export const IdUserEmail: string;
                export const IdUserIdHubungan: string;
                export const IdUserInsertDate: string;
                export const IdUserInsertUserId: string;
                export const IdUserIsActive: string;
                export const IdUserLastDirectoryUpdate: string;
                export const IdUserNoKk: string;
                export const IdUserNoKtp: string;
                export const IdUserOption1: string;
                export const IdUserOption2: string;
                export const IdUserOption3: string;
                export const IdUserPasswordHash: string;
                export const IdUserPasswordSalt: string;
                export const IdUserPerikanan: string;
                export const IdUserPhoneNumber: string;
                export const IdUserSource: string;
                export const IdUserTanggalLahir: string;
                export const IdUserUpdateDate: string;
                export const IdUserUpdateUserId: string;
                export const IdUserUserImage: string;
                export const IdUserUsername: string;
                export const IdUserWaNumber: string;
                export const JumlahPekerja: string;
                export const LuasLahan: string;
                export const NominalHasilPanen: string;
                export const Option1: string;
                export const PeriodePanen: string;
                export const TotalBibit: string;
            }

            namespace UserPertanianPerkebunan {
                export const DetailPertanian: string;
                export const HasilPanen: string;
                export const IdHasilBudidaya: string;
                export const IdHasilBudidayaDesc: string;
                export const IdHasilBudidayaIdMasterBudidaya: string;
                export const IdHasilBudidayaIdSatuanHasil: string;
                export const IdHasilBudidayaNamaHasil: string;
                export const IdUser: string;
                export const IdUserAddress: string;
                export const IdUserDescription: string;
                export const IdUserDisplayName: string;
                export const IdUserEmail: string;
                export const IdUserIdHubungan: string;
                export const IdUserInsertDate: string;
                export const IdUserInsertUserId: string;
                export const IdUserIsActive: string;
                export const IdUserLastDirectoryUpdate: string;
                export const IdUserNoKk: string;
                export const IdUserNoKtp: string;
                export const IdUserOption1: string;
                export const IdUserOption2: string;
                export const IdUserOption3: string;
                export const IdUserPasswordHash: string;
                export const IdUserPasswordSalt: string;
                export const IdUserPertanian: string;
                export const IdUserPhoneNumber: string;
                export const IdUserSource: string;
                export const IdUserTanggalLahir: string;
                export const IdUserUpdateDate: string;
                export const IdUserUpdateUserId: string;
                export const IdUserUserImage: string;
                export const IdUserUsername: string;
                export const IdUserWaNumber: string;
                export const JumlahPekerja: string;
                export const LuasLahan: string;
                export const NominalHasilPanen: string;
                export const Option1: string;
                export const PeriodePanen: string;
            }
        }

        namespace View {

            namespace VChartByAllPekerjaan {
                export const CountTransaksi: string;
                export const IdNumber: string;
                export const IdPekerjaan: string;
                export const NamaPekerjaan: string;
                export const TotalPenghasilan: string;
            }

            namespace VChartPenghasilanDesa {
                export const CountTransaksi: string;
                export const IdDesa: string;
                export const IdNumber: string;
                export const Namadesa: string;
                export const TotalPenghasilan: string;
            }

            namespace ViewAllPengajuan {
                export const FormulirPengajuan: string;
                export const IdMasterForm: string;
                export const IdNumber: string;
                export const IdUserPengajuan: string;
                export const NumberId: string;
            }

            namespace ViewAllPenghasilan {
                export const Address: string;
                export const DisplayName: string;
                export const Email: string;
                export const IdDesa: string;
                export const IdHubungan: string;
                export const IdKabupaten: string;
                export const IdKecamatan: string;
                export const IdNumber: string;
                export const IdPropinsi: string;
                export const JenisKelamin: string;
                export const NamaDesa: string;
                export const NamaKabupaten: string;
                export const NamaKecamatan: string;
                export const NamaPropinsi: string;
                export const NoKk: string;
                export const NoKtp: string;
                export const PhoneNumber: string;
                export const TanggalLahir: string;
                export const TotalPenghasilan: string;
                export const TotalPenghasilanKaryawan: string;
                export const TotalPenghasilanNelayan: string;
                export const TotalPenghasilanPerdagangan: string;
                export const TotalPenghasilanPertanian: string;
                export const TotalPenghasilanPeternakan: string;
                export const UserId: string;
                export const Username: string;
                export const WaNumber: string;
            }

            namespace ViewMaasterForm {
                export const DescForm: string;
                export const IdFormFlow: string;
                export const IdFormulir: string;
                export const IdNumber: string;
                export const KodePos: string;
                export const NamaDesa: string;
                export const NamaFormulir: string;
                export const NamaKecamatan: string;
                export const ReqForm: string;
                export const Slaform: string;
            }

            namespace ViewProfilUser {
                export const Address: string;
                export const DisplayName: string;
                export const Email: string;
                export const IbuKotaPropinsi: string;
                export const IdDesa: string;
                export const IdHubungan: string;
                export const IdKabupaten: string;
                export const IdKecamatan: string;
                export const IdPropinsi: string;
                export const JenisKelamin: string;
                export const KodePos: string;
                export const LogoDesa: string;
                export const LogoKabupaten: string;
                export const LogoPropinsi: string;
                export const NamaDesa: string;
                export const NamaKabupaten: string;
                export const NamaKecamatan: string;
                export const NamaPropinsi: string;
                export const NoKk: string;
                export const NoKodeDesa: string;
                export const NoKodeKabupaten: string;
                export const NoKodeKecamatan: string;
                export const NoKodePropinsi: string;
                export const NoKtp: string;
                export const Pendidikan: string;
                export const PhoneNumber: string;
                export const TanggalLahir: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
                export const WaNumber: string;
            }

            namespace ViewTransaksiFormulir {
                export const Dokumen: string;
                export const Formulir: string;
                export const IdFormulir: string;
                export const IdMasterForm: string;
                export const IdStatus: string;
                export const IdTransaksi: string;
                export const IdTransaksiForm: string;
                export const IdUserAparat: string;
                export const IdUserPengajuan: string;
                export const Info: string;
                export const NamaStatus: string;
                export const TimeStamp: string;
            }

            namespace ViewUserPengajuan {
                export const Dokumen: string;
                export const Formulir: string;
                export const IdFormulir: string;
                export const IdNumber: string;
                export const NumberId: string;
                export const UserPengaju: string;
            }

            namespace ViewUserPenghasilan {
                export const DisplayName: string;
                export const Email: string;
                export const IdDesa: string;
                export const IdKabupaten: string;
                export const IdKecamatan: string;
                export const IdPekerjaan: string;
                export const IdPropinsi: string;
                export const NamaDesa: string;
                export const NamaKabupaten: string;
                export const NamaKecamatan: string;
                export const NamaPekerjaan: string;
                export const NamaPropinsi: string;
                export const NoKk: string;
                export const NoKtp: string;
                export const NumberId: string;
                export const PhoneNumber: string;
                export const TotalHasil: string;
                export const UserId: string;
                export const WaNumber: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    SDD['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{Address:1,Description:1,DisplayName:1,Email:1,FcmToken:1,IdDesa:1,IdDesaNamaDesa:1,IdHubungan:1,IdVersion:1,InsertDate:1,InsertUserId:1,IsActive:1,JenisKelamin:1,LastDirectoryUpdate:1,NamaHubungan:1,NoKK:1,NoKTP:1,Option1:1,Option2:1,Option3:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Pendidikan:1,PhoneNumber:1,Source:1,TanggalLahir:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1,WaNumber:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,RoleName:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Master:{MasterBudidaya:{DetailBudidaya:1,IdBudidaya:1,IdPekerjaan:1,IdPekerjaanDesc:1,IdPekerjaanNamaPekerjaan:1,IdSatuanBudidaya:1,IdSatuanBudidayaDescSatuan:1,IdSatuanBudidayaNamaSatuan:1,NamaBudidaya:1},MasterDesa:{DescDesa:1,IdDesa:1,IdKecamatan:1,IdKecamatanDecKecamatan:1,IdKecamatanIdKabupaten:1,IdKecamatanKodePos:1,IdKecamatanLangtitudeKecamatan:1,IdKecamatanLogoKecamatan:1,IdKecamatanLongtitudeKecamatan:1,IdKecamatanNamaKecamatan:1,LantitudeDesa:1,LogoDesa:1,LongtitudeDesa:1,NamaDesa:1,NoKodeDesa:1},MasterFormulir:{DescFormulir:1,IdFormulir:1,NamaFormulir:1},MasterForum:{Deskripsi:1,IdMasterForum:1,NamaForum:1},MasterHasilBudidaya:{Desc:1,IdHasilBudidaya:1,IdMasterBudidaya:1,IdMasterBudidayaIdPekerjaan:1,IdMasterBudidayaIdSatuanBudidaya:1,IdMasterBudidayaNamaBudidaya:1,IdSatuanHasil:1,IdSatuanHasilDescSatuan:1,IdSatuanHasilNamaSatuan:1,NamaHasil:1},MasterHubungan:{DescHubungan:1,IdHubungan:1,KodeHubungan:1,NamaHubungan:1},MasterJabatan:{Desc:1,IdJabatan:1,NamaJabatan:1},MasterKabupaten:{DescKabupaten:1,IdKabupaten:1,IdPropinsi:1,IdPropinsiDescPropinsi:1,IdPropinsiIbuKotaPropinsi:1,IdPropinsiLatitudePropinsi:1,IdPropinsiLogoPropinsi:1,IdPropinsiLongitudePropinsi:1,IdPropinsiNamaPropinsi:1,Langtitudekabupaten:1,LogoKabupaten:1,LongtitudeKabupaten:1,NamaKabupaten:1,NoKodeKabupaten:1},MasterKecamatan:{DecKecamatan:1,IdKabupaten:1,IdKabupatenDescKabupaten:1,IdKabupatenIdPropinsi:1,IdKabupatenLangtitudekabupaten:1,IdKabupatenLogoKabupaten:1,IdKabupatenLongtitudeKabupaten:1,IdKabupatenNamaKabupaten:1,IdKecamatan:1,KodePos:1,LangtitudeKecamatan:1,LogoKecamatan:1,LongtitudeKecamatan:1,NamaKecamatan:1,NoKodeKecamatan:1},MasterPekerjaan:{Desc:1,IdPekerjaan:1,NamaPekerjaan:1},MasterPropinsi:{DescPropinsi:1,IbuKotaPropinsi:1,IdPropinsi:1,LatitudePropinsi:1,LogoPropinsi:1,LongitudePropinsi:1,NamaPropinsi:1,NoKodePropinsi:1},MasterSatuan:{DescSatuan:1,IdSatuan:1,NamaSatuan:1},MasterStatus:{IdStatus:1,NamaStatus:1},MasterTujuanPengaduan:{IdMasterTujuan:1,NamaTujuan:1},MasterVersion:{Description:1,IdMasterVersion:1,NamaVersion:1,NumberVersion:1,Timestamp:1}},Transaction:{AparaturDesa:{DescAparaturDesa:1,IdAparaturDesa:1,IdDesa:1,IdDesaDescDesa:1,IdDesaIdKecamatan:1,IdDesaLantitudeDesa:1,IdDesaLogoDesa:1,IdDesaLongtitudeDesa:1,IdDesaNamaDesa:1,IdJabatan:1,IdJabatanDesc:1,IdJabatanNamaJabatan:1,IdUser:1,IdUserAddress:1,IdUserDescription:1,IdUserDisplayName:1,IdUserEmail:1,IdUserIdHubungan:1,IdUserInsertDate:1,IdUserInsertUserId:1,IdUserIsActive:1,IdUserLastDirectoryUpdate:1,IdUserNoKk:1,IdUserNoKtp:1,IdUserOption1:1,IdUserOption2:1,IdUserOption3:1,IdUserPasswordHash:1,IdUserPasswordSalt:1,IdUserPhoneNumber:1,IdUserSource:1,IdUserTanggalLahir:1,IdUserUpdateDate:1,IdUserUpdateUserId:1,IdUserUserImage:1,IdUserUsername:1,IdUserWaNumber:1,PeriodeAkhir:1,PeriodeAwal:1,StatusAparatur:1},Banner:{Description:1,DisplayName:1,IdBanner:1,IdUser:1,Image:1,StatusAktif:1,UrlImage:1},DetailAktaLahir:{Desc:1,IdAktaLahir:1,IdAktaLahirAlamatAyah:1,IdAktaLahirAlamatIbu:1,IdAktaLahirAnakKe:1,IdAktaLahirBeratBayi:1,IdAktaLahirHariKelahiran:1,IdAktaLahirIdFormFlow:1,IdAktaLahirIdUserPelapor:1,IdAktaLahirJenisKelahiran:1,IdAktaLahirKelaminBayi:1,IdAktaLahirLinkDocAkta:1,IdAktaLahirNamaAyah:1,IdAktaLahirNamaBayi:1,IdAktaLahirNamaIbu:1,IdAktaLahirNikAyah:1,IdAktaLahirNikIbu:1,IdAktaLahirPanjangBayi:1,IdAktaLahirPekerjaanAyah:1,IdAktaLahirPekerjaanIbu:1,IdAktaLahirTempatKelahiran:1,IdAktaLahirTglLahir:1,IdAktaLahirTglLahirAyah:1,IdAktaLahirTglLahirIbu:1,IdAktaLahirWaktuKelahiran:1,IdDetailAktaLahir:1,NamaSaksi:1,NikSaksi:1,PekerjaanSaksi:1,TglLahirSaksi:1},DetailFlowForm:{IdDetailFlowForm:1,IdFormFlow:1,IdFormFlowDescForm:1,IdFormFlowIdDesa:1,IdFormFlowIdMasterForm:1,IdFormFlowSlaform:1,IdJabatan:1,IdJabatanDesc:1,IdJabatanNamaJabatan:1,SlaDetail:1,UrutanFlow:1},DetailFormulirKk:{IdDetailKk:1,IdFormulirKk:1,IdFormulirKkAlasanPemohon:1,IdFormulirKkIdMasterFlow:1,IdFormulirKkIdUser:1,IdFormulirKkJumlahKk:1,IdFormulirKkLinkDocKk:1,IdFormulirKkTimestamp:1,IdMasterHub:1,IdMasterHubDescHubungan:1,IdMasterHubKodeHubungan:1,IdMasterHubNamaHubungan:1,NamaLengkap:1,Nik:1},DetailForum:{DetailRespon:1,FotoDokumenRespon:1,IdDetailForum:1,IdForum:1,IdForumDetailForum:1,IdForumFotoDokumenForum:1,IdForumHiddenUser:1,IdForumIdMasterForum:1,IdForumIdUserInsert:1,IdForumTimestamp:1,IdUserRespon:1,IdUserResponAddress:1,IdUserResponDescription:1,IdUserResponDisplayName:1,IdUserResponEmail:1,IdUserResponFcmToken:1,IdUserResponIdDesa:1,IdUserResponIdHubungan:1,IdUserResponIdVersion:1,IdUserResponInsertDate:1,IdUserResponInsertUserId:1,IdUserResponIsActive:1,IdUserResponJenisKelamin:1,IdUserResponLastDirectoryUpdate:1,IdUserResponNoKk:1,IdUserResponNoKtp:1,IdUserResponOption1:1,IdUserResponOption2:1,IdUserResponOption3:1,IdUserResponPasswordHash:1,IdUserResponPasswordSalt:1,IdUserResponPendidikan:1,IdUserResponPhoneNumber:1,IdUserResponSource:1,IdUserResponTanggalLahir:1,IdUserResponUpdateDate:1,IdUserResponUpdateUserId:1,IdUserResponUserImage:1,IdUserResponUsername:1,IdUserResponWaNumber:1,Timestamp:1},DetailKapalNelayan:{HasilBulanan:1,IdKapalNelayan:1,IdUserNelayan:1,LokasiSandarKapal:1,StatusKapal:1,TypeKapal:1},DetailPengaduan:{DisplayName:1,IdDetailPengaduan:1,IdPengaduan:1,IdPengaduanFotoDokumen:1,IdPengaduanIdDesa:1,IdPengaduanIdMasterTujuan:1,IdPengaduanIdUserPengadu:1,IdPengaduanPerihalPengaduan:1,IdPengaduanTimestamp:1,IdUserPenanggap:1,IdUserPenanggapAddress:1,IdUserPenanggapDescription:1,IdUserPenanggapEmail:1,IdUserPenanggapFcmToken:1,IdUserPenanggapIdDesa:1,IdUserPenanggapIdHubungan:1,IdUserPenanggapIdVersion:1,IdUserPenanggapInsertDate:1,IdUserPenanggapInsertUserId:1,IdUserPenanggapIsActive:1,IdUserPenanggapJenisKelamin:1,IdUserPenanggapLastDirectoryUpdate:1,IdUserPenanggapNoKk:1,IdUserPenanggapNoKtp:1,IdUserPenanggapOption1:1,IdUserPenanggapOption2:1,IdUserPenanggapOption3:1,IdUserPenanggapPasswordHash:1,IdUserPenanggapPasswordSalt:1,IdUserPenanggapPendidikan:1,IdUserPenanggapPhoneNumber:1,IdUserPenanggapSource:1,IdUserPenanggapTanggalLahir:1,IdUserPenanggapUpdateDate:1,IdUserPenanggapUpdateUserId:1,IdUserPenanggapUserImage:1,IdUserPenanggapUsername:1,IdUserPenanggapWaNumber:1,Tanggapan:1,Timestamp:1},DetailUserPerdagangan:{AlamatLapak:1,Desc:1,IdDetailPerdagangan:1,IdUserPerdagangan:1,IdUserPerdaganganDesc:1,IdUserPerdaganganIduser:1,IdUserPerdaganganJenisDagangan:1,IdUserPerdaganganNamaBrandToko:1,JumPekerja:1,LuasLapak:1,PenghasilanBulanan:1,SemuaBiayaBulanan:1,StatusLapak:1,TypeLapak:1},DetailUserPertanian:{AlatBahanPendukung:1,Desc:1,IdDetailPertanian:1,IdSatuanPendukung:1,IdSatuanPendukungDescSatuan:1,IdSatuanPendukungNamaSatuan:1,IdUserPertanian:1,IdUserPertanianHasilPanen:1,IdUserPertanianIdHasilBudidaya:1,IdUserPertanianIdUser:1,IdUserPertanianJumlahPekerja:1,IdUserPertanianLuasLahan:1,IdUserPertanianNominalHasilPanen:1,IdUserPertanianPeriodePanen:1,NominalPendukung:1,QuantityPendukung:1,TotalNominalPendukung:1},DetailUserPeternakanPerikanan:{AlatBahanPendukung:1,Desc:1,IdDetailPeternakan:1,IdSatuanPendukung:1,IdSatuanPendukungDescSatuan:1,IdSatuanPendukungNamaSatuan:1,IdUserPerikanan:1,IdUserPerikananHasilPanen:1,IdUserPerikananIdHasilBudidaya:1,IdUserPerikananIdUser:1,IdUserPerikananJumlahPekerja:1,IdUserPerikananLuasLahan:1,IdUserPerikananNominalHasilPanen:1,IdUserPerikananPeriodePanen:1,IdUserPerikananTotalBibit:1,NominalPendukung:1,QuantityPendukung:1,TotalNominalPendukung:1},FcmMessage:{Action:1,Body:1,IdMessage:1,IdParentMessage:1,IdParentMessageBody:1,IdParentMessageMessage:1,IdParentMessageOption1:1,IdParentMessageOption2:1,IdParentMessageTimeStamp:1,IdParentMessageTitle:1,IdUser:1,IdUserAddress:1,IdUserDescription:1,IdUserDisplayName:1,IdUserEmail:1,IdUserFcmToken:1,IdUserIdDesa:1,IdUserIdHubungan:1,IdUserIdVersion:1,IdUserInsertDate:1,IdUserInsertUserId:1,IdUserIsActive:1,IdUserJenisKelamin:1,IdUserLastDirectoryUpdate:1,IdUserNoKk:1,IdUserNoKtp:1,IdUserOption1:1,IdUserOption2:1,IdUserOption3:1,IdUserPasswordHash:1,IdUserPasswordSalt:1,IdUserPendidikan:1,IdUserPhoneNumber:1,IdUserSource:1,IdUserTanggalLahir:1,IdUserUpdateDate:1,IdUserUpdateUserId:1,IdUserUserImage:1,IdUserUsername:1,IdUserWaNumber:1,Message:1,Response:1,Status:1,StatusWa:1,TimeStamp:1,Title:1},FcmMessageUser:{Action:1,Body:1,IdMessage:1,IdParentMessage:1,IdParentMessageBody:1,IdParentMessageIdUserShare:1,IdParentMessageMessage:1,IdParentMessageOption1:1,IdParentMessageOption2:1,IdParentMessageTimeStamp:1,IdParentMessageTitle:1,IdUser:1,IdUserAddress:1,IdUserDescription:1,IdUserDisplayName:1,IdUserEmail:1,IdUserFcmToken:1,IdUserIdDesa:1,IdUserIdHubungan:1,IdUserIdVersion:1,IdUserInsertDate:1,IdUserInsertUserId:1,IdUserIsActive:1,IdUserJenisKelamin:1,IdUserLastDirectoryUpdate:1,IdUserNoKk:1,IdUserNoKtp:1,IdUserOption1:1,IdUserOption2:1,IdUserOption3:1,IdUserPasswordHash:1,IdUserPasswordSalt:1,IdUserPendidikan:1,IdUserPhoneNumber:1,IdUserSource:1,IdUserTanggalLahir:1,IdUserUpdateDate:1,IdUserUpdateUserId:1,IdUserUserImage:1,IdUserUsername:1,IdUserWaNumber:1,Message:1,Response:1,Status:1,StatusWa:1,TimeStamp:1,Title:1},FormulirAktaKelahiran:{AlamatAyah:1,AlamatIbu:1,AnakKe:1,BeratBayi:1,DetailFormulir:1,HariKelahiran:1,IdFormAktaKelahiran:1,IdFormFlow:1,IdFormFlowDescForm:1,IdFormFlowIdDesa:1,IdFormFlowIdMasterForm:1,IdFormFlowSlaform:1,IdUserPelapor:1,IdUserPelaporAddress:1,IdUserPelaporDescription:1,IdUserPelaporDisplayName:1,IdUserPelaporEmail:1,IdUserPelaporIdHubungan:1,IdUserPelaporInsertDate:1,IdUserPelaporInsertUserId:1,IdUserPelaporIsActive:1,IdUserPelaporJenisKelamin:1,IdUserPelaporLastDirectoryUpdate:1,IdUserPelaporNoKk:1,IdUserPelaporNoKtp:1,IdUserPelaporOption1:1,IdUserPelaporOption2:1,IdUserPelaporOption3:1,IdUserPelaporPasswordHash:1,IdUserPelaporPasswordSalt:1,IdUserPelaporPhoneNumber:1,IdUserPelaporSource:1,IdUserPelaporTanggalLahir:1,IdUserPelaporUpdateDate:1,IdUserPelaporUpdateUserId:1,IdUserPelaporUserImage:1,IdUserPelaporUsername:1,IdUserPelaporWaNumber:1,JenisKelahiran:1,KelaminBayi:1,LinkDocAkta:1,NamaAyah:1,NamaBayi:1,NamaIbu:1,NikAyah:1,NikIbu:1,PanjangBayi:1,PekerjaanAyah:1,PekerjaanIbu:1,TempatKelahiran:1,TglLahir:1,TglLahirAyah:1,TglLahirIbu:1,Timestamp:1,WaktuKelahiran:1},FormulirKk:{AlasanPemohon:1,DetailFormulir:1,DokPendukungKK:1,IdFormulirKk:1,IdMasterFlow:1,IdMasterFlowDescForm:1,IdMasterFlowIdDesa:1,IdMasterFlowIdMasterForm:1,IdMasterFlowSlaform:1,IdUser:1,IdUserAddress:1,IdUserDescription:1,IdUserDisplayName:1,IdUserEmail:1,IdUserIdHubungan:1,IdUserInsertDate:1,IdUserInsertUserId:1,IdUserIsActive:1,IdUserLastDirectoryUpdate:1,IdUserNoKk:1,IdUserNoKtp:1,IdUserOption1:1,IdUserOption2:1,IdUserOption3:1,IdUserPasswordHash:1,IdUserPasswordSalt:1,IdUserPhoneNumber:1,IdUserSource:1,IdUserTanggalLahir:1,IdUserUpdateDate:1,IdUserUpdateUserId:1,IdUserUserImage:1,IdUserUsername:1,IdUserWaNumber:1,JumlahKk:1,LinkDocKk:1,Timestamp:1},FormulirKtp:{Desc:1,DokPendukung:1,IdFFowForm:1,IdFormulirKtp:1,IdUser:1,IdUserDisplayName:1,LinkDocKTP:1,Timestamp:1,TypePermohonan:1},Forum:{Detail:1,DetailForum:1,FotoDokumenForum:1,HiddenUser:1,IdForum:1,IdMasterForum:1,IdMasterForumDeskripsi:1,IdMasterForumNamaForum:1,IdUserInsert:1,IdUserInsertAddress:1,IdUserInsertDescription:1,IdUserInsertDisplayName:1,IdUserInsertEmail:1,IdUserInsertFcmToken:1,IdUserInsertIdDesa:1,IdUserInsertIdHubungan:1,IdUserInsertIdVersion:1,IdUserInsertInsertDate:1,IdUserInsertInsertUserId:1,IdUserInsertIsActive:1,IdUserInsertJenisKelamin:1,IdUserInsertLastDirectoryUpdate:1,IdUserInsertNoKk:1,IdUserInsertNoKtp:1,IdUserInsertOption1:1,IdUserInsertOption2:1,IdUserInsertOption3:1,IdUserInsertPasswordHash:1,IdUserInsertPasswordSalt:1,IdUserInsertPendidikan:1,IdUserInsertPhoneNumber:1,IdUserInsertSource:1,IdUserInsertTanggalLahir:1,IdUserInsertUpdateDate:1,IdUserInsertUpdateUserId:1,IdUserInsertUserImage:1,IdUserInsertUsername:1,IdUserInsertWaNumber:1,Timestamp:1},ForumNew:{Detail:1,DetailForum:1,FotoDokumenForum:1,HiddenUser:1,IdForum:1,IdMasterForum:1,IdMasterForumDeskripsi:1,IdMasterForumNamaForum:1,IdUserInsert:1,IdUserInsertAddress:1,IdUserInsertDescription:1,IdUserInsertDisplayName:1,IdUserInsertEmail:1,IdUserInsertFcmToken:1,IdUserInsertIdDesa:1,IdUserInsertIdHubungan:1,IdUserInsertIdVersion:1,IdUserInsertInsertDate:1,IdUserInsertInsertUserId:1,IdUserInsertIsActive:1,IdUserInsertJenisKelamin:1,IdUserInsertLastDirectoryUpdate:1,IdUserInsertNoKk:1,IdUserInsertNoKtp:1,IdUserInsertOption1:1,IdUserInsertOption2:1,IdUserInsertOption3:1,IdUserInsertPasswordHash:1,IdUserInsertPasswordSalt:1,IdUserInsertPendidikan:1,IdUserInsertPhoneNumber:1,IdUserInsertSource:1,IdUserInsertTanggalLahir:1,IdUserInsertUpdateDate:1,IdUserInsertUpdateUserId:1,IdUserInsertUserImage:1,IdUserInsertUsername:1,IdUserInsertWaNumber:1,Timestamp:1},InfoDesa:{BodyInfo:1,DisplayName:1,IdInfoDesa:1,IdUser:1,Image:1,ShortDescInfo:1,Timestamp:1,TitleInfo:1},MasterFlowFormulir:{DescForm:1,DetailFlowFormulir:1,IdDesa:1,IdDesaDescDesa:1,IdDesaIdKecamatan:1,IdDesaLantitudeDesa:1,IdDesaLogoDesa:1,IdDesaLongtitudeDesa:1,IdDesaNamaDesa:1,IdFormFlow:1,IdMasterForm:1,IdMasterFormDescFormulir:1,IdMasterFormNamaFormulir:1,Slaform:1},ParentMessage:{Body:1,Detail:1,DisplayName:1,IdParentMessage:1,IdUserShare:1,Message:1,Option1:1,Option2:1,TimeStamp:1,Title:1},Pengaduan:{DetailPengaduan:1,FotoDokumen:1,IdDesa:1,IdDesaDescDesa:1,IdDesaIdKecamatan:1,IdDesaLantitudeDesa:1,IdDesaLogoDesa:1,IdDesaLongtitudeDesa:1,IdDesaNamaDesa:1,IdDesaNoKodeDesa:1,IdMasterTujuan:1,IdMasterTujuanNamaTujuan:1,IdPengaduan:1,IdUserPengadu:1,IdUserPengaduAddress:1,IdUserPengaduDescription:1,IdUserPengaduDisplayName:1,IdUserPengaduEmail:1,IdUserPengaduFcmToken:1,IdUserPengaduIdDesa:1,IdUserPengaduIdHubungan:1,IdUserPengaduIdVersion:1,IdUserPengaduInsertDate:1,IdUserPengaduInsertUserId:1,IdUserPengaduIsActive:1,IdUserPengaduJenisKelamin:1,IdUserPengaduLastDirectoryUpdate:1,IdUserPengaduNoKk:1,IdUserPengaduNoKtp:1,IdUserPengaduOption1:1,IdUserPengaduOption2:1,IdUserPengaduOption3:1,IdUserPengaduPasswordHash:1,IdUserPengaduPasswordSalt:1,IdUserPengaduPendidikan:1,IdUserPengaduPhoneNumber:1,IdUserPengaduSource:1,IdUserPengaduTanggalLahir:1,IdUserPengaduUpdateDate:1,IdUserPengaduUpdateUserId:1,IdUserPengaduUserImage:1,IdUserPengaduUsername:1,IdUserPengaduWaNumber:1,PerihalPengaduan:1,Timestamp:1},TransaksiStatus:{DisplayName:1,DisplayName1:1,Dokumen:1,IdDesa:1,IdFormulir:1,IdMasterForm:1,IdMasterFormDescFormulir:1,IdMasterFormNamaFormulir:1,IdStatus:1,IdTransaksi:1,IdTransaksiForm:1,IdUserAparat:1,IdUserPengajuan:1,Info:1,Jabatan:1,Keterangan:1,LinkFormulir:1,NamaDesa:1,NamaStatus:1,TimeStamp:1},UserKaryawan:{AlamatPerusahanUsaha:1,Desc:1,IdPekerjaan:1,IdPekerjaanNamaPekerjaan:1,IdUser:1,IdUserKaryawan:1,IduserDisplayName:1,NamaperusahaanUsaha:1,RatarataPenghasilan:1,StatusKaryawan:1,TypePerusahaan:1},UserNelayan:{Desc:1,DetailNelayan:1,IdPekerjaan:1,IdPekerjaanNamaPekerjaan:1,IdUser:1,IdUserNelayan:1,IduserDisplayName:1},UserPerdagangan:{Desc:1,DetailPerdagangan:1,IdPekerjaan:1,IdPekerjaanNamaPekerjaan:1,IdUserPerdagangan:1,Iduser:1,IduserAddress:1,IduserDescription:1,IduserDisplayName:1,IduserEmail:1,IduserIdHubungan:1,IduserInsertDate:1,IduserInsertUserId:1,IduserIsActive:1,IduserLastDirectoryUpdate:1,IduserNoKk:1,IduserNoKtp:1,IduserOption1:1,IduserOption2:1,IduserOption3:1,IduserPasswordHash:1,IduserPasswordSalt:1,IduserPhoneNumber:1,IduserSource:1,IduserTanggalLahir:1,IduserUpdateDate:1,IduserUpdateUserId:1,IduserUserImage:1,IduserUsername:1,IduserWaNumber:1,JenisDagangan:1,NamaBrandToko:1},UserPerikananPeternakan:{DetailPeternakan:1,HasilPanen:1,IdHasilBudidaya:1,IdHasilBudidayaDesc:1,IdHasilBudidayaIdMasterBudidaya:1,IdHasilBudidayaIdSatuanHasil:1,IdHasilBudidayaNamaHasil:1,IdUser:1,IdUserAddress:1,IdUserDescription:1,IdUserDisplayName:1,IdUserEmail:1,IdUserIdHubungan:1,IdUserInsertDate:1,IdUserInsertUserId:1,IdUserIsActive:1,IdUserLastDirectoryUpdate:1,IdUserNoKk:1,IdUserNoKtp:1,IdUserOption1:1,IdUserOption2:1,IdUserOption3:1,IdUserPasswordHash:1,IdUserPasswordSalt:1,IdUserPerikanan:1,IdUserPhoneNumber:1,IdUserSource:1,IdUserTanggalLahir:1,IdUserUpdateDate:1,IdUserUpdateUserId:1,IdUserUserImage:1,IdUserUsername:1,IdUserWaNumber:1,JumlahPekerja:1,LuasLahan:1,NominalHasilPanen:1,Option1:1,PeriodePanen:1,TotalBibit:1},UserPertanianPerkebunan:{DetailPertanian:1,HasilPanen:1,IdHasilBudidaya:1,IdHasilBudidayaDesc:1,IdHasilBudidayaIdMasterBudidaya:1,IdHasilBudidayaIdSatuanHasil:1,IdHasilBudidayaNamaHasil:1,IdUser:1,IdUserAddress:1,IdUserDescription:1,IdUserDisplayName:1,IdUserEmail:1,IdUserIdHubungan:1,IdUserInsertDate:1,IdUserInsertUserId:1,IdUserIsActive:1,IdUserLastDirectoryUpdate:1,IdUserNoKk:1,IdUserNoKtp:1,IdUserOption1:1,IdUserOption2:1,IdUserOption3:1,IdUserPasswordHash:1,IdUserPasswordSalt:1,IdUserPertanian:1,IdUserPhoneNumber:1,IdUserSource:1,IdUserTanggalLahir:1,IdUserUpdateDate:1,IdUserUpdateUserId:1,IdUserUserImage:1,IdUserUsername:1,IdUserWaNumber:1,JumlahPekerja:1,LuasLahan:1,NominalHasilPanen:1,Option1:1,PeriodePanen:1}},View:{VChartByAllPekerjaan:{CountTransaksi:1,IdNumber:1,IdPekerjaan:1,NamaPekerjaan:1,TotalPenghasilan:1},VChartPenghasilanDesa:{CountTransaksi:1,IdDesa:1,IdNumber:1,Namadesa:1,TotalPenghasilan:1},ViewAllPengajuan:{FormulirPengajuan:1,IdMasterForm:1,IdNumber:1,IdUserPengajuan:1,NumberId:1},ViewAllPenghasilan:{Address:1,DisplayName:1,Email:1,IdDesa:1,IdHubungan:1,IdKabupaten:1,IdKecamatan:1,IdNumber:1,IdPropinsi:1,JenisKelamin:1,NamaDesa:1,NamaKabupaten:1,NamaKecamatan:1,NamaPropinsi:1,NoKk:1,NoKtp:1,PhoneNumber:1,TanggalLahir:1,TotalPenghasilan:1,TotalPenghasilanKaryawan:1,TotalPenghasilanNelayan:1,TotalPenghasilanPerdagangan:1,TotalPenghasilanPertanian:1,TotalPenghasilanPeternakan:1,UserId:1,Username:1,WaNumber:1},ViewMaasterForm:{DescForm:1,IdFormFlow:1,IdFormulir:1,IdNumber:1,KodePos:1,NamaDesa:1,NamaFormulir:1,NamaKecamatan:1,ReqForm:1,Slaform:1},ViewProfilUser:{Address:1,DisplayName:1,Email:1,IbuKotaPropinsi:1,IdDesa:1,IdHubungan:1,IdKabupaten:1,IdKecamatan:1,IdPropinsi:1,JenisKelamin:1,KodePos:1,LogoDesa:1,LogoKabupaten:1,LogoPropinsi:1,NamaDesa:1,NamaKabupaten:1,NamaKecamatan:1,NamaPropinsi:1,NoKk:1,NoKodeDesa:1,NoKodeKabupaten:1,NoKodeKecamatan:1,NoKodePropinsi:1,NoKtp:1,Pendidikan:1,PhoneNumber:1,TanggalLahir:1,UserId:1,UserImage:1,Username:1,WaNumber:1},ViewTransaksiFormulir:{Dokumen:1,Formulir:1,IdFormulir:1,IdMasterForm:1,IdStatus:1,IdTransaksi:1,IdTransaksiForm:1,IdUserAparat:1,IdUserPengajuan:1,Info:1,NamaStatus:1,TimeStamp:1},ViewUserPengajuan:{Dokumen:1,Formulir:1,IdFormulir:1,IdNumber:1,NumberId:1,UserPengaju:1},ViewUserPenghasilan:{DisplayName:1,Email:1,IdDesa:1,IdKabupaten:1,IdKecamatan:1,IdPekerjaan:1,IdPropinsi:1,NamaDesa:1,NamaKabupaten:1,NamaKecamatan:1,NamaPekerjaan:1,NamaPropinsi:1,NoKk:1,NoKtp:1,NumberId:1,PhoneNumber:1,TotalHasil:1,UserId:1,WaNumber:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

