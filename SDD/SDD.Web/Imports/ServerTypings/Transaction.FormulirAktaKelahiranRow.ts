namespace SDD.Transaction {
    export interface FormulirAktaKelahiranRow {
        IdFormAktaKelahiran?: number;
        IdFormFlow?: number;
        IdUserPelapor?: number;
        NamaBayi?: string;
        KelaminBayi?: number;
        TempatKelahiran?: string;
        HariKelahiran?: string;
        TglLahir?: string;
        WaktuKelahiran?: string;
        JenisKelahiran?: number;
        BeratBayi?: number;
        PanjangBayi?: number;
        AnakKe?: number;
        NamaIbu?: string;
        NikIbu?: string;
        PekerjaanIbu?: string;
        TglLahirIbu?: string;
        AlamatIbu?: string;
        NamaAyah?: string;
        TglLahirAyah?: string;
        PekerjaanAyah?: string;
        AlamatAyah?: string;
        NikAyah?: string;
        LinkDocAkta?: string;
        IdFormFlowIdMasterForm?: number;
        IdFormFlowSlaform?: number;
        IdFormFlowDescForm?: string;
        IdFormFlowIdDesa?: number;
        IdUserPelaporUsername?: string;
        IdUserPelaporDisplayName?: string;
        IdUserPelaporEmail?: string;
        IdUserPelaporSource?: string;
        IdUserPelaporPasswordHash?: string;
        IdUserPelaporPasswordSalt?: string;
        IdUserPelaporLastDirectoryUpdate?: string;
        IdUserPelaporUserImage?: string;
        IdUserPelaporInsertDate?: string;
        IdUserPelaporInsertUserId?: number;
        IdUserPelaporUpdateDate?: string;
        IdUserPelaporUpdateUserId?: number;
        IdUserPelaporIsActive?: number;
        IdUserPelaporAddress?: string;
        IdUserPelaporIdHubungan?: number;
        IdUserPelaporNoKtp?: string;
        IdUserPelaporNoKk?: string;
        IdUserPelaporPhoneNumber?: string;
        IdUserPelaporWaNumber?: string;
        IdUserPelaporOption1?: string;
        IdUserPelaporOption2?: string;
        IdUserPelaporOption3?: string;
        IdUserPelaporJenisKelamin?: number;
        IdUserPelaporTanggalLahir?: string;
        IdUserPelaporDescription?: string;
        DetailFormulir?: DetailAktaLahirRow[];
        Timestamp?: string;
    }

    export namespace FormulirAktaKelahiranRow {
        export const idProperty = 'IdFormAktaKelahiran';
        export const nameProperty = 'NamaBayi';
        export const localTextPrefix = 'Transaction.FormulirAktaKelahiran';
        export const deletePermission = 'Transaction:FormulirAktaKelahiran';
        export const insertPermission = 'Transaction:FormulirAktaKelahiran';
        export const readPermission = 'Transaction:FormulirAktaKelahiran';
        export const updatePermission = 'Transaction:FormulirAktaKelahiran';

        export declare const enum Fields {
            IdFormAktaKelahiran = "IdFormAktaKelahiran",
            IdFormFlow = "IdFormFlow",
            IdUserPelapor = "IdUserPelapor",
            NamaBayi = "NamaBayi",
            KelaminBayi = "KelaminBayi",
            TempatKelahiran = "TempatKelahiran",
            HariKelahiran = "HariKelahiran",
            TglLahir = "TglLahir",
            WaktuKelahiran = "WaktuKelahiran",
            JenisKelahiran = "JenisKelahiran",
            BeratBayi = "BeratBayi",
            PanjangBayi = "PanjangBayi",
            AnakKe = "AnakKe",
            NamaIbu = "NamaIbu",
            NikIbu = "NikIbu",
            PekerjaanIbu = "PekerjaanIbu",
            TglLahirIbu = "TglLahirIbu",
            AlamatIbu = "AlamatIbu",
            NamaAyah = "NamaAyah",
            TglLahirAyah = "TglLahirAyah",
            PekerjaanAyah = "PekerjaanAyah",
            AlamatAyah = "AlamatAyah",
            NikAyah = "NikAyah",
            LinkDocAkta = "LinkDocAkta",
            IdFormFlowIdMasterForm = "IdFormFlowIdMasterForm",
            IdFormFlowSlaform = "IdFormFlowSlaform",
            IdFormFlowDescForm = "IdFormFlowDescForm",
            IdFormFlowIdDesa = "IdFormFlowIdDesa",
            IdUserPelaporUsername = "IdUserPelaporUsername",
            IdUserPelaporDisplayName = "IdUserPelaporDisplayName",
            IdUserPelaporEmail = "IdUserPelaporEmail",
            IdUserPelaporSource = "IdUserPelaporSource",
            IdUserPelaporPasswordHash = "IdUserPelaporPasswordHash",
            IdUserPelaporPasswordSalt = "IdUserPelaporPasswordSalt",
            IdUserPelaporLastDirectoryUpdate = "IdUserPelaporLastDirectoryUpdate",
            IdUserPelaporUserImage = "IdUserPelaporUserImage",
            IdUserPelaporInsertDate = "IdUserPelaporInsertDate",
            IdUserPelaporInsertUserId = "IdUserPelaporInsertUserId",
            IdUserPelaporUpdateDate = "IdUserPelaporUpdateDate",
            IdUserPelaporUpdateUserId = "IdUserPelaporUpdateUserId",
            IdUserPelaporIsActive = "IdUserPelaporIsActive",
            IdUserPelaporAddress = "IdUserPelaporAddress",
            IdUserPelaporIdHubungan = "IdUserPelaporIdHubungan",
            IdUserPelaporNoKtp = "IdUserPelaporNoKtp",
            IdUserPelaporNoKk = "IdUserPelaporNoKk",
            IdUserPelaporPhoneNumber = "IdUserPelaporPhoneNumber",
            IdUserPelaporWaNumber = "IdUserPelaporWaNumber",
            IdUserPelaporOption1 = "IdUserPelaporOption1",
            IdUserPelaporOption2 = "IdUserPelaporOption2",
            IdUserPelaporOption3 = "IdUserPelaporOption3",
            IdUserPelaporJenisKelamin = "IdUserPelaporJenisKelamin",
            IdUserPelaporTanggalLahir = "IdUserPelaporTanggalLahir",
            IdUserPelaporDescription = "IdUserPelaporDescription",
            DetailFormulir = "DetailFormulir",
            Timestamp = "Timestamp"
        }
    }
}

