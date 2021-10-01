
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

    [ConnectionKey("SDD_Connection"), Module("Transaction"), TableName("[dbo].[UserNelayan]")]
    [DisplayName("Nelayan"), InstanceName("Nelayan")]
    [ReadPermission("Transaction:UserNelayan")]
    [ModifyPermission("Transaction:UserNelayan")]
    public sealed class UserNelayanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id User Nelayan"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? IdUserNelayan
        {
            get { return Fields.IdUserNelayan[this]; }
            set { Fields.IdUserNelayan[this] = value; }
        }

        [DisplayName("Iduser"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIduser")]
        public Int32? IdUser
        {
            get { return Fields.IdUser[this]; }
            set { Fields.IdUser[this] = value; }
        }


        [DisplayName("Deskripsi"), Size(255), QuickSearch]
        public String Desc
        {
            get { return Fields.Desc[this]; }
            set { Fields.Desc[this] = value; }
        }
        [DisplayName("Display Name"), Expression("jIduser.[DisplayName]")]
        public String IduserDisplayName
        {
            get { return Fields.IduserDisplayName[this]; }
            set { Fields.IduserDisplayName[this] = value; }
        }
        [DisplayName("Detail Nelayan"), MasterDetailRelation(foreignKey: "IdUserNelayan"), NotMapped]
        public List<DetailKapalNelayanRow> DetailNelayan
        {
            get { return Fields.DetailNelayan[this]; }
            set { Fields.DetailNelayan[this] = value; }
        }

        [DisplayName("Pekerjaan"), ForeignKey("[dbo].[MasterPekerjaan]", "IdPekerjaan"), LeftJoin("jIdPekerjaan")]
        public Int32? IdPekerjaan
        {
            get { return Fields.IdPekerjaan[this]; }
            set { Fields.IdPekerjaan[this] = value; }
        }
        [DisplayName("Nama Pekerjaan"), Expression("jIdPekerjaan.[NamaPekerjaan]")]
        public String IdPekerjaanNamaPekerjaan
        {
            get { return Fields.IdPekerjaanNamaPekerjaan[this]; }
            set { Fields.IdPekerjaanNamaPekerjaan[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.IdUserNelayan; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Desc; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserNelayanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdUserNelayan;
            public Int32Field IdUser;
            public StringField Desc;
            public StringField IduserDisplayName;
            public RowListField<DetailKapalNelayanRow> DetailNelayan;
            public Int32Field IdPekerjaan;
            public StringField IdPekerjaanNamaPekerjaan;
        }
    }
}
