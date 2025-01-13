using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using Calculator;


namespace CalliePretty
{
    [TestClass]
    public class CalculatorTests
    {
        [TestMethod]
        public void AnnualRentTest()
        {
            // Arrange
            IncomeCalculator income = new IncomeCalculator();

            // Act
            double annualIncome = income.GetAnnualIncome(100000);

            // Assert   
            Assert.AreEqual(1200000, annualIncome);
        }

        [TestMethod]
        public void WeeklyIncomeTest()
        {
            // Arrange
            IncomeCalculator income = new IncomeCalculator();

            // Act
            double weeklyIncome = income.GetWeeklyIncome(2600000);

            // Assert   
            Assert.AreEqual(50000, weeklyIncome);
        }
        [TestMethod]
        public void AnualIncomeTestNegative()
        {
            //Arrange
            IncomeCalculator newObject = new IncomeCalculator();
            //Act
            try
            { // A negative test. Should throw an exception
                double annualIncome = newObject.GetAnnualIncome(-70000);
                //Assert
                Assert.Fail("This code should not be run. Exception expected.");
            }
            catch (InvalidOperationException ex)
            {
                Assert.AreEqual("Monthly income must not be less than zero.", ex.Message);
            }
        }
        /// <summary>
        /// NOTE: To pass this test method, you should validate the zero and negative value     
        /// of the annual income value .
        /// </summary>
        [TestMethod]
        public void WeeklyIncomeNegative()
        {
            //Arrange
            IncomeCalculator newObject = new IncomeCalculator();
            //Act
            try
            { // A negative test. Should throw an exception
                double weeklyIncome = newObject.GetWeeklyIncome(0);
                //Assert
                Assert.Fail("This code should not be run. Exception expected.");
            }
            catch (InvalidOperationException ex)
            {
                Assert.AreEqual("Annual income must be greater than zero.", ex.Message);
            }
        }

        [TestMethod]
        public void CraTaxCalculatingTest()
        {
            //Arrange
            IncomeCalculator newObject = new IncomeCalculator();
            //Act
            TaxEntries taxEntries = newObject.TaxPayment(1500000, 50000);
            //Assert
            Assert.AreEqual(600000.00, taxEntries.TaxAmount);
            Assert.AreEqual(62500.00, taxEntries.DonationDeduct);
            Assert.AreEqual(537500.00, taxEntries.NetTaxAmount);
            Assert.AreEqual(962500.00, taxEntries.NetIncome);
        }

        [TestMethod]
        public void CraTaxTestNoDonation()
        {
            //Arrange
            IncomeCalculator newObject = new IncomeCalculator();
            //Act
            TaxEntries taxEntries = newObject.TaxPayment(1600000, 0);
            //Assert
            Assert.AreEqual(640000.00, taxEntries.TaxAmount);
            Assert.AreEqual(0, taxEntries.DonationDeduct);
            Assert.AreEqual(640000.00, taxEntries.NetTaxAmount);
            Assert.AreEqual(960000.00, taxEntries.NetIncome);
        }


    }
}
