// Simple array sum solved in Javascript
// Write your code here
const mainArray=ar;
let counter=0;

const sumFunction=(array)=>{
    
    array.map((value)=>{
        
        counter+=value;
    
    });
    
    return counter;
    
}

let simpleArraySum = sumFunction(mainArray);

return simpleArraySum;