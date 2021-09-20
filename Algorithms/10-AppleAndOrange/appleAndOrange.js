	// Write your code here
	
	const starHome=s;
	const endHome=t;
	const applePosition=a;
	const orangePosition=b;
	const numbersOfApples=apples;
	const numberOfOranges=oranges;

	let applesPositionFromTree;
	let orangePositionFromTree;


	const calPositiionOfFruits=()=>{  //Function to find the right position from tree
	
	     applesPositionFromTree= numbersOfApples.map((value)=>{
			
	    return (value + applePosition);
			
	    });


	orangePositionFromTree = numberOfOranges.map((value)=>{
	
	    return (value + orangePosition);
	
	    });
		
	}

	const isIncludeInTheRange=(applesWatchingFromTree, orangeWatchingFromTree)=>{ // here we ask if the fruits is inside the range
	    let appleIncludeToTheRange=0;
	    let orangeIncludeToTheRange=0;
	
	    applesWatchingFromTree.map((value)=>{
			
	        if(value>=starHome &&value<=endHome){
	            appleIncludeToTheRange++;
	        }
				
	    });
		
	    orangeWatchingFromTree.map((value)=>{
			
	         if(value>=starHome &&value<=endHome){
	            orangeIncludeToTheRange++;
	        }
				
	    });
		
	    return [appleIncludeToTheRange,orangeIncludeToTheRange]
		
		
	}


	calPositiionOfFruits();	
	let resultWithFruitIntoThePlace=isIncludeInTheRange(applesPositionFromTree,orangePositionFromTree);	
	console.log(resultWithFruitIntoThePlace[0]);
	console.log(resultWithFruitIntoThePlace[1]);
 