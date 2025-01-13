#ifndef LISTFUNCTIONS_H
#define LISTFUNCTIONS_H

#include <string>
#include <iostream>

class LinkedList {
    struct LinkedListNode {
        int _line{ -1 };
        std::string _data;
        LinkedListNode* _next{ nullptr };

        // Only declare the constructor here
        LinkedListNode(const std::string& data);
    };

    LinkedListNode* _start{ nullptr };

public:
    void add(const std::string& data, int line = -1);
    void remove(const std::string& data);
    void insert(const std::string& data, int line);
    friend std::ostream& operator<<(std::ostream& output, LinkedList& list);
};

#endif // LISTFUNCTIONS_H