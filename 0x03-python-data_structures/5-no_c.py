#!/usr/bin/python3
def no_c(my_string):
    word = ""
    for x in my_string:
        if x == 'c' or x == 'C':
            continue
        word += x
    return (word)
