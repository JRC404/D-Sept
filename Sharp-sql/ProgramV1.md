```csharp
using System;
using MySql.Data.MySqlClient;

class Program {
    static void Main()
    {
        string connectionString = "server=127.0.0.1;database=College;user=root;password=MyPassword1234";
        // the order of this can be changed but this is the standard structure of the connectionString

        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            try
            {
                connection.Open(); // opening the connection to the database

                string sqlQuery = "SELECT * FROM Students;"; // my SQL query that we are going to send with the request

                using (MySqlCommand command = new MySqlCommand(sqlQuery, connection))
                {
                    using (MySqlDataReader reader = command.ExecuteReader())
                    {
                        while(reader.Read())
                        {
                            int StudentID = reader.GetInt32("StudentID");
                            string FullName = reader.GetString("FullName");
                            // if we want to pull more information back, we can

                            Console.WriteLine($"ID: {StudentID}, Name: {FullName}");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
}
```