/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n: number, p: number): number {
	// Write your code here

	let pages:number=n;
	let pageChoose:number=p;
	let flipOfPageFromFront:number;
	let flipOfPageFromBack:number;
	let flipAllBook:number;
	
	(pages%2===0)
	? flipAllBook = pages/2
	: flipAllBook = Math.floor(pages/2);
	
	flipOfPageFromFront=Math.floor(pageChoose/2);
	flipOfPageFromBack=flipAllBook - flipOfPageFromFront;
	
	if(flipOfPageFromFront<flipOfPageFromBack){
			return flipOfPageFromFront;
	}
	else{
			return flipOfPageFromBack;
	}
 
	console.log('flip all book',flipAllBook);
	console.log('number of page front',flipOfPageFromFront);
	console.log('number of page back',flipOfPageFromBack);
	
	

}