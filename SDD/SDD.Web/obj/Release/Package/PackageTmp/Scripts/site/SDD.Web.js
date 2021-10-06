var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var JenisKelamin;
        (function (JenisKelamin) {
            JenisKelamin[JenisKelamin["Pria"] = 1] = "Pria";
            JenisKelamin[JenisKelamin["Wanita"] = 2] = "Wanita";
        })(JenisKelamin = Administration.JenisKelamin || (Administration.JenisKelamin = {}));
        Serenity.Decorators.registerEnumType(JenisKelamin, 'SDD.Administration.JenisKelamin', 'Administration.JenisKelamin');
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
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
                    var w8 = Administration.Pendidikan;
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
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List',
                'GetProfile'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterBudidayaForm = /** @class */ (function (_super) {
            __extends(MasterBudidayaForm, _super);
            function MasterBudidayaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterBudidayaForm.init) {
                    MasterBudidayaForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = Master.MasterHasilBudidayaGrid;
                    Q.initFormType(MasterBudidayaForm, [
                        'IdPekerjaan', w0,
                        'NamaBudidaya', w1,
                        'IdSatuanBudidaya', w0,
                        'DetailBudidaya', w2
                    ]);
                }
                return _this;
            }
            MasterBudidayaForm.formKey = 'Master.MasterBudidaya';
            return MasterBudidayaForm;
        }(Serenity.PrefixedContext));
        Master.MasterBudidayaForm = MasterBudidayaForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterBudidayaRow;
        (function (MasterBudidayaRow) {
            MasterBudidayaRow.idProperty = 'IdBudidaya';
            MasterBudidayaRow.nameProperty = 'NamaBudidaya';
            MasterBudidayaRow.localTextPrefix = 'Master.MasterBudidaya';
            MasterBudidayaRow.lookupKey = 'Master.MasterBudidaya';
            function getLookup() {
                return Q.getLookup('Master.MasterBudidaya');
            }
            MasterBudidayaRow.getLookup = getLookup;
            MasterBudidayaRow.deletePermission = 'Master:MasterBudidaya';
            MasterBudidayaRow.insertPermission = 'Master:MasterBudidaya';
            MasterBudidayaRow.readPermission = 'Master:MasterBudidaya';
            MasterBudidayaRow.updatePermission = 'Master:MasterBudidaya';
        })(MasterBudidayaRow = Master.MasterBudidayaRow || (Master.MasterBudidayaRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterBudidayaService;
        (function (MasterBudidayaService) {
            MasterBudidayaService.baseUrl = 'Master/MasterBudidaya';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetListMasterBudidaya',
                'GetListHasilBudidaya',
                'ListBudidaya'
            ].forEach(function (x) {
                MasterBudidayaService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterBudidayaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterBudidayaService = Master.MasterBudidayaService || (Master.MasterBudidayaService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterDesaForm = /** @class */ (function (_super) {
            __extends(MasterDesaForm, _super);
            function MasterDesaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterDesaForm.init) {
                    MasterDesaForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(MasterDesaForm, [
                        'IdKecamatan', w0,
                        'NamaDesa', w1,
                        'NoKodeDesa', w1,
                        'LantitudeDesa', w1,
                        'LongtitudeDesa', w1,
                        'LogoDesa', w2,
                        'DescDesa', w3
                    ]);
                }
                return _this;
            }
            MasterDesaForm.formKey = 'Master.MasterDesa';
            return MasterDesaForm;
        }(Serenity.PrefixedContext));
        Master.MasterDesaForm = MasterDesaForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterDesaRow;
        (function (MasterDesaRow) {
            MasterDesaRow.idProperty = 'IdDesa';
            MasterDesaRow.nameProperty = 'NamaDesa';
            MasterDesaRow.localTextPrefix = 'Master.MasterDesa';
            MasterDesaRow.lookupKey = 'Master.MasterDesa';
            function getLookup() {
                return Q.getLookup('Master.MasterDesa');
            }
            MasterDesaRow.getLookup = getLookup;
            MasterDesaRow.deletePermission = 'Master:MasterDesa';
            MasterDesaRow.insertPermission = 'Master:MasterDesa';
            MasterDesaRow.readPermission = 'Master:MasterDesa';
            MasterDesaRow.updatePermission = 'Master:MasterDesa';
        })(MasterDesaRow = Master.MasterDesaRow || (Master.MasterDesaRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterDesaService;
        (function (MasterDesaService) {
            MasterDesaService.baseUrl = 'Master/MasterDesa';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterDesaService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterDesaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterDesaService = Master.MasterDesaService || (Master.MasterDesaService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterFormulirForm = /** @class */ (function (_super) {
            __extends(MasterFormulirForm, _super);
            function MasterFormulirForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterFormulirForm.init) {
                    MasterFormulirForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(MasterFormulirForm, [
                        'NamaFormulir', w0,
                        'DescFormulir', w1
                    ]);
                }
                return _this;
            }
            MasterFormulirForm.formKey = 'Master.MasterFormulir';
            return MasterFormulirForm;
        }(Serenity.PrefixedContext));
        Master.MasterFormulirForm = MasterFormulirForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterFormulirRow;
        (function (MasterFormulirRow) {
            MasterFormulirRow.idProperty = 'IdFormulir';
            MasterFormulirRow.nameProperty = 'NamaFormulir';
            MasterFormulirRow.localTextPrefix = 'Master.MasterFormulir';
            MasterFormulirRow.lookupKey = 'Master.MasterFormulir';
            function getLookup() {
                return Q.getLookup('Master.MasterFormulir');
            }
            MasterFormulirRow.getLookup = getLookup;
            MasterFormulirRow.deletePermission = 'Master:MasterFormulir';
            MasterFormulirRow.insertPermission = 'Master:MasterFormulir';
            MasterFormulirRow.readPermission = 'Master:MasterFormulir';
            MasterFormulirRow.updatePermission = 'Master:MasterFormulir';
        })(MasterFormulirRow = Master.MasterFormulirRow || (Master.MasterFormulirRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterFormulirService;
        (function (MasterFormulirService) {
            MasterFormulirService.baseUrl = 'Master/MasterFormulir';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterFormulirService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterFormulirService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterFormulirService = Master.MasterFormulirService || (Master.MasterFormulirService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterForumForm = /** @class */ (function (_super) {
            __extends(MasterForumForm, _super);
            function MasterForumForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterForumForm.init) {
                    MasterForumForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(MasterForumForm, [
                        'NamaForum', w0,
                        'Deskripsi', w1
                    ]);
                }
                return _this;
            }
            MasterForumForm.formKey = 'Master.MasterForum';
            return MasterForumForm;
        }(Serenity.PrefixedContext));
        Master.MasterForumForm = MasterForumForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterForumRow;
        (function (MasterForumRow) {
            MasterForumRow.idProperty = 'IdMasterForum';
            MasterForumRow.nameProperty = 'NamaForum';
            MasterForumRow.localTextPrefix = 'Master.MasterForum';
            MasterForumRow.lookupKey = 'Master.MasterForum';
            function getLookup() {
                return Q.getLookup('Master.MasterForum');
            }
            MasterForumRow.getLookup = getLookup;
            MasterForumRow.deletePermission = 'Master:MasterForum';
            MasterForumRow.insertPermission = 'Master:MasterForum';
            MasterForumRow.readPermission = 'Master:MasterForum';
            MasterForumRow.updatePermission = 'Master:MasterForum';
        })(MasterForumRow = Master.MasterForumRow || (Master.MasterForumRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterForumService;
        (function (MasterForumService) {
            MasterForumService.baseUrl = 'Master/MasterForum';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterForumService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterForumService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterForumService = Master.MasterForumService || (Master.MasterForumService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterHasilBudidayaForm = /** @class */ (function (_super) {
            __extends(MasterHasilBudidayaForm, _super);
            function MasterHasilBudidayaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterHasilBudidayaForm.init) {
                    MasterHasilBudidayaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(MasterHasilBudidayaForm, [
                        'NamaHasil', w0,
                        'IdSatuanHasil', w1,
                        'Desc', w2
                    ]);
                }
                return _this;
            }
            MasterHasilBudidayaForm.formKey = 'Master.MasterHasilBudidaya';
            return MasterHasilBudidayaForm;
        }(Serenity.PrefixedContext));
        Master.MasterHasilBudidayaForm = MasterHasilBudidayaForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterHasilBudidayaRow;
        (function (MasterHasilBudidayaRow) {
            MasterHasilBudidayaRow.idProperty = 'IdHasilBudidaya';
            MasterHasilBudidayaRow.nameProperty = 'NamaHasil';
            MasterHasilBudidayaRow.localTextPrefix = 'Master.MasterHasilBudidaya';
            MasterHasilBudidayaRow.lookupKey = 'Master.MasterHasilBudidaya';
            function getLookup() {
                return Q.getLookup('Master.MasterHasilBudidaya');
            }
            MasterHasilBudidayaRow.getLookup = getLookup;
            MasterHasilBudidayaRow.deletePermission = 'Master:MasterHasilBudidaya';
            MasterHasilBudidayaRow.insertPermission = 'Master:MasterHasilBudidaya';
            MasterHasilBudidayaRow.readPermission = 'Master:MasterHasilBudidaya';
            MasterHasilBudidayaRow.updatePermission = 'Master:MasterHasilBudidaya';
        })(MasterHasilBudidayaRow = Master.MasterHasilBudidayaRow || (Master.MasterHasilBudidayaRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterHasilBudidayaService;
        (function (MasterHasilBudidayaService) {
            MasterHasilBudidayaService.baseUrl = 'Master/MasterHasilBudidaya';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterHasilBudidayaService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterHasilBudidayaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterHasilBudidayaService = Master.MasterHasilBudidayaService || (Master.MasterHasilBudidayaService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterHubunganForm = /** @class */ (function (_super) {
            __extends(MasterHubunganForm, _super);
            function MasterHubunganForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterHubunganForm.init) {
                    MasterHubunganForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(MasterHubunganForm, [
                        'NamaHubungan', w0,
                        'KodeHubungan', w0,
                        'DescHubungan', w1
                    ]);
                }
                return _this;
            }
            MasterHubunganForm.formKey = 'Master.MasterHubungan';
            return MasterHubunganForm;
        }(Serenity.PrefixedContext));
        Master.MasterHubunganForm = MasterHubunganForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterHubunganRow;
        (function (MasterHubunganRow) {
            MasterHubunganRow.idProperty = 'IdHubungan';
            MasterHubunganRow.nameProperty = 'NamaHubungan';
            MasterHubunganRow.localTextPrefix = 'Master.MasterHubungan';
            MasterHubunganRow.lookupKey = 'Master.MasterHubungan';
            function getLookup() {
                return Q.getLookup('Master.MasterHubungan');
            }
            MasterHubunganRow.getLookup = getLookup;
            MasterHubunganRow.deletePermission = 'Master:MasterHubungan';
            MasterHubunganRow.insertPermission = 'Master:MasterHubungan';
            MasterHubunganRow.readPermission = 'Master:MasterHubungan';
            MasterHubunganRow.updatePermission = 'Master:MasterHubungan';
        })(MasterHubunganRow = Master.MasterHubunganRow || (Master.MasterHubunganRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterHubunganService;
        (function (MasterHubunganService) {
            MasterHubunganService.baseUrl = 'Master/MasterHubungan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterHubunganService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterHubunganService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterHubunganService = Master.MasterHubunganService || (Master.MasterHubunganService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterJabatanForm = /** @class */ (function (_super) {
            __extends(MasterJabatanForm, _super);
            function MasterJabatanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterJabatanForm.init) {
                    MasterJabatanForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(MasterJabatanForm, [
                        'NamaJabatan', w0,
                        'Desc', w1
                    ]);
                }
                return _this;
            }
            MasterJabatanForm.formKey = 'Master.MasterJabatan';
            return MasterJabatanForm;
        }(Serenity.PrefixedContext));
        Master.MasterJabatanForm = MasterJabatanForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterJabatanRow;
        (function (MasterJabatanRow) {
            MasterJabatanRow.idProperty = 'IdJabatan';
            MasterJabatanRow.nameProperty = 'NamaJabatan';
            MasterJabatanRow.localTextPrefix = 'Master.MasterJabatan';
            MasterJabatanRow.lookupKey = 'Master.MasterJabatan';
            function getLookup() {
                return Q.getLookup('Master.MasterJabatan');
            }
            MasterJabatanRow.getLookup = getLookup;
            MasterJabatanRow.deletePermission = 'Master:MasterJabatan';
            MasterJabatanRow.insertPermission = 'Master:MasterJabatan';
            MasterJabatanRow.readPermission = 'Master:MasterJabatan';
            MasterJabatanRow.updatePermission = 'Master:MasterJabatan';
        })(MasterJabatanRow = Master.MasterJabatanRow || (Master.MasterJabatanRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterJabatanService;
        (function (MasterJabatanService) {
            MasterJabatanService.baseUrl = 'Master/MasterJabatan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterJabatanService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterJabatanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterJabatanService = Master.MasterJabatanService || (Master.MasterJabatanService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterKabupatenForm = /** @class */ (function (_super) {
            __extends(MasterKabupatenForm, _super);
            function MasterKabupatenForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterKabupatenForm.init) {
                    MasterKabupatenForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.ImageUploadEditor;
                    Q.initFormType(MasterKabupatenForm, [
                        'IdPropinsi', w0,
                        'NamaKabupaten', w1,
                        'NoKodeKabupaten', w1,
                        'Langtitudekabupaten', w1,
                        'LongtitudeKabupaten', w1,
                        'DescKabupaten', w2,
                        'LogoKabupaten', w3
                    ]);
                }
                return _this;
            }
            MasterKabupatenForm.formKey = 'Master.MasterKabupaten';
            return MasterKabupatenForm;
        }(Serenity.PrefixedContext));
        Master.MasterKabupatenForm = MasterKabupatenForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterKabupatenRow;
        (function (MasterKabupatenRow) {
            MasterKabupatenRow.idProperty = 'IdKabupaten';
            MasterKabupatenRow.nameProperty = 'NamaKabupaten';
            MasterKabupatenRow.localTextPrefix = 'Master.MasterKabupaten';
            MasterKabupatenRow.lookupKey = 'Master.MasterKabupaten';
            function getLookup() {
                return Q.getLookup('Master.MasterKabupaten');
            }
            MasterKabupatenRow.getLookup = getLookup;
            MasterKabupatenRow.deletePermission = 'Master:MasterKabupaten';
            MasterKabupatenRow.insertPermission = 'Master:MasterKabupaten';
            MasterKabupatenRow.readPermission = 'Master:MasterKabupaten';
            MasterKabupatenRow.updatePermission = 'Master:MasterKabupaten';
        })(MasterKabupatenRow = Master.MasterKabupatenRow || (Master.MasterKabupatenRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterKabupatenService;
        (function (MasterKabupatenService) {
            MasterKabupatenService.baseUrl = 'Master/MasterKabupaten';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterKabupatenService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterKabupatenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterKabupatenService = Master.MasterKabupatenService || (Master.MasterKabupatenService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterKecamatanForm = /** @class */ (function (_super) {
            __extends(MasterKecamatanForm, _super);
            function MasterKecamatanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterKecamatanForm.init) {
                    MasterKecamatanForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.ImageUploadEditor;
                    Q.initFormType(MasterKecamatanForm, [
                        'IdKabupaten', w0,
                        'NamaKecamatan', w1,
                        'NoKodeKecamatan', w1,
                        'LangtitudeKecamatan', w1,
                        'LongtitudeKecamatan', w1,
                        'KodePos', w1,
                        'DecKecamatan', w2,
                        'LogoKecamatan', w3
                    ]);
                }
                return _this;
            }
            MasterKecamatanForm.formKey = 'Master.MasterKecamatan';
            return MasterKecamatanForm;
        }(Serenity.PrefixedContext));
        Master.MasterKecamatanForm = MasterKecamatanForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterKecamatanRow;
        (function (MasterKecamatanRow) {
            MasterKecamatanRow.idProperty = 'IdKecamatan';
            MasterKecamatanRow.nameProperty = 'NamaKecamatan';
            MasterKecamatanRow.localTextPrefix = 'Master.MasterKecamatan';
            MasterKecamatanRow.lookupKey = 'Master.MasterKecamatan';
            function getLookup() {
                return Q.getLookup('Master.MasterKecamatan');
            }
            MasterKecamatanRow.getLookup = getLookup;
            MasterKecamatanRow.deletePermission = 'Master:MasterKecamatan';
            MasterKecamatanRow.insertPermission = 'Master:MasterKecamatan';
            MasterKecamatanRow.readPermission = 'Master:MasterKecamatan';
            MasterKecamatanRow.updatePermission = 'Master:MasterKecamatan';
        })(MasterKecamatanRow = Master.MasterKecamatanRow || (Master.MasterKecamatanRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterKecamatanService;
        (function (MasterKecamatanService) {
            MasterKecamatanService.baseUrl = 'Master/MasterKecamatan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterKecamatanService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterKecamatanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterKecamatanService = Master.MasterKecamatanService || (Master.MasterKecamatanService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterPekerjaanForm = /** @class */ (function (_super) {
            __extends(MasterPekerjaanForm, _super);
            function MasterPekerjaanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterPekerjaanForm.init) {
                    MasterPekerjaanForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(MasterPekerjaanForm, [
                        'NamaPekerjaan', w0,
                        'Desc', w1
                    ]);
                }
                return _this;
            }
            MasterPekerjaanForm.formKey = 'Master.MasterPekerjaan';
            return MasterPekerjaanForm;
        }(Serenity.PrefixedContext));
        Master.MasterPekerjaanForm = MasterPekerjaanForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterPekerjaanRow;
        (function (MasterPekerjaanRow) {
            MasterPekerjaanRow.idProperty = 'IdPekerjaan';
            MasterPekerjaanRow.nameProperty = 'NamaPekerjaan';
            MasterPekerjaanRow.localTextPrefix = 'Master.MasterPekerjaan';
            MasterPekerjaanRow.lookupKey = 'Master.MasterPekerjaan';
            function getLookup() {
                return Q.getLookup('Master.MasterPekerjaan');
            }
            MasterPekerjaanRow.getLookup = getLookup;
            MasterPekerjaanRow.deletePermission = 'Master:MasterPekerjaan';
            MasterPekerjaanRow.insertPermission = 'Master:MasterPekerjaan';
            MasterPekerjaanRow.readPermission = 'Master:MasterPekerjaan';
            MasterPekerjaanRow.updatePermission = 'Master:MasterPekerjaan';
        })(MasterPekerjaanRow = Master.MasterPekerjaanRow || (Master.MasterPekerjaanRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterPekerjaanService;
        (function (MasterPekerjaanService) {
            MasterPekerjaanService.baseUrl = 'Master/MasterPekerjaan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterPekerjaanService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterPekerjaanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterPekerjaanService = Master.MasterPekerjaanService || (Master.MasterPekerjaanService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterPropinsiForm = /** @class */ (function (_super) {
            __extends(MasterPropinsiForm, _super);
            function MasterPropinsiForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterPropinsiForm.init) {
                    MasterPropinsiForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.ImageUploadEditor;
                    Q.initFormType(MasterPropinsiForm, [
                        'NamaPropinsi', w0,
                        'IbuKotaPropinsi', w0,
                        'NoKodePropinsi', w0,
                        'LatitudePropinsi', w0,
                        'LongitudePropinsi', w0,
                        'DescPropinsi', w1,
                        'LogoPropinsi', w2
                    ]);
                }
                return _this;
            }
            MasterPropinsiForm.formKey = 'Master.MasterPropinsi';
            return MasterPropinsiForm;
        }(Serenity.PrefixedContext));
        Master.MasterPropinsiForm = MasterPropinsiForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterPropinsiRow;
        (function (MasterPropinsiRow) {
            MasterPropinsiRow.idProperty = 'IdPropinsi';
            MasterPropinsiRow.nameProperty = 'NamaPropinsi';
            MasterPropinsiRow.localTextPrefix = 'Master.MasterPropinsi';
            MasterPropinsiRow.lookupKey = 'Master.MasterPropinsi';
            function getLookup() {
                return Q.getLookup('Master.MasterPropinsi');
            }
            MasterPropinsiRow.getLookup = getLookup;
            MasterPropinsiRow.deletePermission = 'Master:MasterPropinsi';
            MasterPropinsiRow.insertPermission = 'Master:MasterPropinsi';
            MasterPropinsiRow.readPermission = 'Master:MasterPropinsi';
            MasterPropinsiRow.updatePermission = 'Master:MasterPropinsi';
        })(MasterPropinsiRow = Master.MasterPropinsiRow || (Master.MasterPropinsiRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterPropinsiService;
        (function (MasterPropinsiService) {
            MasterPropinsiService.baseUrl = 'Master/MasterPropinsi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetListKabupaten',
                'GetListKecamatan',
                'GetListDesa'
            ].forEach(function (x) {
                MasterPropinsiService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterPropinsiService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterPropinsiService = Master.MasterPropinsiService || (Master.MasterPropinsiService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterSatuanForm = /** @class */ (function (_super) {
            __extends(MasterSatuanForm, _super);
            function MasterSatuanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterSatuanForm.init) {
                    MasterSatuanForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(MasterSatuanForm, [
                        'NamaSatuan', w0,
                        'DescSatuan', w1
                    ]);
                }
                return _this;
            }
            MasterSatuanForm.formKey = 'Master.MasterSatuan';
            return MasterSatuanForm;
        }(Serenity.PrefixedContext));
        Master.MasterSatuanForm = MasterSatuanForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterSatuanRow;
        (function (MasterSatuanRow) {
            MasterSatuanRow.idProperty = 'IdSatuan';
            MasterSatuanRow.nameProperty = 'NamaSatuan';
            MasterSatuanRow.localTextPrefix = 'Master.MasterSatuan';
            MasterSatuanRow.lookupKey = 'Master.MasterSatuan';
            function getLookup() {
                return Q.getLookup('Master.MasterSatuan');
            }
            MasterSatuanRow.getLookup = getLookup;
            MasterSatuanRow.deletePermission = 'Master:MasterSatuan';
            MasterSatuanRow.insertPermission = 'Master:MasterSatuan';
            MasterSatuanRow.readPermission = 'Master:MasterSatuan';
            MasterSatuanRow.updatePermission = 'Master:MasterSatuan';
        })(MasterSatuanRow = Master.MasterSatuanRow || (Master.MasterSatuanRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterSatuanService;
        (function (MasterSatuanService) {
            MasterSatuanService.baseUrl = 'Master/MasterSatuan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterSatuanService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterSatuanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterSatuanService = Master.MasterSatuanService || (Master.MasterSatuanService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterStatusForm = /** @class */ (function (_super) {
            __extends(MasterStatusForm, _super);
            function MasterStatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterStatusForm.init) {
                    MasterStatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(MasterStatusForm, [
                        'NamaStatus', w0
                    ]);
                }
                return _this;
            }
            MasterStatusForm.formKey = 'Master.MasterStatus';
            return MasterStatusForm;
        }(Serenity.PrefixedContext));
        Master.MasterStatusForm = MasterStatusForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterStatusRow;
        (function (MasterStatusRow) {
            MasterStatusRow.idProperty = 'IdStatus';
            MasterStatusRow.nameProperty = 'NamaStatus';
            MasterStatusRow.localTextPrefix = 'Master.MasterStatus';
            MasterStatusRow.lookupKey = 'Master.MasterStatus';
            function getLookup() {
                return Q.getLookup('Master.MasterStatus');
            }
            MasterStatusRow.getLookup = getLookup;
            MasterStatusRow.deletePermission = 'Master:MasterStatus';
            MasterStatusRow.insertPermission = 'Master:MasterStatus';
            MasterStatusRow.readPermission = 'Master:MasterStatus';
            MasterStatusRow.updatePermission = 'Master:MasterStatus';
        })(MasterStatusRow = Master.MasterStatusRow || (Master.MasterStatusRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterStatusService;
        (function (MasterStatusService) {
            MasterStatusService.baseUrl = 'Master/MasterStatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterStatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterStatusService = Master.MasterStatusService || (Master.MasterStatusService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterTujuanPengaduanForm = /** @class */ (function (_super) {
            __extends(MasterTujuanPengaduanForm, _super);
            function MasterTujuanPengaduanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterTujuanPengaduanForm.init) {
                    MasterTujuanPengaduanForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(MasterTujuanPengaduanForm, [
                        'NamaTujuan', w0
                    ]);
                }
                return _this;
            }
            MasterTujuanPengaduanForm.formKey = 'Master.MasterTujuanPengaduan';
            return MasterTujuanPengaduanForm;
        }(Serenity.PrefixedContext));
        Master.MasterTujuanPengaduanForm = MasterTujuanPengaduanForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterTujuanPengaduanRow;
        (function (MasterTujuanPengaduanRow) {
            MasterTujuanPengaduanRow.idProperty = 'IdMasterTujuan';
            MasterTujuanPengaduanRow.nameProperty = 'NamaTujuan';
            MasterTujuanPengaduanRow.localTextPrefix = 'Master.MasterTujuanPengaduan';
            MasterTujuanPengaduanRow.lookupKey = 'Master.MasterTujuanPengaduan';
            function getLookup() {
                return Q.getLookup('Master.MasterTujuanPengaduan');
            }
            MasterTujuanPengaduanRow.getLookup = getLookup;
            MasterTujuanPengaduanRow.deletePermission = 'Master:MasterTujuanPengaduan';
            MasterTujuanPengaduanRow.insertPermission = 'Master:MasterTujuanPengaduan';
            MasterTujuanPengaduanRow.readPermission = 'Master:MasterTujuanPengaduan';
            MasterTujuanPengaduanRow.updatePermission = 'Master:MasterTujuanPengaduan';
        })(MasterTujuanPengaduanRow = Master.MasterTujuanPengaduanRow || (Master.MasterTujuanPengaduanRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterTujuanPengaduanService;
        (function (MasterTujuanPengaduanService) {
            MasterTujuanPengaduanService.baseUrl = 'Master/MasterTujuanPengaduan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterTujuanPengaduanService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterTujuanPengaduanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterTujuanPengaduanService = Master.MasterTujuanPengaduanService || (Master.MasterTujuanPengaduanService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterVersionForm = /** @class */ (function (_super) {
            __extends(MasterVersionForm, _super);
            function MasterVersionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterVersionForm.init) {
                    MasterVersionForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(MasterVersionForm, [
                        'NamaVersion', w0,
                        'NumberVersion', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            MasterVersionForm.formKey = 'Master.MasterVersion';
            return MasterVersionForm;
        }(Serenity.PrefixedContext));
        Master.MasterVersionForm = MasterVersionForm;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterVersionRow;
        (function (MasterVersionRow) {
            MasterVersionRow.idProperty = 'IdMasterVersion';
            MasterVersionRow.nameProperty = 'NamaVersion';
            MasterVersionRow.localTextPrefix = 'Master.MasterVersion';
            MasterVersionRow.deletePermission = 'Master:MasterVersion';
            MasterVersionRow.insertPermission = 'Master:MasterVersion';
            MasterVersionRow.readPermission = 'Master:MasterVersion';
            MasterVersionRow.updatePermission = 'Master:MasterVersion';
        })(MasterVersionRow = Master.MasterVersionRow || (Master.MasterVersionRow = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterVersionService;
        (function (MasterVersionService) {
            MasterVersionService.baseUrl = 'Master/MasterVersion';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterVersionService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterVersionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterVersionService = Master.MasterVersionService || (Master.MasterVersionService = {}));
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = SDD.Membership || (SDD.Membership = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = SDD.Membership || (SDD.Membership = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = SDD.Membership || (SDD.Membership = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = SDD.Membership || (SDD.Membership = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = SDD.Membership || (SDD.Membership = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Texts;
    (function (Texts) {
        SDD['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { Address: 1, Description: 1, DisplayName: 1, Email: 1, FcmToken: 1, IdDesa: 1, IdDesaNamaDesa: 1, IdHubungan: 1, IdVersion: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, JenisKelamin: 1, LastDirectoryUpdate: 1, NamaHubungan: 1, NoKK: 1, NoKTP: 1, Option1: 1, Option2: 1, Option3: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Pendidikan: 1, PhoneNumber: 1, Source: 1, TanggalLahir: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1, WaNumber: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, RoleName: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Master: { MasterBudidaya: { DetailBudidaya: 1, IdBudidaya: 1, IdPekerjaan: 1, IdPekerjaanDesc: 1, IdPekerjaanNamaPekerjaan: 1, IdSatuanBudidaya: 1, IdSatuanBudidayaDescSatuan: 1, IdSatuanBudidayaNamaSatuan: 1, NamaBudidaya: 1 }, MasterDesa: { DescDesa: 1, IdDesa: 1, IdKecamatan: 1, IdKecamatanDecKecamatan: 1, IdKecamatanIdKabupaten: 1, IdKecamatanKodePos: 1, IdKecamatanLangtitudeKecamatan: 1, IdKecamatanLogoKecamatan: 1, IdKecamatanLongtitudeKecamatan: 1, IdKecamatanNamaKecamatan: 1, LantitudeDesa: 1, LogoDesa: 1, LongtitudeDesa: 1, NamaDesa: 1, NoKodeDesa: 1 }, MasterFormulir: { DescFormulir: 1, IdFormulir: 1, NamaFormulir: 1 }, MasterForum: { Deskripsi: 1, IdMasterForum: 1, NamaForum: 1 }, MasterHasilBudidaya: { Desc: 1, IdHasilBudidaya: 1, IdMasterBudidaya: 1, IdMasterBudidayaIdPekerjaan: 1, IdMasterBudidayaIdSatuanBudidaya: 1, IdMasterBudidayaNamaBudidaya: 1, IdSatuanHasil: 1, IdSatuanHasilDescSatuan: 1, IdSatuanHasilNamaSatuan: 1, NamaHasil: 1 }, MasterHubungan: { DescHubungan: 1, IdHubungan: 1, KodeHubungan: 1, NamaHubungan: 1 }, MasterJabatan: { Desc: 1, IdJabatan: 1, NamaJabatan: 1 }, MasterKabupaten: { DescKabupaten: 1, IdKabupaten: 1, IdPropinsi: 1, IdPropinsiDescPropinsi: 1, IdPropinsiIbuKotaPropinsi: 1, IdPropinsiLatitudePropinsi: 1, IdPropinsiLogoPropinsi: 1, IdPropinsiLongitudePropinsi: 1, IdPropinsiNamaPropinsi: 1, Langtitudekabupaten: 1, LogoKabupaten: 1, LongtitudeKabupaten: 1, NamaKabupaten: 1, NoKodeKabupaten: 1 }, MasterKecamatan: { DecKecamatan: 1, IdKabupaten: 1, IdKabupatenDescKabupaten: 1, IdKabupatenIdPropinsi: 1, IdKabupatenLangtitudekabupaten: 1, IdKabupatenLogoKabupaten: 1, IdKabupatenLongtitudeKabupaten: 1, IdKabupatenNamaKabupaten: 1, IdKecamatan: 1, KodePos: 1, LangtitudeKecamatan: 1, LogoKecamatan: 1, LongtitudeKecamatan: 1, NamaKecamatan: 1, NoKodeKecamatan: 1 }, MasterPekerjaan: { Desc: 1, IdPekerjaan: 1, NamaPekerjaan: 1 }, MasterPropinsi: { DescPropinsi: 1, IbuKotaPropinsi: 1, IdPropinsi: 1, LatitudePropinsi: 1, LogoPropinsi: 1, LongitudePropinsi: 1, NamaPropinsi: 1, NoKodePropinsi: 1 }, MasterSatuan: { DescSatuan: 1, IdSatuan: 1, NamaSatuan: 1 }, MasterStatus: { IdStatus: 1, NamaStatus: 1 }, MasterTujuanPengaduan: { IdMasterTujuan: 1, NamaTujuan: 1 }, MasterVersion: { Description: 1, IdMasterVersion: 1, NamaVersion: 1, NumberVersion: 1, Timestamp: 1 } }, Transaction: { AparaturDesa: { DescAparaturDesa: 1, IdAparaturDesa: 1, IdDesa: 1, IdDesaDescDesa: 1, IdDesaIdKecamatan: 1, IdDesaLantitudeDesa: 1, IdDesaLogoDesa: 1, IdDesaLongtitudeDesa: 1, IdDesaNamaDesa: 1, IdJabatan: 1, IdJabatanDesc: 1, IdJabatanNamaJabatan: 1, IdUser: 1, IdUserAddress: 1, IdUserDescription: 1, IdUserDisplayName: 1, IdUserEmail: 1, IdUserIdHubungan: 1, IdUserInsertDate: 1, IdUserInsertUserId: 1, IdUserIsActive: 1, IdUserLastDirectoryUpdate: 1, IdUserNoKk: 1, IdUserNoKtp: 1, IdUserOption1: 1, IdUserOption2: 1, IdUserOption3: 1, IdUserPasswordHash: 1, IdUserPasswordSalt: 1, IdUserPhoneNumber: 1, IdUserSource: 1, IdUserTanggalLahir: 1, IdUserUpdateDate: 1, IdUserUpdateUserId: 1, IdUserUserImage: 1, IdUserUsername: 1, IdUserWaNumber: 1, PeriodeAkhir: 1, PeriodeAwal: 1, StatusAparatur: 1 }, Banner: { Description: 1, DisplayName: 1, IdBanner: 1, IdUser: 1, Image: 1, StatusAktif: 1, UrlImage: 1 }, DetailAktaLahir: { Desc: 1, IdAktaLahir: 1, IdAktaLahirAlamatAyah: 1, IdAktaLahirAlamatIbu: 1, IdAktaLahirAnakKe: 1, IdAktaLahirBeratBayi: 1, IdAktaLahirHariKelahiran: 1, IdAktaLahirIdFormFlow: 1, IdAktaLahirIdUserPelapor: 1, IdAktaLahirJenisKelahiran: 1, IdAktaLahirKelaminBayi: 1, IdAktaLahirLinkDocAkta: 1, IdAktaLahirNamaAyah: 1, IdAktaLahirNamaBayi: 1, IdAktaLahirNamaIbu: 1, IdAktaLahirNikAyah: 1, IdAktaLahirNikIbu: 1, IdAktaLahirPanjangBayi: 1, IdAktaLahirPekerjaanAyah: 1, IdAktaLahirPekerjaanIbu: 1, IdAktaLahirTempatKelahiran: 1, IdAktaLahirTglLahir: 1, IdAktaLahirTglLahirAyah: 1, IdAktaLahirTglLahirIbu: 1, IdAktaLahirWaktuKelahiran: 1, IdDetailAktaLahir: 1, NamaSaksi: 1, NikSaksi: 1, PekerjaanSaksi: 1, TglLahirSaksi: 1 }, DetailFlowForm: { IdDetailFlowForm: 1, IdFormFlow: 1, IdFormFlowDescForm: 1, IdFormFlowIdDesa: 1, IdFormFlowIdMasterForm: 1, IdFormFlowSlaform: 1, IdJabatan: 1, IdJabatanDesc: 1, IdJabatanNamaJabatan: 1, SlaDetail: 1, UrutanFlow: 1 }, DetailFormulirKk: { IdDetailKk: 1, IdFormulirKk: 1, IdFormulirKkAlasanPemohon: 1, IdFormulirKkIdMasterFlow: 1, IdFormulirKkIdUser: 1, IdFormulirKkJumlahKk: 1, IdFormulirKkLinkDocKk: 1, IdFormulirKkTimestamp: 1, IdMasterHub: 1, IdMasterHubDescHubungan: 1, IdMasterHubKodeHubungan: 1, IdMasterHubNamaHubungan: 1, NamaLengkap: 1, Nik: 1 }, DetailForum: { DetailRespon: 1, FotoDokumenRespon: 1, IdDetailForum: 1, IdForum: 1, IdForumDetailForum: 1, IdForumFotoDokumenForum: 1, IdForumHiddenUser: 1, IdForumIdMasterForum: 1, IdForumIdUserInsert: 1, IdForumTimestamp: 1, IdUserRespon: 1, IdUserResponAddress: 1, IdUserResponDescription: 1, IdUserResponDisplayName: 1, IdUserResponEmail: 1, IdUserResponFcmToken: 1, IdUserResponIdDesa: 1, IdUserResponIdHubungan: 1, IdUserResponIdVersion: 1, IdUserResponInsertDate: 1, IdUserResponInsertUserId: 1, IdUserResponIsActive: 1, IdUserResponJenisKelamin: 1, IdUserResponLastDirectoryUpdate: 1, IdUserResponNoKk: 1, IdUserResponNoKtp: 1, IdUserResponOption1: 1, IdUserResponOption2: 1, IdUserResponOption3: 1, IdUserResponPasswordHash: 1, IdUserResponPasswordSalt: 1, IdUserResponPendidikan: 1, IdUserResponPhoneNumber: 1, IdUserResponSource: 1, IdUserResponTanggalLahir: 1, IdUserResponUpdateDate: 1, IdUserResponUpdateUserId: 1, IdUserResponUserImage: 1, IdUserResponUsername: 1, IdUserResponWaNumber: 1, Timestamp: 1 }, DetailKapalNelayan: { HasilBulanan: 1, IdKapalNelayan: 1, IdUserNelayan: 1, LokasiSandarKapal: 1, StatusKapal: 1, TypeKapal: 1 }, DetailPengaduan: { DisplayName: 1, IdDetailPengaduan: 1, IdPengaduan: 1, IdPengaduanFotoDokumen: 1, IdPengaduanIdDesa: 1, IdPengaduanIdMasterTujuan: 1, IdPengaduanIdUserPengadu: 1, IdPengaduanPerihalPengaduan: 1, IdPengaduanTimestamp: 1, IdUserPenanggap: 1, IdUserPenanggapAddress: 1, IdUserPenanggapDescription: 1, IdUserPenanggapEmail: 1, IdUserPenanggapFcmToken: 1, IdUserPenanggapIdDesa: 1, IdUserPenanggapIdHubungan: 1, IdUserPenanggapIdVersion: 1, IdUserPenanggapInsertDate: 1, IdUserPenanggapInsertUserId: 1, IdUserPenanggapIsActive: 1, IdUserPenanggapJenisKelamin: 1, IdUserPenanggapLastDirectoryUpdate: 1, IdUserPenanggapNoKk: 1, IdUserPenanggapNoKtp: 1, IdUserPenanggapOption1: 1, IdUserPenanggapOption2: 1, IdUserPenanggapOption3: 1, IdUserPenanggapPasswordHash: 1, IdUserPenanggapPasswordSalt: 1, IdUserPenanggapPendidikan: 1, IdUserPenanggapPhoneNumber: 1, IdUserPenanggapSource: 1, IdUserPenanggapTanggalLahir: 1, IdUserPenanggapUpdateDate: 1, IdUserPenanggapUpdateUserId: 1, IdUserPenanggapUserImage: 1, IdUserPenanggapUsername: 1, IdUserPenanggapWaNumber: 1, Tanggapan: 1, Timestamp: 1 }, DetailUserPerdagangan: { AlamatLapak: 1, Desc: 1, IdDetailPerdagangan: 1, IdUserPerdagangan: 1, IdUserPerdaganganDesc: 1, IdUserPerdaganganIduser: 1, IdUserPerdaganganJenisDagangan: 1, IdUserPerdaganganNamaBrandToko: 1, JumPekerja: 1, LuasLapak: 1, PenghasilanBulanan: 1, SemuaBiayaBulanan: 1, StatusLapak: 1, TypeLapak: 1 }, DetailUserPertanian: { AlatBahanPendukung: 1, Desc: 1, IdDetailPertanian: 1, IdSatuanPendukung: 1, IdSatuanPendukungDescSatuan: 1, IdSatuanPendukungNamaSatuan: 1, IdUserPertanian: 1, IdUserPertanianHasilPanen: 1, IdUserPertanianIdHasilBudidaya: 1, IdUserPertanianIdUser: 1, IdUserPertanianJumlahPekerja: 1, IdUserPertanianLuasLahan: 1, IdUserPertanianNominalHasilPanen: 1, IdUserPertanianPeriodePanen: 1, NominalPendukung: 1, QuantityPendukung: 1, TotalNominalPendukung: 1 }, DetailUserPeternakanPerikanan: { AlatBahanPendukung: 1, Desc: 1, IdDetailPeternakan: 1, IdSatuanPendukung: 1, IdSatuanPendukungDescSatuan: 1, IdSatuanPendukungNamaSatuan: 1, IdUserPerikanan: 1, IdUserPerikananHasilPanen: 1, IdUserPerikananIdHasilBudidaya: 1, IdUserPerikananIdUser: 1, IdUserPerikananJumlahPekerja: 1, IdUserPerikananLuasLahan: 1, IdUserPerikananNominalHasilPanen: 1, IdUserPerikananPeriodePanen: 1, IdUserPerikananTotalBibit: 1, NominalPendukung: 1, QuantityPendukung: 1, TotalNominalPendukung: 1 }, FcmMessage: { Action: 1, Body: 1, IdMessage: 1, IdParentMessage: 1, IdParentMessageBody: 1, IdParentMessageMessage: 1, IdParentMessageOption1: 1, IdParentMessageOption2: 1, IdParentMessageTimeStamp: 1, IdParentMessageTitle: 1, IdUser: 1, IdUserAddress: 1, IdUserDescription: 1, IdUserDisplayName: 1, IdUserEmail: 1, IdUserFcmToken: 1, IdUserIdDesa: 1, IdUserIdHubungan: 1, IdUserIdVersion: 1, IdUserInsertDate: 1, IdUserInsertUserId: 1, IdUserIsActive: 1, IdUserJenisKelamin: 1, IdUserLastDirectoryUpdate: 1, IdUserNoKk: 1, IdUserNoKtp: 1, IdUserOption1: 1, IdUserOption2: 1, IdUserOption3: 1, IdUserPasswordHash: 1, IdUserPasswordSalt: 1, IdUserPendidikan: 1, IdUserPhoneNumber: 1, IdUserSource: 1, IdUserTanggalLahir: 1, IdUserUpdateDate: 1, IdUserUpdateUserId: 1, IdUserUserImage: 1, IdUserUsername: 1, IdUserWaNumber: 1, Message: 1, Response: 1, Status: 1, StatusWa: 1, TimeStamp: 1, Title: 1 }, FcmMessageUser: { Action: 1, Body: 1, IdMessage: 1, IdParentMessage: 1, IdParentMessageBody: 1, IdParentMessageIdUserShare: 1, IdParentMessageMessage: 1, IdParentMessageOption1: 1, IdParentMessageOption2: 1, IdParentMessageTimeStamp: 1, IdParentMessageTitle: 1, IdUser: 1, IdUserAddress: 1, IdUserDescription: 1, IdUserDisplayName: 1, IdUserEmail: 1, IdUserFcmToken: 1, IdUserIdDesa: 1, IdUserIdHubungan: 1, IdUserIdVersion: 1, IdUserInsertDate: 1, IdUserInsertUserId: 1, IdUserIsActive: 1, IdUserJenisKelamin: 1, IdUserLastDirectoryUpdate: 1, IdUserNoKk: 1, IdUserNoKtp: 1, IdUserOption1: 1, IdUserOption2: 1, IdUserOption3: 1, IdUserPasswordHash: 1, IdUserPasswordSalt: 1, IdUserPendidikan: 1, IdUserPhoneNumber: 1, IdUserSource: 1, IdUserTanggalLahir: 1, IdUserUpdateDate: 1, IdUserUpdateUserId: 1, IdUserUserImage: 1, IdUserUsername: 1, IdUserWaNumber: 1, Message: 1, Response: 1, Status: 1, StatusWa: 1, TimeStamp: 1, Title: 1 }, FormulirAktaKelahiran: { AlamatAyah: 1, AlamatIbu: 1, AnakKe: 1, BeratBayi: 1, DetailFormulir: 1, HariKelahiran: 1, IdFormAktaKelahiran: 1, IdFormFlow: 1, IdFormFlowDescForm: 1, IdFormFlowIdDesa: 1, IdFormFlowIdMasterForm: 1, IdFormFlowSlaform: 1, IdUserPelapor: 1, IdUserPelaporAddress: 1, IdUserPelaporDescription: 1, IdUserPelaporDisplayName: 1, IdUserPelaporEmail: 1, IdUserPelaporIdHubungan: 1, IdUserPelaporInsertDate: 1, IdUserPelaporInsertUserId: 1, IdUserPelaporIsActive: 1, IdUserPelaporJenisKelamin: 1, IdUserPelaporLastDirectoryUpdate: 1, IdUserPelaporNoKk: 1, IdUserPelaporNoKtp: 1, IdUserPelaporOption1: 1, IdUserPelaporOption2: 1, IdUserPelaporOption3: 1, IdUserPelaporPasswordHash: 1, IdUserPelaporPasswordSalt: 1, IdUserPelaporPhoneNumber: 1, IdUserPelaporSource: 1, IdUserPelaporTanggalLahir: 1, IdUserPelaporUpdateDate: 1, IdUserPelaporUpdateUserId: 1, IdUserPelaporUserImage: 1, IdUserPelaporUsername: 1, IdUserPelaporWaNumber: 1, JenisKelahiran: 1, KelaminBayi: 1, LinkDocAkta: 1, NamaAyah: 1, NamaBayi: 1, NamaIbu: 1, NikAyah: 1, NikIbu: 1, PanjangBayi: 1, PekerjaanAyah: 1, PekerjaanIbu: 1, TempatKelahiran: 1, TglLahir: 1, TglLahirAyah: 1, TglLahirIbu: 1, Timestamp: 1, WaktuKelahiran: 1 }, FormulirKk: { AlasanPemohon: 1, DetailFormulir: 1, DokPendukungKK: 1, IdFormulirKk: 1, IdMasterFlow: 1, IdMasterFlowDescForm: 1, IdMasterFlowIdDesa: 1, IdMasterFlowIdMasterForm: 1, IdMasterFlowSlaform: 1, IdUser: 1, IdUserAddress: 1, IdUserDescription: 1, IdUserDisplayName: 1, IdUserEmail: 1, IdUserIdHubungan: 1, IdUserInsertDate: 1, IdUserInsertUserId: 1, IdUserIsActive: 1, IdUserLastDirectoryUpdate: 1, IdUserNoKk: 1, IdUserNoKtp: 1, IdUserOption1: 1, IdUserOption2: 1, IdUserOption3: 1, IdUserPasswordHash: 1, IdUserPasswordSalt: 1, IdUserPhoneNumber: 1, IdUserSource: 1, IdUserTanggalLahir: 1, IdUserUpdateDate: 1, IdUserUpdateUserId: 1, IdUserUserImage: 1, IdUserUsername: 1, IdUserWaNumber: 1, JumlahKk: 1, LinkDocKk: 1, Timestamp: 1 }, FormulirKtp: { Desc: 1, DokPendukung: 1, IdFFowForm: 1, IdFormulirKtp: 1, IdUser: 1, IdUserDisplayName: 1, LinkDocKTP: 1, Timestamp: 1, TypePermohonan: 1 }, Forum: { Detail: 1, DetailForum: 1, FotoDokumenForum: 1, HiddenUser: 1, IdForum: 1, IdMasterForum: 1, IdMasterForumDeskripsi: 1, IdMasterForumNamaForum: 1, IdUserInsert: 1, IdUserInsertAddress: 1, IdUserInsertDescription: 1, IdUserInsertDisplayName: 1, IdUserInsertEmail: 1, IdUserInsertFcmToken: 1, IdUserInsertIdDesa: 1, IdUserInsertIdHubungan: 1, IdUserInsertIdVersion: 1, IdUserInsertInsertDate: 1, IdUserInsertInsertUserId: 1, IdUserInsertIsActive: 1, IdUserInsertJenisKelamin: 1, IdUserInsertLastDirectoryUpdate: 1, IdUserInsertNoKk: 1, IdUserInsertNoKtp: 1, IdUserInsertOption1: 1, IdUserInsertOption2: 1, IdUserInsertOption3: 1, IdUserInsertPasswordHash: 1, IdUserInsertPasswordSalt: 1, IdUserInsertPendidikan: 1, IdUserInsertPhoneNumber: 1, IdUserInsertSource: 1, IdUserInsertTanggalLahir: 1, IdUserInsertUpdateDate: 1, IdUserInsertUpdateUserId: 1, IdUserInsertUserImage: 1, IdUserInsertUsername: 1, IdUserInsertWaNumber: 1, Timestamp: 1 }, ForumNew: { Detail: 1, DetailForum: 1, FotoDokumenForum: 1, HiddenUser: 1, IdForum: 1, IdMasterForum: 1, IdMasterForumDeskripsi: 1, IdMasterForumNamaForum: 1, IdUserInsert: 1, IdUserInsertAddress: 1, IdUserInsertDescription: 1, IdUserInsertDisplayName: 1, IdUserInsertEmail: 1, IdUserInsertFcmToken: 1, IdUserInsertIdDesa: 1, IdUserInsertIdHubungan: 1, IdUserInsertIdVersion: 1, IdUserInsertInsertDate: 1, IdUserInsertInsertUserId: 1, IdUserInsertIsActive: 1, IdUserInsertJenisKelamin: 1, IdUserInsertLastDirectoryUpdate: 1, IdUserInsertNoKk: 1, IdUserInsertNoKtp: 1, IdUserInsertOption1: 1, IdUserInsertOption2: 1, IdUserInsertOption3: 1, IdUserInsertPasswordHash: 1, IdUserInsertPasswordSalt: 1, IdUserInsertPendidikan: 1, IdUserInsertPhoneNumber: 1, IdUserInsertSource: 1, IdUserInsertTanggalLahir: 1, IdUserInsertUpdateDate: 1, IdUserInsertUpdateUserId: 1, IdUserInsertUserImage: 1, IdUserInsertUsername: 1, IdUserInsertWaNumber: 1, Timestamp: 1 }, InfoDesa: { BodyInfo: 1, DisplayName: 1, IdInfoDesa: 1, IdUser: 1, Image: 1, ShortDescInfo: 1, Timestamp: 1, TitleInfo: 1 }, MasterFlowFormulir: { DescForm: 1, DetailFlowFormulir: 1, IdDesa: 1, IdDesaDescDesa: 1, IdDesaIdKecamatan: 1, IdDesaLantitudeDesa: 1, IdDesaLogoDesa: 1, IdDesaLongtitudeDesa: 1, IdDesaNamaDesa: 1, IdFormFlow: 1, IdMasterForm: 1, IdMasterFormDescFormulir: 1, IdMasterFormNamaFormulir: 1, Slaform: 1 }, ParentMessage: { Body: 1, Detail: 1, DisplayName: 1, IdParentMessage: 1, IdUserShare: 1, Message: 1, Option1: 1, Option2: 1, TimeStamp: 1, Title: 1 }, Pengaduan: { DetailPengaduan: 1, FotoDokumen: 1, IdDesa: 1, IdDesaDescDesa: 1, IdDesaIdKecamatan: 1, IdDesaLantitudeDesa: 1, IdDesaLogoDesa: 1, IdDesaLongtitudeDesa: 1, IdDesaNamaDesa: 1, IdDesaNoKodeDesa: 1, IdMasterTujuan: 1, IdMasterTujuanNamaTujuan: 1, IdPengaduan: 1, IdUserPengadu: 1, IdUserPengaduAddress: 1, IdUserPengaduDescription: 1, IdUserPengaduDisplayName: 1, IdUserPengaduEmail: 1, IdUserPengaduFcmToken: 1, IdUserPengaduIdDesa: 1, IdUserPengaduIdHubungan: 1, IdUserPengaduIdVersion: 1, IdUserPengaduInsertDate: 1, IdUserPengaduInsertUserId: 1, IdUserPengaduIsActive: 1, IdUserPengaduJenisKelamin: 1, IdUserPengaduLastDirectoryUpdate: 1, IdUserPengaduNoKk: 1, IdUserPengaduNoKtp: 1, IdUserPengaduOption1: 1, IdUserPengaduOption2: 1, IdUserPengaduOption3: 1, IdUserPengaduPasswordHash: 1, IdUserPengaduPasswordSalt: 1, IdUserPengaduPendidikan: 1, IdUserPengaduPhoneNumber: 1, IdUserPengaduSource: 1, IdUserPengaduTanggalLahir: 1, IdUserPengaduUpdateDate: 1, IdUserPengaduUpdateUserId: 1, IdUserPengaduUserImage: 1, IdUserPengaduUsername: 1, IdUserPengaduWaNumber: 1, PerihalPengaduan: 1, Timestamp: 1 }, TransaksiStatus: { DisplayName: 1, DisplayName1: 1, Dokumen: 1, IdDesa: 1, IdFormulir: 1, IdMasterForm: 1, IdMasterFormDescFormulir: 1, IdMasterFormNamaFormulir: 1, IdStatus: 1, IdTransaksi: 1, IdTransaksiForm: 1, IdUserAparat: 1, IdUserPengajuan: 1, Info: 1, Jabatan: 1, Keterangan: 1, LinkFormulir: 1, NamaDesa: 1, NamaStatus: 1, TimeStamp: 1 }, UserKaryawan: { AlamatPerusahanUsaha: 1, Desc: 1, IdPekerjaan: 1, IdPekerjaanNamaPekerjaan: 1, IdUser: 1, IdUserKaryawan: 1, IduserDisplayName: 1, NamaperusahaanUsaha: 1, RatarataPenghasilan: 1, StatusKaryawan: 1, TypePerusahaan: 1 }, UserNelayan: { Desc: 1, DetailNelayan: 1, IdPekerjaan: 1, IdPekerjaanNamaPekerjaan: 1, IdUser: 1, IdUserNelayan: 1, IduserDisplayName: 1 }, UserPerdagangan: { Desc: 1, DetailPerdagangan: 1, IdPekerjaan: 1, IdPekerjaanNamaPekerjaan: 1, IdUserPerdagangan: 1, Iduser: 1, IduserAddress: 1, IduserDescription: 1, IduserDisplayName: 1, IduserEmail: 1, IduserIdHubungan: 1, IduserInsertDate: 1, IduserInsertUserId: 1, IduserIsActive: 1, IduserLastDirectoryUpdate: 1, IduserNoKk: 1, IduserNoKtp: 1, IduserOption1: 1, IduserOption2: 1, IduserOption3: 1, IduserPasswordHash: 1, IduserPasswordSalt: 1, IduserPhoneNumber: 1, IduserSource: 1, IduserTanggalLahir: 1, IduserUpdateDate: 1, IduserUpdateUserId: 1, IduserUserImage: 1, IduserUsername: 1, IduserWaNumber: 1, JenisDagangan: 1, NamaBrandToko: 1 }, UserPerikananPeternakan: { DetailPeternakan: 1, HasilPanen: 1, IdHasilBudidaya: 1, IdHasilBudidayaDesc: 1, IdHasilBudidayaIdMasterBudidaya: 1, IdHasilBudidayaIdSatuanHasil: 1, IdHasilBudidayaNamaHasil: 1, IdUser: 1, IdUserAddress: 1, IdUserDescription: 1, IdUserDisplayName: 1, IdUserEmail: 1, IdUserIdHubungan: 1, IdUserInsertDate: 1, IdUserInsertUserId: 1, IdUserIsActive: 1, IdUserLastDirectoryUpdate: 1, IdUserNoKk: 1, IdUserNoKtp: 1, IdUserOption1: 1, IdUserOption2: 1, IdUserOption3: 1, IdUserPasswordHash: 1, IdUserPasswordSalt: 1, IdUserPerikanan: 1, IdUserPhoneNumber: 1, IdUserSource: 1, IdUserTanggalLahir: 1, IdUserUpdateDate: 1, IdUserUpdateUserId: 1, IdUserUserImage: 1, IdUserUsername: 1, IdUserWaNumber: 1, JumlahPekerja: 1, LuasLahan: 1, NominalHasilPanen: 1, Option1: 1, PeriodePanen: 1, TotalBibit: 1 }, UserPertanianPerkebunan: { DetailPertanian: 1, HasilPanen: 1, IdHasilBudidaya: 1, IdHasilBudidayaDesc: 1, IdHasilBudidayaIdMasterBudidaya: 1, IdHasilBudidayaIdSatuanHasil: 1, IdHasilBudidayaNamaHasil: 1, IdUser: 1, IdUserAddress: 1, IdUserDescription: 1, IdUserDisplayName: 1, IdUserEmail: 1, IdUserIdHubungan: 1, IdUserInsertDate: 1, IdUserInsertUserId: 1, IdUserIsActive: 1, IdUserLastDirectoryUpdate: 1, IdUserNoKk: 1, IdUserNoKtp: 1, IdUserOption1: 1, IdUserOption2: 1, IdUserOption3: 1, IdUserPasswordHash: 1, IdUserPasswordSalt: 1, IdUserPertanian: 1, IdUserPhoneNumber: 1, IdUserSource: 1, IdUserTanggalLahir: 1, IdUserUpdateDate: 1, IdUserUpdateUserId: 1, IdUserUserImage: 1, IdUserUsername: 1, IdUserWaNumber: 1, JumlahPekerja: 1, LuasLahan: 1, NominalHasilPanen: 1, Option1: 1, PeriodePanen: 1 } }, View: { VChartByAllPekerjaan: { CountTransaksi: 1, IdNumber: 1, IdPekerjaan: 1, NamaPekerjaan: 1, TotalPenghasilan: 1 }, VChartPenghasilanDesa: { CountTransaksi: 1, IdDesa: 1, IdNumber: 1, Namadesa: 1, TotalPenghasilan: 1 }, ViewAllPengajuan: { FormulirPengajuan: 1, IdMasterForm: 1, IdNumber: 1, IdUserPengajuan: 1, NumberId: 1 }, ViewAllPenghasilan: { Address: 1, DisplayName: 1, Email: 1, IdDesa: 1, IdHubungan: 1, IdKabupaten: 1, IdKecamatan: 1, IdNumber: 1, IdPropinsi: 1, JenisKelamin: 1, NamaDesa: 1, NamaKabupaten: 1, NamaKecamatan: 1, NamaPropinsi: 1, NoKk: 1, NoKtp: 1, PhoneNumber: 1, TanggalLahir: 1, TotalPenghasilan: 1, TotalPenghasilanKaryawan: 1, TotalPenghasilanNelayan: 1, TotalPenghasilanPerdagangan: 1, TotalPenghasilanPertanian: 1, TotalPenghasilanPeternakan: 1, UserId: 1, Username: 1, WaNumber: 1 }, ViewMaasterForm: { DescForm: 1, IdFormFlow: 1, IdFormulir: 1, IdNumber: 1, KodePos: 1, NamaDesa: 1, NamaFormulir: 1, NamaKecamatan: 1, ReqForm: 1, Slaform: 1 }, ViewProfilUser: { Address: 1, DisplayName: 1, Email: 1, IbuKotaPropinsi: 1, IdDesa: 1, IdHubungan: 1, IdKabupaten: 1, IdKecamatan: 1, IdPropinsi: 1, JenisKelamin: 1, KodePos: 1, LogoDesa: 1, LogoKabupaten: 1, LogoPropinsi: 1, NamaDesa: 1, NamaKabupaten: 1, NamaKecamatan: 1, NamaPropinsi: 1, NoKk: 1, NoKodeDesa: 1, NoKodeKabupaten: 1, NoKodeKecamatan: 1, NoKodePropinsi: 1, NoKtp: 1, Pendidikan: 1, PhoneNumber: 1, TanggalLahir: 1, UserId: 1, UserImage: 1, Username: 1, WaNumber: 1 }, ViewTransaksiFormulir: { Dokumen: 1, Formulir: 1, IdFormulir: 1, IdMasterForm: 1, IdStatus: 1, IdTransaksi: 1, IdTransaksiForm: 1, IdUserAparat: 1, IdUserPengajuan: 1, Info: 1, NamaStatus: 1, TimeStamp: 1 }, ViewUserPengajuan: { Dokumen: 1, Formulir: 1, IdFormulir: 1, IdNumber: 1, NumberId: 1, UserPengaju: 1 }, ViewUserPenghasilan: { DisplayName: 1, Email: 1, IdDesa: 1, IdKabupaten: 1, IdKecamatan: 1, IdPekerjaan: 1, IdPropinsi: 1, NamaDesa: 1, NamaKabupaten: 1, NamaKecamatan: 1, NamaPekerjaan: 1, NamaPropinsi: 1, NoKk: 1, NoKtp: 1, NumberId: 1, PhoneNumber: 1, TotalHasil: 1, UserId: 1, WaNumber: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = SDD.Texts || (SDD.Texts = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var AparaturDesaForm = /** @class */ (function (_super) {
            __extends(AparaturDesaForm, _super);
            function AparaturDesaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AparaturDesaForm.init) {
                    AparaturDesaForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(AparaturDesaForm, [
                        'IdJabatan', w0,
                        'StatusAparatur', w1,
                        'PeriodeAwal', w2,
                        'PeriodeAkhir', w2,
                        'DescAparaturDesa', w3
                    ]);
                }
                return _this;
            }
            AparaturDesaForm.formKey = 'Transaction.AparaturDesa';
            return AparaturDesaForm;
        }(Serenity.PrefixedContext));
        Transaction.AparaturDesaForm = AparaturDesaForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var AparaturDesaRow;
        (function (AparaturDesaRow) {
            AparaturDesaRow.idProperty = 'IdAparaturDesa';
            AparaturDesaRow.nameProperty = 'DescAparaturDesa';
            AparaturDesaRow.localTextPrefix = 'Transaction.AparaturDesa';
            AparaturDesaRow.deletePermission = 'Transaction:AparaturDesa';
            AparaturDesaRow.insertPermission = 'Transaction:AparaturDesa';
            AparaturDesaRow.readPermission = 'Transaction:AparaturDesa';
            AparaturDesaRow.updatePermission = 'Transaction:AparaturDesa';
        })(AparaturDesaRow = Transaction.AparaturDesaRow || (Transaction.AparaturDesaRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var AparaturDesaService;
        (function (AparaturDesaService) {
            AparaturDesaService.baseUrl = 'Transaction/AparaturDesa';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AparaturDesaService[x] = function (r, s, o) {
                    return Q.serviceRequest(AparaturDesaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AparaturDesaService = Transaction.AparaturDesaService || (Transaction.AparaturDesaService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var BannerForm = /** @class */ (function (_super) {
            __extends(BannerForm, _super);
            function BannerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BannerForm.init) {
                    BannerForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    var w1 = s.RadioButtonEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(BannerForm, [
                        'Image', w0,
                        'StatusAktif', w1,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            BannerForm.formKey = 'Transaction.Banner';
            return BannerForm;
        }(Serenity.PrefixedContext));
        Transaction.BannerForm = BannerForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var BannerRow;
        (function (BannerRow) {
            BannerRow.idProperty = 'IdBanner';
            BannerRow.nameProperty = 'Image';
            BannerRow.localTextPrefix = 'Transaction.Banner';
            BannerRow.deletePermission = 'Transaction:Banner';
            BannerRow.insertPermission = 'Transaction:Banner';
            BannerRow.readPermission = 'Transaction:Banner';
            BannerRow.updatePermission = 'Transaction:Banner';
        })(BannerRow = Transaction.BannerRow || (Transaction.BannerRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var BannerService;
        (function (BannerService) {
            BannerService.baseUrl = 'Transaction/Banner';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BannerService[x] = function (r, s, o) {
                    return Q.serviceRequest(BannerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BannerService = Transaction.BannerService || (Transaction.BannerService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailAktaLahirForm = /** @class */ (function (_super) {
            __extends(DetailAktaLahirForm, _super);
            function DetailAktaLahirForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DetailAktaLahirForm.init) {
                    DetailAktaLahirForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(DetailAktaLahirForm, [
                        'NamaSaksi', w0,
                        'TglLahirSaksi', w1,
                        'PekerjaanSaksi', w0,
                        'NikSaksi', w0,
                        'Desc', w2
                    ]);
                }
                return _this;
            }
            DetailAktaLahirForm.formKey = 'Transaction.DetailAktaLahir';
            return DetailAktaLahirForm;
        }(Serenity.PrefixedContext));
        Transaction.DetailAktaLahirForm = DetailAktaLahirForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailAktaLahirRow;
        (function (DetailAktaLahirRow) {
            DetailAktaLahirRow.idProperty = 'IdDetailAktaLahir';
            DetailAktaLahirRow.nameProperty = 'NamaSaksi';
            DetailAktaLahirRow.localTextPrefix = 'Transaction.DetailAktaLahir';
            DetailAktaLahirRow.deletePermission = 'Transaction:DetailAktaLahir';
            DetailAktaLahirRow.insertPermission = 'Transaction:DetailAktaLahir';
            DetailAktaLahirRow.readPermission = 'Transaction:DetailAktaLahir';
            DetailAktaLahirRow.updatePermission = 'Transaction:DetailAktaLahir';
        })(DetailAktaLahirRow = Transaction.DetailAktaLahirRow || (Transaction.DetailAktaLahirRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailAktaLahirService;
        (function (DetailAktaLahirService) {
            DetailAktaLahirService.baseUrl = 'Transaction/DetailAktaLahir';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DetailAktaLahirService[x] = function (r, s, o) {
                    return Q.serviceRequest(DetailAktaLahirService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DetailAktaLahirService = Transaction.DetailAktaLahirService || (Transaction.DetailAktaLahirService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailFlowFormForm = /** @class */ (function (_super) {
            __extends(DetailFlowFormForm, _super);
            function DetailFlowFormForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DetailFlowFormForm.init) {
                    DetailFlowFormForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(DetailFlowFormForm, [
                        'IdJabatan', w0,
                        'UrutanFlow', w1,
                        'SlaDetail', w1
                    ]);
                }
                return _this;
            }
            DetailFlowFormForm.formKey = 'Transaction.DetailFlowForm';
            return DetailFlowFormForm;
        }(Serenity.PrefixedContext));
        Transaction.DetailFlowFormForm = DetailFlowFormForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailFlowFormRow;
        (function (DetailFlowFormRow) {
            DetailFlowFormRow.idProperty = 'IdDetailFlowForm';
            DetailFlowFormRow.localTextPrefix = 'Transaction.DetailFlowForm';
            DetailFlowFormRow.deletePermission = 'Transaction:DetailFlowForm';
            DetailFlowFormRow.insertPermission = 'Transaction:DetailFlowForm';
            DetailFlowFormRow.readPermission = 'Transaction:DetailFlowForm';
            DetailFlowFormRow.updatePermission = 'Transaction:DetailFlowForm';
        })(DetailFlowFormRow = Transaction.DetailFlowFormRow || (Transaction.DetailFlowFormRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailFlowFormService;
        (function (DetailFlowFormService) {
            DetailFlowFormService.baseUrl = 'Transaction/DetailFlowForm';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DetailFlowFormService[x] = function (r, s, o) {
                    return Q.serviceRequest(DetailFlowFormService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DetailFlowFormService = Transaction.DetailFlowFormService || (Transaction.DetailFlowFormService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailFormulirKkForm = /** @class */ (function (_super) {
            __extends(DetailFormulirKkForm, _super);
            function DetailFormulirKkForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DetailFormulirKkForm.init) {
                    DetailFormulirKkForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(DetailFormulirKkForm, [
                        'IdMasterHub', w0,
                        'Nik', w1,
                        'NamaLengkap', w1
                    ]);
                }
                return _this;
            }
            DetailFormulirKkForm.formKey = 'Transaction.DetailFormulirKk';
            return DetailFormulirKkForm;
        }(Serenity.PrefixedContext));
        Transaction.DetailFormulirKkForm = DetailFormulirKkForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailFormulirKkRow;
        (function (DetailFormulirKkRow) {
            DetailFormulirKkRow.idProperty = 'IdDetailKk';
            DetailFormulirKkRow.nameProperty = 'Nik';
            DetailFormulirKkRow.localTextPrefix = 'Transaction.DetailFormulirKk';
            DetailFormulirKkRow.deletePermission = 'Transaction:DetailFormulirKk';
            DetailFormulirKkRow.insertPermission = 'Transaction:DetailFormulirKk';
            DetailFormulirKkRow.readPermission = 'Transaction:DetailFormulirKk';
            DetailFormulirKkRow.updatePermission = 'Transaction:DetailFormulirKk';
        })(DetailFormulirKkRow = Transaction.DetailFormulirKkRow || (Transaction.DetailFormulirKkRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailFormulirKkService;
        (function (DetailFormulirKkService) {
            DetailFormulirKkService.baseUrl = 'Transaction/DetailFormulirKk';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DetailFormulirKkService[x] = function (r, s, o) {
                    return Q.serviceRequest(DetailFormulirKkService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DetailFormulirKkService = Transaction.DetailFormulirKkService || (Transaction.DetailFormulirKkService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailForumForm = /** @class */ (function (_super) {
            __extends(DetailForumForm, _super);
            function DetailForumForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DetailForumForm.init) {
                    DetailForumForm.init = true;
                    var s = Serenity;
                    var w0 = s.TextAreaEditor;
                    var w1 = s.MultipleImageUploadEditor;
                    Q.initFormType(DetailForumForm, [
                        'DetailRespon', w0,
                        'FotoDokumenRespon', w1
                    ]);
                }
                return _this;
            }
            DetailForumForm.formKey = 'Transaction.DetailForum';
            return DetailForumForm;
        }(Serenity.PrefixedContext));
        Transaction.DetailForumForm = DetailForumForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailForumRow;
        (function (DetailForumRow) {
            DetailForumRow.idProperty = 'IdDetailForum';
            DetailForumRow.nameProperty = 'DetailRespon';
            DetailForumRow.localTextPrefix = 'Transaction.DetailForum';
            DetailForumRow.deletePermission = 'Transaction:DetailForum';
            DetailForumRow.insertPermission = 'Transaction:DetailForum';
            DetailForumRow.readPermission = 'Transaction:DetailForum';
            DetailForumRow.updatePermission = 'Transaction:DetailForum';
        })(DetailForumRow = Transaction.DetailForumRow || (Transaction.DetailForumRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailForumService;
        (function (DetailForumService) {
            DetailForumService.baseUrl = 'Transaction/DetailForum';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DetailForumService[x] = function (r, s, o) {
                    return Q.serviceRequest(DetailForumService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DetailForumService = Transaction.DetailForumService || (Transaction.DetailForumService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailKapalNelayanForm = /** @class */ (function (_super) {
            __extends(DetailKapalNelayanForm, _super);
            function DetailKapalNelayanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DetailKapalNelayanForm.init) {
                    DetailKapalNelayanForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = Transaction.TypeKapal;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(DetailKapalNelayanForm, [
                        'StatusKapal', w0,
                        'TypeKapal', w1,
                        'LokasiSandarKapal', w2,
                        'HasilBulanan', w3
                    ]);
                }
                return _this;
            }
            DetailKapalNelayanForm.formKey = 'Transaction.DetailKapalNelayan';
            return DetailKapalNelayanForm;
        }(Serenity.PrefixedContext));
        Transaction.DetailKapalNelayanForm = DetailKapalNelayanForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailKapalNelayanRow;
        (function (DetailKapalNelayanRow) {
            DetailKapalNelayanRow.idProperty = 'IdKapalNelayan';
            DetailKapalNelayanRow.nameProperty = 'TypeKapal';
            DetailKapalNelayanRow.localTextPrefix = 'Transaction.DetailKapalNelayan';
            DetailKapalNelayanRow.deletePermission = 'Transaction:DetailKapalNelayan';
            DetailKapalNelayanRow.insertPermission = 'Transaction:DetailKapalNelayan';
            DetailKapalNelayanRow.readPermission = 'Transaction:DetailKapalNelayan';
            DetailKapalNelayanRow.updatePermission = 'Transaction:DetailKapalNelayan';
        })(DetailKapalNelayanRow = Transaction.DetailKapalNelayanRow || (Transaction.DetailKapalNelayanRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailKapalNelayanService;
        (function (DetailKapalNelayanService) {
            DetailKapalNelayanService.baseUrl = 'Transaction/DetailKapalNelayan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DetailKapalNelayanService[x] = function (r, s, o) {
                    return Q.serviceRequest(DetailKapalNelayanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DetailKapalNelayanService = Transaction.DetailKapalNelayanService || (Transaction.DetailKapalNelayanService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailPengaduanForm = /** @class */ (function (_super) {
            __extends(DetailPengaduanForm, _super);
            function DetailPengaduanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DetailPengaduanForm.init) {
                    DetailPengaduanForm.init = true;
                    var s = Serenity;
                    var w0 = s.TextAreaEditor;
                    Q.initFormType(DetailPengaduanForm, [
                        'Tanggapan', w0
                    ]);
                }
                return _this;
            }
            DetailPengaduanForm.formKey = 'Transaction.DetailPengaduan';
            return DetailPengaduanForm;
        }(Serenity.PrefixedContext));
        Transaction.DetailPengaduanForm = DetailPengaduanForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailPengaduanRow;
        (function (DetailPengaduanRow) {
            DetailPengaduanRow.idProperty = 'IdDetailPengaduan';
            DetailPengaduanRow.nameProperty = 'Tanggapan';
            DetailPengaduanRow.localTextPrefix = 'Transaction.DetailPengaduan';
            DetailPengaduanRow.lookupKey = 'Transaction.DetailPengaduan';
            function getLookup() {
                return Q.getLookup('Transaction.DetailPengaduan');
            }
            DetailPengaduanRow.getLookup = getLookup;
            DetailPengaduanRow.deletePermission = 'Transaction:DetailPengaduan';
            DetailPengaduanRow.insertPermission = 'Transaction:DetailPengaduan';
            DetailPengaduanRow.readPermission = 'Transaction:DetailPengaduan';
            DetailPengaduanRow.updatePermission = 'Transaction:DetailPengaduan';
        })(DetailPengaduanRow = Transaction.DetailPengaduanRow || (Transaction.DetailPengaduanRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailPengaduanService;
        (function (DetailPengaduanService) {
            DetailPengaduanService.baseUrl = 'Transaction/DetailPengaduan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DetailPengaduanService[x] = function (r, s, o) {
                    return Q.serviceRequest(DetailPengaduanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DetailPengaduanService = Transaction.DetailPengaduanService || (Transaction.DetailPengaduanService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPerdaganganForm = /** @class */ (function (_super) {
            __extends(DetailUserPerdaganganForm, _super);
            function DetailUserPerdaganganForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DetailUserPerdaganganForm.init) {
                    DetailUserPerdaganganForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(DetailUserPerdaganganForm, [
                        'TypeLapak', w0,
                        'LuasLapak', w1,
                        'StatusLapak', w0,
                        'AlamatLapak', w2,
                        'JumPekerja', w3,
                        'SemuaBiayaBulanan', w1,
                        'PenghasilanBulanan', w1,
                        'Desc', w2
                    ]);
                }
                return _this;
            }
            DetailUserPerdaganganForm.formKey = 'Transaction.DetailUserPerdagangan';
            return DetailUserPerdaganganForm;
        }(Serenity.PrefixedContext));
        Transaction.DetailUserPerdaganganForm = DetailUserPerdaganganForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPerdaganganRow;
        (function (DetailUserPerdaganganRow) {
            DetailUserPerdaganganRow.idProperty = 'IdDetailPerdagangan';
            DetailUserPerdaganganRow.nameProperty = 'AlamatLapak';
            DetailUserPerdaganganRow.localTextPrefix = 'Transaction.DetailUserPerdagangan';
            DetailUserPerdaganganRow.deletePermission = 'Transaction:DetailUserPerdagangan';
            DetailUserPerdaganganRow.insertPermission = 'Transaction:DetailUserPerdagangan';
            DetailUserPerdaganganRow.readPermission = 'Transaction:DetailUserPerdagangan';
            DetailUserPerdaganganRow.updatePermission = 'Transaction:DetailUserPerdagangan';
        })(DetailUserPerdaganganRow = Transaction.DetailUserPerdaganganRow || (Transaction.DetailUserPerdaganganRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPerdaganganService;
        (function (DetailUserPerdaganganService) {
            DetailUserPerdaganganService.baseUrl = 'Transaction/DetailUserPerdagangan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DetailUserPerdaganganService[x] = function (r, s, o) {
                    return Q.serviceRequest(DetailUserPerdaganganService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DetailUserPerdaganganService = Transaction.DetailUserPerdaganganService || (Transaction.DetailUserPerdaganganService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPertanianForm = /** @class */ (function (_super) {
            __extends(DetailUserPertanianForm, _super);
            function DetailUserPertanianForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DetailUserPertanianForm.init) {
                    DetailUserPertanianForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(DetailUserPertanianForm, [
                        'IdSatuanPendukung', w0,
                        'AlatBahanPendukung', w1,
                        'QuantityPendukung', w2,
                        'NominalPendukung', w3,
                        'TotalNominalPendukung', w3,
                        'Desc', w4
                    ]);
                }
                return _this;
            }
            DetailUserPertanianForm.formKey = 'Transaction.DetailUserPertanian';
            return DetailUserPertanianForm;
        }(Serenity.PrefixedContext));
        Transaction.DetailUserPertanianForm = DetailUserPertanianForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPertanianRow;
        (function (DetailUserPertanianRow) {
            DetailUserPertanianRow.idProperty = 'IdDetailPertanian';
            DetailUserPertanianRow.nameProperty = 'AlatBahanPendukung';
            DetailUserPertanianRow.localTextPrefix = 'Transaction.DetailUserPertanian';
            DetailUserPertanianRow.deletePermission = 'Transaction:DetailUserPertanian';
            DetailUserPertanianRow.insertPermission = 'Transaction:DetailUserPertanian';
            DetailUserPertanianRow.readPermission = 'Transaction:DetailUserPertanian';
            DetailUserPertanianRow.updatePermission = 'Transaction:DetailUserPertanian';
        })(DetailUserPertanianRow = Transaction.DetailUserPertanianRow || (Transaction.DetailUserPertanianRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPertanianService;
        (function (DetailUserPertanianService) {
            DetailUserPertanianService.baseUrl = 'Transaction/DetailUserPertanian';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DetailUserPertanianService[x] = function (r, s, o) {
                    return Q.serviceRequest(DetailUserPertanianService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DetailUserPertanianService = Transaction.DetailUserPertanianService || (Transaction.DetailUserPertanianService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPeternakanPerikananForm = /** @class */ (function (_super) {
            __extends(DetailUserPeternakanPerikananForm, _super);
            function DetailUserPeternakanPerikananForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DetailUserPeternakanPerikananForm.init) {
                    DetailUserPeternakanPerikananForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(DetailUserPeternakanPerikananForm, [
                        'IdSatuanPendukung', w0,
                        'AlatBahanPendukung', w1,
                        'QuantityPendukung', w2,
                        'NominalPendukung', w3,
                        'TotalNominalPendukung', w3,
                        'Desc', w4
                    ]);
                }
                return _this;
            }
            DetailUserPeternakanPerikananForm.formKey = 'Transaction.DetailUserPeternakanPerikanan';
            return DetailUserPeternakanPerikananForm;
        }(Serenity.PrefixedContext));
        Transaction.DetailUserPeternakanPerikananForm = DetailUserPeternakanPerikananForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPeternakanPerikananRow;
        (function (DetailUserPeternakanPerikananRow) {
            DetailUserPeternakanPerikananRow.idProperty = 'IdDetailPeternakan';
            DetailUserPeternakanPerikananRow.nameProperty = 'AlatBahanPendukung';
            DetailUserPeternakanPerikananRow.localTextPrefix = 'Transaction.DetailUserPeternakanPerikanan';
            DetailUserPeternakanPerikananRow.deletePermission = 'Transaction:DetailUserPeternakanPerikanan';
            DetailUserPeternakanPerikananRow.insertPermission = 'Transaction:DetailUserPeternakanPerikanan';
            DetailUserPeternakanPerikananRow.readPermission = 'Transaction:DetailUserPeternakanPerikanan';
            DetailUserPeternakanPerikananRow.updatePermission = 'Transaction:DetailUserPeternakanPerikanan';
        })(DetailUserPeternakanPerikananRow = Transaction.DetailUserPeternakanPerikananRow || (Transaction.DetailUserPeternakanPerikananRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPeternakanPerikananService;
        (function (DetailUserPeternakanPerikananService) {
            DetailUserPeternakanPerikananService.baseUrl = 'Transaction/DetailUserPeternakanPerikanan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DetailUserPeternakanPerikananService[x] = function (r, s, o) {
                    return Q.serviceRequest(DetailUserPeternakanPerikananService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DetailUserPeternakanPerikananService = Transaction.DetailUserPeternakanPerikananService || (Transaction.DetailUserPeternakanPerikananService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FcmMessageForm = /** @class */ (function (_super) {
            __extends(FcmMessageForm, _super);
            function FcmMessageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FcmMessageForm.init) {
                    FcmMessageForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    Q.initFormType(FcmMessageForm, [
                        'IdUser', w0
                    ]);
                }
                return _this;
            }
            FcmMessageForm.formKey = 'Transaction.FcmMessage';
            return FcmMessageForm;
        }(Serenity.PrefixedContext));
        Transaction.FcmMessageForm = FcmMessageForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FcmMessageRow;
        (function (FcmMessageRow) {
            FcmMessageRow.idProperty = 'IdMessage';
            FcmMessageRow.nameProperty = 'Message';
            FcmMessageRow.localTextPrefix = 'Transaction.FcmMessage';
            FcmMessageRow.deletePermission = 'Transaction:FcmMessage';
            FcmMessageRow.insertPermission = 'Transaction:FcmMessage';
            FcmMessageRow.readPermission = 'Transaction:FcmMessage';
            FcmMessageRow.updatePermission = 'Transaction:FcmMessage';
        })(FcmMessageRow = Transaction.FcmMessageRow || (Transaction.FcmMessageRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FcmMessageService;
        (function (FcmMessageService) {
            FcmMessageService.baseUrl = 'Transaction/FcmMessage';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FcmMessageService[x] = function (r, s, o) {
                    return Q.serviceRequest(FcmMessageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FcmMessageService = Transaction.FcmMessageService || (Transaction.FcmMessageService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FcmMessageUserForm = /** @class */ (function (_super) {
            __extends(FcmMessageUserForm, _super);
            function FcmMessageUserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FcmMessageUserForm.init) {
                    FcmMessageUserForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(FcmMessageUserForm, [
                        'IdUser', w0,
                        'Message', w1,
                        'Title', w1,
                        'Body', w1,
                        'Action', w1,
                        'Status', w0,
                        'Response', w1,
                        'TimeStamp', w2,
                        'IdParentMessage', w0,
                        'StatusWa', w0
                    ]);
                }
                return _this;
            }
            FcmMessageUserForm.formKey = 'Transaction.FcmMessageUser';
            return FcmMessageUserForm;
        }(Serenity.PrefixedContext));
        Transaction.FcmMessageUserForm = FcmMessageUserForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FcmMessageUserRow;
        (function (FcmMessageUserRow) {
            FcmMessageUserRow.idProperty = 'IdMessage';
            FcmMessageUserRow.nameProperty = 'Message';
            FcmMessageUserRow.localTextPrefix = 'Transaction.FcmMessageUser';
            FcmMessageUserRow.deletePermission = 'Transaction:FcmMessageUser';
            FcmMessageUserRow.insertPermission = 'Transaction:FcmMessageUser';
            FcmMessageUserRow.readPermission = 'Transaction:FcmMessageUser';
            FcmMessageUserRow.updatePermission = 'Transaction:FcmMessageUser';
        })(FcmMessageUserRow = Transaction.FcmMessageUserRow || (Transaction.FcmMessageUserRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FcmMessageUserService;
        (function (FcmMessageUserService) {
            FcmMessageUserService.baseUrl = 'Transaction/FcmMessageUser';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FcmMessageUserService[x] = function (r, s, o) {
                    return Q.serviceRequest(FcmMessageUserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FcmMessageUserService = Transaction.FcmMessageUserService || (Transaction.FcmMessageUserService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirAktaKelahiranForm = /** @class */ (function (_super) {
            __extends(FormulirAktaKelahiranForm, _super);
            function FormulirAktaKelahiranForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FormulirAktaKelahiranForm.init) {
                    FormulirAktaKelahiranForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = Transaction.HariKelahiran;
                    var w3 = s.DateEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.IntegerEditor;
                    var w6 = s.TextAreaEditor;
                    var w7 = Transaction.DetailAktaLahirGrid;
                    Q.initFormType(FormulirAktaKelahiranForm, [
                        'NamaBayi', w0,
                        'KelaminBayi', w1,
                        'TempatKelahiran', w0,
                        'HariKelahiran', w2,
                        'TglLahir', w3,
                        'WaktuKelahiran', w0,
                        'JenisKelahiran', w1,
                        'BeratBayi', w4,
                        'PanjangBayi', w4,
                        'AnakKe', w5,
                        'NamaIbu', w0,
                        'NikIbu', w0,
                        'PekerjaanIbu', w0,
                        'TglLahirIbu', w3,
                        'AlamatIbu', w6,
                        'NamaAyah', w0,
                        'TglLahirAyah', w3,
                        'PekerjaanAyah', w0,
                        'AlamatAyah', w6,
                        'NikAyah', w0,
                        'DetailFormulir', w7
                    ]);
                }
                return _this;
            }
            FormulirAktaKelahiranForm.formKey = 'Transaction.FormulirAktaKelahiran';
            return FormulirAktaKelahiranForm;
        }(Serenity.PrefixedContext));
        Transaction.FormulirAktaKelahiranForm = FormulirAktaKelahiranForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirAktaKelahiranRow;
        (function (FormulirAktaKelahiranRow) {
            FormulirAktaKelahiranRow.idProperty = 'IdFormAktaKelahiran';
            FormulirAktaKelahiranRow.nameProperty = 'NamaBayi';
            FormulirAktaKelahiranRow.localTextPrefix = 'Transaction.FormulirAktaKelahiran';
            FormulirAktaKelahiranRow.deletePermission = 'Transaction:FormulirAktaKelahiran';
            FormulirAktaKelahiranRow.insertPermission = 'Transaction:FormulirAktaKelahiran';
            FormulirAktaKelahiranRow.readPermission = 'Transaction:FormulirAktaKelahiran';
            FormulirAktaKelahiranRow.updatePermission = 'Transaction:FormulirAktaKelahiran';
        })(FormulirAktaKelahiranRow = Transaction.FormulirAktaKelahiranRow || (Transaction.FormulirAktaKelahiranRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirAktaKelahiranService;
        (function (FormulirAktaKelahiranService) {
            FormulirAktaKelahiranService.baseUrl = 'Transaction/FormulirAktaKelahiran';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FormulirAktaKelahiranService[x] = function (r, s, o) {
                    return Q.serviceRequest(FormulirAktaKelahiranService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FormulirAktaKelahiranService = Transaction.FormulirAktaKelahiranService || (Transaction.FormulirAktaKelahiranService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirKkForm = /** @class */ (function (_super) {
            __extends(FormulirKkForm, _super);
            function FormulirKkForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FormulirKkForm.init) {
                    FormulirKkForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = Transaction.DetailFormulirKkGrid;
                    Q.initFormType(FormulirKkForm, [
                        'AlasanPemohon', w0,
                        'JumlahKk', w1,
                        'DokPendukungKK', w2,
                        'DetailFormulir', w3
                    ]);
                }
                return _this;
            }
            FormulirKkForm.formKey = 'Transaction.FormulirKk';
            return FormulirKkForm;
        }(Serenity.PrefixedContext));
        Transaction.FormulirKkForm = FormulirKkForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirKkRow;
        (function (FormulirKkRow) {
            FormulirKkRow.idProperty = 'IdFormulirKk';
            FormulirKkRow.nameProperty = 'AlasanPemohon';
            FormulirKkRow.localTextPrefix = 'Transaction.FormulirKk';
            FormulirKkRow.deletePermission = 'Transaction:FormulirKk';
            FormulirKkRow.insertPermission = 'Transaction:FormulirKk';
            FormulirKkRow.readPermission = 'Transaction:FormulirKk';
            FormulirKkRow.updatePermission = 'Transaction:FormulirKk';
        })(FormulirKkRow = Transaction.FormulirKkRow || (Transaction.FormulirKkRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirKkService;
        (function (FormulirKkService) {
            FormulirKkService.baseUrl = 'Transaction/FormulirKk';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FormulirKkService[x] = function (r, s, o) {
                    return Q.serviceRequest(FormulirKkService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FormulirKkService = Transaction.FormulirKkService || (Transaction.FormulirKkService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirKtpForm = /** @class */ (function (_super) {
            __extends(FormulirKtpForm, _super);
            function FormulirKtpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FormulirKtpForm.init) {
                    FormulirKtpForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = Transaction.TypePermohonan;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(FormulirKtpForm, [
                        'IdFFowForm', w0,
                        'TypePermohonan', w1,
                        'DokPendukung', w2,
                        'Desc', w3
                    ]);
                }
                return _this;
            }
            FormulirKtpForm.formKey = 'Transaction.FormulirKtp';
            return FormulirKtpForm;
        }(Serenity.PrefixedContext));
        Transaction.FormulirKtpForm = FormulirKtpForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirKtpRow;
        (function (FormulirKtpRow) {
            FormulirKtpRow.idProperty = 'IdFormulirKtp';
            FormulirKtpRow.nameProperty = 'TypePermohonan';
            FormulirKtpRow.localTextPrefix = 'Transaction.FormulirKtp';
            FormulirKtpRow.deletePermission = 'Transaction:FormulirKtp';
            FormulirKtpRow.insertPermission = 'Transaction:FormulirKtp';
            FormulirKtpRow.readPermission = 'Transaction:FormulirKtp';
            FormulirKtpRow.updatePermission = 'Transaction:FormulirKtp';
        })(FormulirKtpRow = Transaction.FormulirKtpRow || (Transaction.FormulirKtpRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirKtpService;
        (function (FormulirKtpService) {
            FormulirKtpService.baseUrl = 'Transaction/FormulirKtp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FormulirKtpService[x] = function (r, s, o) {
                    return Q.serviceRequest(FormulirKtpService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FormulirKtpService = Transaction.FormulirKtpService || (Transaction.FormulirKtpService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ForumForm = /** @class */ (function (_super) {
            __extends(ForumForm, _super);
            function ForumForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForumForm.init) {
                    ForumForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = Transaction.MyCustomEditor;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.RadioButtonEditor;
                    var w4 = Transaction.DetailForumGrid;
                    Q.initFormType(ForumForm, [
                        'IdMasterForum', w0,
                        'DetailForum', w1,
                        'FotoDokumenForum', w2,
                        'HiddenUser', w3,
                        'Detail', w4
                    ]);
                }
                return _this;
            }
            ForumForm.formKey = 'Transaction.Forum';
            return ForumForm;
        }(Serenity.PrefixedContext));
        Transaction.ForumForm = ForumForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ForumNewForm = /** @class */ (function (_super) {
            __extends(ForumNewForm, _super);
            function ForumNewForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForumNewForm.init) {
                    ForumNewForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.RadioButtonEditor;
                    var w4 = Transaction.DetailForumGrid;
                    Q.initFormType(ForumNewForm, [
                        'IdMasterForum', w0,
                        'DetailForum', w1,
                        'FotoDokumenForum', w2,
                        'HiddenUser', w3,
                        'Detail', w4
                    ]);
                }
                return _this;
            }
            ForumNewForm.formKey = 'Transaction.ForumNew';
            return ForumNewForm;
        }(Serenity.PrefixedContext));
        Transaction.ForumNewForm = ForumNewForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ForumNewRow;
        (function (ForumNewRow) {
            ForumNewRow.idProperty = 'IdForum';
            ForumNewRow.nameProperty = 'DetailForum';
            ForumNewRow.localTextPrefix = 'Transaction.ForumNew';
            ForumNewRow.deletePermission = 'Transaction:ForumNew';
            ForumNewRow.insertPermission = 'Transaction:ForumNew';
            ForumNewRow.readPermission = 'Transaction:ForumNew';
            ForumNewRow.updatePermission = 'Transaction:ForumNew';
        })(ForumNewRow = Transaction.ForumNewRow || (Transaction.ForumNewRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ForumNewService;
        (function (ForumNewService) {
            ForumNewService.baseUrl = 'Transaction/ForumNew';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ForumNewService[x] = function (r, s, o) {
                    return Q.serviceRequest(ForumNewService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ForumNewService = Transaction.ForumNewService || (Transaction.ForumNewService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ForumRow;
        (function (ForumRow) {
            ForumRow.idProperty = 'IdForum';
            ForumRow.nameProperty = 'DetailForum';
            ForumRow.localTextPrefix = 'Transaction.Forum';
            ForumRow.deletePermission = 'Transaction:Forum';
            ForumRow.insertPermission = 'Transaction:Forum';
            ForumRow.readPermission = 'Transaction:Forum';
            ForumRow.updatePermission = 'Transaction:Forum';
        })(ForumRow = Transaction.ForumRow || (Transaction.ForumRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ForumService;
        (function (ForumService) {
            ForumService.baseUrl = 'Transaction/Forum';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ForumService[x] = function (r, s, o) {
                    return Q.serviceRequest(ForumService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ForumService = Transaction.ForumService || (Transaction.ForumService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var GetStatusKapal;
        (function (GetStatusKapal) {
            GetStatusKapal[GetStatusKapal["Sewa"] = 1] = "Sewa";
            GetStatusKapal[GetStatusKapal["Milik"] = 2] = "Milik";
        })(GetStatusKapal = Transaction.GetStatusKapal || (Transaction.GetStatusKapal = {}));
        Serenity.Decorators.registerEnumType(GetStatusKapal, 'SDD.Transaction.GetStatusKapal', 'Transaction.GetStatusKapal');
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var GetStatusLapak;
        (function (GetStatusLapak) {
            GetStatusLapak[GetStatusLapak["Sewa"] = 1] = "Sewa";
            GetStatusLapak[GetStatusLapak["Milik"] = 2] = "Milik";
        })(GetStatusLapak = Transaction.GetStatusLapak || (Transaction.GetStatusLapak = {}));
        Serenity.Decorators.registerEnumType(GetStatusLapak, 'SDD.Transaction.GetStatusLapak', 'Transaction.GetStatusLapak');
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var GetTipeLapak;
        (function (GetTipeLapak) {
            GetTipeLapak[GetTipeLapak["Offline"] = 1] = "Offline";
            GetTipeLapak[GetTipeLapak["Online"] = 2] = "Online";
        })(GetTipeLapak = Transaction.GetTipeLapak || (Transaction.GetTipeLapak = {}));
        Serenity.Decorators.registerEnumType(GetTipeLapak, 'SDD.Transaction.GetTipeLapak', 'Transaction.GetTipeLapak');
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var GetTrackStatus;
        (function (GetTrackStatus) {
            GetTrackStatus[GetTrackStatus["NonAktif"] = 0] = "NonAktif";
            GetTrackStatus[GetTrackStatus["Aktif"] = 1] = "Aktif";
        })(GetTrackStatus = Transaction.GetTrackStatus || (Transaction.GetTrackStatus = {}));
        Serenity.Decorators.registerEnumType(GetTrackStatus, 'SDD.Transaction.GetTrackStatus', 'Transaction.GetTrackStatus');
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var GetTypePerusahaan;
        (function (GetTypePerusahaan) {
            GetTypePerusahaan[GetTypePerusahaan["Pns"] = 1] = "Pns";
            GetTypePerusahaan[GetTypePerusahaan["Swasta"] = 2] = "Swasta";
        })(GetTypePerusahaan = Transaction.GetTypePerusahaan || (Transaction.GetTypePerusahaan = {}));
        Serenity.Decorators.registerEnumType(GetTypePerusahaan, 'SDD.Transaction.GetTypePerusahaan', 'Transaction.GetTypePerusahaan');
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var InfoDesaForm = /** @class */ (function (_super) {
            __extends(InfoDesaForm, _super);
            function InfoDesaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InfoDesaForm.init) {
                    InfoDesaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Transaction.MyCustomEditor;
                    var w2 = s.ImageUploadEditor;
                    Q.initFormType(InfoDesaForm, [
                        'TitleInfo', w0,
                        'ShortDescInfo', w1,
                        'BodyInfo', w1,
                        'Image', w2
                    ]);
                }
                return _this;
            }
            InfoDesaForm.formKey = 'Transaction.InfoDesa';
            return InfoDesaForm;
        }(Serenity.PrefixedContext));
        Transaction.InfoDesaForm = InfoDesaForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var InfoDesaRow;
        (function (InfoDesaRow) {
            InfoDesaRow.idProperty = 'IdInfoDesa';
            InfoDesaRow.nameProperty = 'Image';
            InfoDesaRow.localTextPrefix = 'Transaction.InfoDesa';
            InfoDesaRow.deletePermission = 'Transaction:InfoDesa';
            InfoDesaRow.insertPermission = 'Transaction:InfoDesa';
            InfoDesaRow.readPermission = 'Transaction:InfoDesa';
            InfoDesaRow.updatePermission = 'Transaction:InfoDesa';
        })(InfoDesaRow = Transaction.InfoDesaRow || (Transaction.InfoDesaRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var InfoDesaService;
        (function (InfoDesaService) {
            InfoDesaService.baseUrl = 'Transaction/InfoDesa';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InfoDesaService[x] = function (r, s, o) {
                    return Q.serviceRequest(InfoDesaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InfoDesaService = Transaction.InfoDesaService || (Transaction.InfoDesaService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var JenisKelahiran;
        (function (JenisKelahiran) {
            JenisKelahiran[JenisKelahiran["Caesar"] = 1] = "Caesar";
            JenisKelahiran[JenisKelahiran["Normal"] = 2] = "Normal";
        })(JenisKelahiran = Transaction.JenisKelahiran || (Transaction.JenisKelahiran = {}));
        Serenity.Decorators.registerEnumType(JenisKelahiran, 'SDD.Transaction.JenisKelahiran', 'Transaction.JenisKelahiran');
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var MasterFlowFormulirForm = /** @class */ (function (_super) {
            __extends(MasterFlowFormulirForm, _super);
            function MasterFlowFormulirForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MasterFlowFormulirForm.init) {
                    MasterFlowFormulirForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = Transaction.DetailFlowFormGrid;
                    Q.initFormType(MasterFlowFormulirForm, [
                        'IdMasterForm', w0,
                        'Slaform', w1,
                        'DescForm', w2,
                        'IdDesa', w0,
                        'DetailFlowFormulir', w3
                    ]);
                }
                return _this;
            }
            MasterFlowFormulirForm.formKey = 'Transaction.MasterFlowFormulir';
            return MasterFlowFormulirForm;
        }(Serenity.PrefixedContext));
        Transaction.MasterFlowFormulirForm = MasterFlowFormulirForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var MasterFlowFormulirRow;
        (function (MasterFlowFormulirRow) {
            MasterFlowFormulirRow.idProperty = 'IdFormFlow';
            MasterFlowFormulirRow.nameProperty = 'DescForm';
            MasterFlowFormulirRow.localTextPrefix = 'Transaction.MasterFlowFormulir';
            MasterFlowFormulirRow.lookupKey = 'Transaction.MasterFlowFormulir';
            function getLookup() {
                return Q.getLookup('Transaction.MasterFlowFormulir');
            }
            MasterFlowFormulirRow.getLookup = getLookup;
            MasterFlowFormulirRow.deletePermission = 'Transaction:MasterFlowFormulir';
            MasterFlowFormulirRow.insertPermission = 'Transaction:MasterFlowFormulir';
            MasterFlowFormulirRow.readPermission = 'Transaction:MasterFlowFormulir';
            MasterFlowFormulirRow.updatePermission = 'Transaction:MasterFlowFormulir';
        })(MasterFlowFormulirRow = Transaction.MasterFlowFormulirRow || (Transaction.MasterFlowFormulirRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var MasterFlowFormulirService;
        (function (MasterFlowFormulirService) {
            MasterFlowFormulirService.baseUrl = 'Transaction/MasterFlowFormulir';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterFlowFormulirService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterFlowFormulirService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterFlowFormulirService = Transaction.MasterFlowFormulirService || (Transaction.MasterFlowFormulirService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var MyEnumStatus;
        (function (MyEnumStatus) {
            MyEnumStatus[MyEnumStatus["NonAktif"] = 0] = "NonAktif";
            MyEnumStatus[MyEnumStatus["Aktif"] = 1] = "Aktif";
        })(MyEnumStatus = Transaction.MyEnumStatus || (Transaction.MyEnumStatus = {}));
        Serenity.Decorators.registerEnumType(MyEnumStatus, 'SDD.Transaction.MyEnumStatus', 'Transaction.MyEnumStatus');
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var MyEnumStatushide;
        (function (MyEnumStatushide) {
            MyEnumStatushide[MyEnumStatushide["Show"] = 0] = "Show";
            MyEnumStatushide[MyEnumStatushide["Hidden"] = 1] = "Hidden";
        })(MyEnumStatushide = Transaction.MyEnumStatushide || (Transaction.MyEnumStatushide = {}));
        Serenity.Decorators.registerEnumType(MyEnumStatushide, 'SDD.Transaction.MyEnumStatushide', 'Transaction.MyEnumStatushide');
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ParentMessageForm = /** @class */ (function (_super) {
            __extends(ParentMessageForm, _super);
            function ParentMessageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ParentMessageForm.init) {
                    ParentMessageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Transaction.MyCustomEditor;
                    var w2 = Transaction.FcmMessageGrid;
                    Q.initFormType(ParentMessageForm, [
                        'Title', w0,
                        'Message', w1,
                        'Body', w1,
                        'Detail', w2
                    ]);
                }
                return _this;
            }
            ParentMessageForm.formKey = 'Transaction.ParentMessage';
            return ParentMessageForm;
        }(Serenity.PrefixedContext));
        Transaction.ParentMessageForm = ParentMessageForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ParentMessageRow;
        (function (ParentMessageRow) {
            ParentMessageRow.idProperty = 'IdParentMessage';
            ParentMessageRow.nameProperty = 'Message';
            ParentMessageRow.localTextPrefix = 'Transaction.ParentMessage';
            ParentMessageRow.deletePermission = 'Transaction:ParentMessage';
            ParentMessageRow.insertPermission = 'Transaction:ParentMessage';
            ParentMessageRow.readPermission = 'Transaction:ParentMessage';
            ParentMessageRow.updatePermission = 'Transaction:ParentMessage';
        })(ParentMessageRow = Transaction.ParentMessageRow || (Transaction.ParentMessageRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ParentMessageService;
        (function (ParentMessageService) {
            ParentMessageService.baseUrl = 'Transaction/ParentMessage';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ParentMessageService[x] = function (r, s, o) {
                    return Q.serviceRequest(ParentMessageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ParentMessageService = Transaction.ParentMessageService || (Transaction.ParentMessageService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var PengaduanForm = /** @class */ (function (_super) {
            __extends(PengaduanForm, _super);
            function PengaduanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PengaduanForm.init) {
                    PengaduanForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = Transaction.MyCustomEditor;
                    var w3 = s.MultipleImageUploadEditor;
                    var w4 = s.DateEditor;
                    var w5 = Transaction.DetailPengaduanGrid;
                    Q.initFormType(PengaduanForm, [
                        'IdPengaduan', w0,
                        'IdMasterTujuan', w1,
                        'PerihalPengaduan', w2,
                        'FotoDokumen', w3,
                        'Timestamp', w4,
                        'DetailPengaduan', w5
                    ]);
                }
                return _this;
            }
            PengaduanForm.formKey = 'Transaction.Pengaduan';
            return PengaduanForm;
        }(Serenity.PrefixedContext));
        Transaction.PengaduanForm = PengaduanForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var PengaduanRow;
        (function (PengaduanRow) {
            PengaduanRow.idProperty = 'IdPengaduan';
            PengaduanRow.nameProperty = 'PerihalPengaduan';
            PengaduanRow.localTextPrefix = 'Transaction.Pengaduan';
            PengaduanRow.lookupKey = 'Transaction.Pengaduan';
            function getLookup() {
                return Q.getLookup('Transaction.Pengaduan');
            }
            PengaduanRow.getLookup = getLookup;
            PengaduanRow.deletePermission = 'Transaction:Pengaduan';
            PengaduanRow.insertPermission = 'Transaction:Pengaduan';
            PengaduanRow.readPermission = 'Transaction:Pengaduan';
            PengaduanRow.updatePermission = 'Transaction:Pengaduan';
        })(PengaduanRow = Transaction.PengaduanRow || (Transaction.PengaduanRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var PengaduanService;
        (function (PengaduanService) {
            PengaduanService.baseUrl = 'Transaction/Pengaduan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PengaduanService[x] = function (r, s, o) {
                    return Q.serviceRequest(PengaduanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PengaduanService = Transaction.PengaduanService || (Transaction.PengaduanService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var StatusAparat;
        (function (StatusAparat) {
            StatusAparat[StatusAparat["Satu"] = 1] = "Satu";
            StatusAparat[StatusAparat["Dua"] = 2] = "Dua";
        })(StatusAparat = Transaction.StatusAparat || (Transaction.StatusAparat = {}));
        Serenity.Decorators.registerEnumType(StatusAparat, 'SDD.Transaction.StatusAparat', 'Transaction.StatusAparat');
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var TransaksiStatusForm = /** @class */ (function (_super) {
            __extends(TransaksiStatusForm, _super);
            function TransaksiStatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TransaksiStatusForm.init) {
                    TransaksiStatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = SDD.StaticTextBlock;
                    var w3 = s.MultipleImageUploadEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.IntegerEditor;
                    var w6 = s.DateEditor;
                    Q.initFormType(TransaksiStatusForm, [
                        'IdMasterForm', w0,
                        'IdUserPengajuan', w0,
                        'IdStatus', w0,
                        'LinkFormulir', w1,
                        'DokumenFormulir', w2,
                        'Dokumen', w3,
                        'Keterangan', w4,
                        'IdUserAparat', w5,
                        'TimeStamp', w6
                    ]);
                }
                return _this;
            }
            TransaksiStatusForm.formKey = 'Transaction.TransaksiStatus';
            return TransaksiStatusForm;
        }(Serenity.PrefixedContext));
        Transaction.TransaksiStatusForm = TransaksiStatusForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var TransaksiStatusRow;
        (function (TransaksiStatusRow) {
            TransaksiStatusRow.idProperty = 'IdTransaksi';
            TransaksiStatusRow.nameProperty = 'Keterangan';
            TransaksiStatusRow.localTextPrefix = 'Transaction.TransaksiStatus';
            TransaksiStatusRow.deletePermission = 'Transaction:TransaksiStatus';
            TransaksiStatusRow.insertPermission = 'Transaction:TransaksiStatus';
            TransaksiStatusRow.readPermission = 'Transaction:TransaksiStatus';
            TransaksiStatusRow.updatePermission = 'Transaction:TransaksiStatus';
        })(TransaksiStatusRow = Transaction.TransaksiStatusRow || (Transaction.TransaksiStatusRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var TransaksiStatusService;
        (function (TransaksiStatusService) {
            TransaksiStatusService.baseUrl = 'Transaction/TransaksiStatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TransaksiStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(TransaksiStatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TransaksiStatusService = Transaction.TransaksiStatusService || (Transaction.TransaksiStatusService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserKaryawanForm = /** @class */ (function (_super) {
            __extends(UserKaryawanForm, _super);
            function UserKaryawanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserKaryawanForm.init) {
                    UserKaryawanForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = Transaction.StatusKaryawan;
                    var w2 = s.DecimalEditor;
                    var w3 = s.StringEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.IntegerEditor;
                    Q.initFormType(UserKaryawanForm, [
                        'TypePerusahaan', w0,
                        'StatusKaryawan', w1,
                        'RatarataPenghasilan', w2,
                        'NamaperusahaanUsaha', w3,
                        'AlamatPerusahanUsaha', w4,
                        'Desc', w4,
                        'IdPekerjaan', w5
                    ]);
                }
                return _this;
            }
            UserKaryawanForm.formKey = 'Transaction.UserKaryawan';
            return UserKaryawanForm;
        }(Serenity.PrefixedContext));
        Transaction.UserKaryawanForm = UserKaryawanForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserKaryawanRow;
        (function (UserKaryawanRow) {
            UserKaryawanRow.idProperty = 'IdUserKaryawan';
            UserKaryawanRow.nameProperty = 'StatusKaryawan';
            UserKaryawanRow.localTextPrefix = 'Transaction.UserKaryawan';
            UserKaryawanRow.deletePermission = 'Transaction:UserKaryawan';
            UserKaryawanRow.insertPermission = 'Transaction:UserKaryawan';
            UserKaryawanRow.readPermission = 'Transaction:UserKaryawan';
            UserKaryawanRow.updatePermission = 'Transaction:UserKaryawan';
        })(UserKaryawanRow = Transaction.UserKaryawanRow || (Transaction.UserKaryawanRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserKaryawanService;
        (function (UserKaryawanService) {
            UserKaryawanService.baseUrl = 'Transaction/UserKaryawan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserKaryawanService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserKaryawanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserKaryawanService = Transaction.UserKaryawanService || (Transaction.UserKaryawanService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserNelayanForm = /** @class */ (function (_super) {
            __extends(UserNelayanForm, _super);
            function UserNelayanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserNelayanForm.init) {
                    UserNelayanForm.init = true;
                    var s = Serenity;
                    var w0 = s.TextAreaEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = Transaction.DetailKapalNelayanGrid;
                    Q.initFormType(UserNelayanForm, [
                        'Desc', w0,
                        'IdPekerjaan', w1,
                        'DetailNelayan', w2
                    ]);
                }
                return _this;
            }
            UserNelayanForm.formKey = 'Transaction.UserNelayan';
            return UserNelayanForm;
        }(Serenity.PrefixedContext));
        Transaction.UserNelayanForm = UserNelayanForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserNelayanRow;
        (function (UserNelayanRow) {
            UserNelayanRow.idProperty = 'IdUserNelayan';
            UserNelayanRow.nameProperty = 'Desc';
            UserNelayanRow.localTextPrefix = 'Transaction.UserNelayan';
            UserNelayanRow.deletePermission = 'Transaction:UserNelayan';
            UserNelayanRow.insertPermission = 'Transaction:UserNelayan';
            UserNelayanRow.readPermission = 'Transaction:UserNelayan';
            UserNelayanRow.updatePermission = 'Transaction:UserNelayan';
        })(UserNelayanRow = Transaction.UserNelayanRow || (Transaction.UserNelayanRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserNelayanService;
        (function (UserNelayanService) {
            UserNelayanService.baseUrl = 'Transaction/UserNelayan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserNelayanService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserNelayanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserNelayanService = Transaction.UserNelayanService || (Transaction.UserNelayanService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPerdaganganForm = /** @class */ (function (_super) {
            __extends(UserPerdaganganForm, _super);
            function UserPerdaganganForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserPerdaganganForm.init) {
                    UserPerdaganganForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Transaction.JenisDagangan;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = Transaction.DetailUserPerdaganganGrid;
                    Q.initFormType(UserPerdaganganForm, [
                        'NamaBrandToko', w0,
                        'JenisDagangan', w1,
                        'Desc', w2,
                        'IdPekerjaan', w3,
                        'DetailPerdagangan', w4
                    ]);
                }
                return _this;
            }
            UserPerdaganganForm.formKey = 'Transaction.UserPerdagangan';
            return UserPerdaganganForm;
        }(Serenity.PrefixedContext));
        Transaction.UserPerdaganganForm = UserPerdaganganForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPerdaganganRow;
        (function (UserPerdaganganRow) {
            UserPerdaganganRow.idProperty = 'IdUserPerdagangan';
            UserPerdaganganRow.nameProperty = 'NamaBrandToko';
            UserPerdaganganRow.localTextPrefix = 'Transaction.UserPerdagangan';
            UserPerdaganganRow.deletePermission = 'Transaction:UserPerdagangan';
            UserPerdaganganRow.insertPermission = 'Transaction:UserPerdagangan';
            UserPerdaganganRow.readPermission = 'Transaction:UserPerdagangan';
            UserPerdaganganRow.updatePermission = 'Transaction:UserPerdagangan';
        })(UserPerdaganganRow = Transaction.UserPerdaganganRow || (Transaction.UserPerdaganganRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPerdaganganService;
        (function (UserPerdaganganService) {
            UserPerdaganganService.baseUrl = 'Transaction/UserPerdagangan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserPerdaganganService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPerdaganganService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPerdaganganService = Transaction.UserPerdaganganService || (Transaction.UserPerdaganganService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPerikananPeternakanForm = /** @class */ (function (_super) {
            __extends(UserPerikananPeternakanForm, _super);
            function UserPerikananPeternakanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserPerikananPeternakanForm.init) {
                    UserPerikananPeternakanForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = Transaction.DetailUserPeternakanPerikananGrid;
                    Q.initFormType(UserPerikananPeternakanForm, [
                        'Option1', w0,
                        'IdHasilBudidaya', w0,
                        'TotalBibit', w1,
                        'LuasLahan', w1,
                        'JumlahPekerja', w2,
                        'PeriodePanen', w2,
                        'HasilPanen', w1,
                        'NominalHasilPanen', w1,
                        'DetailPeternakan', w3
                    ]);
                }
                return _this;
            }
            UserPerikananPeternakanForm.formKey = 'Transaction.UserPerikananPeternakan';
            return UserPerikananPeternakanForm;
        }(Serenity.PrefixedContext));
        Transaction.UserPerikananPeternakanForm = UserPerikananPeternakanForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPerikananPeternakanRow;
        (function (UserPerikananPeternakanRow) {
            UserPerikananPeternakanRow.idProperty = 'IdUserPerikanan';
            UserPerikananPeternakanRow.localTextPrefix = 'Transaction.UserPerikananPeternakan';
            UserPerikananPeternakanRow.deletePermission = 'Transaction:UserPerikananPeternakan';
            UserPerikananPeternakanRow.insertPermission = 'Transaction:UserPerikananPeternakan';
            UserPerikananPeternakanRow.readPermission = 'Transaction:UserPerikananPeternakan';
            UserPerikananPeternakanRow.updatePermission = 'Transaction:UserPerikananPeternakan';
        })(UserPerikananPeternakanRow = Transaction.UserPerikananPeternakanRow || (Transaction.UserPerikananPeternakanRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPerikananPeternakanService;
        (function (UserPerikananPeternakanService) {
            UserPerikananPeternakanService.baseUrl = 'Transaction/UserPerikananPeternakan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserPerikananPeternakanService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPerikananPeternakanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPerikananPeternakanService = Transaction.UserPerikananPeternakanService || (Transaction.UserPerikananPeternakanService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPertanianPerkebunanForm = /** @class */ (function (_super) {
            __extends(UserPertanianPerkebunanForm, _super);
            function UserPertanianPerkebunanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserPertanianPerkebunanForm.init) {
                    UserPertanianPerkebunanForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = Transaction.DetailUserPertanianGrid;
                    Q.initFormType(UserPertanianPerkebunanForm, [
                        'Option1', w0,
                        'IdHasilBudidaya', w0,
                        'LuasLahan', w1,
                        'JumlahPekerja', w2,
                        'PeriodePanen', w2,
                        'HasilPanen', w1,
                        'NominalHasilPanen', w1,
                        'DetailPertanian', w3
                    ]);
                }
                return _this;
            }
            UserPertanianPerkebunanForm.formKey = 'Transaction.UserPertanianPerkebunan';
            return UserPertanianPerkebunanForm;
        }(Serenity.PrefixedContext));
        Transaction.UserPertanianPerkebunanForm = UserPertanianPerkebunanForm;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPertanianPerkebunanRow;
        (function (UserPertanianPerkebunanRow) {
            UserPertanianPerkebunanRow.idProperty = 'IdUserPertanian';
            UserPertanianPerkebunanRow.localTextPrefix = 'Transaction.UserPertanianPerkebunan';
            UserPertanianPerkebunanRow.deletePermission = 'Transaction:UserPertanianPerkebunan';
            UserPertanianPerkebunanRow.insertPermission = 'Transaction:UserPertanianPerkebunan';
            UserPertanianPerkebunanRow.readPermission = 'Transaction:UserPertanianPerkebunan';
            UserPertanianPerkebunanRow.updatePermission = 'Transaction:UserPertanianPerkebunan';
        })(UserPertanianPerkebunanRow = Transaction.UserPertanianPerkebunanRow || (Transaction.UserPertanianPerkebunanRow = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPertanianPerkebunanService;
        (function (UserPertanianPerkebunanService) {
            UserPertanianPerkebunanService.baseUrl = 'Transaction/UserPertanianPerkebunan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserPertanianPerkebunanService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPertanianPerkebunanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPertanianPerkebunanService = Transaction.UserPertanianPerkebunanService || (Transaction.UserPertanianPerkebunanService = {}));
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var VChartByAllPekerjaanForm = /** @class */ (function (_super) {
            __extends(VChartByAllPekerjaanForm, _super);
            function VChartByAllPekerjaanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VChartByAllPekerjaanForm.init) {
                    VChartByAllPekerjaanForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.StringEditor;
                    Q.initFormType(VChartByAllPekerjaanForm, [
                        'CountTransaksi', w0,
                        'TotalPenghasilan', w1,
                        'IdPekerjaan', w0,
                        'NamaPekerjaan', w2
                    ]);
                }
                return _this;
            }
            VChartByAllPekerjaanForm.formKey = 'View.VChartByAllPekerjaan';
            return VChartByAllPekerjaanForm;
        }(Serenity.PrefixedContext));
        View.VChartByAllPekerjaanForm = VChartByAllPekerjaanForm;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var VChartByAllPekerjaanRow;
        (function (VChartByAllPekerjaanRow) {
            VChartByAllPekerjaanRow.idProperty = 'IdNumber';
            VChartByAllPekerjaanRow.nameProperty = 'NamaPekerjaan';
            VChartByAllPekerjaanRow.localTextPrefix = 'View.VChartByAllPekerjaan';
            VChartByAllPekerjaanRow.deletePermission = 'View:VChartByAllPekerjaan';
            VChartByAllPekerjaanRow.insertPermission = 'View:VChartByAllPekerjaan';
            VChartByAllPekerjaanRow.readPermission = 'View:VChartByAllPekerjaan';
            VChartByAllPekerjaanRow.updatePermission = 'View:VChartByAllPekerjaan';
        })(VChartByAllPekerjaanRow = View.VChartByAllPekerjaanRow || (View.VChartByAllPekerjaanRow = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var VChartByAllPekerjaanService;
        (function (VChartByAllPekerjaanService) {
            VChartByAllPekerjaanService.baseUrl = 'View/VChartByAllPekerjaan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VChartByAllPekerjaanService[x] = function (r, s, o) {
                    return Q.serviceRequest(VChartByAllPekerjaanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VChartByAllPekerjaanService = View.VChartByAllPekerjaanService || (View.VChartByAllPekerjaanService = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var VChartPenghasilanDesaForm = /** @class */ (function (_super) {
            __extends(VChartPenghasilanDesaForm, _super);
            function VChartPenghasilanDesaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VChartPenghasilanDesaForm.init) {
                    VChartPenghasilanDesaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(VChartPenghasilanDesaForm, [
                        'Namadesa', w0,
                        'TotalPenghasilan', w1
                    ]);
                }
                return _this;
            }
            VChartPenghasilanDesaForm.formKey = 'View.VChartPenghasilanDesa';
            return VChartPenghasilanDesaForm;
        }(Serenity.PrefixedContext));
        View.VChartPenghasilanDesaForm = VChartPenghasilanDesaForm;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var VChartPenghasilanDesaRow;
        (function (VChartPenghasilanDesaRow) {
            VChartPenghasilanDesaRow.idProperty = 'IdNumber';
            VChartPenghasilanDesaRow.nameProperty = 'Namadesa';
            VChartPenghasilanDesaRow.localTextPrefix = 'View.VChartPenghasilanDesa';
            VChartPenghasilanDesaRow.deletePermission = 'View:VChartPenghasilanDesa';
            VChartPenghasilanDesaRow.insertPermission = 'View:VChartPenghasilanDesa';
            VChartPenghasilanDesaRow.readPermission = 'View:VChartPenghasilanDesa';
            VChartPenghasilanDesaRow.updatePermission = 'View:VChartPenghasilanDesa';
        })(VChartPenghasilanDesaRow = View.VChartPenghasilanDesaRow || (View.VChartPenghasilanDesaRow = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var VChartPenghasilanDesaService;
        (function (VChartPenghasilanDesaService) {
            VChartPenghasilanDesaService.baseUrl = 'View/VChartPenghasilanDesa';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ListPdf',
                'ListId'
            ].forEach(function (x) {
                VChartPenghasilanDesaService[x] = function (r, s, o) {
                    return Q.serviceRequest(VChartPenghasilanDesaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VChartPenghasilanDesaService = View.VChartPenghasilanDesaService || (View.VChartPenghasilanDesaService = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewAllPengajuanForm = /** @class */ (function (_super) {
            __extends(ViewAllPengajuanForm, _super);
            function ViewAllPengajuanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ViewAllPengajuanForm.init) {
                    ViewAllPengajuanForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(ViewAllPengajuanForm, [
                        'IdNumber', w0,
                        'IdUserPengajuan', w1,
                        'IdMasterForm', w1,
                        'FormulirPengajuan', w0
                    ]);
                }
                return _this;
            }
            ViewAllPengajuanForm.formKey = 'View.ViewAllPengajuan';
            return ViewAllPengajuanForm;
        }(Serenity.PrefixedContext));
        View.ViewAllPengajuanForm = ViewAllPengajuanForm;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewAllPengajuanRow;
        (function (ViewAllPengajuanRow) {
            ViewAllPengajuanRow.idProperty = 'NumberId';
            ViewAllPengajuanRow.nameProperty = 'FormulirPengajuan';
            ViewAllPengajuanRow.localTextPrefix = 'View.ViewAllPengajuan';
            ViewAllPengajuanRow.deletePermission = 'View:ViewAllPengajuan';
            ViewAllPengajuanRow.insertPermission = 'View:ViewAllPengajuan';
            ViewAllPengajuanRow.readPermission = 'View:ViewAllPengajuan';
            ViewAllPengajuanRow.updatePermission = 'View:ViewAllPengajuan';
        })(ViewAllPengajuanRow = View.ViewAllPengajuanRow || (View.ViewAllPengajuanRow = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewAllPengajuanService;
        (function (ViewAllPengajuanService) {
            ViewAllPengajuanService.baseUrl = 'View/ViewAllPengajuan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ViewAllPengajuanService[x] = function (r, s, o) {
                    return Q.serviceRequest(ViewAllPengajuanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ViewAllPengajuanService = View.ViewAllPengajuanService || (View.ViewAllPengajuanService = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewAllPenghasilanForm = /** @class */ (function (_super) {
            __extends(ViewAllPenghasilanForm, _super);
            function ViewAllPenghasilanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ViewAllPenghasilanForm.init) {
                    ViewAllPenghasilanForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(ViewAllPenghasilanForm, [
                        'UserId', w0,
                        'DisplayName', w1,
                        'Username', w1,
                        'Email', w1,
                        'Address', w1,
                        'IdHubungan', w0,
                        'NoKtp', w1,
                        'NoKk', w1,
                        'PhoneNumber', w1,
                        'WaNumber', w1,
                        'JenisKelamin', w1,
                        'TanggalLahir', w2,
                        'IdDesa', w1,
                        'NamaDesa', w1,
                        'IdKecamatan', w0,
                        'NamaKecamatan', w1,
                        'IdKabupaten', w0,
                        'NamaKabupaten', w1,
                        'IdPropinsi', w0,
                        'NamaPropinsi', w1,
                        'TotalPenghasilanPeternakan', w3,
                        'TotalPenghasilanPertanian', w3,
                        'TotalPenghasilanNelayan', w3,
                        'TotalPenghasilanKaryawan', w3,
                        'TotalPenghasilanPerdagangan', w3,
                        'TotalPenghasilan', w3
                    ]);
                }
                return _this;
            }
            ViewAllPenghasilanForm.formKey = 'View.ViewAllPenghasilan';
            return ViewAllPenghasilanForm;
        }(Serenity.PrefixedContext));
        View.ViewAllPenghasilanForm = ViewAllPenghasilanForm;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewAllPenghasilanRow;
        (function (ViewAllPenghasilanRow) {
            ViewAllPenghasilanRow.idProperty = 'IdNumber';
            ViewAllPenghasilanRow.nameProperty = 'DisplayName';
            ViewAllPenghasilanRow.localTextPrefix = 'View.ViewAllPenghasilan';
            ViewAllPenghasilanRow.deletePermission = 'View:ViewAllPenghasilan';
            ViewAllPenghasilanRow.insertPermission = 'View:ViewAllPenghasilan';
            ViewAllPenghasilanRow.readPermission = 'View:ViewAllPenghasilan';
            ViewAllPenghasilanRow.updatePermission = 'View:ViewAllPenghasilan';
        })(ViewAllPenghasilanRow = View.ViewAllPenghasilanRow || (View.ViewAllPenghasilanRow = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewAllPenghasilanService;
        (function (ViewAllPenghasilanService) {
            ViewAllPenghasilanService.baseUrl = 'View/ViewAllPenghasilan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ViewAllPenghasilanService[x] = function (r, s, o) {
                    return Q.serviceRequest(ViewAllPenghasilanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ViewAllPenghasilanService = View.ViewAllPenghasilanService || (View.ViewAllPenghasilanService = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewMaasterFormForm = /** @class */ (function (_super) {
            __extends(ViewMaasterFormForm, _super);
            function ViewMaasterFormForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ViewMaasterFormForm.init) {
                    ViewMaasterFormForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(ViewMaasterFormForm, [
                        'IdFormFlow', w0,
                        'NamaFormulir', w1,
                        'IdFormulir', w0,
                        'Slaform', w0,
                        'DescForm', w1,
                        'NamaDesa', w1,
                        'NamaKecamatan', w1,
                        'KodePos', w1,
                        'ReqForm', w1
                    ]);
                }
                return _this;
            }
            ViewMaasterFormForm.formKey = 'View.ViewMaasterForm';
            return ViewMaasterFormForm;
        }(Serenity.PrefixedContext));
        View.ViewMaasterFormForm = ViewMaasterFormForm;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewMaasterFormRow;
        (function (ViewMaasterFormRow) {
            ViewMaasterFormRow.idProperty = 'IdNumber';
            ViewMaasterFormRow.nameProperty = 'NamaFormulir';
            ViewMaasterFormRow.localTextPrefix = 'View.ViewMaasterForm';
            ViewMaasterFormRow.lookupKey = 'View.ViewMaasterForm';
            function getLookup() {
                return Q.getLookup('View.ViewMaasterForm');
            }
            ViewMaasterFormRow.getLookup = getLookup;
            ViewMaasterFormRow.deletePermission = 'View:ViewMaasterForm';
            ViewMaasterFormRow.insertPermission = 'View:ViewMaasterForm';
            ViewMaasterFormRow.readPermission = 'View:ViewMaasterForm';
            ViewMaasterFormRow.updatePermission = 'View:ViewMaasterForm';
        })(ViewMaasterFormRow = View.ViewMaasterFormRow || (View.ViewMaasterFormRow = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewMaasterFormService;
        (function (ViewMaasterFormService) {
            ViewMaasterFormService.baseUrl = 'View/ViewMaasterForm';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ViewMaasterFormService[x] = function (r, s, o) {
                    return Q.serviceRequest(ViewMaasterFormService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ViewMaasterFormService = View.ViewMaasterFormService || (View.ViewMaasterFormService = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewProfilUserForm = /** @class */ (function (_super) {
            __extends(ViewProfilUserForm, _super);
            function ViewProfilUserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ViewProfilUserForm.init) {
                    ViewProfilUserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(ViewProfilUserForm, [
                        'DisplayName', w0,
                        'Username', w0,
                        'Email', w0,
                        'Address', w0,
                        'IdHubungan', w1,
                        'NoKtp', w0,
                        'NoKk', w0,
                        'PhoneNumber', w0,
                        'WaNumber', w0,
                        'JenisKelamin', w1,
                        'TanggalLahir', w2,
                        'IdDesa', w0,
                        'Pendidikan', w0,
                        'IdKecamatan', w1,
                        'NamaDesa', w0,
                        'LogoDesa', w0,
                        'NoKodeDesa', w0,
                        'NamaKecamatan', w0,
                        'IdKabupaten', w1,
                        'NoKodeKecamatan', w0,
                        'KodePos', w0,
                        'NoKodeKabupaten', w0,
                        'IdPropinsi', w1,
                        'NamaKabupaten', w0,
                        'LogoKabupaten', w0,
                        'NamaPropinsi', w0,
                        'IbuKotaPropinsi', w0,
                        'LogoPropinsi', w0,
                        'NoKodePropinsi', w0,
                        'UserImage', w0
                    ]);
                }
                return _this;
            }
            ViewProfilUserForm.formKey = 'View.ViewProfilUser';
            return ViewProfilUserForm;
        }(Serenity.PrefixedContext));
        View.ViewProfilUserForm = ViewProfilUserForm;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewProfilUserRow;
        (function (ViewProfilUserRow) {
            ViewProfilUserRow.idProperty = 'UserId';
            ViewProfilUserRow.nameProperty = 'DisplayName';
            ViewProfilUserRow.localTextPrefix = 'View.ViewProfilUser';
            ViewProfilUserRow.lookupKey = 'View.ViewProfilUser';
            function getLookup() {
                return Q.getLookup('View.ViewProfilUser');
            }
            ViewProfilUserRow.getLookup = getLookup;
            ViewProfilUserRow.deletePermission = 'View:ViewProfilUser';
            ViewProfilUserRow.insertPermission = 'View:ViewProfilUser';
            ViewProfilUserRow.readPermission = 'View:ViewProfilUser';
            ViewProfilUserRow.updatePermission = 'View:ViewProfilUser';
        })(ViewProfilUserRow = View.ViewProfilUserRow || (View.ViewProfilUserRow = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewProfilUserService;
        (function (ViewProfilUserService) {
            ViewProfilUserService.baseUrl = 'View/ViewProfilUser';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'CekUser'
            ].forEach(function (x) {
                ViewProfilUserService[x] = function (r, s, o) {
                    return Q.serviceRequest(ViewProfilUserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ViewProfilUserService = View.ViewProfilUserService || (View.ViewProfilUserService = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewTransaksiFormulirForm = /** @class */ (function (_super) {
            __extends(ViewTransaksiFormulirForm, _super);
            function ViewTransaksiFormulirForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ViewTransaksiFormulirForm.init) {
                    ViewTransaksiFormulirForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = SDD.StaticTextBlock;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(ViewTransaksiFormulirForm, [
                        'NamaStatus', w0,
                        'Formulir', w0,
                        'DokumenFormulir', w1,
                        'Dokumen', w2,
                        'Info', w3
                    ]);
                }
                return _this;
            }
            ViewTransaksiFormulirForm.formKey = 'View.ViewTransaksiFormulir';
            return ViewTransaksiFormulirForm;
        }(Serenity.PrefixedContext));
        View.ViewTransaksiFormulirForm = ViewTransaksiFormulirForm;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewTransaksiFormulirRow;
        (function (ViewTransaksiFormulirRow) {
            ViewTransaksiFormulirRow.idProperty = 'IdTransaksi';
            ViewTransaksiFormulirRow.nameProperty = 'Info';
            ViewTransaksiFormulirRow.localTextPrefix = 'View.ViewTransaksiFormulir';
            ViewTransaksiFormulirRow.deletePermission = 'View:ViewTransaksiFormulir';
            ViewTransaksiFormulirRow.insertPermission = 'View:ViewTransaksiFormulir';
            ViewTransaksiFormulirRow.readPermission = 'View:ViewTransaksiFormulir';
            ViewTransaksiFormulirRow.updatePermission = 'View:ViewTransaksiFormulir';
        })(ViewTransaksiFormulirRow = View.ViewTransaksiFormulirRow || (View.ViewTransaksiFormulirRow = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewTransaksiFormulirService;
        (function (ViewTransaksiFormulirService) {
            ViewTransaksiFormulirService.baseUrl = 'View/ViewTransaksiFormulir';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ViewTransaksiFormulirService[x] = function (r, s, o) {
                    return Q.serviceRequest(ViewTransaksiFormulirService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ViewTransaksiFormulirService = View.ViewTransaksiFormulirService || (View.ViewTransaksiFormulirService = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewUserPengajuanForm = /** @class */ (function (_super) {
            __extends(ViewUserPengajuanForm, _super);
            function ViewUserPengajuanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ViewUserPengajuanForm.init) {
                    ViewUserPengajuanForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ViewUserPengajuanForm, [
                        'IdNumber', w0,
                        'Formulir', w0,
                        'Dokumen', w0
                    ]);
                }
                return _this;
            }
            ViewUserPengajuanForm.formKey = 'View.ViewUserPengajuan';
            return ViewUserPengajuanForm;
        }(Serenity.PrefixedContext));
        View.ViewUserPengajuanForm = ViewUserPengajuanForm;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewUserPengajuanRow;
        (function (ViewUserPengajuanRow) {
            ViewUserPengajuanRow.idProperty = 'NumberId';
            ViewUserPengajuanRow.nameProperty = 'Formulir';
            ViewUserPengajuanRow.localTextPrefix = 'View.ViewUserPengajuan';
            ViewUserPengajuanRow.deletePermission = 'View:ViewUserPengajuan';
            ViewUserPengajuanRow.insertPermission = 'View:ViewUserPengajuan';
            ViewUserPengajuanRow.readPermission = 'View:ViewUserPengajuan';
            ViewUserPengajuanRow.updatePermission = 'View:ViewUserPengajuan';
        })(ViewUserPengajuanRow = View.ViewUserPengajuanRow || (View.ViewUserPengajuanRow = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewUserPengajuanService;
        (function (ViewUserPengajuanService) {
            ViewUserPengajuanService.baseUrl = 'View/ViewUserPengajuan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ViewUserPengajuanService[x] = function (r, s, o) {
                    return Q.serviceRequest(ViewUserPengajuanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ViewUserPengajuanService = View.ViewUserPengajuanService || (View.ViewUserPengajuanService = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewUserPenghasilanForm = /** @class */ (function (_super) {
            __extends(ViewUserPenghasilanForm, _super);
            function ViewUserPenghasilanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ViewUserPenghasilanForm.init) {
                    ViewUserPenghasilanForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(ViewUserPenghasilanForm, [
                        'DisplayName', w0,
                        'Email', w0,
                        'WaNumber', w0,
                        'TotalHasil', w1,
                        'NamaPekerjaan', w0,
                        'NamaDesa', w0,
                        'NamaKecamatan', w0,
                        'NamaKabupaten', w0,
                        'NamaPropinsi', w0
                    ]);
                }
                return _this;
            }
            ViewUserPenghasilanForm.formKey = 'View.ViewUserPenghasilan';
            return ViewUserPenghasilanForm;
        }(Serenity.PrefixedContext));
        View.ViewUserPenghasilanForm = ViewUserPenghasilanForm;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewUserPenghasilanRow;
        (function (ViewUserPenghasilanRow) {
            ViewUserPenghasilanRow.idProperty = 'NumberId';
            ViewUserPenghasilanRow.nameProperty = 'DisplayName';
            ViewUserPenghasilanRow.localTextPrefix = 'View.ViewUserPenghasilan';
            ViewUserPenghasilanRow.deletePermission = 'View:ViewUserPenghasilan';
            ViewUserPenghasilanRow.insertPermission = 'View:ViewUserPenghasilan';
            ViewUserPenghasilanRow.readPermission = 'View:ViewUserPenghasilan';
            ViewUserPenghasilanRow.updatePermission = 'View:ViewUserPenghasilan';
        })(ViewUserPenghasilanRow = View.ViewUserPenghasilanRow || (View.ViewUserPenghasilanRow = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewUserPenghasilanService;
        (function (ViewUserPenghasilanService) {
            ViewUserPenghasilanService.baseUrl = 'View/ViewUserPenghasilan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ListPekerjaanUser'
            ].forEach(function (x) {
                ViewUserPenghasilanService[x] = function (r, s, o) {
                    return Q.serviceRequest(ViewUserPenghasilanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ViewUserPenghasilanService = View.ViewUserPenghasilanService || (View.ViewUserPenghasilanService = {}));
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var Pendidikan = /** @class */ (function (_super) {
            __extends(Pendidikan, _super);
            function Pendidikan(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("SD", "SD");
                _this.addOption("SMP", "SMP");
                _this.addOption("SMA", "SMA");
                _this.addOption("S1", "S1");
                _this.addOption("S2", "S2");
                return _this;
                // you may also use addItem which accepts a Select2Item parameter
            }
            Pendidikan = __decorate([
                Serenity.Decorators.registerEditor()
            ], Pendidikan);
            return Pendidikan;
        }(Serenity.Select2Editor));
        Administration.Pendidikan = Pendidikan;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "Option1" /* Option1 */; }).format = function (ctx) { return (ctx.value == null) ? "<span>" + "No File" + "</span>" : "<span class=\"label bg-info text-white\">" + ("<a href=\"" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\" download=\"" + Q.htmlEncode(ctx.value) + "\"><i class=\"fa fa fa-file-excel-o text-red\"></i> Download</a>") + "</span>"; };
                return columns;
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = SDD.Authorization || (SDD.Authorization = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = SDD.Administration || (SDD.Administration = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = SDD.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = SDD.LanguageList || (SDD.LanguageList = {}));
})(SDD || (SDD = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var SDD;
(function (SDD) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('SDD');
        Serenity.EntityDialog.defaultLanguageList = SDD.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = SDD.ScriptInitialization || (SDD.ScriptInitialization = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    SDD.BasicProgressDialog = BasicProgressDialog;
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new SDD.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = SDD.DialogUtils || (SDD.DialogUtils = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    SDD.StaticTextBlock = StaticTextBlock;
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = SDD.Common || (SDD.Common = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterBudidayaDialog = /** @class */ (function (_super) {
            __extends(MasterBudidayaDialog, _super);
            function MasterBudidayaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterBudidayaForm(_this.idPrefix);
                return _this;
            }
            MasterBudidayaDialog.prototype.getFormKey = function () { return Master.MasterBudidayaForm.formKey; };
            MasterBudidayaDialog.prototype.getIdProperty = function () { return Master.MasterBudidayaRow.idProperty; };
            MasterBudidayaDialog.prototype.getLocalTextPrefix = function () { return Master.MasterBudidayaRow.localTextPrefix; };
            MasterBudidayaDialog.prototype.getNameProperty = function () { return Master.MasterBudidayaRow.nameProperty; };
            MasterBudidayaDialog.prototype.getService = function () { return Master.MasterBudidayaService.baseUrl; };
            MasterBudidayaDialog.prototype.getDeletePermission = function () { return Master.MasterBudidayaRow.deletePermission; };
            MasterBudidayaDialog.prototype.getInsertPermission = function () { return Master.MasterBudidayaRow.insertPermission; };
            MasterBudidayaDialog.prototype.getUpdatePermission = function () { return Master.MasterBudidayaRow.updatePermission; };
            MasterBudidayaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterBudidayaDialog);
            return MasterBudidayaDialog;
        }(Serenity.EntityDialog));
        Master.MasterBudidayaDialog = MasterBudidayaDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterBudidayaGrid = /** @class */ (function (_super) {
            __extends(MasterBudidayaGrid, _super);
            function MasterBudidayaGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterBudidayaGrid.prototype.getColumnsKey = function () { return 'Master.MasterBudidaya'; };
            MasterBudidayaGrid.prototype.getDialogType = function () { return Master.MasterBudidayaDialog; };
            MasterBudidayaGrid.prototype.getIdProperty = function () { return Master.MasterBudidayaRow.idProperty; };
            MasterBudidayaGrid.prototype.getInsertPermission = function () { return Master.MasterBudidayaRow.insertPermission; };
            MasterBudidayaGrid.prototype.getLocalTextPrefix = function () { return Master.MasterBudidayaRow.localTextPrefix; };
            MasterBudidayaGrid.prototype.getService = function () { return Master.MasterBudidayaService.baseUrl; };
            MasterBudidayaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterBudidayaGrid);
            return MasterBudidayaGrid;
        }(Serenity.EntityGrid));
        Master.MasterBudidayaGrid = MasterBudidayaGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterDesaDialog = /** @class */ (function (_super) {
            __extends(MasterDesaDialog, _super);
            function MasterDesaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterDesaForm(_this.idPrefix);
                return _this;
            }
            MasterDesaDialog.prototype.getFormKey = function () { return Master.MasterDesaForm.formKey; };
            MasterDesaDialog.prototype.getIdProperty = function () { return Master.MasterDesaRow.idProperty; };
            MasterDesaDialog.prototype.getLocalTextPrefix = function () { return Master.MasterDesaRow.localTextPrefix; };
            MasterDesaDialog.prototype.getNameProperty = function () { return Master.MasterDesaRow.nameProperty; };
            MasterDesaDialog.prototype.getService = function () { return Master.MasterDesaService.baseUrl; };
            MasterDesaDialog.prototype.getDeletePermission = function () { return Master.MasterDesaRow.deletePermission; };
            MasterDesaDialog.prototype.getInsertPermission = function () { return Master.MasterDesaRow.insertPermission; };
            MasterDesaDialog.prototype.getUpdatePermission = function () { return Master.MasterDesaRow.updatePermission; };
            MasterDesaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterDesaDialog);
            return MasterDesaDialog;
        }(Serenity.EntityDialog));
        Master.MasterDesaDialog = MasterDesaDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterDesaGrid = /** @class */ (function (_super) {
            __extends(MasterDesaGrid, _super);
            function MasterDesaGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterDesaGrid.prototype.getColumnsKey = function () { return 'Master.MasterDesa'; };
            MasterDesaGrid.prototype.getDialogType = function () { return Master.MasterDesaDialog; };
            MasterDesaGrid.prototype.getIdProperty = function () { return Master.MasterDesaRow.idProperty; };
            MasterDesaGrid.prototype.getInsertPermission = function () { return Master.MasterDesaRow.insertPermission; };
            MasterDesaGrid.prototype.getLocalTextPrefix = function () { return Master.MasterDesaRow.localTextPrefix; };
            MasterDesaGrid.prototype.getService = function () { return Master.MasterDesaService.baseUrl; };
            MasterDesaGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "LogoDesa" /* LogoDesa */; }).format =
                    function (ctx) { return "<a href=\"../../../upload/" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            MasterDesaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterDesaGrid);
            return MasterDesaGrid;
        }(Serenity.EntityGrid));
        Master.MasterDesaGrid = MasterDesaGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterFormulirDialog = /** @class */ (function (_super) {
            __extends(MasterFormulirDialog, _super);
            function MasterFormulirDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterFormulirForm(_this.idPrefix);
                return _this;
            }
            MasterFormulirDialog.prototype.getFormKey = function () { return Master.MasterFormulirForm.formKey; };
            MasterFormulirDialog.prototype.getIdProperty = function () { return Master.MasterFormulirRow.idProperty; };
            MasterFormulirDialog.prototype.getLocalTextPrefix = function () { return Master.MasterFormulirRow.localTextPrefix; };
            MasterFormulirDialog.prototype.getNameProperty = function () { return Master.MasterFormulirRow.nameProperty; };
            MasterFormulirDialog.prototype.getService = function () { return Master.MasterFormulirService.baseUrl; };
            MasterFormulirDialog.prototype.getDeletePermission = function () { return Master.MasterFormulirRow.deletePermission; };
            MasterFormulirDialog.prototype.getInsertPermission = function () { return Master.MasterFormulirRow.insertPermission; };
            MasterFormulirDialog.prototype.getUpdatePermission = function () { return Master.MasterFormulirRow.updatePermission; };
            MasterFormulirDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterFormulirDialog);
            return MasterFormulirDialog;
        }(Serenity.EntityDialog));
        Master.MasterFormulirDialog = MasterFormulirDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterFormulirGrid = /** @class */ (function (_super) {
            __extends(MasterFormulirGrid, _super);
            function MasterFormulirGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterFormulirGrid.prototype.getColumnsKey = function () { return 'Master.MasterFormulir'; };
            MasterFormulirGrid.prototype.getDialogType = function () { return Master.MasterFormulirDialog; };
            MasterFormulirGrid.prototype.getIdProperty = function () { return Master.MasterFormulirRow.idProperty; };
            MasterFormulirGrid.prototype.getInsertPermission = function () { return Master.MasterFormulirRow.insertPermission; };
            MasterFormulirGrid.prototype.getLocalTextPrefix = function () { return Master.MasterFormulirRow.localTextPrefix; };
            MasterFormulirGrid.prototype.getService = function () { return Master.MasterFormulirService.baseUrl; };
            MasterFormulirGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterFormulirGrid);
            return MasterFormulirGrid;
        }(Serenity.EntityGrid));
        Master.MasterFormulirGrid = MasterFormulirGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterForumDialog = /** @class */ (function (_super) {
            __extends(MasterForumDialog, _super);
            function MasterForumDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterForumForm(_this.idPrefix);
                return _this;
            }
            MasterForumDialog.prototype.getFormKey = function () { return Master.MasterForumForm.formKey; };
            MasterForumDialog.prototype.getIdProperty = function () { return Master.MasterForumRow.idProperty; };
            MasterForumDialog.prototype.getLocalTextPrefix = function () { return Master.MasterForumRow.localTextPrefix; };
            MasterForumDialog.prototype.getNameProperty = function () { return Master.MasterForumRow.nameProperty; };
            MasterForumDialog.prototype.getService = function () { return Master.MasterForumService.baseUrl; };
            MasterForumDialog.prototype.getDeletePermission = function () { return Master.MasterForumRow.deletePermission; };
            MasterForumDialog.prototype.getInsertPermission = function () { return Master.MasterForumRow.insertPermission; };
            MasterForumDialog.prototype.getUpdatePermission = function () { return Master.MasterForumRow.updatePermission; };
            MasterForumDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterForumDialog);
            return MasterForumDialog;
        }(Serenity.EntityDialog));
        Master.MasterForumDialog = MasterForumDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterForumGrid = /** @class */ (function (_super) {
            __extends(MasterForumGrid, _super);
            function MasterForumGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterForumGrid.prototype.getColumnsKey = function () { return 'Master.MasterForum'; };
            MasterForumGrid.prototype.getDialogType = function () { return Master.MasterForumDialog; };
            MasterForumGrid.prototype.getIdProperty = function () { return Master.MasterForumRow.idProperty; };
            MasterForumGrid.prototype.getInsertPermission = function () { return Master.MasterForumRow.insertPermission; };
            MasterForumGrid.prototype.getLocalTextPrefix = function () { return Master.MasterForumRow.localTextPrefix; };
            MasterForumGrid.prototype.getService = function () { return Master.MasterForumService.baseUrl; };
            MasterForumGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterForumGrid);
            return MasterForumGrid;
        }(Serenity.EntityGrid));
        Master.MasterForumGrid = MasterForumGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterHasilBudidayaDialog = /** @class */ (function (_super) {
            __extends(MasterHasilBudidayaDialog, _super);
            function MasterHasilBudidayaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterHasilBudidayaForm(_this.idPrefix);
                return _this;
            }
            MasterHasilBudidayaDialog.prototype.getFormKey = function () { return Master.MasterHasilBudidayaForm.formKey; };
            MasterHasilBudidayaDialog.prototype.getIdProperty = function () { return Master.MasterHasilBudidayaRow.idProperty; };
            MasterHasilBudidayaDialog.prototype.getLocalTextPrefix = function () { return Master.MasterHasilBudidayaRow.localTextPrefix; };
            MasterHasilBudidayaDialog.prototype.getNameProperty = function () { return Master.MasterHasilBudidayaRow.nameProperty; };
            MasterHasilBudidayaDialog.prototype.getService = function () { return Master.MasterHasilBudidayaService.baseUrl; };
            MasterHasilBudidayaDialog.prototype.getDeletePermission = function () { return Master.MasterHasilBudidayaRow.deletePermission; };
            MasterHasilBudidayaDialog.prototype.getInsertPermission = function () { return Master.MasterHasilBudidayaRow.insertPermission; };
            MasterHasilBudidayaDialog.prototype.getUpdatePermission = function () { return Master.MasterHasilBudidayaRow.updatePermission; };
            MasterHasilBudidayaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterHasilBudidayaDialog);
            return MasterHasilBudidayaDialog;
        }(SDD.Common.GridEditorDialog));
        Master.MasterHasilBudidayaDialog = MasterHasilBudidayaDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterHasilBudidayaGrid = /** @class */ (function (_super) {
            __extends(MasterHasilBudidayaGrid, _super);
            function MasterHasilBudidayaGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterHasilBudidayaGrid.prototype.getColumnsKey = function () { return 'Master.MasterHasilBudidaya'; };
            MasterHasilBudidayaGrid.prototype.getDialogType = function () { return Master.MasterHasilBudidayaDialog; };
            MasterHasilBudidayaGrid.prototype.getIdProperty = function () { return Master.MasterHasilBudidayaRow.idProperty; };
            MasterHasilBudidayaGrid.prototype.getInsertPermission = function () { return Master.MasterHasilBudidayaRow.insertPermission; };
            MasterHasilBudidayaGrid.prototype.getLocalTextPrefix = function () { return Master.MasterHasilBudidayaRow.localTextPrefix; };
            MasterHasilBudidayaGrid.prototype.getService = function () { return Master.MasterHasilBudidayaService.baseUrl; };
            MasterHasilBudidayaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterHasilBudidayaGrid);
            return MasterHasilBudidayaGrid;
        }(SDD.Common.GridEditorBase));
        Master.MasterHasilBudidayaGrid = MasterHasilBudidayaGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterHubunganDialog = /** @class */ (function (_super) {
            __extends(MasterHubunganDialog, _super);
            function MasterHubunganDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterHubunganForm(_this.idPrefix);
                return _this;
            }
            MasterHubunganDialog.prototype.getFormKey = function () { return Master.MasterHubunganForm.formKey; };
            MasterHubunganDialog.prototype.getIdProperty = function () { return Master.MasterHubunganRow.idProperty; };
            MasterHubunganDialog.prototype.getLocalTextPrefix = function () { return Master.MasterHubunganRow.localTextPrefix; };
            MasterHubunganDialog.prototype.getNameProperty = function () { return Master.MasterHubunganRow.nameProperty; };
            MasterHubunganDialog.prototype.getService = function () { return Master.MasterHubunganService.baseUrl; };
            MasterHubunganDialog.prototype.getDeletePermission = function () { return Master.MasterHubunganRow.deletePermission; };
            MasterHubunganDialog.prototype.getInsertPermission = function () { return Master.MasterHubunganRow.insertPermission; };
            MasterHubunganDialog.prototype.getUpdatePermission = function () { return Master.MasterHubunganRow.updatePermission; };
            MasterHubunganDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterHubunganDialog);
            return MasterHubunganDialog;
        }(Serenity.EntityDialog));
        Master.MasterHubunganDialog = MasterHubunganDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterHubunganGrid = /** @class */ (function (_super) {
            __extends(MasterHubunganGrid, _super);
            function MasterHubunganGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterHubunganGrid.prototype.getColumnsKey = function () { return 'Master.MasterHubungan'; };
            MasterHubunganGrid.prototype.getDialogType = function () { return Master.MasterHubunganDialog; };
            MasterHubunganGrid.prototype.getIdProperty = function () { return Master.MasterHubunganRow.idProperty; };
            MasterHubunganGrid.prototype.getInsertPermission = function () { return Master.MasterHubunganRow.insertPermission; };
            MasterHubunganGrid.prototype.getLocalTextPrefix = function () { return Master.MasterHubunganRow.localTextPrefix; };
            MasterHubunganGrid.prototype.getService = function () { return Master.MasterHubunganService.baseUrl; };
            MasterHubunganGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterHubunganGrid);
            return MasterHubunganGrid;
        }(Serenity.EntityGrid));
        Master.MasterHubunganGrid = MasterHubunganGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterJabatanDialog = /** @class */ (function (_super) {
            __extends(MasterJabatanDialog, _super);
            function MasterJabatanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterJabatanForm(_this.idPrefix);
                return _this;
            }
            MasterJabatanDialog.prototype.getFormKey = function () { return Master.MasterJabatanForm.formKey; };
            MasterJabatanDialog.prototype.getIdProperty = function () { return Master.MasterJabatanRow.idProperty; };
            MasterJabatanDialog.prototype.getLocalTextPrefix = function () { return Master.MasterJabatanRow.localTextPrefix; };
            MasterJabatanDialog.prototype.getNameProperty = function () { return Master.MasterJabatanRow.nameProperty; };
            MasterJabatanDialog.prototype.getService = function () { return Master.MasterJabatanService.baseUrl; };
            MasterJabatanDialog.prototype.getDeletePermission = function () { return Master.MasterJabatanRow.deletePermission; };
            MasterJabatanDialog.prototype.getInsertPermission = function () { return Master.MasterJabatanRow.insertPermission; };
            MasterJabatanDialog.prototype.getUpdatePermission = function () { return Master.MasterJabatanRow.updatePermission; };
            MasterJabatanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterJabatanDialog);
            return MasterJabatanDialog;
        }(Serenity.EntityDialog));
        Master.MasterJabatanDialog = MasterJabatanDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterJabatanGrid = /** @class */ (function (_super) {
            __extends(MasterJabatanGrid, _super);
            function MasterJabatanGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterJabatanGrid.prototype.getColumnsKey = function () { return 'Master.MasterJabatan'; };
            MasterJabatanGrid.prototype.getDialogType = function () { return Master.MasterJabatanDialog; };
            MasterJabatanGrid.prototype.getIdProperty = function () { return Master.MasterJabatanRow.idProperty; };
            MasterJabatanGrid.prototype.getInsertPermission = function () { return Master.MasterJabatanRow.insertPermission; };
            MasterJabatanGrid.prototype.getLocalTextPrefix = function () { return Master.MasterJabatanRow.localTextPrefix; };
            MasterJabatanGrid.prototype.getService = function () { return Master.MasterJabatanService.baseUrl; };
            MasterJabatanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterJabatanGrid);
            return MasterJabatanGrid;
        }(Serenity.EntityGrid));
        Master.MasterJabatanGrid = MasterJabatanGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterKabupatenDialog = /** @class */ (function (_super) {
            __extends(MasterKabupatenDialog, _super);
            function MasterKabupatenDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterKabupatenForm(_this.idPrefix);
                return _this;
            }
            MasterKabupatenDialog.prototype.getFormKey = function () { return Master.MasterKabupatenForm.formKey; };
            MasterKabupatenDialog.prototype.getIdProperty = function () { return Master.MasterKabupatenRow.idProperty; };
            MasterKabupatenDialog.prototype.getLocalTextPrefix = function () { return Master.MasterKabupatenRow.localTextPrefix; };
            MasterKabupatenDialog.prototype.getNameProperty = function () { return Master.MasterKabupatenRow.nameProperty; };
            MasterKabupatenDialog.prototype.getService = function () { return Master.MasterKabupatenService.baseUrl; };
            MasterKabupatenDialog.prototype.getDeletePermission = function () { return Master.MasterKabupatenRow.deletePermission; };
            MasterKabupatenDialog.prototype.getInsertPermission = function () { return Master.MasterKabupatenRow.insertPermission; };
            MasterKabupatenDialog.prototype.getUpdatePermission = function () { return Master.MasterKabupatenRow.updatePermission; };
            MasterKabupatenDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterKabupatenDialog);
            return MasterKabupatenDialog;
        }(Serenity.EntityDialog));
        Master.MasterKabupatenDialog = MasterKabupatenDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterKabupatenGrid = /** @class */ (function (_super) {
            __extends(MasterKabupatenGrid, _super);
            function MasterKabupatenGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterKabupatenGrid.prototype.getColumnsKey = function () { return 'Master.MasterKabupaten'; };
            MasterKabupatenGrid.prototype.getDialogType = function () { return Master.MasterKabupatenDialog; };
            MasterKabupatenGrid.prototype.getIdProperty = function () { return Master.MasterKabupatenRow.idProperty; };
            MasterKabupatenGrid.prototype.getInsertPermission = function () { return Master.MasterKabupatenRow.insertPermission; };
            MasterKabupatenGrid.prototype.getLocalTextPrefix = function () { return Master.MasterKabupatenRow.localTextPrefix; };
            MasterKabupatenGrid.prototype.getService = function () { return Master.MasterKabupatenService.baseUrl; };
            MasterKabupatenGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "LogoKabupaten" /* LogoKabupaten */; }).format =
                    function (ctx) { return "<a href=\"../../../upload/" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            MasterKabupatenGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterKabupatenGrid);
            return MasterKabupatenGrid;
        }(Serenity.EntityGrid));
        Master.MasterKabupatenGrid = MasterKabupatenGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterKecamatanDialog = /** @class */ (function (_super) {
            __extends(MasterKecamatanDialog, _super);
            function MasterKecamatanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterKecamatanForm(_this.idPrefix);
                return _this;
            }
            MasterKecamatanDialog.prototype.getFormKey = function () { return Master.MasterKecamatanForm.formKey; };
            MasterKecamatanDialog.prototype.getIdProperty = function () { return Master.MasterKecamatanRow.idProperty; };
            MasterKecamatanDialog.prototype.getLocalTextPrefix = function () { return Master.MasterKecamatanRow.localTextPrefix; };
            MasterKecamatanDialog.prototype.getNameProperty = function () { return Master.MasterKecamatanRow.nameProperty; };
            MasterKecamatanDialog.prototype.getService = function () { return Master.MasterKecamatanService.baseUrl; };
            MasterKecamatanDialog.prototype.getDeletePermission = function () { return Master.MasterKecamatanRow.deletePermission; };
            MasterKecamatanDialog.prototype.getInsertPermission = function () { return Master.MasterKecamatanRow.insertPermission; };
            MasterKecamatanDialog.prototype.getUpdatePermission = function () { return Master.MasterKecamatanRow.updatePermission; };
            MasterKecamatanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterKecamatanDialog);
            return MasterKecamatanDialog;
        }(Serenity.EntityDialog));
        Master.MasterKecamatanDialog = MasterKecamatanDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterKecamatanGrid = /** @class */ (function (_super) {
            __extends(MasterKecamatanGrid, _super);
            function MasterKecamatanGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterKecamatanGrid.prototype.getColumnsKey = function () { return 'Master.MasterKecamatan'; };
            MasterKecamatanGrid.prototype.getDialogType = function () { return Master.MasterKecamatanDialog; };
            MasterKecamatanGrid.prototype.getIdProperty = function () { return Master.MasterKecamatanRow.idProperty; };
            MasterKecamatanGrid.prototype.getInsertPermission = function () { return Master.MasterKecamatanRow.insertPermission; };
            MasterKecamatanGrid.prototype.getLocalTextPrefix = function () { return Master.MasterKecamatanRow.localTextPrefix; };
            MasterKecamatanGrid.prototype.getService = function () { return Master.MasterKecamatanService.baseUrl; };
            MasterKecamatanGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "LogoKecamatan" /* LogoKecamatan */; }).format =
                    function (ctx) { return "<a href=\"../../../upload/" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            MasterKecamatanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterKecamatanGrid);
            return MasterKecamatanGrid;
        }(Serenity.EntityGrid));
        Master.MasterKecamatanGrid = MasterKecamatanGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterPekerjaanDialog = /** @class */ (function (_super) {
            __extends(MasterPekerjaanDialog, _super);
            function MasterPekerjaanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterPekerjaanForm(_this.idPrefix);
                return _this;
            }
            MasterPekerjaanDialog.prototype.getFormKey = function () { return Master.MasterPekerjaanForm.formKey; };
            MasterPekerjaanDialog.prototype.getIdProperty = function () { return Master.MasterPekerjaanRow.idProperty; };
            MasterPekerjaanDialog.prototype.getLocalTextPrefix = function () { return Master.MasterPekerjaanRow.localTextPrefix; };
            MasterPekerjaanDialog.prototype.getNameProperty = function () { return Master.MasterPekerjaanRow.nameProperty; };
            MasterPekerjaanDialog.prototype.getService = function () { return Master.MasterPekerjaanService.baseUrl; };
            MasterPekerjaanDialog.prototype.getDeletePermission = function () { return Master.MasterPekerjaanRow.deletePermission; };
            MasterPekerjaanDialog.prototype.getInsertPermission = function () { return Master.MasterPekerjaanRow.insertPermission; };
            MasterPekerjaanDialog.prototype.getUpdatePermission = function () { return Master.MasterPekerjaanRow.updatePermission; };
            MasterPekerjaanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterPekerjaanDialog);
            return MasterPekerjaanDialog;
        }(Serenity.EntityDialog));
        Master.MasterPekerjaanDialog = MasterPekerjaanDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterPekerjaanGrid = /** @class */ (function (_super) {
            __extends(MasterPekerjaanGrid, _super);
            function MasterPekerjaanGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterPekerjaanGrid.prototype.getColumnsKey = function () { return 'Master.MasterPekerjaan'; };
            MasterPekerjaanGrid.prototype.getDialogType = function () { return Master.MasterPekerjaanDialog; };
            MasterPekerjaanGrid.prototype.getIdProperty = function () { return Master.MasterPekerjaanRow.idProperty; };
            MasterPekerjaanGrid.prototype.getInsertPermission = function () { return Master.MasterPekerjaanRow.insertPermission; };
            MasterPekerjaanGrid.prototype.getLocalTextPrefix = function () { return Master.MasterPekerjaanRow.localTextPrefix; };
            MasterPekerjaanGrid.prototype.getService = function () { return Master.MasterPekerjaanService.baseUrl; };
            MasterPekerjaanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterPekerjaanGrid);
            return MasterPekerjaanGrid;
        }(Serenity.EntityGrid));
        Master.MasterPekerjaanGrid = MasterPekerjaanGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterPropinsiDialog = /** @class */ (function (_super) {
            __extends(MasterPropinsiDialog, _super);
            function MasterPropinsiDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterPropinsiForm(_this.idPrefix);
                return _this;
            }
            MasterPropinsiDialog.prototype.getFormKey = function () { return Master.MasterPropinsiForm.formKey; };
            MasterPropinsiDialog.prototype.getIdProperty = function () { return Master.MasterPropinsiRow.idProperty; };
            MasterPropinsiDialog.prototype.getLocalTextPrefix = function () { return Master.MasterPropinsiRow.localTextPrefix; };
            MasterPropinsiDialog.prototype.getNameProperty = function () { return Master.MasterPropinsiRow.nameProperty; };
            MasterPropinsiDialog.prototype.getService = function () { return Master.MasterPropinsiService.baseUrl; };
            MasterPropinsiDialog.prototype.getDeletePermission = function () { return Master.MasterPropinsiRow.deletePermission; };
            MasterPropinsiDialog.prototype.getInsertPermission = function () { return Master.MasterPropinsiRow.insertPermission; };
            MasterPropinsiDialog.prototype.getUpdatePermission = function () { return Master.MasterPropinsiRow.updatePermission; };
            MasterPropinsiDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterPropinsiDialog);
            return MasterPropinsiDialog;
        }(Serenity.EntityDialog));
        Master.MasterPropinsiDialog = MasterPropinsiDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterPropinsiGrid = /** @class */ (function (_super) {
            __extends(MasterPropinsiGrid, _super);
            function MasterPropinsiGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterPropinsiGrid.prototype.getColumnsKey = function () { return 'Master.MasterPropinsi'; };
            MasterPropinsiGrid.prototype.getDialogType = function () { return Master.MasterPropinsiDialog; };
            MasterPropinsiGrid.prototype.getIdProperty = function () { return Master.MasterPropinsiRow.idProperty; };
            MasterPropinsiGrid.prototype.getInsertPermission = function () { return Master.MasterPropinsiRow.insertPermission; };
            MasterPropinsiGrid.prototype.getLocalTextPrefix = function () { return Master.MasterPropinsiRow.localTextPrefix; };
            MasterPropinsiGrid.prototype.getService = function () { return Master.MasterPropinsiService.baseUrl; };
            MasterPropinsiGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "LogoPropinsi" /* LogoPropinsi */; }).format =
                    function (ctx) { return "<a href=\"../../../upload/" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            MasterPropinsiGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterPropinsiGrid);
            return MasterPropinsiGrid;
        }(Serenity.EntityGrid));
        Master.MasterPropinsiGrid = MasterPropinsiGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterSatuanDialog = /** @class */ (function (_super) {
            __extends(MasterSatuanDialog, _super);
            function MasterSatuanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterSatuanForm(_this.idPrefix);
                return _this;
            }
            MasterSatuanDialog.prototype.getFormKey = function () { return Master.MasterSatuanForm.formKey; };
            MasterSatuanDialog.prototype.getIdProperty = function () { return Master.MasterSatuanRow.idProperty; };
            MasterSatuanDialog.prototype.getLocalTextPrefix = function () { return Master.MasterSatuanRow.localTextPrefix; };
            MasterSatuanDialog.prototype.getNameProperty = function () { return Master.MasterSatuanRow.nameProperty; };
            MasterSatuanDialog.prototype.getService = function () { return Master.MasterSatuanService.baseUrl; };
            MasterSatuanDialog.prototype.getDeletePermission = function () { return Master.MasterSatuanRow.deletePermission; };
            MasterSatuanDialog.prototype.getInsertPermission = function () { return Master.MasterSatuanRow.insertPermission; };
            MasterSatuanDialog.prototype.getUpdatePermission = function () { return Master.MasterSatuanRow.updatePermission; };
            MasterSatuanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterSatuanDialog);
            return MasterSatuanDialog;
        }(Serenity.EntityDialog));
        Master.MasterSatuanDialog = MasterSatuanDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterSatuanGrid = /** @class */ (function (_super) {
            __extends(MasterSatuanGrid, _super);
            function MasterSatuanGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterSatuanGrid.prototype.getColumnsKey = function () { return 'Master.MasterSatuan'; };
            MasterSatuanGrid.prototype.getDialogType = function () { return Master.MasterSatuanDialog; };
            MasterSatuanGrid.prototype.getIdProperty = function () { return Master.MasterSatuanRow.idProperty; };
            MasterSatuanGrid.prototype.getInsertPermission = function () { return Master.MasterSatuanRow.insertPermission; };
            MasterSatuanGrid.prototype.getLocalTextPrefix = function () { return Master.MasterSatuanRow.localTextPrefix; };
            MasterSatuanGrid.prototype.getService = function () { return Master.MasterSatuanService.baseUrl; };
            MasterSatuanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterSatuanGrid);
            return MasterSatuanGrid;
        }(Serenity.EntityGrid));
        Master.MasterSatuanGrid = MasterSatuanGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterStatusDialog = /** @class */ (function (_super) {
            __extends(MasterStatusDialog, _super);
            function MasterStatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterStatusForm(_this.idPrefix);
                return _this;
            }
            MasterStatusDialog.prototype.getFormKey = function () { return Master.MasterStatusForm.formKey; };
            MasterStatusDialog.prototype.getIdProperty = function () { return Master.MasterStatusRow.idProperty; };
            MasterStatusDialog.prototype.getLocalTextPrefix = function () { return Master.MasterStatusRow.localTextPrefix; };
            MasterStatusDialog.prototype.getNameProperty = function () { return Master.MasterStatusRow.nameProperty; };
            MasterStatusDialog.prototype.getService = function () { return Master.MasterStatusService.baseUrl; };
            MasterStatusDialog.prototype.getDeletePermission = function () { return Master.MasterStatusRow.deletePermission; };
            MasterStatusDialog.prototype.getInsertPermission = function () { return Master.MasterStatusRow.insertPermission; };
            MasterStatusDialog.prototype.getUpdatePermission = function () { return Master.MasterStatusRow.updatePermission; };
            MasterStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterStatusDialog);
            return MasterStatusDialog;
        }(Serenity.EntityDialog));
        Master.MasterStatusDialog = MasterStatusDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterStatusGrid = /** @class */ (function (_super) {
            __extends(MasterStatusGrid, _super);
            function MasterStatusGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterStatusGrid.prototype.getColumnsKey = function () { return 'Master.MasterStatus'; };
            MasterStatusGrid.prototype.getDialogType = function () { return Master.MasterStatusDialog; };
            MasterStatusGrid.prototype.getIdProperty = function () { return Master.MasterStatusRow.idProperty; };
            MasterStatusGrid.prototype.getInsertPermission = function () { return Master.MasterStatusRow.insertPermission; };
            MasterStatusGrid.prototype.getLocalTextPrefix = function () { return Master.MasterStatusRow.localTextPrefix; };
            MasterStatusGrid.prototype.getService = function () { return Master.MasterStatusService.baseUrl; };
            MasterStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterStatusGrid);
            return MasterStatusGrid;
        }(Serenity.EntityGrid));
        Master.MasterStatusGrid = MasterStatusGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterTujuanPengaduanDialog = /** @class */ (function (_super) {
            __extends(MasterTujuanPengaduanDialog, _super);
            function MasterTujuanPengaduanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterTujuanPengaduanForm(_this.idPrefix);
                return _this;
            }
            MasterTujuanPengaduanDialog.prototype.getFormKey = function () { return Master.MasterTujuanPengaduanForm.formKey; };
            MasterTujuanPengaduanDialog.prototype.getIdProperty = function () { return Master.MasterTujuanPengaduanRow.idProperty; };
            MasterTujuanPengaduanDialog.prototype.getLocalTextPrefix = function () { return Master.MasterTujuanPengaduanRow.localTextPrefix; };
            MasterTujuanPengaduanDialog.prototype.getNameProperty = function () { return Master.MasterTujuanPengaduanRow.nameProperty; };
            MasterTujuanPengaduanDialog.prototype.getService = function () { return Master.MasterTujuanPengaduanService.baseUrl; };
            MasterTujuanPengaduanDialog.prototype.getDeletePermission = function () { return Master.MasterTujuanPengaduanRow.deletePermission; };
            MasterTujuanPengaduanDialog.prototype.getInsertPermission = function () { return Master.MasterTujuanPengaduanRow.insertPermission; };
            MasterTujuanPengaduanDialog.prototype.getUpdatePermission = function () { return Master.MasterTujuanPengaduanRow.updatePermission; };
            MasterTujuanPengaduanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterTujuanPengaduanDialog);
            return MasterTujuanPengaduanDialog;
        }(Serenity.EntityDialog));
        Master.MasterTujuanPengaduanDialog = MasterTujuanPengaduanDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterTujuanPengaduanGrid = /** @class */ (function (_super) {
            __extends(MasterTujuanPengaduanGrid, _super);
            function MasterTujuanPengaduanGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterTujuanPengaduanGrid.prototype.getColumnsKey = function () { return 'Master.MasterTujuanPengaduan'; };
            MasterTujuanPengaduanGrid.prototype.getDialogType = function () { return Master.MasterTujuanPengaduanDialog; };
            MasterTujuanPengaduanGrid.prototype.getIdProperty = function () { return Master.MasterTujuanPengaduanRow.idProperty; };
            MasterTujuanPengaduanGrid.prototype.getInsertPermission = function () { return Master.MasterTujuanPengaduanRow.insertPermission; };
            MasterTujuanPengaduanGrid.prototype.getLocalTextPrefix = function () { return Master.MasterTujuanPengaduanRow.localTextPrefix; };
            MasterTujuanPengaduanGrid.prototype.getService = function () { return Master.MasterTujuanPengaduanService.baseUrl; };
            MasterTujuanPengaduanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterTujuanPengaduanGrid);
            return MasterTujuanPengaduanGrid;
        }(Serenity.EntityGrid));
        Master.MasterTujuanPengaduanGrid = MasterTujuanPengaduanGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterVersionDialog = /** @class */ (function (_super) {
            __extends(MasterVersionDialog, _super);
            function MasterVersionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.MasterVersionForm(_this.idPrefix);
                return _this;
            }
            MasterVersionDialog.prototype.getFormKey = function () { return Master.MasterVersionForm.formKey; };
            MasterVersionDialog.prototype.getIdProperty = function () { return Master.MasterVersionRow.idProperty; };
            MasterVersionDialog.prototype.getLocalTextPrefix = function () { return Master.MasterVersionRow.localTextPrefix; };
            MasterVersionDialog.prototype.getNameProperty = function () { return Master.MasterVersionRow.nameProperty; };
            MasterVersionDialog.prototype.getService = function () { return Master.MasterVersionService.baseUrl; };
            MasterVersionDialog.prototype.getDeletePermission = function () { return Master.MasterVersionRow.deletePermission; };
            MasterVersionDialog.prototype.getInsertPermission = function () { return Master.MasterVersionRow.insertPermission; };
            MasterVersionDialog.prototype.getUpdatePermission = function () { return Master.MasterVersionRow.updatePermission; };
            MasterVersionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterVersionDialog);
            return MasterVersionDialog;
        }(Serenity.EntityDialog));
        Master.MasterVersionDialog = MasterVersionDialog;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Master;
    (function (Master) {
        var MasterVersionGrid = /** @class */ (function (_super) {
            __extends(MasterVersionGrid, _super);
            function MasterVersionGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterVersionGrid.prototype.getColumnsKey = function () { return 'Master.MasterVersion'; };
            MasterVersionGrid.prototype.getDialogType = function () { return Master.MasterVersionDialog; };
            MasterVersionGrid.prototype.getIdProperty = function () { return Master.MasterVersionRow.idProperty; };
            MasterVersionGrid.prototype.getInsertPermission = function () { return Master.MasterVersionRow.insertPermission; };
            MasterVersionGrid.prototype.getLocalTextPrefix = function () { return Master.MasterVersionRow.localTextPrefix; };
            MasterVersionGrid.prototype.getService = function () { return Master.MasterVersionService.baseUrl; };
            MasterVersionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterVersionGrid);
            return MasterVersionGrid;
        }(Serenity.EntityGrid));
        Master.MasterVersionGrid = MasterVersionGrid;
    })(Master = SDD.Master || (SDD.Master = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = SDD.Membership || (SDD.Membership = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('NewPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = SDD.Membership || (SDD.Membership = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = SDD.Membership || (SDD.Membership = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = SDD.Membership || (SDD.Membership = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                            //  Address: this.form.Address.value,
                            //   IdDesa: this.form.IdDesa.value,
                            //IdHubungan: this.form.IdHubungan.value,
                            //NoKTP: this.form.NoKTP.value,
                            //NoKK: this.form.NoKK.value,
                            //PhoneNumber: this.form.PhoneNumber.value,
                            //WaNumber: this.form.WaNumber.value,
                            //JenisKelamin: this.form.JenisKelamin.value,
                            //TanggalLahir: this.form.TanggalLahir.value,
                            //Description: this.form.Description.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = SDD.Membership || (SDD.Membership = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var AparaturDesaDialog = /** @class */ (function (_super) {
            __extends(AparaturDesaDialog, _super);
            function AparaturDesaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.AparaturDesaForm(_this.idPrefix);
                return _this;
            }
            AparaturDesaDialog.prototype.getFormKey = function () { return Transaction.AparaturDesaForm.formKey; };
            AparaturDesaDialog.prototype.getIdProperty = function () { return Transaction.AparaturDesaRow.idProperty; };
            AparaturDesaDialog.prototype.getLocalTextPrefix = function () { return Transaction.AparaturDesaRow.localTextPrefix; };
            AparaturDesaDialog.prototype.getNameProperty = function () { return Transaction.AparaturDesaRow.nameProperty; };
            AparaturDesaDialog.prototype.getService = function () { return Transaction.AparaturDesaService.baseUrl; };
            AparaturDesaDialog.prototype.getDeletePermission = function () { return Transaction.AparaturDesaRow.deletePermission; };
            AparaturDesaDialog.prototype.getInsertPermission = function () { return Transaction.AparaturDesaRow.insertPermission; };
            AparaturDesaDialog.prototype.getUpdatePermission = function () { return Transaction.AparaturDesaRow.updatePermission; };
            AparaturDesaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AparaturDesaDialog);
            return AparaturDesaDialog;
        }(Serenity.EntityDialog));
        Transaction.AparaturDesaDialog = AparaturDesaDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var AparaturDesaGrid = /** @class */ (function (_super) {
            __extends(AparaturDesaGrid, _super);
            function AparaturDesaGrid(container) {
                return _super.call(this, container) || this;
            }
            AparaturDesaGrid.prototype.getColumnsKey = function () { return 'Transaction.AparaturDesa'; };
            AparaturDesaGrid.prototype.getDialogType = function () { return Transaction.AparaturDesaDialog; };
            AparaturDesaGrid.prototype.getIdProperty = function () { return Transaction.AparaturDesaRow.idProperty; };
            AparaturDesaGrid.prototype.getInsertPermission = function () { return Transaction.AparaturDesaRow.insertPermission; };
            AparaturDesaGrid.prototype.getLocalTextPrefix = function () { return Transaction.AparaturDesaRow.localTextPrefix; };
            AparaturDesaGrid.prototype.getService = function () { return Transaction.AparaturDesaService.baseUrl; };
            AparaturDesaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AparaturDesaGrid);
            return AparaturDesaGrid;
        }(Serenity.EntityGrid));
        Transaction.AparaturDesaGrid = AparaturDesaGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var BannerDialog = /** @class */ (function (_super) {
            __extends(BannerDialog, _super);
            function BannerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.BannerForm(_this.idPrefix);
                return _this;
            }
            BannerDialog.prototype.getFormKey = function () { return Transaction.BannerForm.formKey; };
            BannerDialog.prototype.getIdProperty = function () { return Transaction.BannerRow.idProperty; };
            BannerDialog.prototype.getLocalTextPrefix = function () { return Transaction.BannerRow.localTextPrefix; };
            BannerDialog.prototype.getNameProperty = function () { return Transaction.BannerRow.nameProperty; };
            BannerDialog.prototype.getService = function () { return Transaction.BannerService.baseUrl; };
            BannerDialog.prototype.getDeletePermission = function () { return Transaction.BannerRow.deletePermission; };
            BannerDialog.prototype.getInsertPermission = function () { return Transaction.BannerRow.insertPermission; };
            BannerDialog.prototype.getUpdatePermission = function () { return Transaction.BannerRow.updatePermission; };
            BannerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BannerDialog);
            return BannerDialog;
        }(Serenity.EntityDialog));
        Transaction.BannerDialog = BannerDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var BannerGrid = /** @class */ (function (_super) {
            __extends(BannerGrid, _super);
            function BannerGrid(container) {
                return _super.call(this, container) || this;
            }
            BannerGrid.prototype.getColumnsKey = function () { return 'Transaction.Banner'; };
            BannerGrid.prototype.getDialogType = function () { return Transaction.BannerDialog; };
            BannerGrid.prototype.getIdProperty = function () { return Transaction.BannerRow.idProperty; };
            BannerGrid.prototype.getInsertPermission = function () { return Transaction.BannerRow.insertPermission; };
            BannerGrid.prototype.getLocalTextPrefix = function () { return Transaction.BannerRow.localTextPrefix; };
            BannerGrid.prototype.getService = function () { return Transaction.BannerService.baseUrl; };
            BannerGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "UrlImage" /* UrlImage */; }).format =
                    function (ctx) { return "<span class=\"label bg-info text-white\">" + ("<a href=\"" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\"><i class=\"fa fa fa-file-excel-o text-red\"></i> Lihat Image</a>") + "</span>"; };
                return columns;
            };
            BannerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BannerGrid);
            return BannerGrid;
        }(Serenity.EntityGrid));
        Transaction.BannerGrid = BannerGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailAktaLahirDialog = /** @class */ (function (_super) {
            __extends(DetailAktaLahirDialog, _super);
            function DetailAktaLahirDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.DetailAktaLahirForm(_this.idPrefix);
                return _this;
            }
            DetailAktaLahirDialog.prototype.getFormKey = function () { return Transaction.DetailAktaLahirForm.formKey; };
            DetailAktaLahirDialog.prototype.getIdProperty = function () { return Transaction.DetailAktaLahirRow.idProperty; };
            DetailAktaLahirDialog.prototype.getLocalTextPrefix = function () { return Transaction.DetailAktaLahirRow.localTextPrefix; };
            DetailAktaLahirDialog.prototype.getNameProperty = function () { return Transaction.DetailAktaLahirRow.nameProperty; };
            DetailAktaLahirDialog.prototype.getService = function () { return Transaction.DetailAktaLahirService.baseUrl; };
            DetailAktaLahirDialog.prototype.getDeletePermission = function () { return Transaction.DetailAktaLahirRow.deletePermission; };
            DetailAktaLahirDialog.prototype.getInsertPermission = function () { return Transaction.DetailAktaLahirRow.insertPermission; };
            DetailAktaLahirDialog.prototype.getUpdatePermission = function () { return Transaction.DetailAktaLahirRow.updatePermission; };
            DetailAktaLahirDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailAktaLahirDialog);
            return DetailAktaLahirDialog;
        }(SDD.Common.GridEditorDialog));
        Transaction.DetailAktaLahirDialog = DetailAktaLahirDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailAktaLahirGrid = /** @class */ (function (_super) {
            __extends(DetailAktaLahirGrid, _super);
            function DetailAktaLahirGrid(container) {
                return _super.call(this, container) || this;
            }
            DetailAktaLahirGrid.prototype.getColumnsKey = function () { return 'Transaction.DetailAktaLahir'; };
            DetailAktaLahirGrid.prototype.getDialogType = function () { return Transaction.DetailAktaLahirDialog; };
            DetailAktaLahirGrid.prototype.getIdProperty = function () { return Transaction.DetailAktaLahirRow.idProperty; };
            DetailAktaLahirGrid.prototype.getInsertPermission = function () { return Transaction.DetailAktaLahirRow.insertPermission; };
            DetailAktaLahirGrid.prototype.getLocalTextPrefix = function () { return Transaction.DetailAktaLahirRow.localTextPrefix; };
            DetailAktaLahirGrid.prototype.getService = function () { return Transaction.DetailAktaLahirService.baseUrl; };
            DetailAktaLahirGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailAktaLahirGrid);
            return DetailAktaLahirGrid;
        }(SDD.Common.GridEditorBase));
        Transaction.DetailAktaLahirGrid = DetailAktaLahirGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailFlowFormDialog = /** @class */ (function (_super) {
            __extends(DetailFlowFormDialog, _super);
            function DetailFlowFormDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.DetailFlowFormForm(_this.idPrefix);
                return _this;
            }
            DetailFlowFormDialog.prototype.getFormKey = function () { return Transaction.DetailFlowFormForm.formKey; };
            DetailFlowFormDialog.prototype.getIdProperty = function () { return Transaction.DetailFlowFormRow.idProperty; };
            DetailFlowFormDialog.prototype.getLocalTextPrefix = function () { return Transaction.DetailFlowFormRow.localTextPrefix; };
            DetailFlowFormDialog.prototype.getService = function () { return Transaction.DetailFlowFormService.baseUrl; };
            DetailFlowFormDialog.prototype.getDeletePermission = function () { return Transaction.DetailFlowFormRow.deletePermission; };
            DetailFlowFormDialog.prototype.getInsertPermission = function () { return Transaction.DetailFlowFormRow.insertPermission; };
            DetailFlowFormDialog.prototype.getUpdatePermission = function () { return Transaction.DetailFlowFormRow.updatePermission; };
            DetailFlowFormDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailFlowFormDialog);
            return DetailFlowFormDialog;
        }(SDD.Common.GridEditorDialog));
        Transaction.DetailFlowFormDialog = DetailFlowFormDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailFlowFormGrid = /** @class */ (function (_super) {
            __extends(DetailFlowFormGrid, _super);
            function DetailFlowFormGrid(container) {
                return _super.call(this, container) || this;
            }
            DetailFlowFormGrid.prototype.getColumnsKey = function () { return 'Transaction.DetailFlowForm'; };
            DetailFlowFormGrid.prototype.getDialogType = function () { return Transaction.DetailFlowFormDialog; };
            DetailFlowFormGrid.prototype.getIdProperty = function () { return Transaction.DetailFlowFormRow.idProperty; };
            DetailFlowFormGrid.prototype.getInsertPermission = function () { return Transaction.DetailFlowFormRow.insertPermission; };
            DetailFlowFormGrid.prototype.getLocalTextPrefix = function () { return Transaction.DetailFlowFormRow.localTextPrefix; };
            DetailFlowFormGrid.prototype.getService = function () { return Transaction.DetailFlowFormService.baseUrl; };
            DetailFlowFormGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailFlowFormGrid);
            return DetailFlowFormGrid;
        }(SDD.Common.GridEditorBase));
        Transaction.DetailFlowFormGrid = DetailFlowFormGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailFormulirKkDialog = /** @class */ (function (_super) {
            __extends(DetailFormulirKkDialog, _super);
            function DetailFormulirKkDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.DetailFormulirKkForm(_this.idPrefix);
                return _this;
            }
            DetailFormulirKkDialog.prototype.getFormKey = function () { return Transaction.DetailFormulirKkForm.formKey; };
            DetailFormulirKkDialog.prototype.getIdProperty = function () { return Transaction.DetailFormulirKkRow.idProperty; };
            DetailFormulirKkDialog.prototype.getLocalTextPrefix = function () { return Transaction.DetailFormulirKkRow.localTextPrefix; };
            DetailFormulirKkDialog.prototype.getNameProperty = function () { return Transaction.DetailFormulirKkRow.nameProperty; };
            DetailFormulirKkDialog.prototype.getService = function () { return Transaction.DetailFormulirKkService.baseUrl; };
            DetailFormulirKkDialog.prototype.getDeletePermission = function () { return Transaction.DetailFormulirKkRow.deletePermission; };
            DetailFormulirKkDialog.prototype.getInsertPermission = function () { return Transaction.DetailFormulirKkRow.insertPermission; };
            DetailFormulirKkDialog.prototype.getUpdatePermission = function () { return Transaction.DetailFormulirKkRow.updatePermission; };
            DetailFormulirKkDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailFormulirKkDialog);
            return DetailFormulirKkDialog;
        }(SDD.Common.GridEditorDialog));
        Transaction.DetailFormulirKkDialog = DetailFormulirKkDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailFormulirKkGrid = /** @class */ (function (_super) {
            __extends(DetailFormulirKkGrid, _super);
            function DetailFormulirKkGrid(container) {
                return _super.call(this, container) || this;
            }
            DetailFormulirKkGrid.prototype.getColumnsKey = function () { return 'Transaction.DetailFormulirKk'; };
            DetailFormulirKkGrid.prototype.getDialogType = function () { return Transaction.DetailFormulirKkDialog; };
            DetailFormulirKkGrid.prototype.getIdProperty = function () { return Transaction.DetailFormulirKkRow.idProperty; };
            DetailFormulirKkGrid.prototype.getInsertPermission = function () { return Transaction.DetailFormulirKkRow.insertPermission; };
            DetailFormulirKkGrid.prototype.getLocalTextPrefix = function () { return Transaction.DetailFormulirKkRow.localTextPrefix; };
            DetailFormulirKkGrid.prototype.getService = function () { return Transaction.DetailFormulirKkService.baseUrl; };
            DetailFormulirKkGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailFormulirKkGrid);
            return DetailFormulirKkGrid;
        }(SDD.Common.GridEditorBase));
        Transaction.DetailFormulirKkGrid = DetailFormulirKkGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailForumDialog = /** @class */ (function (_super) {
            __extends(DetailForumDialog, _super);
            function DetailForumDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.DetailForumForm(_this.idPrefix);
                return _this;
            }
            DetailForumDialog.prototype.getFormKey = function () { return Transaction.DetailForumForm.formKey; };
            DetailForumDialog.prototype.getIdProperty = function () { return Transaction.DetailForumRow.idProperty; };
            DetailForumDialog.prototype.getLocalTextPrefix = function () { return Transaction.DetailForumRow.localTextPrefix; };
            DetailForumDialog.prototype.getNameProperty = function () { return Transaction.DetailForumRow.nameProperty; };
            DetailForumDialog.prototype.getService = function () { return Transaction.DetailForumService.baseUrl; };
            DetailForumDialog.prototype.getDeletePermission = function () { return Transaction.DetailForumRow.deletePermission; };
            DetailForumDialog.prototype.getInsertPermission = function () { return Transaction.DetailForumRow.insertPermission; };
            DetailForumDialog.prototype.getUpdatePermission = function () { return Transaction.DetailForumRow.updatePermission; };
            DetailForumDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                var user = SDD.Authorization.userDefinition.UserId;
                var roleid = SDD.Authorization.userDefinition.RoleId;
                if (roleid == 1) {
                    this.toolbar.findButton(".delete-button").hide();
                    this.toolbar.findButton(".save-and-close-button").hide();
                    this.toolbar.findButton(".apply-changes-button").hide();
                }
                else if (roleid == 2) {
                    this.toolbar.findButton(".delete-button").show();
                    this.toolbar.findButton(".save-and-close-button").show();
                    this.toolbar.findButton(".apply-changes-button").show();
                }
                else if (user == 1) {
                    this.toolbar.findButton(".delete-button").show();
                    this.toolbar.findButton(".save-and-close-button").show();
                    this.toolbar.findButton(".apply-changes-button").show();
                }
                var DialogNew = this.isNew();
                if (!DialogNew) {
                }
            };
            DetailForumDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailForumDialog);
            return DetailForumDialog;
        }(SDD.Common.GridEditorDialog));
        Transaction.DetailForumDialog = DetailForumDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailForumGrid = /** @class */ (function (_super) {
            __extends(DetailForumGrid, _super);
            function DetailForumGrid(container) {
                var _this = _super.call(this, container) || this;
                var user = SDD.Authorization.userDefinition.UserId;
                var roleid = SDD.Authorization.userDefinition.RoleId;
                if (roleid == 1) {
                    $(".add-button").hide();
                }
                else if (roleid == 2) {
                    $(".add-button").show();
                }
                else if (user == 1) {
                    $(".add-button").show();
                }
                return _this;
            }
            DetailForumGrid.prototype.getColumnsKey = function () { return 'Transaction.DetailForum'; };
            DetailForumGrid.prototype.getDialogType = function () { return Transaction.DetailForumDialog; };
            DetailForumGrid.prototype.getIdProperty = function () { return Transaction.DetailForumRow.idProperty; };
            DetailForumGrid.prototype.getInsertPermission = function () { return Transaction.DetailForumRow.insertPermission; };
            DetailForumGrid.prototype.getLocalTextPrefix = function () { return Transaction.DetailForumRow.localTextPrefix; };
            DetailForumGrid.prototype.getService = function () { return Transaction.DetailForumService.baseUrl; };
            DetailForumGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailForumGrid);
            return DetailForumGrid;
        }(SDD.Common.GridEditorBase));
        Transaction.DetailForumGrid = DetailForumGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailKapalNelayanDialog = /** @class */ (function (_super) {
            __extends(DetailKapalNelayanDialog, _super);
            function DetailKapalNelayanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.DetailKapalNelayanForm(_this.idPrefix);
                return _this;
            }
            DetailKapalNelayanDialog.prototype.getFormKey = function () { return Transaction.DetailKapalNelayanForm.formKey; };
            DetailKapalNelayanDialog.prototype.getIdProperty = function () { return Transaction.DetailKapalNelayanRow.idProperty; };
            DetailKapalNelayanDialog.prototype.getLocalTextPrefix = function () { return Transaction.DetailKapalNelayanRow.localTextPrefix; };
            DetailKapalNelayanDialog.prototype.getNameProperty = function () { return Transaction.DetailKapalNelayanRow.nameProperty; };
            DetailKapalNelayanDialog.prototype.getService = function () { return Transaction.DetailKapalNelayanService.baseUrl; };
            DetailKapalNelayanDialog.prototype.getDeletePermission = function () { return Transaction.DetailKapalNelayanRow.deletePermission; };
            DetailKapalNelayanDialog.prototype.getInsertPermission = function () { return Transaction.DetailKapalNelayanRow.insertPermission; };
            DetailKapalNelayanDialog.prototype.getUpdatePermission = function () { return Transaction.DetailKapalNelayanRow.updatePermission; };
            DetailKapalNelayanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailKapalNelayanDialog);
            return DetailKapalNelayanDialog;
        }(SDD.Common.GridEditorDialog));
        Transaction.DetailKapalNelayanDialog = DetailKapalNelayanDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailKapalNelayanGrid = /** @class */ (function (_super) {
            __extends(DetailKapalNelayanGrid, _super);
            function DetailKapalNelayanGrid(container) {
                return _super.call(this, container) || this;
            }
            DetailKapalNelayanGrid.prototype.getColumnsKey = function () { return 'Transaction.DetailKapalNelayan'; };
            DetailKapalNelayanGrid.prototype.getDialogType = function () { return Transaction.DetailKapalNelayanDialog; };
            DetailKapalNelayanGrid.prototype.getIdProperty = function () { return Transaction.DetailKapalNelayanRow.idProperty; };
            DetailKapalNelayanGrid.prototype.getInsertPermission = function () { return Transaction.DetailKapalNelayanRow.insertPermission; };
            DetailKapalNelayanGrid.prototype.getLocalTextPrefix = function () { return Transaction.DetailKapalNelayanRow.localTextPrefix; };
            DetailKapalNelayanGrid.prototype.getService = function () { return Transaction.DetailKapalNelayanService.baseUrl; };
            DetailKapalNelayanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailKapalNelayanGrid);
            return DetailKapalNelayanGrid;
        }(SDD.Common.GridEditorBase));
        Transaction.DetailKapalNelayanGrid = DetailKapalNelayanGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var TypeKapal = /** @class */ (function (_super) {
            __extends(TypeKapal, _super);
            function TypeKapal(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("Kapal Pukat Hela", "Kapal Pukat Hela");
                _this.addOption("Kapal Jaring Insang", "Kapal Jaring Insang");
                _this.addOption("Kapal Rawai", "Kapal Rawai");
                _this.addOption("Kapal Jaring Angkat", "Kapal Jaring Angkat");
                _this.addOption("Kapal Pancing Joran", "Kapal Pancing Joran");
                _this.addOption("Perahu Jukung", "Perahu Jukung");
                _this.addOption("Perahu Kano", "Perahu Kano");
                _this.addOption("Perahu Dredger", "Perahu Dredger");
                _this.addOption("Kapal Pengangkut Ikan", "Kapal Pengangkut Ikan");
                _this.addOption("Kapal Untuk Penelitian Ikan", "Kapal Untuk Penelitian Ikan");
                _this.addOption("Kapal Latihan Perikanan", "Kapal Latihan Perikanan");
                _this.addOption("Kapal Penangkap Ikan", "Kapal Penangkap Ikan");
                return _this;
                // you may also use addItem which accepts a Select2Item parameter
            }
            TypeKapal = __decorate([
                Serenity.Decorators.registerEditor()
            ], TypeKapal);
            return TypeKapal;
        }(Serenity.Select2Editor));
        Transaction.TypeKapal = TypeKapal;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailPengaduanDialog = /** @class */ (function (_super) {
            __extends(DetailPengaduanDialog, _super);
            function DetailPengaduanDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Transaction.DetailPengaduanForm(_this.idPrefix);
                _this.form = new Transaction.DetailPengaduanForm(_this.idPrefix);
                var userid = SDD.Authorization.userDefinition.UserId;
                var roleid = SDD.Authorization.userDefinition.RoleId;
                if (roleid == 1) {
                    _this.toolbar.findButton(".add-button").remove();
                    _this.toolbar.findButton(".save-and-close-button").remove();
                }
                else {
                }
                return _this;
            }
            DetailPengaduanDialog.prototype.getFormKey = function () { return Transaction.DetailPengaduanForm.formKey; };
            DetailPengaduanDialog.prototype.getIdProperty = function () { return Transaction.DetailPengaduanRow.idProperty; };
            DetailPengaduanDialog.prototype.getLocalTextPrefix = function () { return Transaction.DetailPengaduanRow.localTextPrefix; };
            DetailPengaduanDialog.prototype.getNameProperty = function () { return Transaction.DetailPengaduanRow.nameProperty; };
            DetailPengaduanDialog.prototype.getService = function () { return Transaction.DetailPengaduanService.baseUrl; };
            DetailPengaduanDialog.prototype.getDeletePermission = function () { return Transaction.DetailPengaduanRow.deletePermission; };
            DetailPengaduanDialog.prototype.getInsertPermission = function () { return Transaction.DetailPengaduanRow.insertPermission; };
            DetailPengaduanDialog.prototype.getUpdatePermission = function () { return Transaction.DetailPengaduanRow.updatePermission; };
            DetailPengaduanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailPengaduanDialog);
            return DetailPengaduanDialog;
        }(SDD.Common.GridEditorDialog));
        Transaction.DetailPengaduanDialog = DetailPengaduanDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailPengaduanGrid = /** @class */ (function (_super) {
            __extends(DetailPengaduanGrid, _super);
            function DetailPengaduanGrid(container) {
                var _this = _super.call(this, container) || this;
                var user = SDD.Authorization.userDefinition.UserId;
                var roleid = SDD.Authorization.userDefinition.RoleId;
                if (roleid == 1) {
                    $(".add-button").hide();
                }
                else if (roleid == 2) {
                    $(".add-button").show();
                }
                else if (user == 1) {
                    $(".add-button").show();
                }
                return _this;
            }
            DetailPengaduanGrid.prototype.getColumnsKey = function () { return 'Transaction.DetailPengaduan'; };
            DetailPengaduanGrid.prototype.getDialogType = function () { return Transaction.DetailPengaduanDialog; };
            DetailPengaduanGrid.prototype.getIdProperty = function () { return Transaction.DetailPengaduanRow.idProperty; };
            DetailPengaduanGrid.prototype.getInsertPermission = function () { return Transaction.DetailPengaduanRow.insertPermission; };
            DetailPengaduanGrid.prototype.getLocalTextPrefix = function () { return Transaction.DetailPengaduanRow.localTextPrefix; };
            DetailPengaduanGrid.prototype.getService = function () { return Transaction.DetailPengaduanService.baseUrl; };
            DetailPengaduanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailPengaduanGrid);
            return DetailPengaduanGrid;
        }(SDD.Common.GridEditorBase));
        Transaction.DetailPengaduanGrid = DetailPengaduanGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPerdaganganDialog = /** @class */ (function (_super) {
            __extends(DetailUserPerdaganganDialog, _super);
            function DetailUserPerdaganganDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.DetailUserPerdaganganForm(_this.idPrefix);
                return _this;
            }
            DetailUserPerdaganganDialog.prototype.getFormKey = function () { return Transaction.DetailUserPerdaganganForm.formKey; };
            DetailUserPerdaganganDialog.prototype.getIdProperty = function () { return Transaction.DetailUserPerdaganganRow.idProperty; };
            DetailUserPerdaganganDialog.prototype.getLocalTextPrefix = function () { return Transaction.DetailUserPerdaganganRow.localTextPrefix; };
            DetailUserPerdaganganDialog.prototype.getNameProperty = function () { return Transaction.DetailUserPerdaganganRow.nameProperty; };
            DetailUserPerdaganganDialog.prototype.getService = function () { return Transaction.DetailUserPerdaganganService.baseUrl; };
            DetailUserPerdaganganDialog.prototype.getDeletePermission = function () { return Transaction.DetailUserPerdaganganRow.deletePermission; };
            DetailUserPerdaganganDialog.prototype.getInsertPermission = function () { return Transaction.DetailUserPerdaganganRow.insertPermission; };
            DetailUserPerdaganganDialog.prototype.getUpdatePermission = function () { return Transaction.DetailUserPerdaganganRow.updatePermission; };
            DetailUserPerdaganganDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailUserPerdaganganDialog);
            return DetailUserPerdaganganDialog;
        }(SDD.Common.GridEditorDialog));
        Transaction.DetailUserPerdaganganDialog = DetailUserPerdaganganDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPerdaganganGrid = /** @class */ (function (_super) {
            __extends(DetailUserPerdaganganGrid, _super);
            function DetailUserPerdaganganGrid(container) {
                return _super.call(this, container) || this;
            }
            DetailUserPerdaganganGrid.prototype.getColumnsKey = function () { return 'Transaction.DetailUserPerdagangan'; };
            DetailUserPerdaganganGrid.prototype.getDialogType = function () { return Transaction.DetailUserPerdaganganDialog; };
            DetailUserPerdaganganGrid.prototype.getIdProperty = function () { return Transaction.DetailUserPerdaganganRow.idProperty; };
            DetailUserPerdaganganGrid.prototype.getInsertPermission = function () { return Transaction.DetailUserPerdaganganRow.insertPermission; };
            DetailUserPerdaganganGrid.prototype.getLocalTextPrefix = function () { return Transaction.DetailUserPerdaganganRow.localTextPrefix; };
            DetailUserPerdaganganGrid.prototype.getService = function () { return Transaction.DetailUserPerdaganganService.baseUrl; };
            DetailUserPerdaganganGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailUserPerdaganganGrid);
            return DetailUserPerdaganganGrid;
        }(SDD.Common.GridEditorBase));
        Transaction.DetailUserPerdaganganGrid = DetailUserPerdaganganGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPertanianDialog = /** @class */ (function (_super) {
            __extends(DetailUserPertanianDialog, _super);
            function DetailUserPertanianDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.DetailUserPertanianForm(_this.idPrefix);
                return _this;
            }
            DetailUserPertanianDialog.prototype.getFormKey = function () { return Transaction.DetailUserPertanianForm.formKey; };
            DetailUserPertanianDialog.prototype.getIdProperty = function () { return Transaction.DetailUserPertanianRow.idProperty; };
            DetailUserPertanianDialog.prototype.getLocalTextPrefix = function () { return Transaction.DetailUserPertanianRow.localTextPrefix; };
            DetailUserPertanianDialog.prototype.getNameProperty = function () { return Transaction.DetailUserPertanianRow.nameProperty; };
            DetailUserPertanianDialog.prototype.getService = function () { return Transaction.DetailUserPertanianService.baseUrl; };
            DetailUserPertanianDialog.prototype.getDeletePermission = function () { return Transaction.DetailUserPertanianRow.deletePermission; };
            DetailUserPertanianDialog.prototype.getInsertPermission = function () { return Transaction.DetailUserPertanianRow.insertPermission; };
            DetailUserPertanianDialog.prototype.getUpdatePermission = function () { return Transaction.DetailUserPertanianRow.updatePermission; };
            DetailUserPertanianDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailUserPertanianDialog);
            return DetailUserPertanianDialog;
        }(SDD.Common.GridEditorDialog));
        Transaction.DetailUserPertanianDialog = DetailUserPertanianDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPertanianGrid = /** @class */ (function (_super) {
            __extends(DetailUserPertanianGrid, _super);
            function DetailUserPertanianGrid(container) {
                return _super.call(this, container) || this;
            }
            DetailUserPertanianGrid.prototype.getColumnsKey = function () { return 'Transaction.DetailUserPertanian'; };
            DetailUserPertanianGrid.prototype.getDialogType = function () { return Transaction.DetailUserPertanianDialog; };
            DetailUserPertanianGrid.prototype.getIdProperty = function () { return Transaction.DetailUserPertanianRow.idProperty; };
            DetailUserPertanianGrid.prototype.getInsertPermission = function () { return Transaction.DetailUserPertanianRow.insertPermission; };
            DetailUserPertanianGrid.prototype.getLocalTextPrefix = function () { return Transaction.DetailUserPertanianRow.localTextPrefix; };
            DetailUserPertanianGrid.prototype.getService = function () { return Transaction.DetailUserPertanianService.baseUrl; };
            DetailUserPertanianGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailUserPertanianGrid);
            return DetailUserPertanianGrid;
        }(SDD.Common.GridEditorBase));
        Transaction.DetailUserPertanianGrid = DetailUserPertanianGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPeternakanPerikananDialog = /** @class */ (function (_super) {
            __extends(DetailUserPeternakanPerikananDialog, _super);
            function DetailUserPeternakanPerikananDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.DetailUserPeternakanPerikananForm(_this.idPrefix);
                return _this;
            }
            DetailUserPeternakanPerikananDialog.prototype.getFormKey = function () { return Transaction.DetailUserPeternakanPerikananForm.formKey; };
            DetailUserPeternakanPerikananDialog.prototype.getIdProperty = function () { return Transaction.DetailUserPeternakanPerikananRow.idProperty; };
            DetailUserPeternakanPerikananDialog.prototype.getLocalTextPrefix = function () { return Transaction.DetailUserPeternakanPerikananRow.localTextPrefix; };
            DetailUserPeternakanPerikananDialog.prototype.getNameProperty = function () { return Transaction.DetailUserPeternakanPerikananRow.nameProperty; };
            DetailUserPeternakanPerikananDialog.prototype.getService = function () { return Transaction.DetailUserPeternakanPerikananService.baseUrl; };
            DetailUserPeternakanPerikananDialog.prototype.getDeletePermission = function () { return Transaction.DetailUserPeternakanPerikananRow.deletePermission; };
            DetailUserPeternakanPerikananDialog.prototype.getInsertPermission = function () { return Transaction.DetailUserPeternakanPerikananRow.insertPermission; };
            DetailUserPeternakanPerikananDialog.prototype.getUpdatePermission = function () { return Transaction.DetailUserPeternakanPerikananRow.updatePermission; };
            DetailUserPeternakanPerikananDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailUserPeternakanPerikananDialog);
            return DetailUserPeternakanPerikananDialog;
        }(SDD.Common.GridEditorDialog));
        Transaction.DetailUserPeternakanPerikananDialog = DetailUserPeternakanPerikananDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var DetailUserPeternakanPerikananGrid = /** @class */ (function (_super) {
            __extends(DetailUserPeternakanPerikananGrid, _super);
            function DetailUserPeternakanPerikananGrid(container) {
                return _super.call(this, container) || this;
            }
            DetailUserPeternakanPerikananGrid.prototype.getColumnsKey = function () { return 'Transaction.DetailUserPeternakanPerikanan'; };
            DetailUserPeternakanPerikananGrid.prototype.getDialogType = function () { return Transaction.DetailUserPeternakanPerikananDialog; };
            DetailUserPeternakanPerikananGrid.prototype.getIdProperty = function () { return Transaction.DetailUserPeternakanPerikananRow.idProperty; };
            DetailUserPeternakanPerikananGrid.prototype.getInsertPermission = function () { return Transaction.DetailUserPeternakanPerikananRow.insertPermission; };
            DetailUserPeternakanPerikananGrid.prototype.getLocalTextPrefix = function () { return Transaction.DetailUserPeternakanPerikananRow.localTextPrefix; };
            DetailUserPeternakanPerikananGrid.prototype.getService = function () { return Transaction.DetailUserPeternakanPerikananService.baseUrl; };
            DetailUserPeternakanPerikananGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailUserPeternakanPerikananGrid);
            return DetailUserPeternakanPerikananGrid;
        }(SDD.Common.GridEditorBase));
        Transaction.DetailUserPeternakanPerikananGrid = DetailUserPeternakanPerikananGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FcmMessageDialog = /** @class */ (function (_super) {
            __extends(FcmMessageDialog, _super);
            function FcmMessageDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Transaction.FcmMessageForm(_this.idPrefix);
                _this.form = new Transaction.FcmMessageForm(_this.idPrefix);
                return _this;
            }
            FcmMessageDialog.prototype.getFormKey = function () { return Transaction.FcmMessageForm.formKey; };
            FcmMessageDialog.prototype.getIdProperty = function () { return Transaction.FcmMessageRow.idProperty; };
            FcmMessageDialog.prototype.getLocalTextPrefix = function () { return Transaction.FcmMessageRow.localTextPrefix; };
            FcmMessageDialog.prototype.getNameProperty = function () { return Transaction.FcmMessageRow.nameProperty; };
            FcmMessageDialog.prototype.getService = function () { return Transaction.FcmMessageService.baseUrl; };
            FcmMessageDialog.prototype.getDeletePermission = function () { return Transaction.FcmMessageRow.deletePermission; };
            FcmMessageDialog.prototype.getInsertPermission = function () { return Transaction.FcmMessageRow.insertPermission; };
            FcmMessageDialog.prototype.getUpdatePermission = function () { return Transaction.FcmMessageRow.updatePermission; };
            FcmMessageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FcmMessageDialog);
            return FcmMessageDialog;
        }(SDD.Common.GridEditorDialog));
        Transaction.FcmMessageDialog = FcmMessageDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FcmMessageGrid = /** @class */ (function (_super) {
            __extends(FcmMessageGrid, _super);
            function FcmMessageGrid(container) {
                return _super.call(this, container) || this;
            }
            FcmMessageGrid.prototype.getColumnsKey = function () { return 'Transaction.FcmMessage'; };
            FcmMessageGrid.prototype.getDialogType = function () { return Transaction.FcmMessageDialog; };
            FcmMessageGrid.prototype.getIdProperty = function () { return Transaction.FcmMessageRow.idProperty; };
            FcmMessageGrid.prototype.getInsertPermission = function () { return Transaction.FcmMessageRow.insertPermission; };
            FcmMessageGrid.prototype.getLocalTextPrefix = function () { return Transaction.FcmMessageRow.localTextPrefix; };
            FcmMessageGrid.prototype.getService = function () { return Transaction.FcmMessageService.baseUrl; };
            FcmMessageGrid.prototype.validateEntity = function (row, id) {
                row.IdUserUsername = SDD.Administration.UserRow.getLookup().itemById[row.IdUser].Username;
                return true;
            };
            FcmMessageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FcmMessageGrid);
            return FcmMessageGrid;
        }(SDD.Common.GridEditorBase));
        Transaction.FcmMessageGrid = FcmMessageGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FcmMessageUserDialog = /** @class */ (function (_super) {
            __extends(FcmMessageUserDialog, _super);
            function FcmMessageUserDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.FcmMessageUserForm(_this.idPrefix);
                return _this;
            }
            FcmMessageUserDialog.prototype.getFormKey = function () { return Transaction.FcmMessageUserForm.formKey; };
            FcmMessageUserDialog.prototype.getIdProperty = function () { return Transaction.FcmMessageUserRow.idProperty; };
            FcmMessageUserDialog.prototype.getLocalTextPrefix = function () { return Transaction.FcmMessageUserRow.localTextPrefix; };
            FcmMessageUserDialog.prototype.getNameProperty = function () { return Transaction.FcmMessageUserRow.nameProperty; };
            FcmMessageUserDialog.prototype.getService = function () { return Transaction.FcmMessageUserService.baseUrl; };
            FcmMessageUserDialog.prototype.getDeletePermission = function () { return Transaction.FcmMessageUserRow.deletePermission; };
            FcmMessageUserDialog.prototype.getInsertPermission = function () { return Transaction.FcmMessageUserRow.insertPermission; };
            FcmMessageUserDialog.prototype.getUpdatePermission = function () { return Transaction.FcmMessageUserRow.updatePermission; };
            FcmMessageUserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FcmMessageUserDialog);
            return FcmMessageUserDialog;
        }(Serenity.EntityDialog));
        Transaction.FcmMessageUserDialog = FcmMessageUserDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FcmMessageUserGrid = /** @class */ (function (_super) {
            __extends(FcmMessageUserGrid, _super);
            function FcmMessageUserGrid(container) {
                return _super.call(this, container) || this;
            }
            FcmMessageUserGrid.prototype.getColumnsKey = function () { return 'Transaction.FcmMessageUser'; };
            FcmMessageUserGrid.prototype.getDialogType = function () { return Transaction.FcmMessageUserDialog; };
            FcmMessageUserGrid.prototype.getIdProperty = function () { return Transaction.FcmMessageUserRow.idProperty; };
            FcmMessageUserGrid.prototype.getInsertPermission = function () { return Transaction.FcmMessageUserRow.insertPermission; };
            FcmMessageUserGrid.prototype.getLocalTextPrefix = function () { return Transaction.FcmMessageUserRow.localTextPrefix; };
            FcmMessageUserGrid.prototype.getService = function () { return Transaction.FcmMessageUserService.baseUrl; };
            FcmMessageUserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FcmMessageUserGrid);
            return FcmMessageUserGrid;
        }(Serenity.EntityGrid));
        Transaction.FcmMessageUserGrid = FcmMessageUserGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirAktaKelahiranDialog = /** @class */ (function (_super) {
            __extends(FormulirAktaKelahiranDialog, _super);
            function FormulirAktaKelahiranDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.FormulirAktaKelahiranForm(_this.idPrefix);
                return _this;
            }
            FormulirAktaKelahiranDialog.prototype.getFormKey = function () { return Transaction.FormulirAktaKelahiranForm.formKey; };
            FormulirAktaKelahiranDialog.prototype.getIdProperty = function () { return Transaction.FormulirAktaKelahiranRow.idProperty; };
            FormulirAktaKelahiranDialog.prototype.getLocalTextPrefix = function () { return Transaction.FormulirAktaKelahiranRow.localTextPrefix; };
            FormulirAktaKelahiranDialog.prototype.getNameProperty = function () { return Transaction.FormulirAktaKelahiranRow.nameProperty; };
            FormulirAktaKelahiranDialog.prototype.getService = function () { return Transaction.FormulirAktaKelahiranService.baseUrl; };
            FormulirAktaKelahiranDialog.prototype.getDeletePermission = function () { return Transaction.FormulirAktaKelahiranRow.deletePermission; };
            FormulirAktaKelahiranDialog.prototype.getInsertPermission = function () { return Transaction.FormulirAktaKelahiranRow.insertPermission; };
            FormulirAktaKelahiranDialog.prototype.getUpdatePermission = function () { return Transaction.FormulirAktaKelahiranRow.updatePermission; };
            FormulirAktaKelahiranDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.toolbar.findButton(".delete-button").remove();
            };
            FormulirAktaKelahiranDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], FormulirAktaKelahiranDialog);
            return FormulirAktaKelahiranDialog;
        }(Serenity.EntityDialog));
        Transaction.FormulirAktaKelahiranDialog = FormulirAktaKelahiranDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirAktaKelahiranGrid = /** @class */ (function (_super) {
            __extends(FormulirAktaKelahiranGrid, _super);
            function FormulirAktaKelahiranGrid(container) {
                return _super.call(this, container) || this;
            }
            FormulirAktaKelahiranGrid.prototype.getColumnsKey = function () { return 'Transaction.FormulirAktaKelahiran'; };
            FormulirAktaKelahiranGrid.prototype.getDialogType = function () { return Transaction.FormulirAktaKelahiranDialog; };
            FormulirAktaKelahiranGrid.prototype.getIdProperty = function () { return Transaction.FormulirAktaKelahiranRow.idProperty; };
            FormulirAktaKelahiranGrid.prototype.getInsertPermission = function () { return Transaction.FormulirAktaKelahiranRow.insertPermission; };
            FormulirAktaKelahiranGrid.prototype.getLocalTextPrefix = function () { return Transaction.FormulirAktaKelahiranRow.localTextPrefix; };
            FormulirAktaKelahiranGrid.prototype.getService = function () { return Transaction.FormulirAktaKelahiranService.baseUrl; };
            FormulirAktaKelahiranGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "LinkDocAkta" /* LinkDocAkta */; }).format =
                    function (ctx) { return "<span class=\"label bg-info text-white\">" + ("<a href=\"" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\"><i class=\"fa fa fa-file-excel-o text-red\"></i> Download</a>") + "</span>"; };
                return columns;
            };
            FormulirAktaKelahiranGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FormulirAktaKelahiranGrid);
            return FormulirAktaKelahiranGrid;
        }(Serenity.EntityGrid));
        Transaction.FormulirAktaKelahiranGrid = FormulirAktaKelahiranGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var HariKelahiran = /** @class */ (function (_super) {
            __extends(HariKelahiran, _super);
            function HariKelahiran(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("Senin", "Senin");
                _this.addOption("Selasa", "Selasa");
                _this.addOption("Rabu", "Rabu");
                _this.addOption("Kamis", "Kamis");
                _this.addOption("Jumat", "Jumat");
                _this.addOption("Sabtu", "Sabtu");
                _this.addOption("Minggu", "Minggu");
                return _this;
                // you may also use addItem which accepts a Select2Item parameter
            }
            HariKelahiran = __decorate([
                Serenity.Decorators.registerEditor()
            ], HariKelahiran);
            return HariKelahiran;
        }(Serenity.Select2Editor));
        Transaction.HariKelahiran = HariKelahiran;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirKkDialog = /** @class */ (function (_super) {
            __extends(FormulirKkDialog, _super);
            function FormulirKkDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.FormulirKkForm(_this.idPrefix);
                return _this;
            }
            FormulirKkDialog.prototype.getFormKey = function () { return Transaction.FormulirKkForm.formKey; };
            FormulirKkDialog.prototype.getIdProperty = function () { return Transaction.FormulirKkRow.idProperty; };
            FormulirKkDialog.prototype.getLocalTextPrefix = function () { return Transaction.FormulirKkRow.localTextPrefix; };
            FormulirKkDialog.prototype.getNameProperty = function () { return Transaction.FormulirKkRow.nameProperty; };
            FormulirKkDialog.prototype.getService = function () { return Transaction.FormulirKkService.baseUrl; };
            FormulirKkDialog.prototype.getDeletePermission = function () { return Transaction.FormulirKkRow.deletePermission; };
            FormulirKkDialog.prototype.getInsertPermission = function () { return Transaction.FormulirKkRow.insertPermission; };
            FormulirKkDialog.prototype.getUpdatePermission = function () { return Transaction.FormulirKkRow.updatePermission; };
            FormulirKkDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.toolbar.findButton(".delete-button").remove();
            };
            FormulirKkDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], FormulirKkDialog);
            return FormulirKkDialog;
        }(Serenity.EntityDialog));
        Transaction.FormulirKkDialog = FormulirKkDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirKkGrid = /** @class */ (function (_super) {
            __extends(FormulirKkGrid, _super);
            function FormulirKkGrid(container) {
                return _super.call(this, container) || this;
            }
            FormulirKkGrid.prototype.getColumnsKey = function () { return 'Transaction.FormulirKk'; };
            FormulirKkGrid.prototype.getDialogType = function () { return Transaction.FormulirKkDialog; };
            FormulirKkGrid.prototype.getIdProperty = function () { return Transaction.FormulirKkRow.idProperty; };
            FormulirKkGrid.prototype.getInsertPermission = function () { return Transaction.FormulirKkRow.insertPermission; };
            FormulirKkGrid.prototype.getLocalTextPrefix = function () { return Transaction.FormulirKkRow.localTextPrefix; };
            FormulirKkGrid.prototype.getService = function () { return Transaction.FormulirKkService.baseUrl; };
            FormulirKkGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "LinkDocKk" /* LinkDocKk */; }).format =
                    function (ctx) { return "<span class=\"label bg-info text-white\">" + ("<a href=\"" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\"><i class=\"fa fa fa-file-excel-o text-red\"></i> Download</a>") + "</span>"; };
                return columns;
            };
            FormulirKkGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FormulirKkGrid);
            return FormulirKkGrid;
        }(Serenity.EntityGrid));
        Transaction.FormulirKkGrid = FormulirKkGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirKtpDialog = /** @class */ (function (_super) {
            __extends(FormulirKtpDialog, _super);
            function FormulirKtpDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.FormulirKtpForm(_this.idPrefix);
                return _this;
            }
            FormulirKtpDialog.prototype.getFormKey = function () { return Transaction.FormulirKtpForm.formKey; };
            FormulirKtpDialog.prototype.getIdProperty = function () { return Transaction.FormulirKtpRow.idProperty; };
            FormulirKtpDialog.prototype.getLocalTextPrefix = function () { return Transaction.FormulirKtpRow.localTextPrefix; };
            FormulirKtpDialog.prototype.getNameProperty = function () { return Transaction.FormulirKtpRow.nameProperty; };
            FormulirKtpDialog.prototype.getService = function () { return Transaction.FormulirKtpService.baseUrl; };
            FormulirKtpDialog.prototype.getDeletePermission = function () { return Transaction.FormulirKtpRow.deletePermission; };
            FormulirKtpDialog.prototype.getInsertPermission = function () { return Transaction.FormulirKtpRow.insertPermission; };
            FormulirKtpDialog.prototype.getUpdatePermission = function () { return Transaction.FormulirKtpRow.updatePermission; };
            FormulirKtpDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.toolbar.findButton(".delete-button").remove();
            };
            FormulirKtpDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FormulirKtpDialog);
            return FormulirKtpDialog;
        }(Serenity.EntityDialog));
        Transaction.FormulirKtpDialog = FormulirKtpDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var FormulirKtpGrid = /** @class */ (function (_super) {
            __extends(FormulirKtpGrid, _super);
            function FormulirKtpGrid(container) {
                return _super.call(this, container) || this;
            }
            FormulirKtpGrid.prototype.getColumnsKey = function () { return 'Transaction.FormulirKtp'; };
            FormulirKtpGrid.prototype.getDialogType = function () { return Transaction.FormulirKtpDialog; };
            FormulirKtpGrid.prototype.getIdProperty = function () { return Transaction.FormulirKtpRow.idProperty; };
            FormulirKtpGrid.prototype.getInsertPermission = function () { return Transaction.FormulirKtpRow.insertPermission; };
            FormulirKtpGrid.prototype.getLocalTextPrefix = function () { return Transaction.FormulirKtpRow.localTextPrefix; };
            FormulirKtpGrid.prototype.getService = function () { return Transaction.FormulirKtpService.baseUrl; };
            FormulirKtpGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "LinkDocKTP" /* LinkDocKTP */; }).format =
                    function (ctx) { return "<span class=\"label bg-info text-white\">" + ("<a href=\"" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\"><i class=\"fa fa fa-file-excel-o text-red\"></i> Download</a>") + "</span>"; };
                return columns;
            };
            FormulirKtpGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FormulirKtpGrid);
            return FormulirKtpGrid;
        }(Serenity.EntityGrid));
        Transaction.FormulirKtpGrid = FormulirKtpGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var TypePermohonan = /** @class */ (function (_super) {
            __extends(TypePermohonan, _super);
            function TypePermohonan(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("Baru", "Baru");
                _this.addOption("Perpanjangan", "Perpanjangan");
                _this.addOption("Penggantian", "Penggantian");
                return _this;
                // you may also use addItem which accepts a Select2Item parameter
            }
            TypePermohonan = __decorate([
                Serenity.Decorators.registerEditor()
            ], TypePermohonan);
            return TypePermohonan;
        }(Serenity.Select2Editor));
        Transaction.TypePermohonan = TypePermohonan;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ForumDialog = /** @class */ (function (_super) {
            __extends(ForumDialog, _super);
            function ForumDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.ForumForm(_this.idPrefix);
                return _this;
            }
            ForumDialog.prototype.getFormKey = function () { return Transaction.ForumForm.formKey; };
            ForumDialog.prototype.getIdProperty = function () { return Transaction.ForumRow.idProperty; };
            ForumDialog.prototype.getLocalTextPrefix = function () { return Transaction.ForumRow.localTextPrefix; };
            ForumDialog.prototype.getNameProperty = function () { return Transaction.ForumRow.nameProperty; };
            ForumDialog.prototype.getService = function () { return Transaction.ForumService.baseUrl; };
            ForumDialog.prototype.getDeletePermission = function () { return Transaction.ForumRow.deletePermission; };
            ForumDialog.prototype.getInsertPermission = function () { return Transaction.ForumRow.insertPermission; };
            ForumDialog.prototype.getUpdatePermission = function () { return Transaction.ForumRow.updatePermission; };
            ForumDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                var DialogNew = this.isNew();
                if (!DialogNew) {
                    var user = SDD.Authorization.userDefinition.UserId;
                    var roleid = SDD.Authorization.userDefinition.RoleId;
                    if (roleid == 1) {
                        this.toolbar.findButton(".delete-button").remove();
                        this.toolbar.findButton(".save-and-close-button").remove();
                        this.toolbar.findButton(".apply-changes-button").remove();
                        Serenity.EditorUtils.setReadOnly(this.form.IdMasterForum, true);
                        Serenity.EditorUtils.setReadOnly(this.form.DetailForum, true);
                        Serenity.EditorUtils.setReadOnly(this.form.FotoDokumenForum, true);
                        Serenity.EditorUtils.setReadOnly(this.form.HiddenUser, true);
                    }
                    else if (roleid == 2) {
                        this.toolbar.findButton(".delete-button").remove();
                        Serenity.EditorUtils.setReadOnly(this.form.IdMasterForum, true);
                        Serenity.EditorUtils.setReadOnly(this.form.DetailForum, true);
                        Serenity.EditorUtils.setReadOnly(this.form.FotoDokumenForum, true);
                        Serenity.EditorUtils.setReadOnly(this.form.HiddenUser, true);
                    }
                    else if (user == 1) {
                        Serenity.EditorUtils.setReadOnly(this.form.IdMasterForum, false);
                        Serenity.EditorUtils.setReadOnly(this.form.DetailForum, false);
                        Serenity.EditorUtils.setReadOnly(this.form.FotoDokumenForum, false);
                        Serenity.EditorUtils.setReadOnly(this.form.HiddenUser, false);
                    }
                }
                else {
                    if (roleid == 1) {
                        this.form.Detail.element.closest('.category').toggle(false);
                    }
                    else if (roleid == 2) {
                        this.form.Detail.element.closest('.category').toggle(true);
                    }
                    else if (user == 1) {
                        this.form.Detail.element.closest('.category').toggle(true);
                    }
                }
            };
            ForumDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], ForumDialog);
            return ForumDialog;
        }(Serenity.EntityDialog));
        Transaction.ForumDialog = ForumDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ForumGrid = /** @class */ (function (_super) {
            __extends(ForumGrid, _super);
            function ForumGrid(container) {
                var _this = _super.call(this, container) || this;
                $(".add-button").remove();
                return _this;
            }
            ForumGrid.prototype.getColumnsKey = function () { return 'Transaction.Forum'; };
            ForumGrid.prototype.getDialogType = function () { return Transaction.ForumDialog; };
            ForumGrid.prototype.getIdProperty = function () { return Transaction.ForumRow.idProperty; };
            ForumGrid.prototype.getInsertPermission = function () { return Transaction.ForumRow.insertPermission; };
            ForumGrid.prototype.getLocalTextPrefix = function () { return Transaction.ForumRow.localTextPrefix; };
            ForumGrid.prototype.getService = function () { return Transaction.ForumService.baseUrl; };
            ForumGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ForumGrid);
            return ForumGrid;
        }(Serenity.EntityGrid));
        Transaction.ForumGrid = ForumGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ForumNewDialog = /** @class */ (function (_super) {
            __extends(ForumNewDialog, _super);
            function ForumNewDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.ForumNewForm(_this.idPrefix);
                return _this;
            }
            ForumNewDialog.prototype.getFormKey = function () { return Transaction.ForumNewForm.formKey; };
            ForumNewDialog.prototype.getIdProperty = function () { return Transaction.ForumNewRow.idProperty; };
            ForumNewDialog.prototype.getLocalTextPrefix = function () { return Transaction.ForumNewRow.localTextPrefix; };
            ForumNewDialog.prototype.getNameProperty = function () { return Transaction.ForumNewRow.nameProperty; };
            ForumNewDialog.prototype.getService = function () { return Transaction.ForumNewService.baseUrl; };
            ForumNewDialog.prototype.getDeletePermission = function () { return Transaction.ForumNewRow.deletePermission; };
            ForumNewDialog.prototype.getInsertPermission = function () { return Transaction.ForumNewRow.insertPermission; };
            ForumNewDialog.prototype.getUpdatePermission = function () { return Transaction.ForumNewRow.updatePermission; };
            ForumNewDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ForumNewDialog);
            return ForumNewDialog;
        }(Serenity.EntityDialog));
        Transaction.ForumNewDialog = ForumNewDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ForumNewGrid = /** @class */ (function (_super) {
            __extends(ForumNewGrid, _super);
            function ForumNewGrid(container) {
                var _this = _super.call(this, container) || this;
                $(".add-button").remove();
                return _this;
            }
            ForumNewGrid.prototype.getColumnsKey = function () { return 'Transaction.ForumNew'; };
            ForumNewGrid.prototype.getDialogType = function () { return Transaction.ForumNewDialog; };
            ForumNewGrid.prototype.getIdProperty = function () { return Transaction.ForumNewRow.idProperty; };
            ForumNewGrid.prototype.getInsertPermission = function () { return Transaction.ForumNewRow.insertPermission; };
            ForumNewGrid.prototype.getLocalTextPrefix = function () { return Transaction.ForumNewRow.localTextPrefix; };
            ForumNewGrid.prototype.getService = function () { return Transaction.ForumNewService.baseUrl; };
            ForumNewGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ForumNewGrid);
            return ForumNewGrid;
        }(Serenity.EntityGrid));
        Transaction.ForumNewGrid = ForumNewGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var InfoDesaDialog = /** @class */ (function (_super) {
            __extends(InfoDesaDialog, _super);
            function InfoDesaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.InfoDesaForm(_this.idPrefix);
                return _this;
            }
            InfoDesaDialog.prototype.getFormKey = function () { return Transaction.InfoDesaForm.formKey; };
            InfoDesaDialog.prototype.getIdProperty = function () { return Transaction.InfoDesaRow.idProperty; };
            InfoDesaDialog.prototype.getLocalTextPrefix = function () { return Transaction.InfoDesaRow.localTextPrefix; };
            InfoDesaDialog.prototype.getNameProperty = function () { return Transaction.InfoDesaRow.nameProperty; };
            InfoDesaDialog.prototype.getService = function () { return Transaction.InfoDesaService.baseUrl; };
            InfoDesaDialog.prototype.getDeletePermission = function () { return Transaction.InfoDesaRow.deletePermission; };
            InfoDesaDialog.prototype.getInsertPermission = function () { return Transaction.InfoDesaRow.insertPermission; };
            InfoDesaDialog.prototype.getUpdatePermission = function () { return Transaction.InfoDesaRow.updatePermission; };
            InfoDesaDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], InfoDesaDialog);
            return InfoDesaDialog;
        }(Serenity.EntityDialog));
        Transaction.InfoDesaDialog = InfoDesaDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var InfoDesaGrid = /** @class */ (function (_super) {
            __extends(InfoDesaGrid, _super);
            function InfoDesaGrid(container) {
                return _super.call(this, container) || this;
            }
            InfoDesaGrid.prototype.getColumnsKey = function () { return 'Transaction.InfoDesa'; };
            InfoDesaGrid.prototype.getDialogType = function () { return Transaction.InfoDesaDialog; };
            InfoDesaGrid.prototype.getIdProperty = function () { return Transaction.InfoDesaRow.idProperty; };
            InfoDesaGrid.prototype.getInsertPermission = function () { return Transaction.InfoDesaRow.insertPermission; };
            InfoDesaGrid.prototype.getLocalTextPrefix = function () { return Transaction.InfoDesaRow.localTextPrefix; };
            InfoDesaGrid.prototype.getService = function () { return Transaction.InfoDesaService.baseUrl; };
            InfoDesaGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "Image" /* Image */; }).format =
                    function (ctx) { return "<a href=\"../sidedi/upload/" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\"><i class=\"fa fa fa-file-excel-o text-red\"></i> Lihat</a>"; };
                return columns;
            };
            InfoDesaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InfoDesaGrid);
            return InfoDesaGrid;
        }(Serenity.EntityGrid));
        Transaction.InfoDesaGrid = InfoDesaGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var MasterFlowFormulirDialog = /** @class */ (function (_super) {
            __extends(MasterFlowFormulirDialog, _super);
            function MasterFlowFormulirDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.MasterFlowFormulirForm(_this.idPrefix);
                return _this;
            }
            MasterFlowFormulirDialog.prototype.getFormKey = function () { return Transaction.MasterFlowFormulirForm.formKey; };
            MasterFlowFormulirDialog.prototype.getIdProperty = function () { return Transaction.MasterFlowFormulirRow.idProperty; };
            MasterFlowFormulirDialog.prototype.getLocalTextPrefix = function () { return Transaction.MasterFlowFormulirRow.localTextPrefix; };
            MasterFlowFormulirDialog.prototype.getNameProperty = function () { return Transaction.MasterFlowFormulirRow.nameProperty; };
            MasterFlowFormulirDialog.prototype.getService = function () { return Transaction.MasterFlowFormulirService.baseUrl; };
            MasterFlowFormulirDialog.prototype.getDeletePermission = function () { return Transaction.MasterFlowFormulirRow.deletePermission; };
            MasterFlowFormulirDialog.prototype.getInsertPermission = function () { return Transaction.MasterFlowFormulirRow.insertPermission; };
            MasterFlowFormulirDialog.prototype.getUpdatePermission = function () { return Transaction.MasterFlowFormulirRow.updatePermission; };
            MasterFlowFormulirDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], MasterFlowFormulirDialog);
            return MasterFlowFormulirDialog;
        }(Serenity.EntityDialog));
        Transaction.MasterFlowFormulirDialog = MasterFlowFormulirDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var MasterFlowFormulirGrid = /** @class */ (function (_super) {
            __extends(MasterFlowFormulirGrid, _super);
            function MasterFlowFormulirGrid(container) {
                return _super.call(this, container) || this;
            }
            MasterFlowFormulirGrid.prototype.getColumnsKey = function () { return 'Transaction.MasterFlowFormulir'; };
            MasterFlowFormulirGrid.prototype.getDialogType = function () { return Transaction.MasterFlowFormulirDialog; };
            MasterFlowFormulirGrid.prototype.getIdProperty = function () { return Transaction.MasterFlowFormulirRow.idProperty; };
            MasterFlowFormulirGrid.prototype.getInsertPermission = function () { return Transaction.MasterFlowFormulirRow.insertPermission; };
            MasterFlowFormulirGrid.prototype.getLocalTextPrefix = function () { return Transaction.MasterFlowFormulirRow.localTextPrefix; };
            MasterFlowFormulirGrid.prototype.getService = function () { return Transaction.MasterFlowFormulirService.baseUrl; };
            MasterFlowFormulirGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterFlowFormulirGrid);
            return MasterFlowFormulirGrid;
        }(Serenity.EntityGrid));
        Transaction.MasterFlowFormulirGrid = MasterFlowFormulirGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var MyCustomEditor = /** @class */ (function (_super) {
            __extends(MyCustomEditor, _super);
            function MyCustomEditor(textArea, opt) {
                return _super.call(this, textArea, opt) || this;
            }
            MyCustomEditor.prototype.getConfig = function () {
                var config = _super.prototype.getConfig.call(this);
                config.allowedContent = true;
                config.autoParagraph = false;
                return config;
            };
            MyCustomEditor.prototype.get_value = function () {
                var value = _super.prototype.get_value.call(this);
                value = trimNewlineEnd(value);
                return value;
            };
            MyCustomEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], MyCustomEditor);
            return MyCustomEditor;
        }(Serenity.HtmlContentEditor));
        Transaction.MyCustomEditor = MyCustomEditor;
        function trimNewlineEnd(text) {
            /*
            ^\|+   beginning of the string, pipe, one or more times
            |      or
            \|+$   pipe, one or more times, end of the string
            */
            return text.replace(/\s+$/g, '');
        }
        Transaction.trimNewlineEnd = trimNewlineEnd;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ParentMessageDialog = /** @class */ (function (_super) {
            __extends(ParentMessageDialog, _super);
            function ParentMessageDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Transaction.ParentMessageForm(_this.idPrefix);
                return _this;
            }
            ParentMessageDialog.prototype.getFormKey = function () { return Transaction.ParentMessageForm.formKey; };
            ParentMessageDialog.prototype.getIdProperty = function () { return Transaction.ParentMessageRow.idProperty; };
            ParentMessageDialog.prototype.getLocalTextPrefix = function () { return Transaction.ParentMessageRow.localTextPrefix; };
            ParentMessageDialog.prototype.getNameProperty = function () { return Transaction.ParentMessageRow.nameProperty; };
            ParentMessageDialog.prototype.getService = function () { return Transaction.ParentMessageService.baseUrl; };
            ParentMessageDialog.prototype.getDeletePermission = function () { return Transaction.ParentMessageRow.deletePermission; };
            ParentMessageDialog.prototype.getInsertPermission = function () { return Transaction.ParentMessageRow.insertPermission; };
            ParentMessageDialog.prototype.getUpdatePermission = function () { return Transaction.ParentMessageRow.updatePermission; };
            ParentMessageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ParentMessageDialog);
            return ParentMessageDialog;
        }(Serenity.EntityDialog));
        Transaction.ParentMessageDialog = ParentMessageDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var ParentMessageGrid = /** @class */ (function (_super) {
            __extends(ParentMessageGrid, _super);
            function ParentMessageGrid(container) {
                return _super.call(this, container) || this;
            }
            ParentMessageGrid.prototype.getColumnsKey = function () { return 'Transaction.ParentMessage'; };
            ParentMessageGrid.prototype.getDialogType = function () { return Transaction.ParentMessageDialog; };
            ParentMessageGrid.prototype.getIdProperty = function () { return Transaction.ParentMessageRow.idProperty; };
            ParentMessageGrid.prototype.getInsertPermission = function () { return Transaction.ParentMessageRow.insertPermission; };
            ParentMessageGrid.prototype.getLocalTextPrefix = function () { return Transaction.ParentMessageRow.localTextPrefix; };
            ParentMessageGrid.prototype.getService = function () { return Transaction.ParentMessageService.baseUrl; };
            ParentMessageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ParentMessageGrid);
            return ParentMessageGrid;
        }(Serenity.EntityGrid));
        Transaction.ParentMessageGrid = ParentMessageGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var PengaduanDialog = /** @class */ (function (_super) {
            __extends(PengaduanDialog, _super);
            function PengaduanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.PengaduanForm(_this.idPrefix);
                return _this;
            }
            PengaduanDialog.prototype.getFormKey = function () { return Transaction.PengaduanForm.formKey; };
            PengaduanDialog.prototype.getIdProperty = function () { return Transaction.PengaduanRow.idProperty; };
            PengaduanDialog.prototype.getLocalTextPrefix = function () { return Transaction.PengaduanRow.localTextPrefix; };
            PengaduanDialog.prototype.getNameProperty = function () { return Transaction.PengaduanRow.nameProperty; };
            PengaduanDialog.prototype.getService = function () { return Transaction.PengaduanService.baseUrl; };
            PengaduanDialog.prototype.getDeletePermission = function () { return Transaction.PengaduanRow.deletePermission; };
            PengaduanDialog.prototype.getInsertPermission = function () { return Transaction.PengaduanRow.insertPermission; };
            PengaduanDialog.prototype.getUpdatePermission = function () { return Transaction.PengaduanRow.updatePermission; };
            PengaduanDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                var DialogNew = this.isNew();
                var userid = SDD.Authorization.userDefinition.UserId;
                var roleid = SDD.Authorization.userDefinition.RoleId;
                if (!DialogNew) {
                    if (userid == 1) {
                        this.set_readOnly(false);
                    }
                    else if (roleid == 2) {
                        Serenity.EditorUtils.setReadOnly(this.form.FotoDokumen, true);
                        Serenity.EditorUtils.setReadOnly(this.form.IdMasterTujuan, true);
                        Serenity.EditorUtils.setReadOnly(this.form.PerihalPengaduan, true);
                        this.toolbar.findButton(".apply-changes-button").remove();
                        this.toolbar.findButton(".delete-button").remove();
                    }
                    else if (roleid == 1) {
                        this.toolbar.findButton(".save-and-close-button").remove();
                        this.toolbar.findButton(".apply-changes-button").remove();
                        this.toolbar.findButton(".delete-button").remove();
                        this.set_readOnly(true);
                    }
                }
            };
            PengaduanDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], PengaduanDialog);
            return PengaduanDialog;
        }(Serenity.EntityDialog));
        Transaction.PengaduanDialog = PengaduanDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var PengaduanGrid = /** @class */ (function (_super) {
            __extends(PengaduanGrid, _super);
            function PengaduanGrid(container) {
                var _this = _super.call(this, container) || this;
                var userid = SDD.Authorization.userDefinition.UserId;
                var roleid = SDD.Authorization.userDefinition.RoleId;
                if (userid == 1) {
                }
                else {
                    $(".add-button").remove();
                }
                return _this;
            }
            PengaduanGrid.prototype.getColumnsKey = function () { return 'Transaction.Pengaduan'; };
            PengaduanGrid.prototype.getDialogType = function () { return Transaction.PengaduanDialog; };
            PengaduanGrid.prototype.getIdProperty = function () { return Transaction.PengaduanRow.idProperty; };
            PengaduanGrid.prototype.getInsertPermission = function () { return Transaction.PengaduanRow.insertPermission; };
            PengaduanGrid.prototype.getLocalTextPrefix = function () { return Transaction.PengaduanRow.localTextPrefix; };
            PengaduanGrid.prototype.getService = function () { return Transaction.PengaduanService.baseUrl; };
            PengaduanGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "FotoDokumen" /* FotoDokumen */; }).format =
                    function (ctx) { return "<span class=\"label bg-info text-white\">" + ("<a href=\"" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\"><i class=\"fa fa fa-file-excel-o text-red\"></i> Lihat Foto/Dokumen</a>") + "</span>"; };
                return columns;
            };
            PengaduanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PengaduanGrid);
            return PengaduanGrid;
        }(Serenity.EntityGrid));
        Transaction.PengaduanGrid = PengaduanGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var TransaksiStatusDialog = /** @class */ (function (_super) {
            __extends(TransaksiStatusDialog, _super);
            function TransaksiStatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.TransaksiStatusForm(_this.idPrefix);
                return _this;
            }
            TransaksiStatusDialog.prototype.getFormKey = function () { return Transaction.TransaksiStatusForm.formKey; };
            TransaksiStatusDialog.prototype.getIdProperty = function () { return Transaction.TransaksiStatusRow.idProperty; };
            TransaksiStatusDialog.prototype.getLocalTextPrefix = function () { return Transaction.TransaksiStatusRow.localTextPrefix; };
            TransaksiStatusDialog.prototype.getNameProperty = function () { return Transaction.TransaksiStatusRow.nameProperty; };
            TransaksiStatusDialog.prototype.getService = function () { return Transaction.TransaksiStatusService.baseUrl; };
            TransaksiStatusDialog.prototype.getDeletePermission = function () { return Transaction.TransaksiStatusRow.deletePermission; };
            TransaksiStatusDialog.prototype.getInsertPermission = function () { return Transaction.TransaksiStatusRow.insertPermission; };
            TransaksiStatusDialog.prototype.getUpdatePermission = function () { return Transaction.TransaksiStatusRow.updatePermission; };
            TransaksiStatusDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                var DialogNew = this.isNew();
                this.toolbar.findButton(".delete-button").remove();
                if (!DialogNew) {
                    var idformulir = Q.toId(this.form.IdMasterForm.value);
                    this.toolbar.findButton(".save-and-close-button").remove();
                    this.toolbar.findButton(".apply-changes-button").remove();
                    var Option1 = Q.toId(this.form.LinkFormulir.value);
                    if (Option1 !== "") {
                        $('.DokumenFormulir .editor').append("<a href='" + Option1 + "' target='_blank' class='btn btn-primary btn-xs'>Link Formulir</a>");
                    }
                    else {
                        $('.DokumenFormulir .editor').append("No File");
                    }
                }
            };
            TransaksiStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TransaksiStatusDialog);
            return TransaksiStatusDialog;
        }(Serenity.EntityDialog));
        Transaction.TransaksiStatusDialog = TransaksiStatusDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var TransaksiStatusGrid = /** @class */ (function (_super) {
            __extends(TransaksiStatusGrid, _super);
            function TransaksiStatusGrid(container) {
                return _super.call(this, container) || this;
                // $(".add-button").hide();
            }
            TransaksiStatusGrid.prototype.getColumnsKey = function () { return 'Transaction.TransaksiStatus'; };
            TransaksiStatusGrid.prototype.getDialogType = function () { return Transaction.TransaksiStatusDialog; };
            TransaksiStatusGrid.prototype.getIdProperty = function () { return Transaction.TransaksiStatusRow.idProperty; };
            TransaksiStatusGrid.prototype.getInsertPermission = function () { return Transaction.TransaksiStatusRow.insertPermission; };
            TransaksiStatusGrid.prototype.getLocalTextPrefix = function () { return Transaction.TransaksiStatusRow.localTextPrefix; };
            TransaksiStatusGrid.prototype.getService = function () { return Transaction.TransaksiStatusService.baseUrl; };
            TransaksiStatusGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "LinkFormulir" /* LinkFormulir */; }).format =
                    function (ctx) { return "<span class=\"label bg-info text-white\">" + ("<a href=\"" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\"><i class=\"fa fa fa-file-excel-o text-red\"></i> Lihat Formulir</a>") + "</span>"; };
                return columns;
            };
            TransaksiStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TransaksiStatusGrid);
            return TransaksiStatusGrid;
        }(Serenity.EntityGrid));
        Transaction.TransaksiStatusGrid = TransaksiStatusGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var StatusKaryawan = /** @class */ (function (_super) {
            __extends(StatusKaryawan, _super);
            function StatusKaryawan(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("Tetap", "Tetap");
                _this.addOption("Kontrak", "Kontrak");
                _this.addOption("Harian", "Harian");
                return _this;
                // you may also use addItem which accepts a Select2Item parameter
            }
            StatusKaryawan = __decorate([
                Serenity.Decorators.registerEditor()
            ], StatusKaryawan);
            return StatusKaryawan;
        }(Serenity.Select2Editor));
        Transaction.StatusKaryawan = StatusKaryawan;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserKaryawanDialog = /** @class */ (function (_super) {
            __extends(UserKaryawanDialog, _super);
            function UserKaryawanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.UserKaryawanForm(_this.idPrefix);
                return _this;
            }
            UserKaryawanDialog.prototype.getFormKey = function () { return Transaction.UserKaryawanForm.formKey; };
            UserKaryawanDialog.prototype.getIdProperty = function () { return Transaction.UserKaryawanRow.idProperty; };
            UserKaryawanDialog.prototype.getLocalTextPrefix = function () { return Transaction.UserKaryawanRow.localTextPrefix; };
            UserKaryawanDialog.prototype.getNameProperty = function () { return Transaction.UserKaryawanRow.nameProperty; };
            UserKaryawanDialog.prototype.getService = function () { return Transaction.UserKaryawanService.baseUrl; };
            UserKaryawanDialog.prototype.getDeletePermission = function () { return Transaction.UserKaryawanRow.deletePermission; };
            UserKaryawanDialog.prototype.getInsertPermission = function () { return Transaction.UserKaryawanRow.insertPermission; };
            UserKaryawanDialog.prototype.getUpdatePermission = function () { return Transaction.UserKaryawanRow.updatePermission; };
            UserKaryawanDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], UserKaryawanDialog);
            return UserKaryawanDialog;
        }(Serenity.EntityDialog));
        Transaction.UserKaryawanDialog = UserKaryawanDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserKaryawanGrid = /** @class */ (function (_super) {
            __extends(UserKaryawanGrid, _super);
            function UserKaryawanGrid(container) {
                return _super.call(this, container) || this;
            }
            UserKaryawanGrid.prototype.getColumnsKey = function () { return 'Transaction.UserKaryawan'; };
            UserKaryawanGrid.prototype.getDialogType = function () { return Transaction.UserKaryawanDialog; };
            UserKaryawanGrid.prototype.getIdProperty = function () { return Transaction.UserKaryawanRow.idProperty; };
            UserKaryawanGrid.prototype.getInsertPermission = function () { return Transaction.UserKaryawanRow.insertPermission; };
            UserKaryawanGrid.prototype.getLocalTextPrefix = function () { return Transaction.UserKaryawanRow.localTextPrefix; };
            UserKaryawanGrid.prototype.getService = function () { return Transaction.UserKaryawanService.baseUrl; };
            UserKaryawanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserKaryawanGrid);
            return UserKaryawanGrid;
        }(Serenity.EntityGrid));
        Transaction.UserKaryawanGrid = UserKaryawanGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserNelayanDialog = /** @class */ (function (_super) {
            __extends(UserNelayanDialog, _super);
            function UserNelayanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.UserNelayanForm(_this.idPrefix);
                return _this;
            }
            UserNelayanDialog.prototype.getFormKey = function () { return Transaction.UserNelayanForm.formKey; };
            UserNelayanDialog.prototype.getIdProperty = function () { return Transaction.UserNelayanRow.idProperty; };
            UserNelayanDialog.prototype.getLocalTextPrefix = function () { return Transaction.UserNelayanRow.localTextPrefix; };
            UserNelayanDialog.prototype.getNameProperty = function () { return Transaction.UserNelayanRow.nameProperty; };
            UserNelayanDialog.prototype.getService = function () { return Transaction.UserNelayanService.baseUrl; };
            UserNelayanDialog.prototype.getDeletePermission = function () { return Transaction.UserNelayanRow.deletePermission; };
            UserNelayanDialog.prototype.getInsertPermission = function () { return Transaction.UserNelayanRow.insertPermission; };
            UserNelayanDialog.prototype.getUpdatePermission = function () { return Transaction.UserNelayanRow.updatePermission; };
            UserNelayanDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], UserNelayanDialog);
            return UserNelayanDialog;
        }(Serenity.EntityDialog));
        Transaction.UserNelayanDialog = UserNelayanDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserNelayanGrid = /** @class */ (function (_super) {
            __extends(UserNelayanGrid, _super);
            function UserNelayanGrid(container) {
                return _super.call(this, container) || this;
            }
            UserNelayanGrid.prototype.getColumnsKey = function () { return 'Transaction.UserNelayan'; };
            UserNelayanGrid.prototype.getDialogType = function () { return Transaction.UserNelayanDialog; };
            UserNelayanGrid.prototype.getIdProperty = function () { return Transaction.UserNelayanRow.idProperty; };
            UserNelayanGrid.prototype.getInsertPermission = function () { return Transaction.UserNelayanRow.insertPermission; };
            UserNelayanGrid.prototype.getLocalTextPrefix = function () { return Transaction.UserNelayanRow.localTextPrefix; };
            UserNelayanGrid.prototype.getService = function () { return Transaction.UserNelayanService.baseUrl; };
            UserNelayanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserNelayanGrid);
            return UserNelayanGrid;
        }(Serenity.EntityGrid));
        Transaction.UserNelayanGrid = UserNelayanGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var JenisDagangan = /** @class */ (function (_super) {
            __extends(JenisDagangan, _super);
            function JenisDagangan(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("Sembako", "Sembako");
                _this.addOption("Makanan Minuman", "Makanan Minuman");
                _this.addOption("Pulsa", "Pulsa");
                _this.addOption("Baju Fashion", "Baju Fashion");
                _this.addOption("Elektronik", "Elektronik");
                _this.addOption("Tanaman", "Tanaman");
                _this.addOption("Rental", "Rental");
                return _this;
                // you may also use addItem which accepts a Select2Item parameter
            }
            JenisDagangan = __decorate([
                Serenity.Decorators.registerEditor()
            ], JenisDagangan);
            return JenisDagangan;
        }(Serenity.Select2Editor));
        Transaction.JenisDagangan = JenisDagangan;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPerdaganganDialog = /** @class */ (function (_super) {
            __extends(UserPerdaganganDialog, _super);
            function UserPerdaganganDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.UserPerdaganganForm(_this.idPrefix);
                return _this;
            }
            UserPerdaganganDialog.prototype.getFormKey = function () { return Transaction.UserPerdaganganForm.formKey; };
            UserPerdaganganDialog.prototype.getIdProperty = function () { return Transaction.UserPerdaganganRow.idProperty; };
            UserPerdaganganDialog.prototype.getLocalTextPrefix = function () { return Transaction.UserPerdaganganRow.localTextPrefix; };
            UserPerdaganganDialog.prototype.getNameProperty = function () { return Transaction.UserPerdaganganRow.nameProperty; };
            UserPerdaganganDialog.prototype.getService = function () { return Transaction.UserPerdaganganService.baseUrl; };
            UserPerdaganganDialog.prototype.getDeletePermission = function () { return Transaction.UserPerdaganganRow.deletePermission; };
            UserPerdaganganDialog.prototype.getInsertPermission = function () { return Transaction.UserPerdaganganRow.insertPermission; };
            UserPerdaganganDialog.prototype.getUpdatePermission = function () { return Transaction.UserPerdaganganRow.updatePermission; };
            UserPerdaganganDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], UserPerdaganganDialog);
            return UserPerdaganganDialog;
        }(Serenity.EntityDialog));
        Transaction.UserPerdaganganDialog = UserPerdaganganDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPerdaganganGrid = /** @class */ (function (_super) {
            __extends(UserPerdaganganGrid, _super);
            function UserPerdaganganGrid(container) {
                return _super.call(this, container) || this;
            }
            UserPerdaganganGrid.prototype.getColumnsKey = function () { return 'Transaction.UserPerdagangan'; };
            UserPerdaganganGrid.prototype.getDialogType = function () { return Transaction.UserPerdaganganDialog; };
            UserPerdaganganGrid.prototype.getIdProperty = function () { return Transaction.UserPerdaganganRow.idProperty; };
            UserPerdaganganGrid.prototype.getInsertPermission = function () { return Transaction.UserPerdaganganRow.insertPermission; };
            UserPerdaganganGrid.prototype.getLocalTextPrefix = function () { return Transaction.UserPerdaganganRow.localTextPrefix; };
            UserPerdaganganGrid.prototype.getService = function () { return Transaction.UserPerdaganganService.baseUrl; };
            UserPerdaganganGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPerdaganganGrid);
            return UserPerdaganganGrid;
        }(Serenity.EntityGrid));
        Transaction.UserPerdaganganGrid = UserPerdaganganGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPerikananPeternakanDialog = /** @class */ (function (_super) {
            __extends(UserPerikananPeternakanDialog, _super);
            function UserPerikananPeternakanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.UserPerikananPeternakanForm(_this.idPrefix);
                return _this;
            }
            UserPerikananPeternakanDialog.prototype.getFormKey = function () { return Transaction.UserPerikananPeternakanForm.formKey; };
            UserPerikananPeternakanDialog.prototype.getIdProperty = function () { return Transaction.UserPerikananPeternakanRow.idProperty; };
            UserPerikananPeternakanDialog.prototype.getLocalTextPrefix = function () { return Transaction.UserPerikananPeternakanRow.localTextPrefix; };
            UserPerikananPeternakanDialog.prototype.getService = function () { return Transaction.UserPerikananPeternakanService.baseUrl; };
            UserPerikananPeternakanDialog.prototype.getDeletePermission = function () { return Transaction.UserPerikananPeternakanRow.deletePermission; };
            UserPerikananPeternakanDialog.prototype.getInsertPermission = function () { return Transaction.UserPerikananPeternakanRow.insertPermission; };
            UserPerikananPeternakanDialog.prototype.getUpdatePermission = function () { return Transaction.UserPerikananPeternakanRow.updatePermission; };
            UserPerikananPeternakanDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], UserPerikananPeternakanDialog);
            return UserPerikananPeternakanDialog;
        }(Serenity.EntityDialog));
        Transaction.UserPerikananPeternakanDialog = UserPerikananPeternakanDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPerikananPeternakanGrid = /** @class */ (function (_super) {
            __extends(UserPerikananPeternakanGrid, _super);
            function UserPerikananPeternakanGrid(container) {
                return _super.call(this, container) || this;
            }
            UserPerikananPeternakanGrid.prototype.getColumnsKey = function () { return 'Transaction.UserPerikananPeternakan'; };
            UserPerikananPeternakanGrid.prototype.getDialogType = function () { return Transaction.UserPerikananPeternakanDialog; };
            UserPerikananPeternakanGrid.prototype.getIdProperty = function () { return Transaction.UserPerikananPeternakanRow.idProperty; };
            UserPerikananPeternakanGrid.prototype.getInsertPermission = function () { return Transaction.UserPerikananPeternakanRow.insertPermission; };
            UserPerikananPeternakanGrid.prototype.getLocalTextPrefix = function () { return Transaction.UserPerikananPeternakanRow.localTextPrefix; };
            UserPerikananPeternakanGrid.prototype.getService = function () { return Transaction.UserPerikananPeternakanService.baseUrl; };
            UserPerikananPeternakanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPerikananPeternakanGrid);
            return UserPerikananPeternakanGrid;
        }(Serenity.EntityGrid));
        Transaction.UserPerikananPeternakanGrid = UserPerikananPeternakanGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPertanianPerkebunanDialog = /** @class */ (function (_super) {
            __extends(UserPertanianPerkebunanDialog, _super);
            function UserPertanianPerkebunanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.UserPertanianPerkebunanForm(_this.idPrefix);
                return _this;
            }
            UserPertanianPerkebunanDialog.prototype.getFormKey = function () { return Transaction.UserPertanianPerkebunanForm.formKey; };
            UserPertanianPerkebunanDialog.prototype.getIdProperty = function () { return Transaction.UserPertanianPerkebunanRow.idProperty; };
            UserPertanianPerkebunanDialog.prototype.getLocalTextPrefix = function () { return Transaction.UserPertanianPerkebunanRow.localTextPrefix; };
            UserPertanianPerkebunanDialog.prototype.getService = function () { return Transaction.UserPertanianPerkebunanService.baseUrl; };
            UserPertanianPerkebunanDialog.prototype.getDeletePermission = function () { return Transaction.UserPertanianPerkebunanRow.deletePermission; };
            UserPertanianPerkebunanDialog.prototype.getInsertPermission = function () { return Transaction.UserPertanianPerkebunanRow.insertPermission; };
            UserPertanianPerkebunanDialog.prototype.getUpdatePermission = function () { return Transaction.UserPertanianPerkebunanRow.updatePermission; };
            UserPertanianPerkebunanDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], UserPertanianPerkebunanDialog);
            return UserPertanianPerkebunanDialog;
        }(Serenity.EntityDialog));
        Transaction.UserPertanianPerkebunanDialog = UserPertanianPerkebunanDialog;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var Transaction;
    (function (Transaction) {
        var UserPertanianPerkebunanGrid = /** @class */ (function (_super) {
            __extends(UserPertanianPerkebunanGrid, _super);
            function UserPertanianPerkebunanGrid(container) {
                return _super.call(this, container) || this;
            }
            UserPertanianPerkebunanGrid.prototype.getColumnsKey = function () { return 'Transaction.UserPertanianPerkebunan'; };
            UserPertanianPerkebunanGrid.prototype.getDialogType = function () { return Transaction.UserPertanianPerkebunanDialog; };
            UserPertanianPerkebunanGrid.prototype.getIdProperty = function () { return Transaction.UserPertanianPerkebunanRow.idProperty; };
            UserPertanianPerkebunanGrid.prototype.getInsertPermission = function () { return Transaction.UserPertanianPerkebunanRow.insertPermission; };
            UserPertanianPerkebunanGrid.prototype.getLocalTextPrefix = function () { return Transaction.UserPertanianPerkebunanRow.localTextPrefix; };
            UserPertanianPerkebunanGrid.prototype.getService = function () { return Transaction.UserPertanianPerkebunanService.baseUrl; };
            UserPertanianPerkebunanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPertanianPerkebunanGrid);
            return UserPertanianPerkebunanGrid;
        }(Serenity.EntityGrid));
        Transaction.UserPertanianPerkebunanGrid = UserPertanianPerkebunanGrid;
    })(Transaction = SDD.Transaction || (SDD.Transaction = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var VChartByAllPekerjaanDialog = /** @class */ (function (_super) {
            __extends(VChartByAllPekerjaanDialog, _super);
            function VChartByAllPekerjaanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new View.VChartByAllPekerjaanForm(_this.idPrefix);
                return _this;
            }
            VChartByAllPekerjaanDialog.prototype.getFormKey = function () { return View.VChartByAllPekerjaanForm.formKey; };
            VChartByAllPekerjaanDialog.prototype.getIdProperty = function () { return View.VChartByAllPekerjaanRow.idProperty; };
            VChartByAllPekerjaanDialog.prototype.getLocalTextPrefix = function () { return View.VChartByAllPekerjaanRow.localTextPrefix; };
            VChartByAllPekerjaanDialog.prototype.getNameProperty = function () { return View.VChartByAllPekerjaanRow.nameProperty; };
            VChartByAllPekerjaanDialog.prototype.getService = function () { return View.VChartByAllPekerjaanService.baseUrl; };
            VChartByAllPekerjaanDialog.prototype.getDeletePermission = function () { return View.VChartByAllPekerjaanRow.deletePermission; };
            VChartByAllPekerjaanDialog.prototype.getInsertPermission = function () { return View.VChartByAllPekerjaanRow.insertPermission; };
            VChartByAllPekerjaanDialog.prototype.getUpdatePermission = function () { return View.VChartByAllPekerjaanRow.updatePermission; };
            VChartByAllPekerjaanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VChartByAllPekerjaanDialog);
            return VChartByAllPekerjaanDialog;
        }(Serenity.EntityDialog));
        View.VChartByAllPekerjaanDialog = VChartByAllPekerjaanDialog;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var VChartByAllPekerjaanGrid = /** @class */ (function (_super) {
            __extends(VChartByAllPekerjaanGrid, _super);
            function VChartByAllPekerjaanGrid(container) {
                return _super.call(this, container) || this;
            }
            VChartByAllPekerjaanGrid.prototype.getColumnsKey = function () { return 'View.VChartByAllPekerjaan'; };
            VChartByAllPekerjaanGrid.prototype.getDialogType = function () { return View.VChartByAllPekerjaanDialog; };
            VChartByAllPekerjaanGrid.prototype.getIdProperty = function () { return View.VChartByAllPekerjaanRow.idProperty; };
            VChartByAllPekerjaanGrid.prototype.getInsertPermission = function () { return View.VChartByAllPekerjaanRow.insertPermission; };
            VChartByAllPekerjaanGrid.prototype.getLocalTextPrefix = function () { return View.VChartByAllPekerjaanRow.localTextPrefix; };
            VChartByAllPekerjaanGrid.prototype.getService = function () { return View.VChartByAllPekerjaanService.baseUrl; };
            VChartByAllPekerjaanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VChartByAllPekerjaanGrid);
            return VChartByAllPekerjaanGrid;
        }(Serenity.EntityGrid));
        View.VChartByAllPekerjaanGrid = VChartByAllPekerjaanGrid;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var VChartPenghasilanDesaDialog = /** @class */ (function (_super) {
            __extends(VChartPenghasilanDesaDialog, _super);
            function VChartPenghasilanDesaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new View.VChartPenghasilanDesaForm(_this.idPrefix);
                return _this;
            }
            VChartPenghasilanDesaDialog.prototype.getFormKey = function () { return View.VChartPenghasilanDesaForm.formKey; };
            VChartPenghasilanDesaDialog.prototype.getIdProperty = function () { return View.VChartPenghasilanDesaRow.idProperty; };
            VChartPenghasilanDesaDialog.prototype.getLocalTextPrefix = function () { return View.VChartPenghasilanDesaRow.localTextPrefix; };
            VChartPenghasilanDesaDialog.prototype.getNameProperty = function () { return View.VChartPenghasilanDesaRow.nameProperty; };
            VChartPenghasilanDesaDialog.prototype.getService = function () { return View.VChartPenghasilanDesaService.baseUrl; };
            VChartPenghasilanDesaDialog.prototype.getDeletePermission = function () { return View.VChartPenghasilanDesaRow.deletePermission; };
            VChartPenghasilanDesaDialog.prototype.getInsertPermission = function () { return View.VChartPenghasilanDesaRow.insertPermission; };
            VChartPenghasilanDesaDialog.prototype.getUpdatePermission = function () { return View.VChartPenghasilanDesaRow.updatePermission; };
            VChartPenghasilanDesaDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.toolbar.findButton(".delete-button").remove();
                this.toolbar.findButton(".save-and-close-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            };
            VChartPenghasilanDesaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VChartPenghasilanDesaDialog);
            return VChartPenghasilanDesaDialog;
        }(Serenity.EntityDialog));
        View.VChartPenghasilanDesaDialog = VChartPenghasilanDesaDialog;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var VChartPenghasilanDesaGrid = /** @class */ (function (_super) {
            __extends(VChartPenghasilanDesaGrid, _super);
            function VChartPenghasilanDesaGrid(container) {
                var _this = _super.call(this, container) || this;
                $(".add-button").hide();
                return _this;
            }
            VChartPenghasilanDesaGrid.prototype.getColumnsKey = function () { return 'View.VChartPenghasilanDesa'; };
            VChartPenghasilanDesaGrid.prototype.getDialogType = function () { return View.VChartPenghasilanDesaDialog; };
            VChartPenghasilanDesaGrid.prototype.getIdProperty = function () { return View.VChartPenghasilanDesaRow.idProperty; };
            VChartPenghasilanDesaGrid.prototype.getInsertPermission = function () { return View.VChartPenghasilanDesaRow.insertPermission; };
            VChartPenghasilanDesaGrid.prototype.getLocalTextPrefix = function () { return View.VChartPenghasilanDesaRow.localTextPrefix; };
            VChartPenghasilanDesaGrid.prototype.getService = function () { return View.VChartPenghasilanDesaService.baseUrl; };
            VChartPenghasilanDesaGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SDD.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: View.VChartPenghasilanDesaService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    title: "Excel",
                    separator: true
                }));
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.push(SDD.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: View.VChartPenghasilanDesaService.baseUrl + '/ListPdf',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    title: "Chart Desa",
                    separator: true
                }));
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 0);
                buttons.push(SDD.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: View.VChartPenghasilanDesaService.baseUrl + '/ListId',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    title: "Chart By Pekerjaan",
                    separator: true
                }));
                return buttons;
            };
            VChartPenghasilanDesaGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                var endFreight = null;
                filters.push({
                    field: "TotalPenghasilan" /* TotalPenghasilan */,
                    type: Serenity.DecimalEditor,
                    title: 'Total Penghasilan',
                    element: function (e1) {
                        e1.css("width", "100px");
                        endFreight = Serenity.Widget.create({
                            type: Serenity.DecimalEditor,
                            element: function (e2) { return e2.insertAfter(e1).css("width", "100px"); }
                        });
                        endFreight.element.change(function (x) { return e1.triggerHandler("change"); });
                        $("<span/>").addClass("range-separator").text("-").insertAfter(e1);
                    },
                    handler: function (h) {
                        var active1 = h.value != null && !isNaN(h.value);
                        var active2 = endFreight.value != null && !isNaN(endFreight.value);
                        h.active = active1 || active2;
                        if (active1)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["TotalPenghasilan" /* TotalPenghasilan */], '>=', h.value]);
                        if (active2)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["TotalPenghasilan" /* TotalPenghasilan */], '<=', endFreight.value]);
                    }
                });
                return filters;
            };
            VChartPenghasilanDesaGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum("TotalPenghasilan" /* TotalPenghasilan */)
                    ]
                });
                return grid;
            };
            VChartPenghasilanDesaGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            VChartPenghasilanDesaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VChartPenghasilanDesaGrid);
            return VChartPenghasilanDesaGrid;
        }(Serenity.EntityGrid));
        View.VChartPenghasilanDesaGrid = VChartPenghasilanDesaGrid;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewAllPengajuanDialog = /** @class */ (function (_super) {
            __extends(ViewAllPengajuanDialog, _super);
            function ViewAllPengajuanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new View.ViewAllPengajuanForm(_this.idPrefix);
                return _this;
            }
            ViewAllPengajuanDialog.prototype.getFormKey = function () { return View.ViewAllPengajuanForm.formKey; };
            ViewAllPengajuanDialog.prototype.getIdProperty = function () { return View.ViewAllPengajuanRow.idProperty; };
            ViewAllPengajuanDialog.prototype.getLocalTextPrefix = function () { return View.ViewAllPengajuanRow.localTextPrefix; };
            ViewAllPengajuanDialog.prototype.getNameProperty = function () { return View.ViewAllPengajuanRow.nameProperty; };
            ViewAllPengajuanDialog.prototype.getService = function () { return View.ViewAllPengajuanService.baseUrl; };
            ViewAllPengajuanDialog.prototype.getDeletePermission = function () { return View.ViewAllPengajuanRow.deletePermission; };
            ViewAllPengajuanDialog.prototype.getInsertPermission = function () { return View.ViewAllPengajuanRow.insertPermission; };
            ViewAllPengajuanDialog.prototype.getUpdatePermission = function () { return View.ViewAllPengajuanRow.updatePermission; };
            ViewAllPengajuanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewAllPengajuanDialog);
            return ViewAllPengajuanDialog;
        }(Serenity.EntityDialog));
        View.ViewAllPengajuanDialog = ViewAllPengajuanDialog;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewAllPengajuanGrid = /** @class */ (function (_super) {
            __extends(ViewAllPengajuanGrid, _super);
            function ViewAllPengajuanGrid(container) {
                return _super.call(this, container) || this;
            }
            ViewAllPengajuanGrid.prototype.getColumnsKey = function () { return 'View.ViewAllPengajuan'; };
            ViewAllPengajuanGrid.prototype.getDialogType = function () { return View.ViewAllPengajuanDialog; };
            ViewAllPengajuanGrid.prototype.getIdProperty = function () { return View.ViewAllPengajuanRow.idProperty; };
            ViewAllPengajuanGrid.prototype.getInsertPermission = function () { return View.ViewAllPengajuanRow.insertPermission; };
            ViewAllPengajuanGrid.prototype.getLocalTextPrefix = function () { return View.ViewAllPengajuanRow.localTextPrefix; };
            ViewAllPengajuanGrid.prototype.getService = function () { return View.ViewAllPengajuanService.baseUrl; };
            ViewAllPengajuanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewAllPengajuanGrid);
            return ViewAllPengajuanGrid;
        }(Serenity.EntityGrid));
        View.ViewAllPengajuanGrid = ViewAllPengajuanGrid;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewAllPenghasilanDialog = /** @class */ (function (_super) {
            __extends(ViewAllPenghasilanDialog, _super);
            function ViewAllPenghasilanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new View.ViewAllPenghasilanForm(_this.idPrefix);
                return _this;
            }
            ViewAllPenghasilanDialog.prototype.getFormKey = function () { return View.ViewAllPenghasilanForm.formKey; };
            ViewAllPenghasilanDialog.prototype.getIdProperty = function () { return View.ViewAllPenghasilanRow.idProperty; };
            ViewAllPenghasilanDialog.prototype.getLocalTextPrefix = function () { return View.ViewAllPenghasilanRow.localTextPrefix; };
            ViewAllPenghasilanDialog.prototype.getNameProperty = function () { return View.ViewAllPenghasilanRow.nameProperty; };
            ViewAllPenghasilanDialog.prototype.getService = function () { return View.ViewAllPenghasilanService.baseUrl; };
            ViewAllPenghasilanDialog.prototype.getDeletePermission = function () { return View.ViewAllPenghasilanRow.deletePermission; };
            ViewAllPenghasilanDialog.prototype.getInsertPermission = function () { return View.ViewAllPenghasilanRow.insertPermission; };
            ViewAllPenghasilanDialog.prototype.getUpdatePermission = function () { return View.ViewAllPenghasilanRow.updatePermission; };
            ViewAllPenghasilanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewAllPenghasilanDialog);
            return ViewAllPenghasilanDialog;
        }(Serenity.EntityDialog));
        View.ViewAllPenghasilanDialog = ViewAllPenghasilanDialog;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewAllPenghasilanGrid = /** @class */ (function (_super) {
            __extends(ViewAllPenghasilanGrid, _super);
            function ViewAllPenghasilanGrid(container) {
                return _super.call(this, container) || this;
            }
            ViewAllPenghasilanGrid.prototype.getColumnsKey = function () { return 'View.ViewAllPenghasilan'; };
            ViewAllPenghasilanGrid.prototype.getDialogType = function () { return View.ViewAllPenghasilanDialog; };
            ViewAllPenghasilanGrid.prototype.getIdProperty = function () { return View.ViewAllPenghasilanRow.idProperty; };
            ViewAllPenghasilanGrid.prototype.getInsertPermission = function () { return View.ViewAllPenghasilanRow.insertPermission; };
            ViewAllPenghasilanGrid.prototype.getLocalTextPrefix = function () { return View.ViewAllPenghasilanRow.localTextPrefix; };
            ViewAllPenghasilanGrid.prototype.getService = function () { return View.ViewAllPenghasilanService.baseUrl; };
            ViewAllPenghasilanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewAllPenghasilanGrid);
            return ViewAllPenghasilanGrid;
        }(Serenity.EntityGrid));
        View.ViewAllPenghasilanGrid = ViewAllPenghasilanGrid;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewMaasterFormDialog = /** @class */ (function (_super) {
            __extends(ViewMaasterFormDialog, _super);
            function ViewMaasterFormDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new View.ViewMaasterFormForm(_this.idPrefix);
                return _this;
            }
            ViewMaasterFormDialog.prototype.getFormKey = function () { return View.ViewMaasterFormForm.formKey; };
            ViewMaasterFormDialog.prototype.getIdProperty = function () { return View.ViewMaasterFormRow.idProperty; };
            ViewMaasterFormDialog.prototype.getLocalTextPrefix = function () { return View.ViewMaasterFormRow.localTextPrefix; };
            ViewMaasterFormDialog.prototype.getNameProperty = function () { return View.ViewMaasterFormRow.nameProperty; };
            ViewMaasterFormDialog.prototype.getService = function () { return View.ViewMaasterFormService.baseUrl; };
            ViewMaasterFormDialog.prototype.getDeletePermission = function () { return View.ViewMaasterFormRow.deletePermission; };
            ViewMaasterFormDialog.prototype.getInsertPermission = function () { return View.ViewMaasterFormRow.insertPermission; };
            ViewMaasterFormDialog.prototype.getUpdatePermission = function () { return View.ViewMaasterFormRow.updatePermission; };
            ViewMaasterFormDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewMaasterFormDialog);
            return ViewMaasterFormDialog;
        }(Serenity.EntityDialog));
        View.ViewMaasterFormDialog = ViewMaasterFormDialog;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewMaasterFormGrid = /** @class */ (function (_super) {
            __extends(ViewMaasterFormGrid, _super);
            function ViewMaasterFormGrid(container) {
                return _super.call(this, container) || this;
            }
            ViewMaasterFormGrid.prototype.getColumnsKey = function () { return 'View.ViewMaasterForm'; };
            ViewMaasterFormGrid.prototype.getDialogType = function () { return View.ViewMaasterFormDialog; };
            ViewMaasterFormGrid.prototype.getIdProperty = function () { return View.ViewMaasterFormRow.idProperty; };
            ViewMaasterFormGrid.prototype.getInsertPermission = function () { return View.ViewMaasterFormRow.insertPermission; };
            ViewMaasterFormGrid.prototype.getLocalTextPrefix = function () { return View.ViewMaasterFormRow.localTextPrefix; };
            ViewMaasterFormGrid.prototype.getService = function () { return View.ViewMaasterFormService.baseUrl; };
            ViewMaasterFormGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewMaasterFormGrid);
            return ViewMaasterFormGrid;
        }(Serenity.EntityGrid));
        View.ViewMaasterFormGrid = ViewMaasterFormGrid;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewProfilUserDialog = /** @class */ (function (_super) {
            __extends(ViewProfilUserDialog, _super);
            function ViewProfilUserDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new View.ViewProfilUserForm(_this.idPrefix);
                return _this;
            }
            ViewProfilUserDialog.prototype.getFormKey = function () { return View.ViewProfilUserForm.formKey; };
            ViewProfilUserDialog.prototype.getIdProperty = function () { return View.ViewProfilUserRow.idProperty; };
            ViewProfilUserDialog.prototype.getLocalTextPrefix = function () { return View.ViewProfilUserRow.localTextPrefix; };
            ViewProfilUserDialog.prototype.getNameProperty = function () { return View.ViewProfilUserRow.nameProperty; };
            ViewProfilUserDialog.prototype.getService = function () { return View.ViewProfilUserService.baseUrl; };
            ViewProfilUserDialog.prototype.getDeletePermission = function () { return View.ViewProfilUserRow.deletePermission; };
            ViewProfilUserDialog.prototype.getInsertPermission = function () { return View.ViewProfilUserRow.insertPermission; };
            ViewProfilUserDialog.prototype.getUpdatePermission = function () { return View.ViewProfilUserRow.updatePermission; };
            ViewProfilUserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewProfilUserDialog);
            return ViewProfilUserDialog;
        }(Serenity.EntityDialog));
        View.ViewProfilUserDialog = ViewProfilUserDialog;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewProfilUserGrid = /** @class */ (function (_super) {
            __extends(ViewProfilUserGrid, _super);
            function ViewProfilUserGrid(container) {
                return _super.call(this, container) || this;
            }
            ViewProfilUserGrid.prototype.getColumnsKey = function () { return 'View.ViewProfilUser'; };
            ViewProfilUserGrid.prototype.getDialogType = function () { return View.ViewProfilUserDialog; };
            ViewProfilUserGrid.prototype.getIdProperty = function () { return View.ViewProfilUserRow.idProperty; };
            ViewProfilUserGrid.prototype.getInsertPermission = function () { return View.ViewProfilUserRow.insertPermission; };
            ViewProfilUserGrid.prototype.getLocalTextPrefix = function () { return View.ViewProfilUserRow.localTextPrefix; };
            ViewProfilUserGrid.prototype.getService = function () { return View.ViewProfilUserService.baseUrl; };
            ViewProfilUserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewProfilUserGrid);
            return ViewProfilUserGrid;
        }(Serenity.EntityGrid));
        View.ViewProfilUserGrid = ViewProfilUserGrid;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewTransaksiFormulirDialog = /** @class */ (function (_super) {
            __extends(ViewTransaksiFormulirDialog, _super);
            function ViewTransaksiFormulirDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new View.ViewTransaksiFormulirForm(_this.idPrefix);
                return _this;
            }
            ViewTransaksiFormulirDialog.prototype.getFormKey = function () { return View.ViewTransaksiFormulirForm.formKey; };
            ViewTransaksiFormulirDialog.prototype.getIdProperty = function () { return View.ViewTransaksiFormulirRow.idProperty; };
            ViewTransaksiFormulirDialog.prototype.getLocalTextPrefix = function () { return View.ViewTransaksiFormulirRow.localTextPrefix; };
            ViewTransaksiFormulirDialog.prototype.getNameProperty = function () { return View.ViewTransaksiFormulirRow.nameProperty; };
            ViewTransaksiFormulirDialog.prototype.getService = function () { return View.ViewTransaksiFormulirService.baseUrl; };
            ViewTransaksiFormulirDialog.prototype.getDeletePermission = function () { return View.ViewTransaksiFormulirRow.deletePermission; };
            ViewTransaksiFormulirDialog.prototype.getInsertPermission = function () { return View.ViewTransaksiFormulirRow.insertPermission; };
            ViewTransaksiFormulirDialog.prototype.getUpdatePermission = function () { return View.ViewTransaksiFormulirRow.updatePermission; };
            ViewTransaksiFormulirDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                var DialogNew = this.isNew();
                this.toolbar.findButton(".delete-button").remove();
                if (!DialogNew) {
                    this.toolbar.findButton(".delete-button").remove();
                    this.toolbar.findButton(".save-and-close-button").remove();
                    this.toolbar.findButton(".apply-changes-button").remove();
                    var Option1 = Q.toId(this.form.Formulir.value);
                    if (Option1 !== "") {
                        $('.DokumenFormulir .editor').append("<a href='" + Option1 + "' target='_blank' class='btn btn-primary btn-xs'>Link Formulir</a>");
                    }
                    else {
                        $('.DokumenFormulir .editor').append("No File");
                    }
                }
            };
            ViewTransaksiFormulirDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewTransaksiFormulirDialog);
            return ViewTransaksiFormulirDialog;
        }(Serenity.EntityDialog));
        View.ViewTransaksiFormulirDialog = ViewTransaksiFormulirDialog;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewTransaksiFormulirGrid = /** @class */ (function (_super) {
            __extends(ViewTransaksiFormulirGrid, _super);
            function ViewTransaksiFormulirGrid(container) {
                var _this = _super.call(this, container) || this;
                $(".add-button").hide();
                return _this;
            }
            ViewTransaksiFormulirGrid.prototype.getColumnsKey = function () { return 'View.ViewTransaksiFormulir'; };
            ViewTransaksiFormulirGrid.prototype.getDialogType = function () { return View.ViewTransaksiFormulirDialog; };
            ViewTransaksiFormulirGrid.prototype.getIdProperty = function () { return View.ViewTransaksiFormulirRow.idProperty; };
            ViewTransaksiFormulirGrid.prototype.getInsertPermission = function () { return View.ViewTransaksiFormulirRow.insertPermission; };
            ViewTransaksiFormulirGrid.prototype.getLocalTextPrefix = function () { return View.ViewTransaksiFormulirRow.localTextPrefix; };
            ViewTransaksiFormulirGrid.prototype.getService = function () { return View.ViewTransaksiFormulirService.baseUrl; };
            ViewTransaksiFormulirGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "Formulir" /* Formulir */; }).format =
                    function (ctx) { return "<span class=\"label bg-info text-white\">" + ("<a href=\"" + Q.htmlEncode(ctx.value) + "\" target=\"_blank\"><i class=\"fa fa fa-file-excel-o text-red\"></i> Lihat Formulir</a>") + "</span>"; };
                return columns;
            };
            ViewTransaksiFormulirGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewTransaksiFormulirGrid);
            return ViewTransaksiFormulirGrid;
        }(Serenity.EntityGrid));
        View.ViewTransaksiFormulirGrid = ViewTransaksiFormulirGrid;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewUserPengajuanDialog = /** @class */ (function (_super) {
            __extends(ViewUserPengajuanDialog, _super);
            function ViewUserPengajuanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new View.ViewUserPengajuanForm(_this.idPrefix);
                return _this;
            }
            ViewUserPengajuanDialog.prototype.getFormKey = function () { return View.ViewUserPengajuanForm.formKey; };
            ViewUserPengajuanDialog.prototype.getIdProperty = function () { return View.ViewUserPengajuanRow.idProperty; };
            ViewUserPengajuanDialog.prototype.getLocalTextPrefix = function () { return View.ViewUserPengajuanRow.localTextPrefix; };
            ViewUserPengajuanDialog.prototype.getNameProperty = function () { return View.ViewUserPengajuanRow.nameProperty; };
            ViewUserPengajuanDialog.prototype.getService = function () { return View.ViewUserPengajuanService.baseUrl; };
            ViewUserPengajuanDialog.prototype.getDeletePermission = function () { return View.ViewUserPengajuanRow.deletePermission; };
            ViewUserPengajuanDialog.prototype.getInsertPermission = function () { return View.ViewUserPengajuanRow.insertPermission; };
            ViewUserPengajuanDialog.prototype.getUpdatePermission = function () { return View.ViewUserPengajuanRow.updatePermission; };
            ViewUserPengajuanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewUserPengajuanDialog);
            return ViewUserPengajuanDialog;
        }(Serenity.EntityDialog));
        View.ViewUserPengajuanDialog = ViewUserPengajuanDialog;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewUserPengajuanGrid = /** @class */ (function (_super) {
            __extends(ViewUserPengajuanGrid, _super);
            function ViewUserPengajuanGrid(container) {
                return _super.call(this, container) || this;
            }
            ViewUserPengajuanGrid.prototype.getColumnsKey = function () { return 'View.ViewUserPengajuan'; };
            ViewUserPengajuanGrid.prototype.getDialogType = function () { return View.ViewUserPengajuanDialog; };
            ViewUserPengajuanGrid.prototype.getIdProperty = function () { return View.ViewUserPengajuanRow.idProperty; };
            ViewUserPengajuanGrid.prototype.getInsertPermission = function () { return View.ViewUserPengajuanRow.insertPermission; };
            ViewUserPengajuanGrid.prototype.getLocalTextPrefix = function () { return View.ViewUserPengajuanRow.localTextPrefix; };
            ViewUserPengajuanGrid.prototype.getService = function () { return View.ViewUserPengajuanService.baseUrl; };
            ViewUserPengajuanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewUserPengajuanGrid);
            return ViewUserPengajuanGrid;
        }(Serenity.EntityGrid));
        View.ViewUserPengajuanGrid = ViewUserPengajuanGrid;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewUserPenghasilanDialog = /** @class */ (function (_super) {
            __extends(ViewUserPenghasilanDialog, _super);
            function ViewUserPenghasilanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new View.ViewUserPenghasilanForm(_this.idPrefix);
                return _this;
            }
            ViewUserPenghasilanDialog.prototype.getFormKey = function () { return View.ViewUserPenghasilanForm.formKey; };
            ViewUserPenghasilanDialog.prototype.getIdProperty = function () { return View.ViewUserPenghasilanRow.idProperty; };
            ViewUserPenghasilanDialog.prototype.getLocalTextPrefix = function () { return View.ViewUserPenghasilanRow.localTextPrefix; };
            ViewUserPenghasilanDialog.prototype.getNameProperty = function () { return View.ViewUserPenghasilanRow.nameProperty; };
            ViewUserPenghasilanDialog.prototype.getService = function () { return View.ViewUserPenghasilanService.baseUrl; };
            ViewUserPenghasilanDialog.prototype.getDeletePermission = function () { return View.ViewUserPenghasilanRow.deletePermission; };
            ViewUserPenghasilanDialog.prototype.getInsertPermission = function () { return View.ViewUserPenghasilanRow.insertPermission; };
            ViewUserPenghasilanDialog.prototype.getUpdatePermission = function () { return View.ViewUserPenghasilanRow.updatePermission; };
            ViewUserPenghasilanDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.toolbar.findButton(".delete-button").remove();
                this.toolbar.findButton(".save-and-close-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            };
            ViewUserPenghasilanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewUserPenghasilanDialog);
            return ViewUserPenghasilanDialog;
        }(Serenity.EntityDialog));
        View.ViewUserPenghasilanDialog = ViewUserPenghasilanDialog;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
var SDD;
(function (SDD) {
    var View;
    (function (View) {
        var ViewUserPenghasilanGrid = /** @class */ (function (_super) {
            __extends(ViewUserPenghasilanGrid, _super);
            function ViewUserPenghasilanGrid(container) {
                var _this = _super.call(this, container) || this;
                $(".add-button").hide();
                return _this;
            }
            ViewUserPenghasilanGrid.prototype.getColumnsKey = function () { return 'View.ViewUserPenghasilan'; };
            ViewUserPenghasilanGrid.prototype.getDialogType = function () { return View.ViewUserPenghasilanDialog; };
            ViewUserPenghasilanGrid.prototype.getIdProperty = function () { return View.ViewUserPenghasilanRow.idProperty; };
            ViewUserPenghasilanGrid.prototype.getInsertPermission = function () { return View.ViewUserPenghasilanRow.insertPermission; };
            ViewUserPenghasilanGrid.prototype.getLocalTextPrefix = function () { return View.ViewUserPenghasilanRow.localTextPrefix; };
            ViewUserPenghasilanGrid.prototype.getService = function () { return View.ViewUserPenghasilanService.baseUrl; };
            ViewUserPenghasilanGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(SDD.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: View.ViewUserPenghasilanService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    title: "Excel",
                    separator: true
                }));
                //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
                //buttons.push(Common.ExcelExportHelper.createToolButton({
                //    grid: this,
                //    service: ViewUserPenghasilanService.baseUrl + '/ListPdf',
                //    onViewSubmit: () => this.onViewSubmit(),        
                //    title: "Chart Desa",
                //    separator: true
                //}));
                return buttons;
            };
            ViewUserPenghasilanGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                var endFreight = null;
                filters.push({
                    field: "TotalHasil" /* TotalHasil */,
                    type: Serenity.DecimalEditor,
                    title: 'Total Penghasilan',
                    element: function (e1) {
                        e1.css("width", "100px");
                        endFreight = Serenity.Widget.create({
                            type: Serenity.DecimalEditor,
                            element: function (e2) { return e2.insertAfter(e1).css("width", "100px"); }
                        });
                        endFreight.element.change(function (x) { return e1.triggerHandler("change"); });
                        $("<span/>").addClass("range-separator").text("-").insertAfter(e1);
                    },
                    handler: function (h) {
                        var active1 = h.value != null && !isNaN(h.value);
                        var active2 = endFreight.value != null && !isNaN(endFreight.value);
                        h.active = active1 || active2;
                        if (active1)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["TotalHasil" /* TotalHasil */], '>=', h.value]);
                        if (active2)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["TotalHasil" /* TotalHasil */], '<=', endFreight.value]);
                    }
                });
                return filters;
            };
            ViewUserPenghasilanGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum("TotalHasil" /* TotalHasil */)
                    ]
                });
                return grid;
            };
            ViewUserPenghasilanGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            ViewUserPenghasilanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewUserPenghasilanGrid);
            return ViewUserPenghasilanGrid;
        }(Serenity.EntityGrid));
        View.ViewUserPenghasilanGrid = ViewUserPenghasilanGrid;
    })(View = SDD.View || (SDD.View = {}));
})(SDD || (SDD = {}));
//# sourceMappingURL=SDD.Web.js.map