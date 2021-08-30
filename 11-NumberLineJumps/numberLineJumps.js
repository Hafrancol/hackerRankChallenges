 //function kangaroo(x1, v1, x2, v2) {
 // Write your code here
    
 const positionKang1=x1;
 const rateKang1=v1;
 const positionKang2=x2;
 const rateKang2=v2;
 let jump=0;
 let jumpModule;
 
 
 
 jump=(positionKang1-positionKang2)/(rateKang2-rateKang1);  // Using lineal Equations we find the Jumps, if for both kangorous the Jumps is same, we finish in the same position
 jumpModule=(positionKang1-positionKang2)%(rateKang2-rateKang1); // we find the module of the jumps to make sure the result is int number
 console.log(jumpModule,jump); // to test the output
 
 
 
 if(jump>0 && jumpModule==0){ // first conditon is to know if jumps is positive and we have a int number
		 return("YES");
		 
 }else if(jump>0 && jumpModule!=0){ // is posible have the jumps positive but not a int number in this case we say "NOT"
		 return("NO");
		 
 }else {
		 return("NO"); // the last case is "NOt" if none condition before are fulfilled
 }