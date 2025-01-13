cmake_minimum_required(VERSION 3.14)
project(Assignment4)

set(CMAKE_CXX_STANDARD 14)
set(CMAKE_EXE_LINKER_FLAGS "-static")

add_executable(Assignment4
        src/main.cpp
        src/merge_sort.cpp
        src/merge_sort.h)
