using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    public class EmpData
    {

        public double TaxAmount;
        public double DependentDeduction;
        public double NetTaxAmount;
        public double TotalTakeHome;

        public EmpData(double taxAmount, double dependentDeduction, double netTaxAmount, double totalTakeHome)
        {
            TaxAmount = taxAmount;
            DependentDeduction = dependentDeduction;
            NetTaxAmount = netTaxAmount;
            TotalTakeHome = totalTakeHome;
        }

    }
}
