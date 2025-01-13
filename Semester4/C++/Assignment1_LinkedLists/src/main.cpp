#include <iostream>
#include <fstream>  // Include fstream header
#include "listFunctions.h"

// to open a file  
int main(int argc, char* argv[]) {
    if (argc != 2) {
        std::cerr << "Usage: edit.exe <filename>" << std::endl;
        return 1;
    }

    std::string fileName = argv[1];
    std::fstream file; // Declare file without initializing  

    // Open the file  
    file.open(fileName, std::ios::in | std::ios::out);

    if (!file) {
        // Create a new file to edit, have to use append mode to create a new file (note for myself)  
        std::ofstream createFile(fileName, std::ios::app);
        createFile.close();
        file.open(fileName, std::ios::in | std::ios::out);
    }

    // If it doesn't open, then return an error  
    if (!file.is_open()) {
        std::cerr << "Error: could not open or create file." << std::endl;
        return 1;
    }

    LinkedList list;
    std::string line;
    int lineNumber = 0;

    while (std::getline(file, line)) {
        list.add(line, lineNumber++);
    }

    std::cout << list << std::endl;

    return 0;
}


//#include <iostream>
//#include <fstream>  // Include fstream header
//#include "listfunctions.h"
//#include "listFunctions.cpp"
//
////to open a file  
//int main(int argc, char* argv[]) {  
//
//   if (argc != 2) {  
//       std::cerr << "Usage: edit.exe <filename>" << std::endl;  
//       return 1;  
//   }  
//
//   std::string fileName = argv[1];  
//   std::fstream file; // Declare file without initializing  
//
//   // Open the file  
//   file.open(fileName, std::ios::in | std::ios::out);  
//
//   if (!file) {  
//       // Create a new file to edit, have to use append mode to create a new file (note for myself)  
//       std::ofstream createFile(fileName, std::ios::app);  
//       createFile.close();  
//       file.open(fileName, std::ios::in | std::ios::out);  
//   }  
//
//   // If it doesn't open, then return an error  
//   if (!file.is_open()) {  
//       std::cerr << "Error: could not open or create file." << std::endl;  
//       return 1;  
//   }  
//
//   LinkedList list;  
//   std::string line;  
//   int lineNumber = 0;  
//
//   while (std::getline(file, line)) {  
//       list.add(line, lineNumber++);  
//   }  
//
//   std::cout << list << std::endl;  
//
//   return 0;  
//}
