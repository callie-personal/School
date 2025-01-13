cmake_minimum_required(VERSION 3.21)
project(EX7 C)

set(CMAKE_C_STANDARD 17)

add_executable(EX7 src/main.c
        src/highScores.c
        inc/highScores.h)
