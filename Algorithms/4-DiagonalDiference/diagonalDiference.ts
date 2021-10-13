/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
	// Write your code here
	let d1:number;
	let d2:number;
	
	
	const diagonal=(matrix:number[][],iInit:number):number=>{
			let sum:number=0;
			let i:number=iInit;
			if(i===0){
					matrix.forEach((value:number[])=>{
					sum+=value[i]; 
					i++;
			});
			}else{
					matrix.forEach((value:number[])=>{
					sum+=value[i]; 
					i--;
			});
			}
			return sum;
	}
	
	d1=diagonal(arr,0);
	d2=diagonal(arr,arr.length - 1)
	return Math.abs(d1-d2)

}