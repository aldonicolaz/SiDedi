
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[Banner]")]
    [DisplayName("Banner"), InstanceName("Banner")]
    [ReadPermission("Transaction:Banner")]
    [ModifyPermission("Transaction:Banner")]
    public sealed class BannerRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Banner"), Identity]
        public Int32? IdBanner
        {
            get { return Fields.IdBanner[this]; }
            set { Fields.IdBanner[this] = value; }
        }
        [DisplayName("Image"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "Image/~", CopyToHistory = true, DisableDefaultBehavior = true)]
        public String Image
        {
            get { return Fields.Image[this]; }
            set { Fields.Image[this] = value; }
        }
        [DisplayName("Url Image"), Size(900)]
        public String UrlImage
        {
            get { return Fields.UrlImage[this]; }
            set { Fields.UrlImage[this] = value; }
        }

        [DisplayName("Id User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUser")]
        public Int32? IdUser
        {
            get { return Fields.IdUser[this]; }
            set { Fields.IdUser[this] = value; }
        }

        [DisplayName("Status Aktif")]
        public Int32? StatusAktif
        {
            get { return Fields.StatusAktif[this]; }
            set { Fields.StatusAktif[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(255)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }
        [DisplayName("User Insert"), Expression("jIdUser.[DisplayName]")]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.IdBanner; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Image; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BannerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdBanner;
            public StringField Image;
            public StringField UrlImage;
            public Int32Field IdUser;
            public Int32Field StatusAktif;
            public StringField Description;
            public StringField DisplayName;
        }
    }
}
