using RestSharp;
using Newtonsoft.Json;
using System.Net;
using System.Collections.Specialized;
using System.Text;
using MySql.Data.MySqlClient;
using vitalui_backend.Models;
using vitalui_backend.Controllers;

namespace vitalui_backend.Services;

public class AccountInformationDatabase
{

    public AccountInformationModel.AccountRoot? AIM = new AccountInformationModel.AccountRoot();
    public string? canLogin;
    public void sendAccInfo(string? email, string? username, string? passHash)
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

        string queryAddAccountInfoToTable = $"INSERT INTO account_info (email, username, password, hasPremium)";
        queryAddAccountInfoToTable += $" VALUES ('{email}','{username}','{passHash}','0');";
        queryAddAccountInfoToTable += $" INSERT INTO account_access (username, canAccess) VALUES ('{username}','false');";

        MySqlCommand cmd = new MySqlCommand(queryAddAccountInfoToTable, conn);

        MySqlDataReader reader = cmd.ExecuteReader();

        if(reader.Read())
        {
            //AIM.email = reader["email"].ToString();
            //AIM.username = reader["username"].ToString();
            AIM.hasPremium = reader["hasPremium"].ToString();

        }else
        {
            System.Console.WriteLine("No Data Found");
        }

        reader.Close();
        conn.Close();
    }


    public void retrieveLogin(string? username, string? pass)
    {

        string db_server = "vitalui-db.cn3xtnvutosx.us-east-1.rds.amazonaws.com";
        string db_port = "3306";
        string db_username = "admin";        
        string db_password = "spaceteJTAG1";
        string db_database = "vitalui_database";

        string db_constring = "SERVER="+db_server+";"+"PORT="+db_port+";"+"DATABASE="+db_database+";"+"UID="+db_username+";"+"PASSWORD="+db_password+";";

        MySqlConnection conn = new MySqlConnection(db_constring);
        conn.Open();

        // string queryCheckTable = $"Select * from account_info";
        string queryCheckTable = $"select * from account_info where username='{username}' and password='{pass}'";


        MySqlCommand cmd = new MySqlCommand(queryCheckTable, conn);

        List<string> AccountInfo = new List<string>();
        using(MySqlDataReader reader = cmd.ExecuteReader())
        {         
            bool canAccess;
            if(reader.Read())
            {
                for (int i = 0; i < reader.FieldCount; i++)
                {
                    AccountInfo.Add(reader.GetValue(i).ToString());
                }
                System.Console.WriteLine(AccountInfo[2] + " Fully Found!");
                // Round 2
                canLogin = "true";
                reader.Close();
                
            }
            else{
                System.Console.WriteLine("Data Not Found!");
                canLogin = "false";
                reader.Close();
            }
        }
                
    }
    
}

