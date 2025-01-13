using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment2_Part2
{
    public delegate void BalanceEventHandler(decimal theValue);

    class Program
    {
        static void Main(string[] args)
        {
            PiggyBank pb = new PiggyBank();
            BalanceLogger bl = new BalanceLogger();
            BalanceWatcher bw = new BalanceWatcher();

            // Triggering the balacedChanged event listener. 
            // That means this event is ready to implpement balanceLog method &
            // belanceWatch method once it is called from the setter of the m_bankBalance

            pb.balanceChanged += bl.balanceLog; // By implementing the balanceLog method
            pb.balanceChanged += bw.balanceWatch; // By implementing the balanceWatch method

            //an anonymous delegate to the PiggyBank instance that will log to the
            //console if the balance goes below zero.	
            pb.balanceChanged += delegate (decimal theValue)
            {
                if (theValue < 0)
                {
                    Console.WriteLine("Negative balance detected");
                }
            };

            string theStr;
            //2.
            do
            {
                Console.WriteLine("How much to deposit?");
                theStr = Console.ReadLine();
                if (theStr.Equals("exit"))
                {
                    break;
                }
                //while the input is not a number, keep asking for a valid number
                while (!decimal.TryParse(theStr, out decimal result))
                {
                    Console.WriteLine("Please enter a valid number");
                    theStr = Console.ReadLine();
                }
                //if the input is not "exit", add the input to the balance
                if (!theStr.Equals("exit"))
                {
                    decimal newVal = decimal.Parse(theStr);

                    pb.theBalance += newVal;
                }

            } while (!theStr.Equals("exit"));

            Console.WriteLine("Your current balance after those transactions is: ${0}",pb.theBalance);
            Console.ReadLine();

        }
    }
}
