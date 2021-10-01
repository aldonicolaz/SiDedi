namespace SDD.Transaction {
    export enum GetStatusKapal {
        Sewa = 1,
        Milik = 2
    }
    Serenity.Decorators.registerEnumType(GetStatusKapal, 'SDD.Transaction.GetStatusKapal', 'Transaction.GetStatusKapal');
}

