using Microsoft.AspNetCore.Mvc;
using vitalui_backend.Services;
using System.Security.Cryptography;
using System.Text;
using BCrypt.Net;
using vitalui_backend.Models;

namespace vitalui_backend.Controllers;


[ApiController]
[Route("api")]
public class AccountInformationController : ControllerBase
{
    private AccountInformationDatabase AID = new AccountInformationDatabase();

    [HttpPost]
    [Route("sendinfo")]
    public async Task<IActionResult> ForInfo([FromBody] AccountInformationModel.AccountRoot root)
    {
        string passHash = BCrypt.Net.BCrypt.HashPassword(root.password);

        System.Console.WriteLine($"Hello {root.email}, {root.username}, {passHash}, {root.hasPremium}");

        AID.sendAccInfo(root.email, root.username, passHash);

        return Ok(AID.DidSucceed);

    }

    [HttpPost]
    [Route("checkinfo")]
    public async Task<IActionResult> ForCheck([FromBody] AccountInformationModel.AccountRoot root)
    {
        AID.retrieveLogin(root.username, root.password);
        
        return Ok(AID.canLogin);
    }

    [HttpPost]
    [Route("cuser")]
    public async Task<IActionResult> UserCheck([FromBody] AccountInformationModel.AccountRoot root)
    {
        AID.CheckUser(root.username);

        return Ok(AID.userFound);
    }

}

