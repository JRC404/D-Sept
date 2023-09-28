using MySql.Data.MySqlClient;

public class DatabaseManager 
{
    private string connectionString;
    public DatabaseManager(string connectionString)
    {
        this.connectionString = connectionString;
    }

    public List<Student> SelectAllRecords()
    {
        List<Student> students = new List<Student>();

        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            connection.Open();
            string query = "Select * FROM Students";
            MySqlCommand command = new MySqlCommand(query, connection);
    
            using (MySqlDataReader reader = command.ExecuteReader())
            {
                while(reader.Read())
                {
                    Student student = new Student
                    {
                        StudentID = reader.GetInt32("StudentID"),
                        FullName = reader.GetString("FullName")
                    };
                    students.Add(student);
                }
            }
        }
        return students;
    }


}