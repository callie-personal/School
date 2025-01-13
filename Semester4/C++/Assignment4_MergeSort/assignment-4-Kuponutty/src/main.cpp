//
// Callie Pretty (W0194129)
//

#include <fstream>
#include <iostream>
#include <string>
#include <regex>
#include "merge_sort.h"

using namespace std;

int main(const int argv, char* argc[]) {
    if (argv != 3) {
        cout << "Usage: mergesort <filename> --field=<number>" << endl;
        return 1;
    }

    const std::string filename = argc[1];
    const std::string category = argc[2];

    const std::regex field_regex("--field=(\\d+)");
    std::smatch match;

    int field_no = -1;

    if (std::regex_match(category, match, field_regex)) {
        if (match.size() > 1) {
            field_no = std::stoi(match[1].str()); // Extract the field number as an integer
        } else {
            std::cerr << "Error: No field number captured. Use --field=<number>" << std::endl;
            return 1;
        }
    } else {
        std::cerr << "Error: Invalid field argument. Use --field=<number>" << std::endl;
        return 1;
    }

    const std::string output_file = "../output/sorted_data.txt";

    merge_sort_file(filename, output_file, field_no);

    std::cout << "File sorted by column " << field_no << " and written to " << output_file << std::endl;

    return 0;
}