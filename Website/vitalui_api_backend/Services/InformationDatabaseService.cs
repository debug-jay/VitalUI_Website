using MySql.Data.MySqlClient;
using RestSharp;
using Newtonsoft.Json;
using vital_ui_api_backend.Models;

namespace vital_ui_api_backend.Services;

public class InformationDatabaseService
{

    public AccountInfoModel.root? AIM = new AccountInfoModel.root();

    public void MainDBCall(string? username, string? password, bool hasPremium)
    {
        string db_server = "";
        string db_database = "vitalui-database";
        string db_username = "admin";
        string db_password = "spaceteJTAG1";
        string constring = "SERVER="+db_server+";"+"DATABASE="+db_database+";"+"UID="+db_username+";"+"PASSWORD="+db_password+";";

        MySqlConnection conn = new MySqlConnection(constring);
        conn.Open();

    }

}