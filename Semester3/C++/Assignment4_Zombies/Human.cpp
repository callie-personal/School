#include "Human.h"
#include <cstdlib>

//constructor for the Human class
Human::Human(int x, int y) : Organism(x, y), recruitCounter(0) {}

//method that defines the behavior of a human in each turn
void Human::turn(std::vector<std::vector<std::shared_ptr<Organism>>>& grid, int gridSize) {
    //define the possible directions: up, down, left, right
    std::vector<std::pair<int, int>> directions = {
        {-1, 0}, // Up
        {1, 0},  // Down
        {0, -1}, // Left
        {0, 1}   // Right
    };

    //randomly select a direction from the list
    std::pair<int, int> selectedDirection = directions[std::rand() % directions.size()];

    //calculate the new position based on the selected direction
    int newX = positionX + selectedDirection.first;
    int newY = positionY + selectedDirection.second;

    //check if the new position is within the grid and is unoccupied
    if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize && grid[newX][newY] == nullptr) {
        //move the human to the new position
        grid[newX][newY] = grid[positionX][positionY];
        grid[positionX][positionY] = nullptr;
        positionX = newX;
        positionY = newY;
    }

    //increase the recruit counter
    recruitCounter++;

    //if the recruit counter reaches 3, try to recruit a new human
    if (recruitCounter >= 3) {
        //reset the recruit counter
        recruitCounter = 0;
        //find an empty neighboring cell to recruit a new human
        for (const auto& dir : directions) {
            //calculate the position of the potential recruit
            int recruitX = positionX + dir.first;
            int recruitY = positionY + dir.second;
            //check if the position is within the grid and is unoccupied
            if (recruitX >= 0 && recruitX < gridSize && recruitY >= 0 && recruitY < gridSize && grid[recruitX][recruitY] == nullptr) {
                grid[recruitX][recruitY] = std::make_shared<Human>(recruitX, recruitY);
                return;
            }
        }
    }
}
