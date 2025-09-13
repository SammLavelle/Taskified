using FastEndpoints;
using FastEndpoints.Swagger;
using Microsoft.EntityFrameworkCore;
using Tasks;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .WithOrigins("http://localhost:3000") // your frontend dev server
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});


// builder.Services.AddAuthentication();
// builder.Services.AddAuthorization(); 
builder.Services.AddFastEndpoints();
builder.Services.SwaggerDocument();

builder.Services.AddDbContext<TasksDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// app.UseAuthentication(); 
// app.UseAuthorization();

// Enable Swagger in dev
if (app.Environment.IsDevelopment())
{
    app.UseSwaggerGen(); // from FastEndpoints.Swagger
}

app.UseCors();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();
app.UseFastEndpoints();


app.Run();

