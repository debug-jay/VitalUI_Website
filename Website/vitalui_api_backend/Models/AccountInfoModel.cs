

namespace vital_ui_api_backend.Models;

public class AccountInfoModel
{
    public class root
    {
        public string? username { get; set; }
        public string? password { get; set; }
        public bool? hasPremium { get; set; }
    }
}