namespace SDD.Transaction {
    export enum Send {
        Individual = 0,
        All = 1
    }
    Serenity.Decorators.registerEnumType(Send, 'SDD.Transaction.Send', 'Transaction.EnumSend');
}

