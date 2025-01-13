//Author: Callie Pretty

#include "listFunctions.h"
#include <string>

// Define the constructor here
LinkedList::LinkedListNode::LinkedListNode(const std::string& data)
    : _data(data), _next(nullptr) {}

std::ostream& operator<<(std::ostream& output, LinkedList& list) {
    auto node = list._start;
    while (node != nullptr) {
        output << node->_data << " ";
        node = node->_next;
    }
    return output;
}

void LinkedList::add(const std::string& data, int line) {
    auto new_node = new LinkedListNode(data);
    if (_start == nullptr) {
        _start = new_node;
    }
    else {
        LinkedListNode* current = _start;
        while (current->_next != nullptr) {
            current = current->_next;
        }
        current->_next = new_node;
    }
}

void LinkedList::remove(const std::string& data) {
    LinkedListNode* current = _start;
    LinkedListNode* previous = nullptr;

    while (current != nullptr) {
        if (current->_data == data) {
            break;
        }
        previous = current;
        current = current->_next;
    }

    if (current != nullptr) {
        if (previous == nullptr) {
            _start = current->_next; // Remove first node
        }
        else {
            previous->_next = current->_next; // Remove middle or last node
        }
        delete current; // Free the memory
    }
    else {
        std::cout << "Node doesn't exist." << std::endl;
    }
}

void LinkedList::insert(const std::string& data, int line) {
    auto new_node = new LinkedListNode(data);
    LinkedListNode* current = _start;
    LinkedListNode* previous = nullptr;
    int index = 0;

    while (current != nullptr) {
        if (index == line) {
            break;
        }
        previous = current;
        current = current->_next;
        index++;
    }

    if (previous == nullptr) {
        // Insert at the beginning
        new_node->_next = _start;
        _start = new_node;
    }
    else {
        // Insert in the middle or at the end
        new_node->_next = previous->_next;
        previous->_next = new_node;
    }
}

//LinkedList::LinkedListNode::LinkedListNode(const std::string& data)
//	: _data(data), _next(nullptr) {}
//
//std::ostream& operator<<(std::ostream& output, LinkedList& list) {
//	auto node = list._start;
//	while (node != nullptr) {
//		output << node->_data << " ";
//		node = node->_next;
//	}
//	return output;
//}
//
//void LinkedList::add(const std::string& data, int line) {
//	auto new_node = new LinkedListNode(data);
//	LinkedListNode* current = _start;
//	LinkedListNode* previous = nullptr;
//
//
//	if (_start == nullptr) {
//		_start = new_node;
//	}
//	else {
//		LinkedListNode* current = _start;
//		LinkedListNode* previous = nullptr;
//
//		while (current != nullptr) {
//			previous = current;
//			current = current->_next;
//		}
//		previous->_next = new_node;
//	}
//}
//
//void LinkedList::remove(const std::string& data) {
//	LinkedListNode* current = _start;
//	LinkedListNode* previous = nullptr;
//
//	while (current != nullptr) {
//		if (current->_data == data) {
//			break;
//		}
//		previous = current;
//		current = current->_next;
//	}
//
//	if (current != nullptr) {
//		// Deleting the first node or other nodes
//		if (previous == nullptr) {
//			_start = current->_next;
//		}
//		else {
//			previous->_next = current->_next;
//		}
//		delete current;
//	}
//	else {
//		std::cout << "Node doesn't exist." << std::endl;
//	}
//}
//
//void LinkedList::insert(const std::string& data, int line) {
//	auto new_node = new LinkedListNode(data);
//
//	LinkedListNode* current = _start;
//	LinkedListNode* previous = nullptr;
//	int index = 0;
//
//	while (current != nullptr) {
//		if (index == line) {
//			break;
//		}
//		index++;
//		previous = current;
//		current = current->_next;
//	}
//
//	// Inserting at the beginning
//	if (previous == nullptr) {
//		new_node->_next = _start;
//		_start = new_node;
//	}
//	else {
//		new_node->_next = current; // Insert the node in the middle
//		previous->_next = new_node;
//	}
//}
