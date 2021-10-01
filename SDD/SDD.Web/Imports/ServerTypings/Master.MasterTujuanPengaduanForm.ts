namespace SDD.Master {
    export interface MasterTujuanPengaduanForm {
        NamaTujuan: Serenity.StringEditor;
    }

    export class MasterTujuanPengaduanForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterTujuanPengaduan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterTujuanPengaduanForm.init)  {
                MasterTujuanPengaduanForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MasterTujuanPengaduanForm, [
                    'NamaTujuan', w0
                ]);
            }
        }
    }
}

