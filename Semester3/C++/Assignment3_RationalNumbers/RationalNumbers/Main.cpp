#include <string>
#include <iostream>
#include "RationalNumber.h"

int main()
{
	while (true)
	{
        std::string inputFirst;
        std::cout << "Enter the first rational number (q to quit): ";
        std::getline(std::cin, inputFirst);
        RationalNumber rationalFirst;

        if (inputFirst == "q")
        {
            break;
        }
        if (isDenominatorZero(inputFirst)) {
            std::cout << "Invalid input. Denominator cannot be zero. Please try again." << std::endl;
            continue;
        }
        if (isValid(inputFirst) == false)
        {
            std::cout << "Invalid input. Please enter a rational number." << std::endl;
            continue;
        }
        else {
            rationalFirst = RationalNumber(inputFirst);
        }

        std::string inputSecond;
        std::cout << "Enter the second rational number (q to quit): ";
        std::getline(std::cin, inputSecond);
        RationalNumber rationalSecond;

        if (inputSecond == "q")
        {
            break;
        }
        if (isDenominatorZero(inputSecond)) {
            std::cout << "Invalid input. Denominator cannot be zero. Please try again." << std::endl;
            continue;
        }
        if (isValid(inputSecond) == false)
        {
            std::cout << "Invalid input. Please enter a rational number." << std::endl;
            continue;
        }
        else {
            rationalSecond = RationalNumber(inputSecond);
        }

        RationalNumber rationalPlusEquals = rationalFirst += rationalSecond;
        RationalNumber oneConstructor = RationalNumber(5);
        RationalNumber twoConstructor = RationalNumber(5, 6);
        RationalNumber noConstructor = RationalNumber();
        RationalNumber rationalFirstCopy = rationalFirst;
     

            std::cout << "Copy of the first rational number: " << rationalFirstCopy << std::endl;
            std::cout << "This was created with the no number constructor" << noConstructor << std::endl;
            std::cout << "This was created with the one number constructor" << oneConstructor << std::endl;
            std::cout << "This was created with the two number constructor" << twoConstructor << std::endl;
            std::cout << "The sum of " << rationalFirst << " and " << rationalSecond << " using += is " << rationalPlusEquals << std::endl;			
            std::cout << "The sum of " << rationalFirst << " and " << rationalSecond << " is " << rationalFirst + rationalSecond << std::endl;
            std::cout << "The product of " << rationalFirst << " and " << rationalSecond << " is " << rationalFirst * rationalSecond << std::endl;
			std::cout << "The quotient of " << rationalFirst << " and " << rationalSecond << " is " << rationalFirst / rationalSecond << std::endl;
			std::cout << "The rational number " << rationalFirst << " is " << (rationalFirst == rationalSecond ? "equal to " : "not equal to ") << rationalSecond << std::endl;
			std::cout << "The rational number " << rationalFirst << " is " << (rationalFirst > rationalSecond ? "greater than " : "not greater than ") << rationalSecond << std::endl;
			std::cout << "The rational number " << rationalFirst << " is " << (rationalFirst < rationalSecond ? "less than " : "not less than ") << rationalSecond << std::endl;

		}
	}
