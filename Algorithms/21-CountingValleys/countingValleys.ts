/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */


function countingValleys(steps: number, path: string): number {
    // Write your code here
    
    //  valueStep{
    //     U = 1,
    //     D = -1,
    // }
   
    
    let everyStep: string[] = [];
    everyStep = path.split('');
    
    let valueStep = everyStep.map((value):number=>{
        return (value==='U') ? 1 : -1
    });
   
   const findValley = (array: number[]):number =>{
       let counter: number = 0;
       let valley:number = 0;
       
       array.map((value)=>{
           
           counter+= value;
           if (counter===0 && (value===1)){
               valley++;
           }
           
           
       });
       
       return valley; 
   }
 return findValley(valueStep);
}