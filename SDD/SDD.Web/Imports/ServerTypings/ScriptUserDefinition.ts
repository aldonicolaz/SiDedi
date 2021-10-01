namespace SDD {
    export interface ScriptUserDefinition {
        UserId?: number;
        RoleId?: number;
        RoleName?: string;
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: { [key: string]: boolean };
        Roles?: string[];
        RolesId?: number[];
        IdDesa?: number;
    }
}

