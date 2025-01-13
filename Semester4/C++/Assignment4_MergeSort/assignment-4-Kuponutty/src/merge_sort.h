//
// Callie Pretty (W0194129)
//

#ifndef MERGE_SORT_H
#define MERGE_SORT_H

#include <string>

void split_file(const std::string& filename);
void merge_files(const std::string& temp_file1, const std::string& temp_file2, const std::string& output_file, int field_no);
void merge_sort_file(const std::string& input_file, const std::string& output_file, int field_no);
void remove_temp_files();

#endif //MERGE_SORT_H
