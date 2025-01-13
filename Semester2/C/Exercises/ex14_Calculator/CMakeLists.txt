cmake_minimum_required(VERSION 3.21)
project(EX14 C)

set(CMAKE_C_STANDARD 17)

add_executable(EX14 src/main.c inc/calculator.h src/calculator.c)
