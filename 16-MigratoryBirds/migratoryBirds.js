/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

//function migratoryBirds(arr) {
    // Write your code here
    

		//********************variables
		let arr=[1,4,4,4,5,3] // case 0;
    const arrayOfBirds=arr;
    const frequently=[];
    const smallesId=[];
    const birdTYpe=[];
    
	//********************Functions*********************///

const countFrequently=(valueArrayWithout)=>{
	let count=0;
	arrayOfBirds.map((value)=>{ // we go through the array and ask if the value is equal to each value, if the condition is okay we add +1 to count value
			if(valueArrayWithout===value){
					count++;
			}	
	});
	return count;
}

const createBirdType =(typeArray,frequenylyArray)=>{ // we create new array [[type,frequently],.,..[type,frequently]]
	let b=0;
	for(let i=0;i<typeArray.length;i++){
			birdTYpe.push([typeArray[i],frequenylyArray[b]])
			b++;
	}	
}


function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray); // find the max value in this array and return the value
}

const findTheType=(maxNumber)=>{
    birdTYpe.map((value)=>{
			if(maxNumber===value[1]){ // if the max number is equal to frequently valye, return the type
				smallesId.push(value[0]);	
			}
	});
}

const minimunSmallesId=(minArray)=>{
  return Math.min.apply(null,minArray);// find the minumun value
}


//******************Logic******************** */



const arrayOfBirdsWithoutRepetition=arrayOfBirds.filter((value,index)=>{ //create array withOut repetition values
    return arrayOfBirds.indexOf(value)==index;
});

arrayOfBirds.sort((a,b)=>{ // sort the main array 
    return a-b;
});

arrayOfBirdsWithoutRepetition.sort((a,b)=>{ // sort the arrayWithoutRepetition from minor to mayor
    return a-b;
});

arrayOfBirdsWithoutRepetition.forEach((value)=>{ //we go through the array and every value call the function
  frequently.push(countFrequently(value)); // call the function to coutn the how many repetition values we have, and crate new array with this values
});

createBirdType(arrayOfBirdsWithoutRepetition,frequently); //we create new array [[type,frequently],.,..[type,frequently]]

let maxFrequently= getMaxOfArray(frequently); // find the max number in frquently values and save this value

findTheType(maxFrequently);//call the function to find the type associeted to max value

let miniType=minimunSmallesId(smallesId);// we have the Smalles id in array but we need the minimul value

return miniType; //this is the result


