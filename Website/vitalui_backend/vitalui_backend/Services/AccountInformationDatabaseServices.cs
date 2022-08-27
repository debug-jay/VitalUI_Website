using RestSharp;
using Newtonsoft.Json;
using MySql.Data.MySqlClient;
using vitalui_backend.Models;

namespace vitalui_backend.Services;

public class AccountInformationDatabase
{

    public AccountInformationModel.root? AIM = new AccountInformationModel.root();

    public void MainDBCall(string? email, string? username, string? password)
    {
        
        
        System.Console.WriteLine("MainDBCall");
        string db_server = "vitalui-db.cn3xtnvutosx.us-east-1.rds.amazonaws.com";
        string db_port = "3306";
        string db_username = "admin";        
        string db_password = "spaceteJTAG1";
        string db_database = "vitalui_database";

        string db_constring = "SERVER="+db_server+";"+"PORT="+db_port+";"+"DATABASE="+db_database+";"+"UID="+db_username+";"+"PASSWORD="+db_password+";";

        MySqlConnection conn = new MySqlConnection(db_constring);
        conn.Open();

        string queryAddToTable = $"INSERT INTO account_info (email, username, password, hasPremium)";
        queryAddToTable += $" VALUES ('{email}','{username}','{password}','0');";

        MySqlCommand cmd = new MySqlCommand(queryAddToTable, conn);
        
        

        MySqlDataReader reader = cmd.ExecuteReader();

        if(reader.Read())
        {
            AIM.email = reader["email"].ToString();
            AIM.username = reader["username"].ToString();
            AIM.password = reader["password"].ToString();
            AIM.hasPremium = reader["hasPremium"].ToString();

        }else
        {
            System.Console.WriteLine("No Data Found");
        }
        reader.Close();
        conn.Close();
    }

    public void DBGETINFORMATION()
    {
        

    }
}