# C-Sharp

* dotnet new webapp -n back-end
* dotnet run

# Angular

* ng new front-end
* ng serve --open

# CRUD - Create, Read, Update & Delete

* GET
* POST
* PUT / PATCH
* DELETE

## Steps

* ng generate component user-list
* Head over to app.module.ts:
```ts
import { HttpClientModule } from '@angular/common/http';

imports [
    HttpClientModule // add HttpClientModule to the imports
]
```

* Go to user-list.component.ts
    * Import OnInit from Angular Core
    * Import HttpClient from Angular Common Http
    * Implement OnInit in the class Component
    * Add the following code:
```ts
users: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5005/api/users').subscribe((data: any) => {
      this.users = data;
    });
  }
```

## Moving over to C# now

* Program.cs, replace the file with the following code:
```cs
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddControllers();

        // Enable CORS.
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("default", policy =>
            {
                policy.AllowAnyOrigin(); // Normally, you would be specific about your origin
                policy.AllowAnyMethod();
                policy.AllowAnyHeader();
            });
        });

        var app = builder.Build();

        // Configure the HTTP pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseRouting();
        app.UseCors("default");
        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });

        app.Run();
    }
}
```

* Create a folder called 'Controllers'
* Create a file called UserController.cs
  * Inside of UserController, add the following code:
```cs
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
```