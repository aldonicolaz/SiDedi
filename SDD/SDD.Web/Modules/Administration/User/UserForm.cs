namespace SDD.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow), CheckNames = true)]
    public class UserForm
    {
        public String Username { get; set; }
        public String DisplayName { get; set; }
        [EmailEditor]
        public String Email { get; set; }
        public String UserImage { get; set; }
        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, OneWay, Required(true)]
        public String PasswordConfirm { get; set; }
        [OneWay]
        public String Source { get; set; }
        [TextAreaEditor(Rows = 6)]
        public String Address { get; set; }
        [LookupEditor("Master.MasterDesa")]
        public Int64 IdDesa { get; set; }
        [LookupEditor("Master.MasterHubungan")]
        public Int32 IdHubungan { get; set; }
        public String NoKTP { get; set; }
        public String NoKK { get; set; }
        public String PhoneNumber { get; set; }
        public String WaNumber { get; set; }
        [Width(200), Visible(false)]
        public String Option1 { get; set; }
        [Width(200), Visible(false)]
        public String Option2 { get; set; }
        [Width(200), Visible(false)]
        public String Option3 { get; set; }
        public JenisKelamin JenisKelamin { get; set; }

        public DateTime TanggalLahir { get; set; }
        [Pendidikan]
        public String Pendidikan { get; set; }
        [TextAreaEditor(Rows = 6)]
        public String Description { get; set; }


    }
}