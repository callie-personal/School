#ifndef _Organism_H
#define _Organism_H

#include <iostream>
#include <vector>

using namespace std;

// Define the base class Organism
class Organism {
public:
    Organism(int x, int y);
    virtual ~Organism() = default;
    virtual void turn(vector<vector<shared_ptr<Organism>>>& grid, int gridSize) = 0;

	int getX() const;
	int getY() const;

protected:
    int positionX, positionY;
    int survivalTurnCount;
};

#endif#