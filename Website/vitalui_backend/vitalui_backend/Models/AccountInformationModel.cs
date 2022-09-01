

namespace vitalui_backend.Models;

public class AccountInformationModel
{

    public class AccountRoot
    {
        public string? email { get; set; }
        public string? username { get; set; }
        public string? password { get; set; }
        public string? hasPremium { get; set; }
    }

}