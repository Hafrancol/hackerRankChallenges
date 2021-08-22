 // this Exercise is to sum a big numbers in one array
 // Write your code here
    
 const mainArray=ar;
 let sum=0;
 
 const arraySum = (mainArray)=> { // the main function  recive the array to sum every value.
		 
		 mainArray.map((value)=>{
				 
				 sum+=value;
		 });
		 
		 return sum;
 }
 

let resultOfSum= arraySum(mainArray)
return resultOfSum; // return the result.