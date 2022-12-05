 public static void staircase(int n)
    {
        string numeral = " ";
        string space = " ";
        
        for(int i = 1; i < n + 1 ; i++){
            numeral = new String('#', i);
            space = new String(' ', n - i);
            Console.WriteLine("{0}{1}",space, numeral);
        }
    }
