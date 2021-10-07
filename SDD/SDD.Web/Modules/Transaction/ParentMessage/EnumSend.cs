using Serenity.ComponentModel;



namespace SDD.Transaction
{
    [EnumKey("Transaction.EnumSend")]
    public enum Send
    {
        All = 1,
        Individual = 0
    }
}