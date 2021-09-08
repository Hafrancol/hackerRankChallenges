/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

//function divisibleSumPairs(n, k, ar) {
	// Write your code here

	 const arrayOfInteger=ar;
	 const integerDivisor=k;
	 let numberOfPairs=0;
	 
	 
	const numberOfPairsFunction=()=>{ //main fucntion to calculate numbers of pairs is divisible in integer divisible
			 
			 let sum=0;
			arrayOfInteger.map((value,index)=>{ //loop through the array and send value and index.
			let newIndex=index+1;
					 
					 for(let i=newIndex;i<arrayOfInteger.length;i++){
							 sum=arrayOfInteger[index]+arrayOfInteger[i];
							 
							 if((sum%integerDivisor)===0){
									 numberOfPairs++; //the number of pairs
							 }
							 
					 }   
			 });     
	}

	numberOfPairsFunction(); // call the fuction
	return numberOfPairs; // return the result