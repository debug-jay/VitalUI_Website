using Microsoft.AspNetCore.Mvc;
using vital_ui_api_backend.Models;

namespace vital_ui_api_backend.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountInfoController : ControllerBase
{
    
    [HttpPost]
    public async Task<IActionResult> FromBody([FromBody] AccountInfoModel.root root)
    {
        return Ok();
    }
}