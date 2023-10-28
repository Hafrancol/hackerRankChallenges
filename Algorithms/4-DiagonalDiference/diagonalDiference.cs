     /*
     * Complete the 'diagonalDifference' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts 2D_INTEGER_ARRAY arr as parameter.
     */

    public static int diagonalDifference(List<List<int>> arr)
    {
        int firstDiagonal = 0;
        int secondDiagonal = 0;
        for(int index = 0; index < arr.Count; index++ ){
            firstDiagonal += arr[index][index];
            secondDiagonal += arr[index][arr[0].Count - 1 - index];
        }
        
        return Math.Abs( firstDiagonal - secondDiagonal);
    }