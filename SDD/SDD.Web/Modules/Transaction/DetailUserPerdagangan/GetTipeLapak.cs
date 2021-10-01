



using Serenity.ComponentModel;
using System.ComponentModel;

namespace SDD.Transaction
{
    [EnumKey("Transaction.GetTipeLapak")]
    public enum GetTipeLapak
    {
        [Description("OFFLINE")]
        Offline = 1,
        [Description("ONLINE")]
        Online = 2
    }
}