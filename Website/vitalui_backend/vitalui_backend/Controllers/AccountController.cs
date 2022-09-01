using Microsoft.AspNetCore.Mvc;
using vitalui_backend.Services;
using System.Security.Cryptography;
using System.Text;
using vitalui_backend.Models;

namespace vitalui_backend.Controllers;


[ApiController]
[Route("api")]
public class AccountInformationController : ControllerBase
{
    private AccountInformationDatabase AID = new AccountInformationDatabase();
    private DataFunctions DF = new DataFunctions();

    [HttpPost]
    [Route("sendinfo")]
    public async Task<IActionResult> ForInfo([FromBody] AccountInformationModel.AccountRoot root)
    {
        
        string? pass = DF.HashPassword(root.password);
        
        System.Console.WriteLine($"Hello {root.email}, {root.username}, {root.password}, {root.hasPremium}");
        AID.sendAccInfo(root.email, root.username, pass);
        return Ok(AID.DidSucceed);

    }

    [HttpPost]
    [Route("checkinfo")]
    public async Task<IActionResult> ForCheck([FromBody] AccountInformationModel.AccountRoot root)
    {
        string? pass = DF.HashPassword(root.password);

        AID.retrieveLogin(root.username, pass);
        return Ok(AID.canLogin);
    }

 

}

public class DataFunctions
{
    public bool canAccess;
    public string HashPassword(string? rawData)
    {
        using (SHA256 sha256Hash = SHA256.Create())
        {
            byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < bytes.Length; i++)
            {
                builder.Append(bytes[i].ToString("x2"));
            }
            return builder.ToString();
        }
    }

}

