namespace SDD.Master {
    export interface MasterForumForm {
        NamaForum: Serenity.StringEditor;
        Deskripsi: Serenity.TextAreaEditor;
    }

    export class MasterForumForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MasterForum';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterForumForm.init)  {
                MasterForumForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(MasterForumForm, [
                    'NamaForum', w0,
                    'Deskripsi', w1
                ]);
            }
        }
    }
}

