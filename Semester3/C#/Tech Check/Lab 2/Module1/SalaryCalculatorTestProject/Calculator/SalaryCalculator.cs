using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    public class SalaryCalculator
    {
        const int HoursInYear = 2080;

        public decimal GetAnnualSalary(decimal hourlyWage)
        {
            if (hourlyWage <= 0)
            {
                throw new InvalidOperationException("Hourly wage must be greater than zero.");
            }
            else
            {
                return hourlyWage * HoursInYear;
            }

        }
        public decimal GetHourlyWage(int annualSalary)
        {
            if (annualSalary <= 0)
            {
                throw new InvalidOperationException("Yearly salary must be greater than zero.");
            }
            else
            {
                return annualSalary / HoursInYear;
            }
        }

        public TaxData TaxWithheld(double weeklySalary, int numOfDependents)
        {
            if (numOfDependents < 0)
            {
                throw new InvalidOperationException("Number dependents cannot be negative.");
            }
            else if (weeklySalary <= 0)
            {
                throw new InvalidOperationException("Weekly salary must be greater than zero.");

            }
            else
            {
                TaxData taxData = new TaxData();
                taxData.ProvincialTaxWithheld = 0.06 * weeklySalary;
                taxData.FederalTaxWithheld = 0.25 * weeklySalary;
                taxData.DependentDeduction = 0.02 * weeklySalary * numOfDependents;
                taxData.TotalWithheld = taxData.ProvincialTaxWithheld + taxData.FederalTaxWithheld - taxData.DependentDeduction;
                taxData.TotalTakeHome = weeklySalary - taxData.TotalWithheld;

                return taxData;

            }

        }
    }
}
