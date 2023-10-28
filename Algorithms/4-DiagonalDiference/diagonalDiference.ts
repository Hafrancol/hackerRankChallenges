/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    let firstDiagonal: number = 0;
    let secondDiagonal: number = 0;
    
    arr.forEach((row: number[], index: number) => {
        firstDiagonal += row[index];
        secondDiagonal += row[row.length - 1 - index];
    })
    
    return Math.abs(firstDiagonal - secondDiagonal);
        
}