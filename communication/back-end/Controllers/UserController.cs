using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private static readonly List<User> users = new List<User>
    {
        new User { Id = 1, Name = "Bob Bobbington" },
        new User { Id = 2, Name = "Tim Timmington" },
        new User { Id = 3, Name = "Steve Stevington" }
    };

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(users);
    }
}

// can separate this out into a new class file...
public class User
{
    public int? Id { get; set; }
    public string? Name { get; set; }
}