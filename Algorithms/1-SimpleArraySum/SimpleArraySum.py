#
# Complete the 'simpleArraySum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY ar as parameter.
#

def simpleArraySum(ar):
    # Write your code here
    total = 0
    for item in ar:
        print(item)
        total += item
    
    return total

print(simpleArraySum(range(6)))