SELECT CITY FROM STATION 
WHERE MOD(ID,2) = 0 
GROUP BY CITY;