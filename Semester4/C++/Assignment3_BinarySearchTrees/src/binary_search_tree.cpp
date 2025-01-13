//Author: Callie Pretty

#include "binary_search_tree.h"

#include <iomanip>
#include <iostream>
#include <vector>

Node* search_tree::get_root() const { return _root; }

void search_tree::insert(const std::string& data, Node*& node) {
    if (node == nullptr) {
        node = new Node({data});
    } else if (data < node->_data) {
        // Insert to left
        insert(data, node->_left);
    } else if (data > node->_data) {
        // Insert to right
        insert(data, node->_right);
    } else {
        // Duplicate
        std::cout << "Node value " << node->_data << " is a duplicate" << std::endl;
    }
}

void search_tree::remove(const std::string& data) {
    Node* node = _root;
    Node* parent = nullptr;

    //search for node to delete
    while (node != nullptr) {
        if (data < node->_data) {
            parent = node;
            node = node->_left;
        } else if (data > node->_data) {
            parent = node;
            node = node->_right;
        } else {
            break;
        }
    }

    if (node == nullptr) return;

    if (node->_left != nullptr && node->_right != nullptr) {
        //node has two children
        //use the right-most node of the left subtree as the successor
        auto successor = node->_left;
        parent = node;

        while (successor->_right != nullptr) {
            parent = successor;
            successor = successor->_right;
        }

        //swap data between successor and the node to delete
        node->_data = successor->_data;
        node = successor;
    }

    //assume there is a child on the left
    Node* subtree = node->_left;

    if (subtree == nullptr) {
        subtree = node->_right;
    }

    if (parent == nullptr) {
        //node with no parent is the root node
        _root = subtree;
    } else if (parent->_left == node) {
        parent->_left = subtree;
    } else if (parent->_right == node) {
        parent->_right = subtree;
    }
    delete node;
}

Node* search_tree::search(const std::string& data) const {
    Node* current = _root;
    while (current != nullptr) {
        if (data == current->_data) {
            return current;
        }
        if (data < current->_data) {
            current = current->_left;
        } else {
            current = current->_right;
        }
    }
    return nullptr;
}

//https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/
void search_tree::store_in_order(const Node* node, std::pmr::vector<std::string>& nodes) {
    if (node == nullptr) return;

    //recursively store the left and right subtrees in order
    store_in_order(node->_left, nodes);
    nodes.push_back(node->_data);
    store_in_order(node->_right, nodes);
}

Node* search_tree::build_balanced_tree(std::pmr::vector<std::string>& nodes, int start, int end) {
    if (start > end) {
        return nullptr;
    }

    //get the middle element and make it the root
    const int mid = (start + end) / 2;
    Node* node = new Node(nodes[mid]);

    //recursively build the left and right subtrees
    node->_left = build_balanced_tree(nodes, start, mid - 1);
    node->_right = build_balanced_tree(nodes, mid + 1, end);

    return node;
}

void search_tree::balance_search_tree() {
    std::pmr::vector<std::string> nodes;

    //store the nodes in the sorted order
    store_in_order(_root, nodes);

    //build the balanced tree from the sorted nodes vector
    _root = build_balanced_tree(nodes, 0, nodes.size() - 1);
}

std::vector<std::string> search_tree::process_text(const std::string &text) {
    std::vector<std::string> words;
    std::string word;

    for (char c : text) {
        //if the character is a letter, add it to the current word
        if (std::isalpha(c)) {
            //convert the letter to lowercase for case-insensitive checking
            word.push_back(std::tolower(c));
        } else if (!word.empty()) {
            //if the character is not a letter and the word is not empty, add the completed word to the vector
            //and clear the word string
            words.push_back(word);
            word.clear();
        }
    }
    //add the last word to the vector
    if (!word.empty()) {
        words.push_back(word);
    }
    return words;
}

void search_tree::print_tree(std::ostream& output, Node*& node, int indent) {
    if (node!= nullptr) {
        print_tree(output, node->_right, indent + 10);
        output << std::setw(indent) << node->_data << std::endl;
        print_tree(output, node->_left, indent + 10);

    }
}

void search_tree::display_incorrect_words(const std::vector<std::string>& incorrect_words) {
    std::cout << "\nIncorrect words: ";
    for (const std::string& incorrect_word : incorrect_words) {
        std::cout << incorrect_word << " ";
    }
    std::cout << std::endl;
}

std::ostream& operator<<(std::ostream& output, search_tree& search_tree) {
    search_tree::print_tree(output, search_tree._root, 0);
    return output;
}

void search_tree::insert(const std::string& data) {
    insert(data, _root);
}
