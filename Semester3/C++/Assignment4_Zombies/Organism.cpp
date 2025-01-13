#include "Organism.h"

//constructor for the organism class
Organism::Organism(int x, int y) : positionX(x), positionY(y) {}

//get the x-coordinate of the organism
int Organism::getX() const {
	return positionX;
}

//get the y-coordinate of the organism
int Organism::getY() const {
	return positionY;
}