using Microsoft.AspNetCore.Mvc;
using vitalui_backend.Services;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;
using System;
using System.Text;
using vitalui_backend.Models;

namespace vitalui_backend.Controllers;


[ApiController]
[Route("api")]
public class AccountInformationController : ControllerBase
{

    AccountInformationDatabase AID = new AccountInformationDatabase();

    [HttpPost]
    [Route("sendinfo")]
    public async Task<IActionResult> ForInfo([FromBody] AccountInformationModel.AccountRoot root)
    {
        
        string? pass = this.HashPassword(root.password);
        
        System.Console.WriteLine($"Hello {root.email}, {root.username}, {root.password}, {root.hasPremium}");
        AID.sendAccInfo(root.email, root.username, pass);
        return Ok();

    }

    [HttpPost]
    [Route("checkinfo")]
    public async Task<IActionResult> ForCheck([FromBody] AccountInformationModel.AccountRoot root)
    {
        string? pass = this.HashPassword(root.password);
        
        AID.retrieveLogin(root.username, pass);
        return Ok();
    }

    string HashPassword(string? rawData)
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
