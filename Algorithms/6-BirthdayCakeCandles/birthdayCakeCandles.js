 // Write your code here
    
    
 let sortCandlesHeight;
 let theLastIndex=0;
 let counterOfCandles=0;
 
 const sortArray = (candleHeight)=>{ //Function to sort the array

		 candleHeight.sort((a,b)=>{return a-b});
		 
		 return candleHeight;
 }
 
sortCandlesHeight=sortArray(candles); // call the function and send candles array to sort

theLastIndex=sortCandlesHeight.length -1; // to know whats the last index in this array

sortCandlesHeight.map((value)=>{   // map method to ask if the last number that is the mayor is equal for each element in this array
	// if this is equal, them we increse a counter to know how many candles we have
 
 if(value == sortCandlesHeight[theLastIndex]){
		 counterOfCandles++;
		 
 }
 
});


return (counterOfCandles);