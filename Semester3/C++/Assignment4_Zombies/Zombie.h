#ifndef _Zombie_H
#define _Zombie_H

#include "Organism.h"

// Define the Zombie class
class Zombie : public Organism {
public:
    Zombie(int x, int y);

    void turn(std::vector<std::vector<std::shared_ptr<Organism>>>& grid, int gridSize) override;    

private:
    int breedCounter;
    int starveCounter;

};

#endif#
