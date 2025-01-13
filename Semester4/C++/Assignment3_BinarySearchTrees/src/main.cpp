#include <fstream>
#include <iostream>

#include "binary_search_tree.h"
#include "file_operations.h"

int main(const int argc, char* argv[]) {
    if (argc < 4) {
        std::cerr << "Usage: " << argv[0] << " <dictionary_file> <check_file> <output_file>" << std::endl;
        return 1;
    }

    std::vector<std::string> words;
    if (!load_word_file(argv[1], words)) {
        return 1;
    }

    search_tree tree;
    for (const std::string& word : words) {
        tree.insert(word);
    }

    tree.balance_search_tree();

    std::ofstream output_file(argv[3]);
    if (!output_file.is_open()) {
        std::cerr << "Failed to open output file: " << argv[3] << std::endl;
        return 1;
    }

    output_file << tree;

    const std::vector<std::string> incorrect_words = find_incorrect_words(tree, argv[2]);

    search_tree::display_incorrect_words(incorrect_words);

    output_file.close();

    return 0;
}
