namespace SDD.Administration {
    export interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        IdDesa: Serenity.LookupEditor;
        IdHubungan: Serenity.LookupEditor;
        NoKTP: Serenity.StringEditor;
        NoKK: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        WaNumber: Serenity.StringEditor;
        Option1: Serenity.StringEditor;
        Option2: Serenity.StringEditor;
        Option3: Serenity.StringEditor;
        JenisKelamin: Serenity.EnumEditor;
        TanggalLahir: Serenity.DateEditor;
        Pendidikan: Pendidikan;
        Description: Serenity.TextAreaEditor;
    }

    export class UserForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.User';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserForm.init)  {
                UserForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.PasswordEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.LookupEditor;
                var w6 = s.EnumEditor;
                var w7 = s.DateEditor;
                var w8 = Pendidikan;

                Q.initFormType(UserForm, [
                    'Username', w0,
                    'DisplayName', w0,
                    'Email', w1,
                    'UserImage', w2,
                    'Password', w3,
                    'PasswordConfirm', w3,
                    'Source', w0,
                    'Address', w4,
                    'IdDesa', w5,
                    'IdHubungan', w5,
                    'NoKTP', w0,
                    'NoKK', w0,
                    'PhoneNumber', w0,
                    'WaNumber', w0,
                    'Option1', w0,
                    'Option2', w0,
                    'Option3', w0,
                    'JenisKelamin', w6,
                    'TanggalLahir', w7,
                    'Pendidikan', w8,
                    'Description', w4
                ]);
            }
        }
    }
}

