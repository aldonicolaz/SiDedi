



using Serenity.ComponentModel;
using System.ComponentModel;

namespace SDD.Transaction
{
    [EnumKey("Transaction.StatusAparat")]
    public enum StatusAparat
    {
        [Description("Active")]
        Satu = 1,
        [Description("Non Active")]
        Dua = 2
    }
}