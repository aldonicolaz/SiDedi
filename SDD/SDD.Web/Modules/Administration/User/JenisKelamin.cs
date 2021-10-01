


using Serenity.ComponentModel;
using System.ComponentModel;

namespace SDD.Administration
{
    [EnumKey("Administration.JenisKelamin")]
    public enum JenisKelamin
    {
        [Description("Laki-Laki")]
        Pria = 1,
        [Description("Perempuan")]
        Wanita = 2
    }
}