 public static int diagonalDifference(List<List<int>> arr)
    {
        int diagonal1 = 0;
        int diagonal2 = 0;
        int counter = 0;
        arr.ForEach(rows => {
            diagonal1 += rows[counter];
            diagonal2 += rows[arr.Count - 1 - counter];
            counter += 1;
        });
        
    