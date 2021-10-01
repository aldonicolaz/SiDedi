namespace SDD.Transaction {
    export enum GetTypePerusahaan {
        Pns = 1,
        Swasta = 2
    }
    Serenity.Decorators.registerEnumType(GetTypePerusahaan, 'SDD.Transaction.GetTypePerusahaan', 'Transaction.GetTypePerusahaan');
}

