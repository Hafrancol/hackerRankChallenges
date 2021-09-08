/* Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

//function birthday(s, d, m) {
    // Write your code here
    const chocolateBar=s;
    const birthDay=d;
    const birthMonth=m;
    let maxLength=chocolateBar.length - birthMonth; //this variable is to know what the maxlength to move on chocolateBar array
    let counterSegments=0; // this variable count the segmenst that response to the condition
    
    
    
    const divideChocolate =(chocolateBar)=>{ // function to find the segments that meets the conditions
        
        let subArray;
        let counter=0;
        
        for(let i=0; i<=maxLength;i++){
            subArray=chocolateBar.slice(i,i+birthMonth);
            subArray.map((value)=>{
                counter+=value
            });
            
            if(counter===birthDay){
                counterSegments++;
            } 
            counter=0;
        }
        
        return counterSegments;
      
    }
    
    
   let wayToDivideBar= divideChocolate(chocolateBar);
   return wayToDivideBar; // return the result
    