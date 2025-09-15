using FastEndpoints;
using FastEndpoints.Swagger;
using Microsoft.EntityFrameworkCore;
using NotificationService;
using NotificationService.Services;

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
 // builder.Services.AddFastEndpoints();
 // builder.Services.SwaggerDocument();

builder.Services.AddDbContext<NotificationsDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("NotificationDb")));

builder.Services.AddHostedService<ConsumeRabbitMQMessagesService>();

var app = builder.Build();

// app.UseAuthentication(); 
// app.UseAuthorization();

// Enable Swagger in dev
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwaggerGen(); // from FastEndpoints.Swagger
// }

app.UseCors();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();
// app.UseFastEndpoints();


app.Run();