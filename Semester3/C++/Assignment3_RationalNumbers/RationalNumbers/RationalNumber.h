#pragma once
#include <string>

#ifndef RATIONALNUMBER_H
#define RATIONALNUMBER_H

class RationalNumber 
{
	private: 
		int numerator;
		int denominator;

	public:
		//Default Constructor
		RationalNumber();

		//One argument constructor
		RationalNumber(int num);

		//Two argument constructor
		RationalNumber(int num, int den);

		//String constructor
		RationalNumber(const std::string& str);

		//Addition operator overload
		RationalNumber operator+(const RationalNumber& rightSide) const;

		//+= operator overload
		RationalNumber& operator+=(const RationalNumber& rightSide);

		//Subtraction operator overload
		RationalNumber operator-(const RationalNumber& rightSide) const;

		//Multiplication operator overload
		RationalNumber operator*(const RationalNumber& rightSide) const;

		//Division operator overload
		RationalNumber operator/(const RationalNumber& rightSide) const;

		RationalNumber& operator=(const RationalNumber& rightSide);

		//Equality operator overload
		bool operator==(const RationalNumber& rightSide) const;

		//greater than operator overload
		bool operator>(const RationalNumber& rightSide) const;

		//less than operator overload
		bool operator<(const RationalNumber& rightSide) const;

		//greatest common denominator
		int gcd(int a, int b);

		//normalize the rational number
		void normalize();

		//overload the output stream operator
		friend std::ostream& operator<<(std::ostream& os, const RationalNumber& rational);

};

//Check if the rational number is valid
bool isDenominatorZero(const std::string& str);
bool isValid(const std::string& str);

#endif