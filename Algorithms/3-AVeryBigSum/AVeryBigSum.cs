public static long aVeryBigSum(List<long> ar)
    {
      long total = 0;
      foreach(long value in ar){
        total += value;
      }
      return total;
    }