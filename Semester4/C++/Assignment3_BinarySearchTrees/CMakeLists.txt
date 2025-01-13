cmake_minimum_required(VERSION 3.17)
project(Assignment_3)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_EXE_LINKER_FLAGS "-static")

add_executable(spellcheck
        src/main.cpp
        src/binary_search_tree.cpp
        src/binary_search_tree.h
        src/file_operations.cpp
        src/file_operations.h)
