#ifndef _CITY_H
#define _CITY_H

#include <iostream>
#include "Organism.h"
#include "GameSpecs.h"
#include <vector>

using namespace std;

void clearScreen();

// Define the City class
class City {
public:
    City(int size);
    void initialize(int HUMAN_STARTCOUNT, int ZOMBIE_STARTCOUNT);
    void updateAndPrint();
    int getHumansRemaining() const;
    int getZombiesRemaining() const;


private:
    int size;
    std::vector<std::vector<std::shared_ptr<Organism>>> grid;
};


#endif