def is_leap(year):
    
    
    # Write your logic here
    
    if year % 4 == 0 and year % 100 == 0 and year % 400 == 0:
        return True
        
    elif year % 4 == 0 and year % 100 == 0:
        return False
    
    elif year % 4 == 0:
        return True
    
    return False
    
    

year = int(raw_input())