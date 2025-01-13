//
// Created by dark_ on 2024-11-13.
//

#ifndef FILE_OPERATIONS_H
#define FILE_OPERATIONS_H
#include <string>
#include <vector>

#include "binary_search_tree.h"

bool load_word_file(const std::string& filename, std::vector<std::string>& words);
std::vector<std::string> find_incorrect_words(const search_tree& tree, const std::string& filename);


#endif //FILE_OPERATIONS_H
