
namespace SDD.Membership
{
    using SDD.Administration;
    using Serenity.ComponentModel;
    using System;

    [FormScript("Membership.SignUp")]
    public class SignUpForm
    {
        [Required(true), Placeholder("Full name")]
        public String DisplayName { get; set; }
        [EmailEditor, Required(true), Placeholder("Email")]
        public String Email { get; set; }
        [EmailEditor, Required(true), Placeholder("Confirm email")]
        public String ConfirmEmail { get; set; }
        [PasswordEditor, Required(true), Placeholder("Password")]
        public String Password { get; set; }
        [PasswordEditor, Required(true), Placeholder("Confirm password")]
        public String ConfirmPassword { get; set; }


        //[TextAreaEditor(Rows = 6)]
        //public String Address { get; set; }
        //[LookupEditor("Master.MasterDesa")]
        //public Int64 IdDesa { get; set; }
        //[LookupEditor("Master.MasterHubungan")]
        //public Int32 IdHubungan { get; set; }
        //public String NoKTP { get; set; }
        //public String NoKK { get; set; }
        //public String PhoneNumber { get; set; }
        //public String WaNumber { get; set; }
       
        //public JenisKelamin JenisKelamin { get; set; }

        //public DateTime TanggalLahir { get; set; }
        //[TextAreaEditor(Rows = 6)]
        //public String Description { get; set; }
    }
}
