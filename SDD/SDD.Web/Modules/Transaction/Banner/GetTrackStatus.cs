


using Serenity.ComponentModel;
using System.ComponentModel;

namespace SDD.Transaction
{
    [EnumKey("Transaction.GetTrackStatus")]
    public enum GetTrackStatus
    {
        [Description("NON AKTIF")]
        NonAktif = 0,
        [Description("AKTIF")]
        Aktif = 1
        

    }
}