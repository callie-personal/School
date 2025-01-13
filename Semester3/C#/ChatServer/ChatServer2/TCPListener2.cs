using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace ServerClientApp
{
    internal class TCPListener2
    {
        static void Main(string[] args)
        {
            TcpListener server = null;
            try
            {
                // Set the TcpListener on port 13000.
                Int32 port = 13000;
                IPAddress localAddr = IPAddress.Parse("127.0.0.1");

                server = new TcpListener(localAddr, port);
                server.Start();

                Console.WriteLine("Waiting for a connection... ");

                while (true)
                {
                    using (TcpClient client = server.AcceptTcpClient())
                    using (NetworkStream stream = client.GetStream())
                    {
                        Console.WriteLine("Connection established with client");

                        byte[] data = new byte[256];
                        int bytesRead;

                        bool inputMode = false;

                        while (client.Connected)
                        {
                            if (stream.DataAvailable)
                            {
                                bytesRead = stream.Read(data, 0, data.Length);
                                string message = Encoding.ASCII.GetString(data, 0, bytesRead);
                                Console.WriteLine("Received: {0}", message);

                                // Echo back to client
                                stream.Write(data, 0, bytesRead);
                            }

                            if (!inputMode && Console.KeyAvailable && Console.ReadKey(true).Key == ConsoleKey.I)
                            {
                                inputMode = true;
                                Console.WriteLine("Insertion Mode>> ");
                            }

                            if (inputMode && Console.KeyAvailable)
                            {
                                string userInput = Console.ReadLine();
                                // If user types 'quit', close the connection
                                if (userInput == "quit")
                                {
                                    Console.WriteLine("Disconnected\nGoodbye");
                                    break;
                                }

                                byte[] userInputBytes = Encoding.ASCII.GetBytes(userInput);
                                stream.Write(userInputBytes, 0, userInputBytes.Length);

                                // Read server response
                                bytesRead = stream.Read(data, 0, data.Length);
                                string responseData = Encoding.ASCII.GetString(data, 0, bytesRead);
                                Console.WriteLine("Received: {0}", responseData);
                                inputMode = false;
                            }
                        }
                    }
                }
            }
            catch (IOException e)
            {
                Console.WriteLine("Application has been disconnected", e);
            }
            catch (SocketException e)
            {
                Console.WriteLine("SocketException: {0}", e);
            }
            finally
            {
                server.Stop();
            }
        }
    }
}