// This exercise is to calculate the diagonal diference
// Write your code here
    
const mainArray=arr;
   
   
    
    
const leftToRightDiagonalFunction = (mainArray)=>{  // Fucntion to calculate from left to right diagonal
	 let leftToRightSum=0;
		for(let i=0; i<mainArray.length;i++){
			 
			 leftToRightSum+=mainArray[i][i];
	 }
	 
	 return leftToRightSum;
}

const rightToLeftDiagonalFunction= (mainArray)=>{ //Function to calculate from Rigth to left diagonal
	 let rightToLeftSum=0;
	 let b=0;
	 let numberReference= mainArray.length -1;
	 
	 for(let i=numberReference; i>=0 ;i--){
			 rightToLeftSum+=mainArray[b][i];
			 b++;
			 
	 }
	 return rightToLeftSum;
	 
}




let resultLeftToRight=leftToRightDiagonalFunction(mainArray); //call de function
console.log(resultLeftToRight);

let resultRightToLeft= rightToLeftDiagonalFunction(mainArray); //call the function 
console.log(resultRightToLeft);
console.log(mainArray);


return Math.abs(resultLeftToRight - resultRightToLeft); // this is the result 