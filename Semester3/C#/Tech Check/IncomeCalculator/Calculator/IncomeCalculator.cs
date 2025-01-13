using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    public class IncomeCalculator
    {
        public TaxEntries TaxPayment(double annualEarning, double donAmount)
        {
            if (annualEarning <= 0)
            {
                throw new InvalidOperationException("Annual income must be greater than zero.");
            }
            else
            {
                double taxAmount = 0.40 * annualEarning;
                double donationDeduct;

                if (donAmount > 0)
                {
                    donationDeduct = 1.25 * donAmount;
                }
                else
                {
                    donationDeduct = 0.10 * donAmount;
                }



                double netTaxAmount = taxAmount - donationDeduct;
                double netIncome = annualEarning - netTaxAmount;
                return new TaxEntries(taxAmount, donationDeduct, netTaxAmount, netIncome);
            }
        }



        public double GetAnnualIncome(double monthlyIncome)
        {
            if (monthlyIncome <= 0)
            {
                throw new InvalidOperationException("Monthly income must not be less than zero.");
            }
            else
            {
                return monthlyIncome * 12;
            } 
        }


        public double GetWeeklyIncome(double annualIncome)
        {
            if (annualIncome <= 0)
            {
                throw new InvalidOperationException("Annual income must be greater than zero.");
            }
            else
            {
                return annualIncome / 52;
            }
        }

    }
}
