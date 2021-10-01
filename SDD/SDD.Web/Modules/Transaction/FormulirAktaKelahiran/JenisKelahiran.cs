


using Serenity.ComponentModel;
using System.ComponentModel;

namespace SDD.Transaction
{
    [EnumKey("Transaction.JenisKelahiran")]
    public enum JenisKelahiran
    {
        [Description("Caesar")]
        Caesar = 1,
        [Description("Normal")]
        Normal = 2
    }
}