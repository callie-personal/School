cmake_minimum_required(VERSION 3.21)
project(EX9 C)

set(CMAKE_C_STANDARD 17)

add_executable(EX9 src/main.c
        inc/stringOperations.h
        src/stringOperations.c)
