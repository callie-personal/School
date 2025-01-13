#include "Zombie.h"
#include "Human.h"
#include <cstdlib>
#include <algorithm>
#include <random>

//constructor for the zombie class
Zombie::Zombie(int x, int y) : Organism(x, y), breedCounter(0), starveCounter(0) {}


//method for the zombie turn
void Zombie::turn(std::vector<std::vector<std::shared_ptr<Organism>>>& grid, int gridSize) {
	bool hasAte = false;

	//check all surrounding cells
	//generate a list of all possible moves
	std::vector<std::pair<int, int>> moves;
	for (int directionX = -1; directionX <= 1; ++directionX) {
		for (int directionY = -1; directionY <= 1; ++directionY) {
			moves.emplace_back(directionX, directionY);
		}
	}

	//generate a random direction to move
	std::random_device rd;
	std::default_random_engine engine(rd());
	//shuffle the moves
	std::shuffle(moves.begin(), moves.end(), engine);

	//zombie moves to a random direction
	for (const auto& move : moves) {
		int newX = positionX + move.first;
		int newY = positionY + move.second;

		//check if the new position is within the grid
		if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize) {
			auto target = grid[newX][newY];
			//check if there's a human in the surrounding spaces and move there
			if (target != nullptr && dynamic_cast<Human*>(target.get()) != nullptr) {
				grid[newX][newY] = grid[positionX][positionY];
				grid[positionX][positionY] = nullptr;
				positionX = newX;
				positionY = newY;
				hasAte = true;
				break;
			}
			//if there's no human, go in a random direction
			else if (target == nullptr) {
				grid[newX][newY] = grid[positionX][positionY];
				grid[positionX][positionY] = nullptr;
				positionX = newX;
				positionY = newY;
				break;
			}
			//if the direction is invalid, try again
			else {
				continue;
			}
		}
	}

	//update the breed or starve counter based on the eating status
	if (hasAte) {
		starveCounter = 0;
		breedCounter++;
	}
	else {
		starveCounter++;
	}

	//if the breed counter reaches 8, try to breed
	if (breedCounter >= 8) {
		bool hasBred = false;
		for (const auto& move : moves) {
			int newX = positionX + move.first;
			int newY = positionY + move.second;

			//check if the new position is within the grid and is not the current position
			if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize && !(move.first == 0 && move.second == 0)) {
				auto target = grid[newX][newY];
				//if there's a human at the new position, breed
				if (target != nullptr && dynamic_cast<Human*>(target.get()) != nullptr) {
					grid[newX][newY] = std::make_shared<Zombie>(newX, newY);
					breedCounter = 0;
					hasBred = true;
					break;
				}
			}
		}
		//if unable to breed, reset the breed counter
		if (!hasBred) {
			breedCounter = 0;
		}
	}

	//if the starve counter reaches 3, the zombie starves and turns into a human
	if (starveCounter >= 3) {
		grid[positionX][positionY] = std::make_shared<Human>(positionX, positionY);
	}

}