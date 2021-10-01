
namespace SDD.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Input username...")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Input password..."), Required(true)]
        public string Password { get; set; }
    }
}