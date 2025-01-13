using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment2_Part2
{
    // Add a BalanceArgs class that extends EventArgs
    // which will have a public property of balance. 
    internal class BalanceArgs : EventArgs
    {
        public decimal balance { get; set; }
    }
}
