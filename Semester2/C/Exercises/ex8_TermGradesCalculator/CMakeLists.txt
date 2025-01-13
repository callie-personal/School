cmake_minimum_required(VERSION 3.21)
project(EX8 C)

set(CMAKE_C_STANDARD 17)

add_executable(EX8 src/main.c
        inc/termGrades.h
        src/termGrades.c)
