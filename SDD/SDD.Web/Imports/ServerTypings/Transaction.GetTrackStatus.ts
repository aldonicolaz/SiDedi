namespace SDD.Transaction {
    export enum GetTrackStatus {
        NonAktif = 0,
        Aktif = 1
    }
    Serenity.Decorators.registerEnumType(GetTrackStatus, 'SDD.Transaction.GetTrackStatus', 'Transaction.GetTrackStatus');
}

