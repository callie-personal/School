using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Callie Pretty W0184129

namespace Calculator
{
    public class TaxEntries
    {
        public double TaxAmount { get; set; }
        public double DonationDeduct { get; set; }
        public double NetTaxAmount { get; set; }
        public double NetIncome { get; set; }

        public TaxEntries(double taxAmount, double donationDeduct, double netTaxAmount, double netIncome)
        {
            TaxAmount = taxAmount;
            DonationDeduct = donationDeduct;
            NetTaxAmount = netTaxAmount;
            NetIncome = netIncome;
        }
    }
}
