using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using GunplaridiseSite.Data;
using Microsoft.AspNetCore.Authentication.Cookies;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

//entity framework
builder.Services.AddDbContext<GunplaridiseContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("GunplaridiseContext") ?? throw new InvalidOperationException("Connection string 'GunplaridiseContext' not found.")));

//Cookie based authentication
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.ExpireTimeSpan = TimeSpan.FromMinutes(30);
        options.SlidingExpiration = true;
        options.LoginPath = "/Users/login";
        options.LogoutPath = "/Users/logout";
        options.AccessDeniedPath = "/AccessDenied/";
    });


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
