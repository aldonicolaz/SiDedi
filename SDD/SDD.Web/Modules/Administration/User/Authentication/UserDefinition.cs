namespace SDD
{
    using Serenity;
    using System;
    using System.Collections.Generic;

    [Serializable]
    public class UserDefinition : IUserDefinition
    {
        public string Id { get { return UserId.ToInvariant(); } }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string UserImage { get; set; }
        public short IsActive { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public string Source { get; set; }
        public DateTime? UpdateDate { get; set; }
        public DateTime? LastDirectoryUpdate { get; set; }
        public List<RoleDefinition> Roles { get; set; }
        public Int64 IdDesa { get; set; }

        [Serializable]
        public class RoleDefinition
        {
            public int RoleId { get; set; }
            public string RoleName { get; set; }
        }
    }
}