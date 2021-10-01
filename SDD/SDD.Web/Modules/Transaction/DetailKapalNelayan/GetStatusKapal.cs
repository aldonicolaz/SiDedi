


using Serenity.ComponentModel;
using System.ComponentModel;

namespace SDD.Transaction
{
    [EnumKey("Transaction.GetStatusKapal")]
    public enum GetStatusKapal
    {
        [Description("SEWA")]
        Sewa = 1,
        [Description("MILIK PRIBADI")]
        Milik = 2
    }
}