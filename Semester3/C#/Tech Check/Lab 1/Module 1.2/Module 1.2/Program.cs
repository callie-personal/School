using System;

namespace Module_1._2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What is the pass code?");
            var code = Console.ReadLine();

            if(code == "secret")
            {
                Console.WriteLine("Authenticated");
            }
            else
            {
                Console.WriteLine("Not Authenticated");
            }
        }
    }
}
