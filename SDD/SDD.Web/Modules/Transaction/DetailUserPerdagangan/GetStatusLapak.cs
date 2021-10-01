


using Serenity.ComponentModel;
using System.ComponentModel;

namespace SDD.Transaction
{
    [EnumKey("Transaction.GetStatusLapak")]
    public enum GetStatusLapak
    {
        [Description("SEWA")]
        Sewa = 1,
        [Description("MILIK")]
        Milik = 2
    }
}