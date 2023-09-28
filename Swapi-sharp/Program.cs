// dotnet run
using System;
using System.Text.Json;

class Program
{
    static async Task Main(string[] args)
    {
        try
        {
            using (HttpClient client = new HttpClient()) // this is creating a new instance of the HttpClient
            {
                // string apiUrl = "https://swapi.dev/api/people/1";
                string apiUrl = "https://swapi.dev/api/people/";
                HttpResponseMessage response = await client.GetAsync(apiUrl);
                // Console.WriteLine(response);

                if (response.IsSuccessStatusCode)
                {
                    string data = await response.Content.ReadAsStringAsync();
                    // Console.WriteLine(data);
                    var characterData = JsonSerializer.Deserialize<StarWarsCharacterList>(data, new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
                    foreach (var character in characterData.Results)
                    {
                        Console.WriteLine($"Name: {character.Name}");
                        Console.WriteLine($"Height: {character.Height}");
                        Console.WriteLine($"Mass: {character.Mass}");
                    }
                    // Console.WriteLine($"Name: {characterData.Name}");
                    // Console.WriteLine($"Height: {characterData.Height}");
                    // Console.WriteLine($"Mass: {characterData.Mass}");
                }
                else
                {
                    Console.WriteLine($"Error: {response.StatusCode} - {response.ReasonPhrase}");
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception happened. Not good. {ex.Message}");
        }
    }
}