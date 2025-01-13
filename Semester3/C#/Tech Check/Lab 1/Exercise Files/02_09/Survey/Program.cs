using System;

namespace Survey
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What is your name?");
            var name = TryAnswer();

            Console.WriteLine("What is your age?");
            var age = TryAnswer();

            Console.WriteLine("What month were you born in?");
            var month = TryAnswer();

            Console.WriteLine("What day were you born on?");
            var day = TryAnswer();

            Console.WriteLine("Your name is: {0}", name);
            Console.WriteLine("Your age is: {0}", age);
            Console.WriteLine("Your birth month is: {0}", month);
            Console.WriteLine("Your zodiac sign is: {0}", GetZodiac(month, int.Parse(day)));

        }

        static string GetZodiac(string month, int day)
        {
            switch (month.ToLower())
            {
                case "march":
                    return (day >= 1 && day <= 20) ? "Pisces" : (day >= 21 && day <= 31) ? "Aries" : "Invalid";
                case "april":
                    return (day >= 1 && day <= 19) ? "Aries" : (day >= 20 && day <= 30) ? "Taurus" : "Invalid";
                case "may":
                    return (day >= 1 && day <= 20) ? "Taurus" : (day >= 21 && day <= 31) ? "Gemini" : "Invalid";
                case "june":
                    return (day >= 1 && day <= 20) ? "Gemini" : (day >= 21 && day <= 30) ? "Cancer" : "Invalid";
                case "july":
                    return (day >= 1 && day <= 22) ? "Cancer" : (day >= 23 && day <= 31) ? "Leo" : "Invalid";
                case "august":
                    return (day >= 1 && day <= 22) ? "Leo" : (day >= 23 && day <= 31) ? "Virgo" : "Invalid";
                case "september":
                    return (day >= 1 && day <= 22) ? "Virgo" : (day >= 23 && day <= 30) ? "Libra" : "Invalid";
                case "october":
                    return (day >= 1 && day <= 22) ? "Libra" : (day >= 23 && day <= 31) ? "Scorpio" : "Invalid";
                case "november":
                    return (day >= 1 && day <= 21) ? "Scorpio" : (day >= 22 && day <= 30) ? "Sagittarius" : "Invalid";
                case "december":
                    return (day >= 1 && day <= 21) ? "Sagittarius" : (day >= 22 && day <= 31) ? "Capricorn" : "Invalid";
                case "january":
                    return (day >= 1 && day <= 19) ? "Capricorn" : (day >= 20 && day <= 31) ? "Aquarius" : "Invalid";
                case "february":
                    return (day >= 1 && day <= 18) ? "Aquarius" : (day >= 19 && day <= 29) ? "Pisces" : "Invalid";
                default:
                    return "Invalid month";
            }
        } 

        static string TryAnswer()
        {
            var question = Console.ReadLine();
            if (question == "")
            {
                Console.WriteLine("You didn't type anything, please try again:");
                return Console.ReadLine();
            }
            return question;
        }
    }
}
