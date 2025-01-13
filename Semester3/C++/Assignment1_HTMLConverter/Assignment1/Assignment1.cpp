// Assignment1.cpp : This file contains the 'main' function. Program execution begins and ends there.
// Author: Callie Pretty
// Date: 2024-02-02

#include <iostream>
#include <string>
#include <fstream>
#include <regex>

using namespace std;

// prototype for the function that checks if the file is valid
bool isValidFile(string fileLocation);

struct OverMaxWindowsPathLengthException : public exception {
    const string what() {
        return "An exception occured due to the file path being over the Windows limit of 260 characters.";
    }
};

const int MAX_WINDOWS_PATH_LENGTH = 260;

int main()
{
    try {
    // declare variables to store the input and output file locations, prompt if there's invalid input
    string inputFileLocation, outputFileLocation;

    // Ask the user for the location of the input file
    do {

		cout << "Please enter the full location and name of the file: \n (ex. C:\\folder\\filename)\n";
		cin >> inputFileLocation;

        if (!isValidFile(inputFileLocation)) {
            cerr << "Invalid file. Please try again.";
		}

        if (inputFileLocation.empty()) {
            throw invalid_argument("An exception occured due to the input file path being empty.");
        }

        //if input file location is over the max windows path length, throw error
        if (inputFileLocation.length() >= MAX_WINDOWS_PATH_LENGTH) {
            throw OverMaxWindowsPathLengthException();
        }

	} while (!isValidFile(inputFileLocation));


    // Ask the user for the location of the output file, prompt if there's invalid input
    do {

        cout << "Please enter the full location and name of the output file: \n (ex. C:\\folder\\filename)\n";
        cin >> outputFileLocation;

        if (!isValidFile(outputFileLocation)) {
            cerr << "Invalid file. Please try again.";
        }

        if (outputFileLocation.empty()) {
            throw invalid_argument("An exception occured due to the output file path being empty.");
        }

        //if output file location is over the max windows path length, throw error
        if (outputFileLocation.length() >= MAX_WINDOWS_PATH_LENGTH) {
            throw OverMaxWindowsPathLengthException();
        }

    } while (!isValidFile(outputFileLocation));




    // Open the input file
    ifstream file;
    file.open(inputFileLocation);

    // Check if the file is open
    if (!file.is_open()) {
		cerr << "File not found. Please try again.";
		return 1;
	}

    // create an iterator that reads characters from the file
    string fileContents((istreambuf_iterator<char>(file)), 
                   //end of stream iterator, represents the position after the last character in the file
                            istreambuf_iterator<char>());

    // close the input file
    file.close();

    // find the first occurence of <
    size_t found = fileContents.find("<");

    while (found != string::npos) {

        // replace the single character < with &lt
		fileContents.replace(found, 1, "&lt;");

        // find the next occurence of <
		found = fileContents.find("<", found + 1);

	}

    // find the next occurence of >
    found = fileContents.find(">");

    //npos represents a non-existent position in the string
    while (found != string::npos) {

		// replace the single character > with &gt
        fileContents.replace(found, 1, "&gt;");

        // find the next occurence of >
        found = fileContents.find(">", found + 1);

    }

    // insert the <PRE> and </PRE> tags at the beginning and end of the file
    string insertStringStart = "<PRE>\n";
    string insertStringEnd = "\n</PRE>";

    //insert at start
    fileContents.insert(0, insertStringStart);
    //insert at end
    fileContents.append(insertStringEnd);

    // Open the output file
    ofstream outputFile(outputFileLocation);

    // Check if the output file is open
    if (!outputFile.is_open()) {

        cerr << "Output file not found. Please try again.";
        return 1;
    }

    // Write the string to the output file
    outputFile << fileContents;

    // Close the output file
    outputFile.close();
    cout << "File closed successfully.";
}
	catch (OverMaxWindowsPathLengthException& e) {
		cerr << e.what();
		return 1;
	}
    //libary exception for invalid argument
    catch (invalid_argument& e) {
		cerr << e.what();
		return 1;
	}
    //generic catch for any other exceptions
    catch (exception& e) {
        cerr << "An exception occured: " << e.what();
        return 1;
    }
    return 0;
}

bool isValidFile(string fileLocation) {
    // regex provided by classmate, reversed engineered to understand how it works
    // regex pattern to check if the file is a .cpp file
    // ^ asserts the start of the string
    // [a-zA-Z]:\\ matches the drive letter and the colon, accepts both upper and lower case
    // (?:[^\\/:*?"<>|\r\n]+ excludes characters that are not allowed in a file name
    // \\ matches the directory separator, * matches zero or more of the preceding group
    // \.cpp matches the file extension
	regex pattern(R"(^[a-zA-Z]:\\(?:[^\\/:*?"<>|\r\n]+\\)*[^\\/:*?"<>|\r\n]*\.cpp)");

	// check if the file location matches the pattern
    if (regex_match(fileLocation, pattern)) {
		return true;
	}
    else {
		return false;
	}
}