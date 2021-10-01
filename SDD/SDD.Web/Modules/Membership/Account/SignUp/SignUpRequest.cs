
namespace SDD.Membership
{
    using Serenity.Services;
    using System;

    public class SignUpRequest : ServiceRequest
    {
        public String DisplayName { get; set; }
        public String Email { get; set; }
        public String Password { get; set; }

       
       // public String Address { get; set; }
      
       // public Int64 IdDesa { get; set; }
       
        //public Int32 IdHubungan { get; set; }
        //public String NoKTP { get; set; }
        //public String NoKK { get; set; }
        //public String PhoneNumber { get; set; }
        //public String WaNumber { get; set; }

        //public Int32 JenisKelamin { get; set; }

        //public DateTime TanggalLahir { get; set; }
      
        //public String Description { get; set; }
    }
}