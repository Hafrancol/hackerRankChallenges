//function getTotalX(a, b) {
	// Write your code here
	
	const firstArray=a;
	const secondArray=b;
	let arrayOfFactors=[];
	
	
	
	const findTheFactorsFunction=(number)=>{
			let divisibleNumber=2;
			let array=[];
			
			
			for(let i=1;divisibleNumber>i;i++){
					divisibleNumber=number/i;
					if(number%i==0){
							array.push(divisibleNumber,i);   
					}   
			}
			let sortArray= array.sort((a,b)=>{
					return a-b;  
			});
			
			return sortArray.filter((value,index)=>{
							return sortArray.indexOf(value)==index;
 
					});
			
	}
	
	
	const findTheSameFactorFunction = (arrayWIthFactors)=>{
			let counter=0;
			let arrayWithCommonFactors=[];
			
			
			for(let i=0;i<arrayWIthFactors[0].length;i++){
				 
					
					for(let b=1;b<arrayWIthFactors.length;b++){
							if(arrayWIthFactors[b].includes(arrayWIthFactors[0][i])){
								 
									counter++;
									
							}
							
					}
						
						if(counter==(arrayWIthFactors.length - 1)){
								arrayWithCommonFactors.push(arrayWIthFactors[0][i]);
								
						}  
						counter=0;
							
					}
					
					return arrayWithCommonFactors;
					
			}
			
			
			const dividyEvenly=(factorNumbers, numbersToDivide )=>{
					let counter=0;
					let counter2=0;
					let arrayWithResult=[];
			 
			 for(let i=0; i <factorNumbers.length;i++){
					 
					 for(let b=0;b<numbersToDivide.length;b++){
							 
							 if((factorNumbers[i]%numbersToDivide[b])==0){
									 counter++;
							 }  
					 }
					 
					 if(counter==(numbersToDivide.length)){
							 
							 arrayWithResult.push(factorNumbers[i]);
							 counter2++;
					 }
					 counter=0;
					 
					 
					 
					 
			 }
			 return counter2;
	 }
			
	
	
	
	
	arrayOfFactors= secondArray.map((value)=>{
			
			return findTheFactorsFunction(value);
	});
	
 
	let communFactores = findTheSameFactorFunction(arrayOfFactors);
	 //console.log(communFactores);
	 
	 //let arrayWithTheresult=dividyEvenly(communFactores,a);
	 //console.log(arrayWithTheresult)
	 
	 
		return dividyEvenly(communFactores,a);
	 