#include "City.h"
#include "Human.h"
#include "Zombie.h"
#include "Organism.h"
#include <cstdlib>
#include <ctime>
#include <iostream>

#define ANSI_COLOR_TURQUOISE "\x1b[36m"
#define ANSI_COLOR_BRIGHT_YELLOW "\x1b[93m"
#define ANSI_COLOR_RESET "\x1b[0m"

//constructor for the city class
//initialize the grid with the set size
City::City(int size) : size(size) {
    grid.resize(size, std::vector<std::shared_ptr<Organism>>(size, nullptr));
}

//initialize the city with the set number of humans and zombies
void City::initialize(int HUMAN_STARTCOUNT, int ZOMBIE_STARTCOUNT) {
	//seed the random number generator
	//use the current time as the seed
	std::srand(static_cast<unsigned int>(std::time(nullptr)));

	int zombies = 0;
	int humans = 0;

	//place the humans randomly
	//while the number of placed humans is less than the starting count
	while (humans < HUMAN_STARTCOUNT) {
		//generate random x and y coordinates
		int x = std::rand() % size;
		int y = std::rand() % size;
		//if the cell is empty, place a human there
		if (grid[x][y] == nullptr) {
			grid[x][y] = std::make_shared<Human>(x, y);
			humans++;
		}
	}

	//place the zombies randomly
	while (zombies < ZOMBIE_STARTCOUNT) {
		//generate random x and y coordinates
		int x = std::rand() % size;
		int y = std::rand() % size;
		//if the cell is empty, place a zombie there
		if (grid[x][y] == nullptr) {
			grid[x][y] = std::make_shared<Zombie>(x, y);
			zombies++;
		}
	}
}

//update and print the city grid
void City::updateAndPrint() {

	//update the state of each organism in the city
	for (int x = 0; x < size; ++x) {
		for (int y = 0; y < size; ++y) {
			if (grid[x][y] != nullptr) {
				grid[x][y]->turn(grid, size);
			}
		}
	}

	//print the current state of the city grid
	for (int i = 0; i < size; ++i) {
		for (int j = 0; j < size; ++j) {
			//print - for empty cells, turquoise H for humans, bright yellow Z for zombies, then reset the color
			if (grid[i][j] == nullptr) {
				std::cout << "- ";
			}
			else if (dynamic_cast<Human*>(grid[i][j].get()) != nullptr) {
				std::cout << ANSI_COLOR_TURQUOISE << "H " << ANSI_COLOR_RESET;
			}
			else if (dynamic_cast<Zombie*>(grid[i][j].get()) != nullptr) {
				std::cout << ANSI_COLOR_BRIGHT_YELLOW << "Z " << ANSI_COLOR_RESET;
			}
		}
		std::cout << std::endl;
	}
}

//get the number of humans remaining in the city
int City::getHumansRemaining() const {
	int humansRemaining = 0;
	for (int x = 0; x < size; ++x) {
		for (int y = 0; y < size; ++y) {
			//if the cell contains a human, increment the count
			if (dynamic_cast<Human*>(grid[x][y].get()) != nullptr) {
				humansRemaining++;
			}
		}
	}
	return humansRemaining;
}

//get the number of zombies remaining in the city
int City::getZombiesRemaining() const {
	int zombiesRemaining = 0;
	for (int x = 0; x < size; ++x) {
		for (int y = 0; y < size; ++y) {
			//if the cell contains a zombie, increment the count
			if (dynamic_cast<Zombie*>(grid[x][y].get()) != nullptr) {
				zombiesRemaining++;
			}
		}
	}
	return zombiesRemaining;
}

void clearScreen() {
	system("cls");
}