  //Second exercise Compare the triples
 // Write your code here

 const aliceArray=a;
 const bobArray=b;
 let aliceCounter=0;
 let bobCounter=0;
 let counterB=0;
 
 const comparationPoints =(aliceArray,bobArray)=>{  // function to compare two arrays
		 
		 for(let arrayAux of aliceArray){
				 
				 if(arrayAux>bobArray[counterB]){
						 aliceCounter++;
				 }
				 else if(arrayAux<bobArray[counterB]){
						 bobCounter++;
				 }
				 counterB++;
		 }
		 
		 return [aliceCounter,bobCounter];
 }
 
 let resultOfComparation = comparationPoints(aliceArray,bobArray); //call the function
 return(resultOfComparation); // the result
 