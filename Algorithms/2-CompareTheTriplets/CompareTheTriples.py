def compareTriplets(a, b):
    # Write your code here
    totalScored = [0,0]
    for item in range(len(a)):
        if a[item] > b[item]:
            totalScored[0] += 1
        elif a[item] < b[item]:
            totalScored[1] += 1
    
    return totalScored