using Microsoft.AspNetCore.Mvc;
using vitalui_backend.Services;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;
using vitalui_backend.Models;

namespace vitalui_backend.Controllers;


[ApiController]
[Route("api/info")]
public class AccountInformationController : ControllerBase
{

    AccountInformationDatabase AID = new AccountInformationDatabase();

    [HttpPost]
    public async Task<IActionResult> FromBody([FromBody] AccountInformationModel.root root)
    {
        byte[] salt = RandomNumberGenerator.GetBytes(128 / 8);
        string? salt_NUM = Convert.ToBase64String(salt);

        string hashed_password = Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: root.password,
            salt: salt,
            prf: KeyDerivationPrf.HMACSHA256,
            iterationCount: 100000,
            numBytesRequested: 256 / 8
        ));

        System.Console.WriteLine(hashed_password);

        System.Console.WriteLine($"Hello {root.email}, {root.username}, {root.password}, {root.hasPremium}");
        AID.MainDBCall(root.email, root.username, hashed_password);
        return Ok();

    }

}
