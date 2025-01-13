using System;

namespace SchoolTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("How many students in your class?");
            var studentCount = int.Parse(Console.ReadLine());
            string[,] studentData = new string[studentCount, 2];


            for (int i = 0; i < studentCount; i++)
            {
                Console.Write("Student Name: ");
                studentData[i,0] = Console.ReadLine();

                Console.Write("Student Grade: ");
                studentData[i,1] = Console.ReadLine();
            }

            for (int i = 0; i < studentCount; i++)
            {
                Console.WriteLine("Name: {0}, Grade: {1}", studentData[i,0], studentData[i,1]);
            }
        }
    }
}
