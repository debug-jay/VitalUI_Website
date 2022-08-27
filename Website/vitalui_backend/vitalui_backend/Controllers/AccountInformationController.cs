using Microsoft.AspNetCore.Mvc;
using vitalui_backend.Services;
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
        System.Console.WriteLine($"Hello {root.email}, {root.username}, {root.password}, {root.hasPremium}");
        AID.MainDBCall(root.email, root.username, root.password);
        return Ok();

    }

}
