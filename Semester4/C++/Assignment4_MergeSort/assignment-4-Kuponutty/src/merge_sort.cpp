//
// Callie Pretty (W0194129)
//

#include <fstream>
#include <iostream>
#include <string>

#include "merge_sort.h"

// Split the file into two temporary files by alternating lines between them
void split_file(const std::string& filename, const std::string& temp1, const std::string& temp2) {
    std::ifstream input(filename);
    std::ofstream output1(temp1);
    std::ofstream output2(temp2);

    if (!input.is_open() || !output1.is_open() || !output2.is_open()) {
        std::cerr << "Error: Cannot open file(s) for splitting." << std::endl;
        return;
    }

    bool toggle = true;
    std::string line;
    // Read each line from the input file and write to the respective temporary file
    while (std::getline(input, line)) {
        if (toggle) {
            output1 << line << std::endl;
        } else {
            output2 << line << std::endl;
        }
        toggle = !toggle;
    }

    input.close();
    output1.close();
    output2.close();
}

//get the column value from the field number
std::string get_column(const std::string& line, const int field_no) {
    size_t start = 0;
    size_t end = 0;

    for (int i = 0; i <= field_no; i++) {
        // Find the next tab character
        end = line.find('\t', start);
        if (end == std::string::npos) {
            if (i < field_no) {
                return "";
            }
            end = line.length(); // Last column
        }
        if (i < field_no) { // Move start to next column
            start = end + 1;
        }
    }

    return line.substr(start, end - start);
}

// Merge two temporary files based on entered column and write to an output file
void merge_files(const std::string& temp_file1, const std::string& temp_file2, const std::string& output, int field_no) {
    std::ifstream input1(temp_file1);
    std::ifstream input2(temp_file2);
    std::ofstream output_file(output);

    if (!input1.is_open() || !input2.is_open() || !output_file.is_open()) {
        std::cerr << "Error: Cannot open file(s) for merging." << std::endl;
        return;
    }

    std::string line1, line2;
    // Read the first line from each file
    bool has_line1 = static_cast<bool>(std::getline(input1, line1));
    bool has_line2 = static_cast<bool>(std::getline(input2, line2));


    while (has_line1 && has_line2) {
        //compare the 2nd column of the lines, if line 1 is smaller or equal, write to output file
        if (get_column(line1, field_no) <= get_column(line2, field_no)) {
            output_file << line1 << std::endl;
            //get the next line from temp1
            has_line1 = static_cast<bool>(std::getline(input1, line1));
        } else {
            //line 2 is smaller, write to output file
            output_file << line2 << std::endl;
            has_line2 = static_cast<bool>(std::getline(input2, line2));
        }
    }

    // Write remaining lines from temp1 and temp2
    while (has_line1) {
        output_file << line1 << std::endl;
        has_line1 = static_cast<bool>(std::getline(input1, line1));
    }

    while (has_line2) {
        output_file << line2 << std::endl;
        has_line2 = static_cast<bool>(std::getline(input2, line2));
    }

    input1.close();
    input2.close();
    output_file.close();
}

void merge_sort_file(const std::string& input_file, const std::string& output_file, int field_no) {
    const std::string temp_file1 = "temp1.txt";
    const std::string temp_file2 = "temp2.txt";

    std::string current_input = input_file;
    std::string current_output = output_file;

    bool sorted = false;
    while (!sorted) {

        split_file(current_input, temp_file1, temp_file2);

        merge_files(temp_file1, temp_file2, current_output, field_no);

        //Check if the file is sorted
        std::ifstream output_check(current_output);
        std::string prev_line;
        //assume sorted until proven otherwise
        sorted = true;

        if (std::getline(output_check, prev_line)) {
            std::string current_line;
            //check if the column is in ascending order
            while (std::getline(output_check, current_line)) {
                if (get_column(prev_line, field_no) > get_column(current_line, field_no)) {
                    sorted = false;
                    break;
                }
                prev_line = current_line;
            }
        }

        output_check.close();

        // Swap input and output files for the next iteration
        std::swap(current_input, current_output);
    }

    // Rename the final sorted file
    if (current_input != output_file) {
        std::rename(current_input.c_str(), output_file.c_str());
    }

    // Clean up temporary files
    std::remove(temp_file1.c_str());
    std::remove(temp_file2.c_str());
}