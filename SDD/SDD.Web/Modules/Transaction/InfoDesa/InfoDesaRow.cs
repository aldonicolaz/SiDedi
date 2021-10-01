
namespace SDD.Transaction.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[InfoDesa]")]
    [DisplayName("Info Desa"), InstanceName("Info Desa")]
    [ReadPermission("Transaction:InfoDesa")]
    [ModifyPermission("Transaction:InfoDesa")]
    public sealed class InfoDesaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Info Desa"), Identity]
        public Int32? IdInfoDesa
        {
            get { return Fields.IdInfoDesa[this]; }
            set { Fields.IdInfoDesa[this] = value; }
        }

        [DisplayName("Id User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdUser")]
        public Int32? IdUser
        {
            get { return Fields.IdUser[this]; }
            set { Fields.IdUser[this] = value; }
        }


        [DisplayName("Image"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "Image/~", CopyToHistory = true, DisableDefaultBehavior = true)]
        public String Image
        {
            get { return Fields.Image[this]; }
            set { Fields.Image[this] = value; }
        }

        [DisplayName("Body Info"), Size(900)]
        public String BodyInfo
        {
            get { return Fields.BodyInfo[this]; }
            set { Fields.BodyInfo[this] = value; }
        }

        [DisplayName("Title Info"), Size(255)]
        public String TitleInfo
        {
            get { return Fields.TitleInfo[this]; }
            set { Fields.TitleInfo[this] = value; }
        }

        [DisplayName("Short Deskripsi Info"), Size(255)]
        public String ShortDescInfo
        {
            get { return Fields.ShortDescInfo[this]; }
            set { Fields.ShortDescInfo[this] = value; }
        }

        [DisplayName("Timestamp"), DisplayFormat("dd-MM-yyyy HH:mm:ss"), Width(200)]
        public DateTime? Timestamp
        {
            get { return Fields.Timestamp[this]; }
            set { Fields.Timestamp[this] = value; }
        }

        [DisplayName("User Insert"), Expression("jIdUser.[DisplayName]")]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.IdInfoDesa; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Image; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InfoDesaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdInfoDesa;
            public Int32Field IdUser;
            public StringField Image;
            public StringField BodyInfo;
            public StringField TitleInfo;
            public StringField ShortDescInfo;
            public DateTimeField Timestamp;
            public StringField DisplayName;
        }
    }
}
