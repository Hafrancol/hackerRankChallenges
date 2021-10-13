/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a: number[], b: number[]):number[] {
	// Write your code here
	const awarded:number[]=[0,0];
	let i:number=0;
	
	for(let aliceValue of a){
			if(aliceValue>b[i]){
					awarded[0]++;
			}
			else if(aliceValue<b[i]){
					awarded[1]++;
			}
			i++;
	}
	
	
	
	
	return awarded;

}