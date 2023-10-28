    /*
     * Complete the 'staircase' function below.
     *
     * The function accepts INTEGER n as parameter.
     */

    public static void staircase(int n)
    {
        for(int i=1; i< n + 1; i++){
            string space = new String(' ', n - i);
            string hashtag = new String('#',i);
            Console.WriteLine($"{space}{hashtag}");
        }
    }