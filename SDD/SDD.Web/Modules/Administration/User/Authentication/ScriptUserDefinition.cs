namespace SDD
{
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;

    /// <summary>
    /// This data will be available from script code using a dynamic script.
    /// Add properties you need from script code and set them in UserEndpoint.GetUserData.
    /// </summary>
    [ScriptInclude]
    public class ScriptUserDefinition
    {
        public int UserId { get; set; }
        public int RoleId { get; set; }
        public String RoleName { get; set; }
        public String Username { get; set; }
        public String DisplayName { get; set; }
        public Boolean IsAdmin { get; set; }
        public Dictionary<string, bool> Permissions { get; set; }
        public List<string> Roles { get; internal set; }
        public List<int> RolesId { get; internal set; }
        public Int64 IdDesa { get; set; }
    }
}