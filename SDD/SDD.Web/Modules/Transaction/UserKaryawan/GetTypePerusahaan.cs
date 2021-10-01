



using Serenity.ComponentModel;
using System.ComponentModel;

namespace SDD.Transaction
{
    [EnumKey("Transaction.GetTypePerusahaan")]
    public enum GetTypePerusahaan
    {
        [Description("PNS")]
        Pns = 1,
        [Description("SWASTA")]
        Swasta = 2
    }
}