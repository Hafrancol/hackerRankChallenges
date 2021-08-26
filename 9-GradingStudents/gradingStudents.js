   // Write your code here
    
	 const mainGrades=grades;  // we recibe the grades 
	 const gradesAftherRounding =[]; //will be the result with the finally grades
	 
	 
	 const findMultiplesOf5=(mainGrades)=>{ //Function to calculate the the next multiple of 5
			 
			 let multiplesOf5;
			 multiplesOf5=mainGrades.map((value)=>{  // we find the next multiple of 5
					 return (Math.ceil(value/5))*5;            
			 });
			 
			 return multiplesOf5;  // we return the new array with multiple of 5
	 }
	 
	 
	 const roundEachStudent= (gradesArray, multipleArray)=>{  // this function calculate the rules about round the grades or not
			 let b=0;
			 let substration;
			 
			 
			 for(let i=0; i<gradesArray.length;i++){  // we move on all array to compare the grades with multiples of 5 arrays,
					 substration=multipleArray[b] - gradesArray[i];
					 
					 if(gradesArray[i]<38){
							 gradesAftherRounding.push(gradesArray[i]);
					 }else if(substration<3){
							 gradesAftherRounding.push(multipleArray[b]); 
					 }else{
								gradesAftherRounding.push(gradesArray[i]); 
					 }
					 b++;
			 }
				
	 }
	 

let theNextMultipleOf5=findMultiplesOf5(mainGrades); // we call the function to calculate the multiple of 5 and save the array
roundEachStudent(mainGrades,theNextMultipleOf5); // call the function to round the each grades.

return gradesAftherRounding; // return the array with the result.