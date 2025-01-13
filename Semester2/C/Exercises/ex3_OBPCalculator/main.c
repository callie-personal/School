/*
 * We can calculate a baseball player's OBP (On-base plus Slugging) Percentage
 * using the following formula given here:
 * https://en.wikipedia.org/wiki/On-base_percentage#Overview
 *
 * We can calculate their SLG (Slugging Percentage) by the formula given here:
 * https://en.wikipedia.org/wiki/Slugging_percentage
 *
 * We can calculate their OPS (On-base Plus Slugging) by simply adding the OBP and SLG
 *
Use these variable values (MAKE SURE TO DECLARE THEM AS INT DATA TYPES):*/



       /*
 * Output all three values OBP, SLG, and OPS on three different lines so all tests pass.
 * It is okay to have more decimal places than the test is looking for (only 3).
 *
 * INFO: Any OPS over .900 is considered great (i.e. Josh Donaldson had .939 the year he
 * won the MVP for the Blue Jays, although Mike Trout had a .991 that year)
 */

#include <stdio.h>

int main() {

    // YOUR CODE HERE
    int atBats = 600;
    int hits = 200;
    int singles = 124;
    int doubles = 40;
    int triples = 6;
    int homeruns = 30;
    int walks = 40;
    int hitBypitches = 5;
    int sacrificeFlies = 8;

    double OBP = 0.0;
    OBP = (double)(hits + walks + hitBypitches) / (atBats + walks + hitBypitches + sacrificeFlies);
    double SLG = 0.0;
    SLG = (double)(singles + (2 * doubles) + (3 * triples) + (4 * homeruns)) / atBats;
    double OPS = 0.0;
    OPS = (double)OBP + SLG;

    printf("The hitter's OBP is: %3lf", OBP);
    printf("\nThe hitter's SLG is: %3lf", SLG);
    printf("\nThe hitter's OPS is: %3lf\n", OPS);

    return 0;

}
