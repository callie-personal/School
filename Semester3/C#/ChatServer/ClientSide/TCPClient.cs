using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace ServerClientApp
{
    internal class TCPClient
    {
        static void Main(string[] args)
        {
            string serverIp = "127.0.0.1";
            int port = 13000;

            // Connect to the server
            TcpClient client = new TcpClient();
            client.Connect(serverIp, port);
            Console.WriteLine("Client is connected to Server!");

            // Get the network stream
            NetworkStream stream = client.GetStream();

            bool inputMode = false;
            byte[] data = new byte[256];
            int bytesRead;


            // Loop to keep sending messages
            while (client.Connected)
            {
                if (stream.DataAvailable)
                {
                    // Receive response from the server
                    bytesRead = stream.Read(data, 0, data.Length);
                    string message = Encoding.ASCII.GetString(data, 0, bytesRead);
                    Console.WriteLine("Received: {0}", message);

                    // Echo back to server
                    stream.Write(data, 0, bytesRead);

                    // Check if received "quit" from client or if the operator pressed Escape
                    if (message == "quit" || (Console.KeyAvailable && Console.ReadKey(true).Key == ConsoleKey.Escape))
                    {
                        Console.WriteLine("Disconnected\nGoodbye");
                        break;
                    }
                }

                // Enter insertion mode
                if (!inputMode && Console.KeyAvailable && Console.ReadKey(true).Key == ConsoleKey.I)
                {
                    inputMode = true;
                    Console.WriteLine("Insertion Mode>> ");
                }


                if (inputMode && Console.KeyAvailable)
                {
                    string userInput = Console.ReadLine();
                    // If user types 'quit', close the connection
                    //if (userInput == "quit" || (Console.KeyAvailable && Console.ReadKey(true).Key == ConsoleKey.Escape))
                    if (userInput == "quit")
                    {
                        Console.WriteLine("Disconnected\nGoodbye");
                        break;
                    }

                    // Send user input to server
                    byte[] userInputBytes = Encoding.ASCII.GetBytes(userInput);
                    stream.Write(userInputBytes, 0, userInputBytes.Length);

                    // Read server response
                    bytesRead = stream.Read(data, 0, data.Length);
                    string responseData = Encoding.ASCII.GetString(data, 0, bytesRead);

                    inputMode = false;
                }
            }
        }
    }
}
