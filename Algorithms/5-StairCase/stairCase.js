  // Exericise to show  a stair, we use math for in every cycle add "#" and less " ",using string method is call .repeat();
	//in every cycle the space is less one, so we are sure the space is decreasing 
	// Write your code here
	const n = 4;
	const stairOfSize=n+1;
	let space=" "
	let hashtag="#"
	
	let numberOfSpace=n;
	
	for(let i=1;i<stairOfSize;i++){
			numberOfSpace-=1;
			console.log(space.repeat(numberOfSpace) + hashtag.repeat(i))
			
	}
	
	


