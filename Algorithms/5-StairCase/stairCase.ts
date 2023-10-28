/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n: number): void {
    for(let i = 1; i < n + 1; i++ ){
        console.log(" ".repeat(n - i) + "#".repeat(i));
    }
	
}

