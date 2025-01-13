//
// Created by dark_ on 2024-11-13.
//

#include "file_operations.h"

#include <fstream>
#include <iostream>
#include <string>
#include <vector>

#include "binary_search_tree.h"

bool load_word_file(const std::string& filename, std::vector<std::string>& words) {
    std::ifstream file(filename);
    if (!file.is_open()) {
        std::cerr << "Failed to open file: " << filename << std::endl;
        return false;
    }

    std::string word;
    while (file >> word) {
        words.push_back(word);
    }
    file.close();
    return true;
}

std::vector<std::string> find_incorrect_words(const search_tree& tree, const std::string& filename) {
    std::vector<std::string> incorrect_words;
    std::ifstream file(filename);

    if (!file.is_open()) {
        std::cerr << "Failed to open file: " << filename << std::endl;
        return incorrect_words;
    }

    std::string line;
    while (std::getline(file, line)) {
        for (std::vector<std::string> processed_words = search_tree::process_text(line); const auto& word : processed_words) {
            //if the word is not found in the tree, add it to the incorrect_words vector
            if (tree.search(word) == nullptr) {
                incorrect_words.push_back(word);
            }
        }
    }
    file.close();
    return incorrect_words;
}

