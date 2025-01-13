#include <string>
#include <iostream>
#include <sstream>
#include "RationalNumber.h"
#include <regex>



		int numerator;
		int denominator;


		//Default constructor
		RationalNumber::RationalNumber() : numerator(0), denominator(1) {}

		//One argument constructor
		RationalNumber::RationalNumber(int num) : numerator(num), denominator(1) {}

		//Two argument constructor
		RationalNumber::RationalNumber(int num, int den) : numerator(num), denominator(den) {}

		//String constructor
		RationalNumber::RationalNumber(const std::string& str)
		{
			//Find the position of the slash character in the string
			std::string::size_type slashPos = str.find('/');
			if (slashPos == std::string::npos)
			{
				//If there is no slash character, the string is the numerator
				numerator = std::stoi(str);
				//if no slash, denominator is 1
				denominator = 1;
			}
			else
			{
				//If there is a slash character, the numerator is the substring before the slash
				numerator = std::stoi(str.substr(0, slashPos));
				//The denominator is the substring after the slash
				denominator = std::stoi(str.substr(slashPos + 1));
			}
		}


		//addition operator overload
		RationalNumber RationalNumber::operator+(const RationalNumber& rightSide) const
		{
			//Create a new RationalNumber object to hold the result
			RationalNumber result;
			//Calculate the numerator of the result
			result.numerator = numerator * rightSide.denominator + denominator * rightSide.numerator;
			//Calculate the denominator of the result
			result.denominator = denominator * rightSide.denominator;
			result.normalize();
			std::cout << "Overloaded + operator called." << std::endl;
			return result;
		}

		RationalNumber& RationalNumber::operator+=(const RationalNumber& rightSide) {
			RationalNumber result = *this + rightSide;
			std::cout << "Overloaded += operator called." << std::endl;
			return result;
		}

		//subtraction operator overload
		RationalNumber RationalNumber::operator-(const RationalNumber& rightSide) const
		{
			//Create a new RationalNumber object to hold the result
			RationalNumber result;
			//Calculate the numerator of the result
			result.numerator = numerator * rightSide.denominator - denominator * rightSide.numerator;
			//Calculate the denominator of the result
			result.denominator = denominator * rightSide.denominator;
			result.normalize();
			std::cout << "Overloaded - operator called." << std::endl;
			return result;
		}

		//multiplication operator overload
		RationalNumber RationalNumber::operator*(const RationalNumber& rightSide) const
		{
			//Create a new RationalNumber object to hold the result
			RationalNumber result;
			//Calculate the numerator of the result
			result.numerator = numerator * rightSide.numerator;
			//Calculate the denominator of the result
			result.denominator = denominator * rightSide.denominator;
			result.normalize();
			std::cout << "Overloaded * operator called." << std::endl;
			return result;
		}

		//division operator overload
		RationalNumber RationalNumber::operator/(const RationalNumber& rightSide) const
		{
			//Create a new RationalNumber object to hold the result
			RationalNumber result;
			//Calculate the numerator of the result
			result.numerator = numerator * rightSide.denominator;
			//Calculate the denominator of the result
			result.denominator = denominator * rightSide.numerator;
			result.normalize();
			std::cout << "Overloaded / operator called." << std::endl;
			return result;
		}

		//equals operator overload
		RationalNumber& RationalNumber::operator=(const RationalNumber& rightSide)
		{
			//Assign the numerator and denominator of the right side to the left side
			numerator = rightSide.numerator;
			denominator = rightSide.denominator;
			std::cout << "Overloaded = operator called." << std::endl;
			return *this;
		}

		//equality operator overload
		bool RationalNumber::operator==(const RationalNumber& rightSide) const
		{
			//normalize the rational numbers
			RationalNumber leftNormalized = *this;
			leftNormalized.normalize();
			RationalNumber rightNormalized = rightSide;
			rightNormalized.normalize();
			std::cout << "Overloaded == operator called." << std::endl;
			//Check if the numerators and denominators are equal
			return leftNormalized.numerator == rightNormalized.numerator && leftNormalized.denominator == rightNormalized.denominator;
		}

		//greater than operator overload
		bool RationalNumber::operator>(const RationalNumber& rightSide) const
		{
			//normalize the rational numbers
			RationalNumber leftNormalized = *this;
			leftNormalized.normalize();
			RationalNumber rightNormalized = rightSide;
			rightNormalized.normalize();
			std::cout << "Overloaded > operator called." << std::endl;

			//Calculate the cross product of the two fractions
			return numerator * rightSide.denominator > denominator * rightSide.numerator;
		}

		//less than operator overload
		bool RationalNumber::operator<(const RationalNumber& rightSide) const
		{
			//normalize the rational numbers
			RationalNumber leftNormalized = *this;
			leftNormalized.normalize();
			RationalNumber rightNormalized = rightSide;
			rightNormalized.normalize();
			std::cout << "Overloaded < operator called." << std::endl;
			//Calculate the cross product of the two fractions
			return numerator * rightSide.denominator < denominator * rightSide.numerator;
		}

		//Calculate the greatest common divisor of two integers
		int RationalNumber::gcd(int a, int b)
		{
			//Keep calculating the remainder until it is zero
			while (b != 0)
			{
				int temp = b;
				b = a % b;
				a = temp;
			}
			//Return the absolute value of the remaining number
			return abs(a);
		}

		//normalize the rational number
		void RationalNumber::normalize()
		{
			//Find the greatest common divisor of the numerator and denominator
			int divisor = gcd(numerator, denominator);
			//Divide the numerator and denominator by the greatest common divisor
			numerator /= divisor;
			denominator /= divisor;
		}

		//overload the << operator
		std::ostream& operator<<(std::ostream& os, const RationalNumber& rational)
		{
			//Output the numerator
			os << rational.numerator;
			//If the denominator is not 1, output the slash character and the denominator
			os << "/" << rational.denominator;
			return os;
		}

		bool isDenominatorZero(const std::string& str) {
			//check if the denominator is zero
			std::string::size_type slashPos = str.find('/');
			if (slashPos != std::string::npos) {
				if (str.substr(slashPos + 1) == "0") {
					return true;
				}
			} return false;
		}

		bool isValid(const std::string& str) {
			//check if the string is empty
			if (str.empty())
				return false;

			//find the slash character in the string
			std::string::size_type slashPos = str.find('/');

			//if there is a slash character, split the numerator and denominator strings
			if (slashPos != std::string::npos) {
				//split the string into two substrings
				std::string numeratorStr = str.substr(0, slashPos);
				std::string denominatorStr = str.substr(slashPos + 1);

				//convert the substrings to integers
				std::istringstream numeratorStream(numeratorStr);
				std::istringstream denominatorStream(denominatorStr);
				int numerator, denominator;
				numeratorStream >> numerator;
				denominatorStream >> denominator;

				//check if you were able to convert ht
				return numeratorStream.eof() && denominatorStream.eof() && denominator != 0;
			}
			// If there is no slash character, try to convert the whole string to an integer
			else {
				std::istringstream strStream(str);
				int num;
				strStream >> num;
				return !strStream.fail() && strStream.eof();
			}
		}