using ArtLocal.Data;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDirectoryBrowser();

builder.Services.Configure<FormOptions>(options =>
{
    options.MemoryBufferThreshold = Int32.MaxValue;
    options.MultipartBodyLengthLimit = long.MaxValue;
});

// inject DbContext
builder.Services.AddDbContext<ArtLocalDataContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("Default")
));

// allow CORS for Angular UI to communicate with the API
builder.Services.AddCors((setup) =>
{
    setup.AddPolicy("defaultCorsPolicy", (options) =>
    {
        options.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// set CORs to the policy we created above
app.UseCors("defaultCorsPolicy");
app.UseHttpsRedirection();
app.UseAuthorization();
app.UseStaticFiles();

// these are here so users can access the photos stored in the
// UploadedFiles directory
app.UseStaticFiles(new StaticFileOptions()
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), @"UploadedFiles")),
    RequestPath = new PathString("/UploadedFiles")
});
app.UseDirectoryBrowser(new DirectoryBrowserOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), @"UploadedFiles")),
    RequestPath = new PathString("/UploadedFiles")
});
app.MapControllers();
app.Run();
