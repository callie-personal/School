using Microsoft.Data.Sqlite;
using CupcakeApplication.Models;

namespace CupcakeApplication.Data
{
    public class DatabaseClass
    {
        public static Cupcake getCupcakeById(int cupcakeId)
        {
          Cupcake cupcake = new Cupcake();

            //connect to database
            SqliteConnection connection = new SqliteConnection("Data Source= Data/Cupcake.db");

            //open a connection to the database
            connection.Open();
            string sql = "SELECT CupcakeId, Name, ImageFileName, Description, Price FROM Cupcake WHERE CupcakeId = " + cupcakeId;

            //creating a command to execute sql
            SqliteCommand cmd = connection.CreateCommand();
            cmd.CommandText = sql;
            cmd.Parameters.AddWithValue("$CupcakeId", cupcakeId);

            //execute the sql command
            SqliteDataReader reader = cmd.ExecuteReader();

            //read the results
            while (reader.Read())
            {
                cupcake.CupcakeId = reader.GetInt32(0);
                cupcake.Name = reader.GetString(1);
                //if there's no filename, create it
                if (!reader.IsDBNull(2))
                {
                    cupcake.ImageFileName = reader.GetString(2);
                }
                cupcake.Description = reader.GetString(3);
                cupcake.Price = reader.GetDecimal(4);
            }

            //close the connection to the database
            connection.Close();

            return cupcake;
        }

        //get all the cupcakes in the database
        public static List<Cupcake> GetAllCupcakes()
        {
            List<Cupcake> cupcakes = new List<Cupcake>();

            //connect to database
            SqliteConnection connection = new SqliteConnection("Data Source = Data/Cupcake.db");

            //open a connection to the database
            connection.Open();

            //Run SQL to get all the cupcakes
            string sql = "SELECT CupcakeId, Name, ImageFileName, Description, Price FROM Cupcake";

            SqliteCommand cmd = connection.CreateCommand();
            cmd.CommandText = sql;

            //execute the sql command
            SqliteDataReader reader = cmd.ExecuteReader();

            //read the results
            while (reader.Read())
            {
                //create a new cupcake object from the database information and add to cupcake list
                Cupcake cupcake = new Cupcake();
                cupcake.CupcakeId = reader.GetInt32(0);
                cupcake.Name = reader.GetString(1);
                if (!reader.IsDBNull(2))
                {
                    cupcake.ImageFileName = reader.GetString(2);
                }
                cupcake.Description = reader.GetString(3);
                cupcake.Price = reader.GetDecimal(4);

                cupcakes.Add(cupcake);
            }
            //close connection to database
            connection.Close();
            return cupcakes;
        }

        //add a new cupcake to the database
        public static void AddNewCupcake(Cupcake cupcake)
        {
            //connect to database
            SqliteConnection connection = new SqliteConnection("Data Source = Data/Cupcake.db");

            //open a connection to the database
            connection.Open();

            //Run SQL to get all the cupcakes
            string sql = "INSERT INTO Cupcake (Name, ImageFileName, Description, Price) VALUES (@Name, @ImageFileName, @Description, @Price)";

            SqliteCommand cmd = connection.CreateCommand();
            cmd.CommandText = sql;
            cmd.Parameters.AddWithValue("@Name", cupcake.Name);
            cmd.Parameters.AddWithValue("@ImageFileName", cupcake.ImageFileName);
            cmd.Parameters.AddWithValue("@Description", cupcake.Description);
            cmd.Parameters.AddWithValue("@Price", cupcake.Price);

            //execute the sql command
            cmd.ExecuteNonQuery();

            //close connection to database
            connection.Close();
        }

        //Remove a cupcake from the database
        public static void RemoveCupcake(int cupcakeId)
        {
            //connect to database
            SqliteConnection connection = new SqliteConnection("Data Source = Data/Cupcake.db");

            //open a connection to the database
            connection.Open();

            //Run SQL to get all the cupcakes
            string sql = "DELETE FROM Cupcake WHERE CupcakeId = @CupcakeId";

            SqliteCommand cmd = connection.CreateCommand();
            cmd.CommandText = sql;
            cmd.Parameters.AddWithValue("@CupcakeId", cupcakeId);

            //execute the sql command
            cmd.ExecuteNonQuery();

            //close connection to database
            connection.Close();
        }
    }
}
