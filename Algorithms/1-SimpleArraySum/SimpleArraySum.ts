
/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar: number[]): number {
    // Write your code here
    
    let total: number = 0;
    for(let item of ar){
        total += item;
    }
    return total;
}