    /*
     * Complete the 'compareTriplets' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY a
     *  2. INTEGER_ARRAY b
     */

    public static List<int> compareTriplets(List<int> a, List<int> b)
    {
        List<int> totalScore = new List<int>;
        for(int i=0; i < a.Count; i++){
            if(a[i] > b[i]){
                totalScore[0] += 1;
            }
             if(a[i] < b[i]){
                totalScore[1] += 1;
            }
            return totalScore;
        }

    }
