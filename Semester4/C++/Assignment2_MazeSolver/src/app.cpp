//Author:  Callie Pretty

#include <fstream>
#include <iostream>
#include <vector>

#include "app.h"

//stack functions, ChatGPT to help convert to smart pointers
void Stack::push(int row, int col) {
    auto new_node = std::make_unique<Node>(row, col);
    new_node->_next = std::move(_top);
    _top = std::move(new_node);
}

void Stack::pop() {
    if (_top == nullptr) {
        std::cerr << "Error: stack is empty" << std::endl;
        return;
    }
    _top = std::move(_top->_next);
}

Node* Stack::peek() const {
    return _top.get();
}


//application functions
int Application::open_files(int argc, char* argv[]) {
    if (argc != 3) {
        std::cerr << "Usage: maze_solver <input file> <output file>" << std::endl;
        return 1;
    }

    _input_file.open(argv[1]);
    if (!_input_file) {
        std::cerr << "Error: cannot open file " << argv[1] << std::endl;
        return 1;
    }

    _output_file.open(argv[2]);
    if (!_output_file) {
        std::cerr << "Error: cannot open file " << argv[2] << std::endl;
        return 1;
    }

    return 0;
}

void Application::convert_file_to_maze() {
    std::string line;
    while (std::getline(_input_file, line)) {
        _maze.push_back(line);
    }
    //set rows and columns to maze dimensions
    _rows = _maze.size();
    if (_rows > 0) {
        _cols = _maze[0].size();
    }
}

void Application::convert_maze_to_file() {
    if (_output_file.is_open()) {
        for (const std::string& row : _maze) {
            _output_file << row << std::endl;
        }
    }
}

void Application::mark_path(Stack& path, std::vector<std::string>& maze) {
    while (const Node* current = path.peek()) {
        maze[current->_x][current->_y] = '#';
        path.pop();
    }
}

bool Application::is_valid_move(const int row, const int col) {
    const bool is_within_maze = (row >= 0 && row < _rows && col >= 0 && col < _cols);
    const bool is_open_space = (_maze[row][col] == ' ');
    const bool space_not_visited = (!_visited[row][col]);

    return (is_within_maze && is_open_space && space_not_visited);
}

void Application::solve_maze() {
    Stack path;

    //start and end points are pre-determined as per Brian's instructions
    constexpr int start_col = 0;
    constexpr int start_row = 1;
    const std::size_t end_col = _cols - 2;
    const std::size_t end_row = _rows - 1;

    //available directions to move in the maze
    const std::vector<std::pair<int, int>> directions = {
        {0, 1}, //up
        {1, 0}, //right
        {0, -1}, //down
        {-1, 0} //left
    };

    //initialize visited vector to check if a space has been visited
    _visited = std::vector<std::vector<bool>>(_rows, std::vector<bool>(_cols, false));

    //begin at the start point of the maze
    path.push(start_row, start_col);
    _visited[start_row][start_col] = true;

    //while the stack is not empty, check if the current node is the end point
    while (path.peek() != nullptr) {
        const Node* current = path.peek();

        if (current->_x == end_col && current->_y == end_row) {
            mark_path(path, _maze);
            return;
        }

        bool moved = false;

        //check if the current node can move in any direction
        for (const auto direction : directions) {
            const int new_col = current->_x + direction.first;
            const int new_row = current->_y + direction.second;

            //if the move is valid, push the new coordinates to the stack and mark the space as visited
            if (is_valid_move(new_col, new_row)) {
                path.push(new_col, new_row);
                _visited[new_col][new_row] = true;
                moved = true;
                break;
            }
        }
        //if the current node cannot move in any direction, pop the node from the path
        if (!moved) {
            path.pop();
        }
    }
}

void Application::print_maze() const {
    std::cout << "\nSolved maze:\n" << std::endl;
    for (const std::string& row : _maze) {
        std::cout << row << std::endl;
    }
}

void Application::close_files() {
        _input_file.close();
        _output_file.close();
}

void Application::run() {
    convert_file_to_maze();
    solve_maze();
    print_maze();
    convert_maze_to_file();
    close_files();
}