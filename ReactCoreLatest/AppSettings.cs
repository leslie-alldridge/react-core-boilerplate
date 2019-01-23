using System;

namespace ReactCoreLatest
{
    public class AppSettings
    {
        public static AppSettings Default { get; }

        protected AppSettings()
        {
        }

        static AppSettings()
        {
            Default = new AppSettings();
        }

        public bool IsDevelopment =>
            Environment.GetEnvironmentVariables()["ASPNETCORE_ENVIRONMENT"]?.ToString() == "Development";
    }
}
