namespace SDD.Transaction {
    export enum MyEnumStatus {
        NonAktif = 0,
        Aktif = 1
    }
    Serenity.Decorators.registerEnumType(MyEnumStatus, 'SDD.Transaction.MyEnumStatus', 'Transaction.MyEnumStatus');
}

