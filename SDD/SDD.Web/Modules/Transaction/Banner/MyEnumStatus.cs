using Serenity.ComponentModel;
using System.ComponentModel;


namespace SDD.Transaction
{
    [EnumKey("Transaction.MyEnumStatus")]
    public enum MyEnumStatus
    {
        Aktif = 1,
        NonAktif = 0
    }
}