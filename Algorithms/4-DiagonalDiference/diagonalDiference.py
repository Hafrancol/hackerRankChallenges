#
# Complete the 'diagonalDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
# #

import math

def diagonalDifference(arr):
    diagonal_values = [0,0]
    for index, row in enumerate(tuple(arr)):
        diagonal_values[0] += row[index]
        diagonal_values[1] += row[len(row) - 1 - index]
    return abs(diagonal_values[0] - diagonal_values[1])



array = [[0,1,2],[3,4,5],[6,7,8]]
print(diagonalDifference(array))