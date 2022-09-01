namespace vitalui_backend.Models;

public class DataBaseInformation
{
    private static string? server = "vitalui-db.cn3xtnvutosx.us-east-1.rds.amazonaws.com";
    private static string? port = "3306";
    private static string? username = "admin";
    private static string? password = "spaceteJTAG1";
    private static string? database = "vitalui_database";
    public string? constring = "SERVER="+server+";"+"PORT="+port+";"+"DATABASE="+database+";"+"UID="+username+";"+"PASSWORD="+password+";";
}