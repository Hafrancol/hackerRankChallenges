
#
# Complete the 'staircase' function below.
#
# The function accepts INTEGER n as parameter.
#

def staircase(n):
   
    for item in range(1,n + 1):
        space = " " * (n - item)
        hastag = "#" * item
        print( f"{space} {hastag}")