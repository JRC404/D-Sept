using System;
using MySql.Data.MySqlClient;

class Program {
    static void Main(string[] args)
    {
        string connectionString = "server=127.0.0.1;database=College;user=root;password=MyPassword1234";
        // the order of this can be changed but this is the standard structure of the connectionString
        DatabaseManager dbManager = new DatabaseManager(connectionString);

        List<Student> students = dbManager.SelectAllRecords();

        Console.WriteLine("Students: ");
        foreach (Student student in students)
        {
            Console.WriteLine($"ID: {student.StudentID}, Name: {student.FullName}");
        }
    }
}