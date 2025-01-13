#include <iostream>
#include "City.h"
#include <thread>
#include <chrono>
#include "GameSpecs.h"

#define ANSI_CLEAR_LINE "\x1B[2K"


int main()
{
    //Create City object
    City city(GRIDSIZE);

    //initialize the city with the starting number of humans and zombies
    city.initialize(HUMAN_STARTCOUNT, ZOMBIE_STARTCOUNT);

    //run for the specified number of time steps
    for (int i = 0; i < ITERATIONS; i++)
    {
		std::cout << "\033[F";
		std::cout << ANSI_CLEAR_LINE;

		//print the current time step
		std::cout << "Turn# " << i + 1 << ":\n";

		//update and print the city grid
		city.updateAndPrint();

		//get the number of humans and zombies remaining
		int humansRemaining = city.getHumansRemaining();
		int zombiesRemaining = city.getZombiesRemaining();

		//print the number of humans and zombies remaining
		std::cout << "Humans remaining: " << humansRemaining << "\n";
		std::cout << "Zombies remaining: " << zombiesRemaining << "\n\n";

		//check for extinction-level events
		if (humansRemaining == 0 || zombiesRemaining == 0)
		{
			std::cout << "Extinction-Level Event: ";
			if (humansRemaining == 0)
			{
				std::cout << "Humans are extinct.\n";
			}
			else
			{
				std::cout << "Zombies are extinct.\n";
			}
			break;
		}
		//pause for a moment before the next time step
		std::this_thread::sleep_for(std::chrono::milliseconds(INTERVAL));
		//clear the screen so the board stays on screen without scrolling
		//std::cout << "Press space to continue...\n";
		//std::cin.ignore(std::numeric_limits<std::streamsize>::max(), ' ');
		clearScreen();
	}
}