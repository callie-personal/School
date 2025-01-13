#ifndef _Human_H
#define _Human_H

#include "Organism.h"
#include <vector>

// Define the Human class
class Human : public Organism {
public:
    Human(int x, int y);

    void turn(std::vector<std::vector<std::shared_ptr<Organism>>>& grid, int gridSize) override;


private:
    int recruitCounter;
};


#endif