 {
      List<int> finalScore = new List<int>(){0,0};
        for(int i = 0; i < a.Count; i++){
          
          if(a[i] > b[i]){
            finalScore[0] += 1;
          }
          if(a[i] < b[i]){
            finalScore[1] += 1;
          }
        }
        return finalScore;
    }