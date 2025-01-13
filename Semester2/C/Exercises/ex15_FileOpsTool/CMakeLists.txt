cmake_minimum_required(VERSION 3.21)
project(EX15 C)

set(CMAKE_C_STANDARD 17)

add_executable(EX15 src/main.c inc/fileOps.h src/fileOps.c)
