using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Calculator_TrivialApp
{
    public partial class CalculatorApp : Form
    {
        double num1 = 0;
        double num2 = 0;
        string operation = "";
        bool equalsPressed = false;
        public CalculatorApp()
        {
            InitializeComponent();
        }

        private void btnZero_Click(object sender, EventArgs e)
        {
            calculatorButton(0);
        }

        private void btnOne_Click(object sender, EventArgs e)
        {
            calculatorButton(1);
        }

        private void btnTwo_Click(object sender, EventArgs e)
        {
            calculatorButton(2);
        }

        private void btnThree_Click(object sender, EventArgs e)
        {
            calculatorButton(3);
        }
        private void btnFour_Click(object sender, EventArgs e)
        {
            calculatorButton(4);
        }

        private void btnFive_Click(object sender, EventArgs e)
        {
            calculatorButton(5);
        }

        private void btnSix_Click(object sender, EventArgs e)
        {
            calculatorButton(6);
        }

        private void btnSeven_Click(object sender, EventArgs e)
        {
            calculatorButton(7);
        }

        private void btnEight_Click(object sender, EventArgs e)
        {
            calculatorButton(8);
        }

        //Number 9
        private void btnNine_Click(object sender, EventArgs e)
        {
            calculatorButton(9);
        }

        private void btnPlus_Click(object sender, EventArgs e)
        {
            operation = "+";
            //parse the text box to a double and store it in num1
            num1 = double.Parse(textResult.Text);
            textResult.Text = "0";
        }

        private void btnMinus_Click(object sender, EventArgs e)
        {
            operation = "-";
            //parse the text box to a double and store it in num1
            num1 = double.Parse(textResult.Text);
            textResult.Text = "0";
        }

        private void btnMult_Click(object sender, EventArgs e)
        {
            operation = "*";
            //parse the text box to a double and store it in num1
            num1 = double.Parse(textResult.Text);
            textResult.Text = "0";
        }

        private void btnDiv_Click(object sender, EventArgs e)
        {
            operation = "/";
            //parse the text box to a double and store it in num1
            num1 = double.Parse(textResult.Text);
            textResult.Text = "0";
        }

        private void btnDecimal_Click(object sender, EventArgs e)
        {
            //check if a decimal point already exists in the text box
            if (!textResult.Text.Contains("."))
            {
                //check if the text box is 0, if so add a decimal point
                if (textResult.Text == "0")
                {
                    textResult.Text = "0.";
                }
                else
                {
                    //append a decimal point to the text box
                    textResult.Text = textResult.Text + ".";
                }
                textResult.Text = textResult.Text;
            }
        }


        private void btnEquals_Click(object sender, EventArgs e)
        {
           double result = 0;
           switch(operation)
            {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
            }
            textResult.Text = result.ToString();
        }

        private void btnClear_Click(object sender, EventArgs e)
        {
            textResult.Text = "0";
            num1 = 0;
            num2 = 0;
            operation = "";
        }

        private void btnClearEntry_Click(object sender, EventArgs e)
        {

            if (operation == "")
            {
                //I am dealig with the first number
                num1 = 0;
                textResult.Text = "0";
            }
            else
            {
                //I am dealig with the first number
                num2 = 0;
                textResult.Text = "0";
            }
        }

        //Back Space Button Event:
        private void btnBackSpace_Click(object sender, EventArgs e)
        {
            //delete the last character in the text box
            if (textResult.Text.Length > 0)
            {
                textResult.Text = textResult.Text.Remove(textResult.Text.Length - 1, 1);
            }
        }

        private void calculatorButton(int num)
        {
            //check if the equals button was pressed
                if (operation == "")
                {
                    //parse the text box to a double and append a 8 to the end
                    num1 = double.Parse(textResult.Text + num);
                    textResult.Text = num1.ToString();
                }
                else
                {
                    num2 = double.Parse(textResult.Text + num);
                    textResult.Text = num2.ToString();
                }
        }

        private void CalculatorApp_Load(object sender, EventArgs e)
        {

        }

        private void textResult_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
