//Author: Callie Pretty

#include "app.h"


int main(int argc, char* argv[]) {
    Application app;

    //if open files fails, exit program with error code
    if (app.open_files(argc, argv) != 0) {
        return 1;
    }

    app.run();

    return 0;
}