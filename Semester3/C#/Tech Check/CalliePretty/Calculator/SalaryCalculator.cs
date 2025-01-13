using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    public class SalaryCalculator
    {
        const int HoursInYear = 2080;

        public EmpData EmpAccount(double weeklySalary, int numDependants)
        {
            double TaxAmount = 0.25 * weeklySalary;
            double DependentDeduction = 0.05 * weeklySalary * numDependants;
            double NetTaxAmount = TaxAmount - DependentDeduction;
            double TotalTakeHome = weeklySalary - NetTaxAmount;

            return new EmpData(TaxAmount, DependentDeduction, NetTaxAmount, TotalTakeHome);
        }


        public double GetAnnualSalary(double hourlyWage)
        {
            if (hourlyWage <= 0)
            {
                throw new InvalidOperationException("Hourly wage must not be less than zero.");
            }
            else
            {
                return hourlyWage * HoursInYear;
            }
        }

        public double GetHourlyWage(double annualSalary)
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

    }
}
