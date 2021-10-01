namespace SDD.Master {
    export interface DataBudidaya {
        IdBudidaya?: number;
        IdPekerjaan?: number;
        NamaBudidaya?: string;
        IdSatuanBudidaya?: number;
        detail?: DataHasilBudidaya[];
    }
}

