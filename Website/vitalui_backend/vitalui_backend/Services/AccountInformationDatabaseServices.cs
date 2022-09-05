using MySql.Data.MySqlClient;
using vitalui_backend.Models;
using System.Text;
using vitalui_backend.Controllers;

namespace vitalui_backend.Services;

public class AccountInformationDatabase
{
    private DataBaseInformation DI = new DataBaseInformation();
    public string? DidSucceed;
    public string? canLogin;
    public string? userFound;
  
    public void sendAccInfo(string? email, string? username, string? passHash)
    {        
        MySqlConnection conn = new MySqlConnection(DI.constring);
        conn.Open();

        if(email != "" || username != "" || passHash != "")
        {
            string queryAddAccountInfoToTable = $"INSERT INTO account_info (email, username, password, hasPremium)";
            queryAddAccountInfoToTable += $" VALUES ('{email}','{username}','{passHash}','0');";

            MySqlCommand cmd = new MySqlCommand(queryAddAccountInfoToTable, conn);

            DidSucceed = "true";

            MySqlDataReader reader = cmd.ExecuteReader();

            if(reader.Read())
            {
                // Need this for a Odd Reason, So.. It's Here
            }
        }
        else{
            System.Console.WriteLine("Contains Null Variables");
            DidSucceed = "false";
        }

        conn.Close();
    }


    public void retrieveLogin(string? username, string? pass)
    {
        MySqlConnection conn = new MySqlConnection(DI.constring);
        conn.Open();

        string queryCheckTable = $"select * from account_info where username='{username}'";
        MySqlCommand cmd = new MySqlCommand(queryCheckTable, conn);

        List<string> AccountList = new List<string>();

        try{
            using(MySqlDataReader reader = cmd.ExecuteReader())
            {         
                if(reader.Read())
                {
                    for (int i = 0; i < reader.FieldCount; i++)
                    {
                        AccountList.Add(reader.GetValue(i).ToString()); 
                    }

                    bool verified = BCrypt.Net.BCrypt.Verify(pass, AccountList[3]);
                    if(verified)
                    {
                        System.Console.WriteLine("Verified");
                        canLogin = "true";
                    }
                    else{
                        System.Console.WriteLine("Not Verified");
                        canLogin = "false";
                    }
                    reader.Close();
                }
                else{
                    System.Console.WriteLine($"{username} Not Found!");
                    canLogin = "false";
                    reader.Close();
                }
            }
        } catch(Exception E)
        {
            System.Console.WriteLine(E.Message);
        }      
    }

    public void CheckUser(string? username)
    {
        MySqlConnection conn = new MySqlConnection(DI.constring);
        conn.Open();

        string queryCheckTable = $"select username from account_info where username='{username}'";

        MySqlCommand cmd = new MySqlCommand(queryCheckTable, conn);

        MySqlDataReader reader = cmd.ExecuteReader();

        if(reader.Read())
        {
            for(int i = 0; i < reader.FieldCount; i++)
            {
                System.Console.WriteLine(reader.GetValue(i).ToString() + " Found");
            }
            userFound = "true";
        }
        else{
            System.Console.WriteLine("Username Not Found");
            userFound = "false";
        }

    }
    
}

