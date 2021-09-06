// we use objects and functions.

//function breakingRecords(scores) {
	// Write your code here
	
	const scoreGame=scores;
	let tabulatesRecord=[];
	let hightCounter=0;
	let lowCounter=0;
	let recordCounter=0;
	let breakRecords=[0,0]
	
	
	class recordOfPlay { // create the object to save all information in each game
			
			constructor({
					game,
					score,
					hightesScore,
					lowstedScore,
			}){
					
					this.game=game;
					this.score=score;
					this.hightesScore=hightesScore;
					this.lowstedScore=lowstedScore;
			}
			
	}
	scoreGame.map((value,index)=>{ // here we create the object, in hightesScore and lowstedScore we add value to fill values, in the next steps the this values will change
					tabulatesRecord.push({
							game:index,
							score:value,
							hightesScore:value,
							lowstedScore:value,
					})
			
	});
	
const countTheHightesScore=(tabulatesRecord)=>{ // the function to count how many times break the record in the hightes score
	let b=0;
	
	for(let i=1;i<tabulatesRecord.length;i++){
		 
		 if((tabulatesRecord[i].score) > (tabulatesRecord[b].hightesScore)){  // we compare 2 values, the score and hightesScore
				 tabulatesRecord[i].hightesScore = tabulatesRecord[i].score; 
				 hightCounter++;  
								
		 }else if((tabulatesRecord[i].score) <= (tabulatesRecord[b].hightesScore)){
				 tabulatesRecord[i].hightesScore = tabulatesRecord[b].hightesScore;
		 }
		 
		 
		 b++;
 }
 
 return hightCounter; // return the how many times break the records 
	
}

const countTheLowstedScore=(tabulatesRecord)=>{ // the function to count how many times break the record in the lowsted score
	let b=0;
	
	for(let i=1;i<tabulatesRecord.length;i++){
		 
		 if((tabulatesRecord[i].score) < (tabulatesRecord[b].lowstedScore)){ // we compare 2 values, the score and lowsted Score
				 tabulatesRecord[i].lowstedScore = tabulatesRecord[i].score; 
				 lowCounter++;  
								
		 }else if((tabulatesRecord[i].score) >= (tabulatesRecord[b].lowstedScore)){
				 tabulatesRecord[i].lowstedScore = tabulatesRecord[b].lowstedScore;
		 }
		 
		 
		 b++;
 }
 
 return lowCounter; // return the how many times break the records 
	
}
 
 
 
	breakRecords[0]=countTheHightesScore(tabulatesRecord);  // call the fucntion and save the value
	breakRecords[1]=countTheLowstedScore(tabulatesRecord); // call the fucntion and save the value

return breakRecords; // return the result
