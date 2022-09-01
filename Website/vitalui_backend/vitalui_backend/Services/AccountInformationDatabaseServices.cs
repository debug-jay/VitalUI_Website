using MySql.Data.MySqlClient;
using vitalui_backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace vitalui_backend.Services;

public class AccountInformationDatabase
{
    private DataBaseInformation DI = new DataBaseInformation();
    private AccountInformationModel.AccountRoot? AIM = new AccountInformationModel.AccountRoot();
    public string? DidSucceed;
    public string? canLogin;
  
    public void sendAccInfo(string? email, string? username, string? passHash)
    {        
        MySqlConnection conn = new MySqlConnection(DI.constring);
        conn.Open();

        if(email != "" && username != "" && passHash != "")
        {

            string queryAddAccountInfoToTable = $"INSERT INTO account_info (email, username, password, hasPremium)";
            queryAddAccountInfoToTable += $" VALUES ('{email}','{username}','{passHash}','0');";
            MySqlCommand cmd = new MySqlCommand(queryAddAccountInfoToTable, conn);
            DidSucceed = "true";
        }
        else{
            System.Console.WriteLine("Null Variables");
            DidSucceed = "false";
        }

        conn.Close();
    }


    public void retrieveLogin(string? username, string? pass)
    {
        MySqlConnection conn = new MySqlConnection(DI.constring);
        conn.Open();

        // string queryCheckTable = $"Select * from account_info";
        string queryCheckTable = $"select * from account_info where username='{username}' and password='{pass}'";


        MySqlCommand cmd = new MySqlCommand(queryCheckTable, conn);

        List<string> AccountInfo = new List<string>();
        using(MySqlDataReader reader = cmd.ExecuteReader())
        {         
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
                System.Console.WriteLine($"{username} Not Found!");
                canLogin = "false";
                reader.Close();
            }
        }
                
    }
    
}

