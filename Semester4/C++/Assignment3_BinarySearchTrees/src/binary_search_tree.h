//
// Created by dark_ on 2024-11-11.
//

#ifndef BINARY_SEARCH_TREE_H
#define BINARY_SEARCH_TREE_H
#include <ostream>
#include <vector>

struct Node {
    std::string _data;
    Node* _left { nullptr };
    Node* _right { nullptr };
};

class search_tree {
    Node* _root { nullptr };

    static void insert(const std::string &data, Node *&node);
    static void store_in_order(const Node *node, std::pmr::vector<std::string> &nodes);
    static Node* build_balanced_tree(std::pmr::vector<std::string> &nodes, int start, int end);

public:
    [[nodiscard]] Node* get_root() const;
    void insert(const std::string &data);
    void remove(const std::string& data);
    [[nodiscard]] Node* search(const std::string &data) const;
    void balance_search_tree();
    static std::vector<std::string> process_text(const std::string& text);
    static void display_incorrect_words(const std::vector<std::string>& incorrect_words);
    static void print_tree(std::ostream &output, Node *&node, int indent);

    friend std::ostream& operator<<(std::ostream& output, search_tree& search_tree);
};

#endif //BINARY_SEARCH_TREE_H
