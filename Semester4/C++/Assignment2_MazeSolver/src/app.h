//Author:  Callie Pretty

#ifndef APP_H
#define APP_H

#include <fstream>
#include <memory>
#include <vector>

struct Node {
    //coordinates to navigate map
    int _x, _y;
    std::unique_ptr<Node> _next = nullptr;
    Node(const int x, const int y) : _x(x), _y(y) {}
};

class Stack {

private:
    std::unique_ptr<Node> _top;

public:
    Stack() : _top(nullptr) {}
    void push(int row, int col);
    void pop();
    Node* peek() const;
};

class Application {
private:
    std::ifstream _input_file;
    std::ofstream _output_file;
    std::vector<std::string> _maze;
    std::vector<std::vector<bool>> _visited;
    std::size_t _rows;
    std::size_t _cols;

public:

    Application() : _rows(0), _cols(0) {}

    int open_files(int argc, char* argv[]);
    void convert_file_to_maze();
    void convert_maze_to_file();
    static void mark_path(Stack& path, std::vector<std::string>& maze);
    bool is_valid_move(int row, int col);
    void solve_maze();
    void print_maze() const;
    void close_files();
    void run();
};

#endif //APP_H
