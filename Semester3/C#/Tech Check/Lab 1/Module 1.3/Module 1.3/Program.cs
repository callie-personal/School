using System;

namespace Module_1._3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            for (int i = 1; i <= 10; i++)
            {
                if (i != 10)
                {
                    Console.WriteLine(i);
                }
                else
                {
                    for (int j = 10; j > 0; j--)
                    {
                        Console.WriteLine(j);
                    }
                }
            }
        }
    }
}
