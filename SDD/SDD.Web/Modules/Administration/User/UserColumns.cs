
namespace SDD.Administration.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow), CheckNames = true)]
    public class UserColumns
    {
        [EditLink, AlignRight, Width(55)]
        [SortOrder(1, descending: true)]
        public String UserId { get; set; }
        [EditLink, Width(150)]
        public String Username { get; set; }
        [Width(150)]
        public String DisplayName { get; set; }
        [Width(250)]
        public String Email { get; set; }
        [Width(100)]
        public String Source { get; set; }
        [Width(300)]
        public String Address { get; set; }
        [LookupEditor("Master.MasterDesa"),QuickFilter,Visible(false)]
        public Int64 IdDesa { get; set; }
        [Width(300)]
        public String IdDesaNamaDesa { get; set; }
        [Width(200),Visible(false)]
        public Int32 IdHubungan { get; set; }
        [Width(200)]
        public String NamaHubungan { get; set; }
        [Width(200)]
        public String NoKTP { get; set; }
        [Width(200)]
        public String NoKK { get; set; }
        [Width(200)]
        public String PhoneNumber { get; set; }
        [Width(200)]
        public String WaNumber { get; set; }
        [Width(200)]
        public String Option1 { get; set; }
        [Width(200), Visible(false)]
        public String Option2 { get; set; }
        [Width(200), Visible(false)]
        public String Option3 { get; set; }
        [Width(200)]
        public JenisKelamin JenisKelamin { get; set; }
        [Width(200)]
        public DateTime TanggalLahir { get; set; }
        [Width(200)]
        public String Pendidikan { get; set; }
        [Width(300)]
        public String Description { get; set; }
    }
}
