
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[FormulirAktaKelahiran]")]
    [DisplayName("Formulir Akta Kelahiran"), InstanceName("Formulir Akta Kelahiran")]
    [ReadPermission("Transaction:FormulirAktaKelahiran")]
    [ModifyPermission("Transaction:FormulirAktaKelahiran")]
    public sealed class FormulirAktaKelahiranRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Form Akta Kelahiran"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdFormAktaKelahiran
        {
            get { return Fields.IdFormAktaKelahiran[this]; }
            set { Fields.IdFormAktaKelahiran[this] = value; }
        }

        [DisplayName("Form Flow"), ForeignKey("[dbo].[MasterFlowFormulir]", "IdFormFlow"), LeftJoin("jIdFormFlow"), TextualField("IdFormFlowDescForm")]
        public Int32? IdFormFlow
        {
            get { return Fields.IdFormFlow[this]; }
            set { Fields.IdFormFlow[this] = value; }
        }

        [DisplayName("Id User Pelapor"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUserPelapor"), TextualField("IdUserPelaporUsername")]
        public Int32? IdUserPelapor
        {
            get { return Fields.IdUserPelapor[this]; }
            set { Fields.IdUserPelapor[this] = value; }
        }

        [DisplayName("Nama Bayi"), Size(255), QuickSearch]
        public String NamaBayi
        {
            get { return Fields.NamaBayi[this]; }
            set { Fields.NamaBayi[this] = value; }
        }

        [DisplayName("Kelamin Bayi")]
        public Int32? KelaminBayi
        {
            get { return Fields.KelaminBayi[this]; }
            set { Fields.KelaminBayi[this] = value; }
        }

        [DisplayName("Tempat Kelahiran"), Size(255)]
        public String TempatKelahiran
        {
            get { return Fields.TempatKelahiran[this]; }
            set { Fields.TempatKelahiran[this] = value; }
        }

        [DisplayName("Hari Kelahiran"), Size(255)]
        public String HariKelahiran
        {
            get { return Fields.HariKelahiran[this]; }
            set { Fields.HariKelahiran[this] = value; }
        }

        [DisplayName("Tanggal Lahir")]
        public DateTime? TglLahir
        {
            get { return Fields.TglLahir[this]; }
            set { Fields.TglLahir[this] = value; }
        }

        [DisplayName("Waktu Kelahiran")]
        public TimeSpan? WaktuKelahiran
        {
            get { return Fields.WaktuKelahiran[this]; }
            set { Fields.WaktuKelahiran[this] = value; }
        }

        [DisplayName("Jenis Kelahiran")]
        public Int32? JenisKelahiran
        {
            get { return Fields.JenisKelahiran[this]; }
            set { Fields.JenisKelahiran[this] = value; }
        }

        [DisplayName("Berat Bayi"), Size(38)]
        public Decimal? BeratBayi
        {
            get { return Fields.BeratBayi[this]; }
            set { Fields.BeratBayi[this] = value; }
        }

        [DisplayName("Panjang Bayi"), Size(38)]
        public Decimal? PanjangBayi
        {
            get { return Fields.PanjangBayi[this]; }
            set { Fields.PanjangBayi[this] = value; }
        }

        [DisplayName("Anak Ke")]
        public Int32? AnakKe
        {
            get { return Fields.AnakKe[this]; }
            set { Fields.AnakKe[this] = value; }
        }

        [DisplayName("Nama Ibu"), Size(255)]
        public String NamaIbu
        {
            get { return Fields.NamaIbu[this]; }
            set { Fields.NamaIbu[this] = value; }
        }

        [DisplayName("NIK Ibu"), Size(255)]
        public String NikIbu
        {
            get { return Fields.NikIbu[this]; }
            set { Fields.NikIbu[this] = value; }
        }

        [DisplayName("Pekerjaan Ibu"), Size(255)]
        public String PekerjaanIbu
        {
            get { return Fields.PekerjaanIbu[this]; }
            set { Fields.PekerjaanIbu[this] = value; }
        }

        [DisplayName("Tanggal Lahir Ibu")]
        public DateTime? TglLahirIbu
        {
            get { return Fields.TglLahirIbu[this]; }
            set { Fields.TglLahirIbu[this] = value; }
        }

        [DisplayName("Alamat Ibu"), Size(255)]
        public String AlamatIbu
        {
            get { return Fields.AlamatIbu[this]; }
            set { Fields.AlamatIbu[this] = value; }
        }

        [DisplayName("Nama Ayah"), Size(255)]
        public String NamaAyah
        {
            get { return Fields.NamaAyah[this]; }
            set { Fields.NamaAyah[this] = value; }
        }

        [DisplayName("Tanggal Lahir Ayah")]
        public DateTime? TglLahirAyah
        {
            get { return Fields.TglLahirAyah[this]; }
            set { Fields.TglLahirAyah[this] = value; }
        }

        [DisplayName("Pekerjaan Ayah"), Size(255)]
        public String PekerjaanAyah
        {
            get { return Fields.PekerjaanAyah[this]; }
            set { Fields.PekerjaanAyah[this] = value; }
        }

        [DisplayName("Alamat Ayah"), Size(255)]
        public String AlamatAyah
        {
            get { return Fields.AlamatAyah[this]; }
            set { Fields.AlamatAyah[this] = value; }
        }

        [DisplayName("NIK Ayah"), Size(255)]
        public String NikAyah
        {
            get { return Fields.NikAyah[this]; }
            set { Fields.NikAyah[this] = value; }
        }

        [DisplayName("Link Document Akta"), Size(255)]
        public String LinkDocAkta
        {
            get { return Fields.LinkDocAkta[this]; }
            set { Fields.LinkDocAkta[this] = value; }
        }

        [DisplayName("Id Master Form"), Expression("jIdFormFlow.[IdMasterForm]")]
        public Int32? IdFormFlowIdMasterForm
        {
            get { return Fields.IdFormFlowIdMasterForm[this]; }
            set { Fields.IdFormFlowIdMasterForm[this] = value; }
        }

        [DisplayName("Flow Slaform"), Expression("jIdFormFlow.[Slaform]")]
        public Int32? IdFormFlowSlaform
        {
            get { return Fields.IdFormFlowSlaform[this]; }
            set { Fields.IdFormFlowSlaform[this] = value; }
        }

        [DisplayName("Flow Desc Form"), Expression("jIdFormFlow.[DescForm]")]
        public String IdFormFlowDescForm
        {
            get { return Fields.IdFormFlowDescForm[this]; }
            set { Fields.IdFormFlowDescForm[this] = value; }
        }

        [DisplayName("Flow Id Desa"), Expression("jIdFormFlow.[IdDesa]")]
        public Int64? IdFormFlowIdDesa
        {
            get { return Fields.IdFormFlowIdDesa[this]; }
            set { Fields.IdFormFlowIdDesa[this] = value; }
        }

        [DisplayName("Username"), Expression("jIdUserPelapor.[Username]")]
        public String IdUserPelaporUsername
        {
            get { return Fields.IdUserPelaporUsername[this]; }
            set { Fields.IdUserPelaporUsername[this] = value; }
        }

        [DisplayName("Pelapor"), Expression("jIdUserPelapor.[DisplayName]")]
        public String IdUserPelaporDisplayName
        {
            get { return Fields.IdUserPelaporDisplayName[this]; }
            set { Fields.IdUserPelaporDisplayName[this] = value; }
        }

        [DisplayName("Email"), Expression("jIdUserPelapor.[Email]")]
        public String IdUserPelaporEmail
        {
            get { return Fields.IdUserPelaporEmail[this]; }
            set { Fields.IdUserPelaporEmail[this] = value; }
        }

        [DisplayName("Source"), Expression("jIdUserPelapor.[Source]")]
        public String IdUserPelaporSource
        {
            get { return Fields.IdUserPelaporSource[this]; }
            set { Fields.IdUserPelaporSource[this] = value; }
        }

        [DisplayName("Password Hash"), Expression("jIdUserPelapor.[PasswordHash]")]
        public String IdUserPelaporPasswordHash
        {
            get { return Fields.IdUserPelaporPasswordHash[this]; }
            set { Fields.IdUserPelaporPasswordHash[this] = value; }
        }

        [DisplayName("Password Salt"), Expression("jIdUserPelapor.[PasswordSalt]")]
        public String IdUserPelaporPasswordSalt
        {
            get { return Fields.IdUserPelaporPasswordSalt[this]; }
            set { Fields.IdUserPelaporPasswordSalt[this] = value; }
        }

        [DisplayName("Last Directory Update"), Expression("jIdUserPelapor.[LastDirectoryUpdate]")]
        public DateTime? IdUserPelaporLastDirectoryUpdate
        {
            get { return Fields.IdUserPelaporLastDirectoryUpdate[this]; }
            set { Fields.IdUserPelaporLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User Image"), Expression("jIdUserPelapor.[UserImage]")]
        public String IdUserPelaporUserImage
        {
            get { return Fields.IdUserPelaporUserImage[this]; }
            set { Fields.IdUserPelaporUserImage[this] = value; }
        }

        [DisplayName("Insert Date"), Expression("jIdUserPelapor.[InsertDate]")]
        public DateTime? IdUserPelaporInsertDate
        {
            get { return Fields.IdUserPelaporInsertDate[this]; }
            set { Fields.IdUserPelaporInsertDate[this] = value; }
        }

        [DisplayName("User Id"), Expression("jIdUserPelapor.[InsertUserId]")]
        public Int32? IdUserPelaporInsertUserId
        {
            get { return Fields.IdUserPelaporInsertUserId[this]; }
            set { Fields.IdUserPelaporInsertUserId[this] = value; }
        }

        [DisplayName("Update Date"), Expression("jIdUserPelapor.[UpdateDate]")]
        public DateTime? IdUserPelaporUpdateDate
        {
            get { return Fields.IdUserPelaporUpdateDate[this]; }
            set { Fields.IdUserPelaporUpdateDate[this] = value; }
        }

        [DisplayName("Update User Id"), Expression("jIdUserPelapor.[UpdateUserId]")]
        public Int32? IdUserPelaporUpdateUserId
        {
            get { return Fields.IdUserPelaporUpdateUserId[this]; }
            set { Fields.IdUserPelaporUpdateUserId[this] = value; }
        }

        [DisplayName("Is Active"), Expression("jIdUserPelapor.[IsActive]")]
        public Int16? IdUserPelaporIsActive
        {
            get { return Fields.IdUserPelaporIsActive[this]; }
            set { Fields.IdUserPelaporIsActive[this] = value; }
        }

        [DisplayName("Alamat"), Expression("jIdUserPelapor.[Address]")]
        public String IdUserPelaporAddress
        {
            get { return Fields.IdUserPelaporAddress[this]; }
            set { Fields.IdUserPelaporAddress[this] = value; }
        }

        [DisplayName("Id Hubungan "), Expression("jIdUserPelapor.[IdHubungan ]")]
        public Int32? IdUserPelaporIdHubungan
        {
            get { return Fields.IdUserPelaporIdHubungan[this]; }
            set { Fields.IdUserPelaporIdHubungan[this] = value; }
        }

        [DisplayName("No KTP"), Expression("jIdUserPelapor.[NoKTP]")]
        public String IdUserPelaporNoKtp
        {
            get { return Fields.IdUserPelaporNoKtp[this]; }
            set { Fields.IdUserPelaporNoKtp[this] = value; }
        }

        [DisplayName("No KK"), Expression("jIdUserPelapor.[NoKK]")]
        public String IdUserPelaporNoKk
        {
            get { return Fields.IdUserPelaporNoKk[this]; }
            set { Fields.IdUserPelaporNoKk[this] = value; }
        }

        [DisplayName("Nomor Handphone"), Expression("jIdUserPelapor.[PhoneNumber]")]
        public String IdUserPelaporPhoneNumber
        {
            get { return Fields.IdUserPelaporPhoneNumber[this]; }
            set { Fields.IdUserPelaporPhoneNumber[this] = value; }
        }

        [DisplayName("Nomor Whatsapp"), Expression("jIdUserPelapor.[WaNumber]")]
        public String IdUserPelaporWaNumber
        {
            get { return Fields.IdUserPelaporWaNumber[this]; }
            set { Fields.IdUserPelaporWaNumber[this] = value; }
        }

        [DisplayName("Option1"), Expression("jIdUserPelapor.[Option1]")]
        public String IdUserPelaporOption1
        {
            get { return Fields.IdUserPelaporOption1[this]; }
            set { Fields.IdUserPelaporOption1[this] = value; }
        }

        [DisplayName("Option2"), Expression("jIdUserPelapor.[Option2]")]
        public String IdUserPelaporOption2
        {
            get { return Fields.IdUserPelaporOption2[this]; }
            set { Fields.IdUserPelaporOption2[this] = value; }
        }

        [DisplayName("Option3"), Expression("jIdUserPelapor.[Option3]")]
        public String IdUserPelaporOption3
        {
            get { return Fields.IdUserPelaporOption3[this]; }
            set { Fields.IdUserPelaporOption3[this] = value; }
        }

        [DisplayName("Jenis Kelamin"), Expression("jIdUserPelapor.[JenisKelamin]")]
        public Int32? IdUserPelaporJenisKelamin
        {
            get { return Fields.IdUserPelaporJenisKelamin[this]; }
            set { Fields.IdUserPelaporJenisKelamin[this] = value; }
        }

        [DisplayName("Tanggal Lahir"), Expression("jIdUserPelapor.[TanggalLahir]")]
        public DateTime? IdUserPelaporTanggalLahir
        {
            get { return Fields.IdUserPelaporTanggalLahir[this]; }
            set { Fields.IdUserPelaporTanggalLahir[this] = value; }
        }

        [DisplayName("Description"), Expression("jIdUserPelapor.[Description]")]
        public String IdUserPelaporDescription
        {
            get { return Fields.IdUserPelaporDescription[this]; }
            set { Fields.IdUserPelaporDescription[this] = value; }
        }
        [DisplayName("Detail Formulir"), MasterDetailRelation(foreignKey: "IdAktaLahir"), NotMapped]
        public List<DetailAktaLahirRow> DetailFormulir
        {
            get { return Fields.DetailFormulir[this]; }
            set { Fields.DetailFormulir[this] = value; }
        }
        [DisplayName("Timestamp"), DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime? Timestamp
        {
            get { return Fields.Timestamp[this]; }
            set { Fields.Timestamp[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdFormAktaKelahiran; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaBayi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FormulirAktaKelahiranRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdFormAktaKelahiran;
            public Int32Field IdFormFlow;
            public Int32Field IdUserPelapor;
            public StringField NamaBayi;
            public Int32Field KelaminBayi;
            public StringField TempatKelahiran;
            public StringField HariKelahiran;
            public DateTimeField TglLahir;
            public TimeSpanField WaktuKelahiran;
            public Int32Field JenisKelahiran;
            public DecimalField BeratBayi;
            public DecimalField PanjangBayi;
            public Int32Field AnakKe;
            public StringField NamaIbu;
            public StringField NikIbu;
            public StringField PekerjaanIbu;
            public DateTimeField TglLahirIbu;
            public StringField AlamatIbu;
            public StringField NamaAyah;
            public DateTimeField TglLahirAyah;
            public StringField PekerjaanAyah;
            public StringField AlamatAyah;
            public StringField NikAyah;
            public StringField LinkDocAkta;

            public Int32Field IdFormFlowIdMasterForm;
            public Int32Field IdFormFlowSlaform;
            public StringField IdFormFlowDescForm;
            public Int64Field IdFormFlowIdDesa;

            public StringField IdUserPelaporUsername;
            public StringField IdUserPelaporDisplayName;
            public StringField IdUserPelaporEmail;
            public StringField IdUserPelaporSource;
            public StringField IdUserPelaporPasswordHash;
            public StringField IdUserPelaporPasswordSalt;
            public DateTimeField IdUserPelaporLastDirectoryUpdate;
            public StringField IdUserPelaporUserImage;
            public DateTimeField IdUserPelaporInsertDate;
            public Int32Field IdUserPelaporInsertUserId;
            public DateTimeField IdUserPelaporUpdateDate;
            public Int32Field IdUserPelaporUpdateUserId;
            public Int16Field IdUserPelaporIsActive;
            public StringField IdUserPelaporAddress;
            public Int32Field IdUserPelaporIdHubungan;
            public StringField IdUserPelaporNoKtp;
            public StringField IdUserPelaporNoKk;
            public StringField IdUserPelaporPhoneNumber;
            public StringField IdUserPelaporWaNumber;
            public StringField IdUserPelaporOption1;
            public StringField IdUserPelaporOption2;
            public StringField IdUserPelaporOption3;
            public Int32Field IdUserPelaporJenisKelamin;
            public DateTimeField IdUserPelaporTanggalLahir;
            public StringField IdUserPelaporDescription;
            public RowListField<DetailAktaLahirRow> DetailFormulir;
            public DateTimeField Timestamp;
        }
    }
}
