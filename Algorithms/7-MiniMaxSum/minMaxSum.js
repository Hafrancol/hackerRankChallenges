const minMaxArray=arr;
let output;


minMaxArray.sort((a,b)=>{
    
    return a-b
    
});

const sumMinimunFunction = (minMaxArray)=>{  // Function to find the sum of Minimuns numbers
    let counterMin=0;
    for(let i=0; i<minMaxArray.length - 1;i++){
        counterMin+=minMaxArray[i];
        
    }
    
    return counterMin;
}


const sumMaximunFunction = (minMaxArray)=>{ //Fuction to find the sum of maximuns numbers
    let counterMax=0;
    for(let i=1; i<minMaxArray.length;i++){
        counterMax+=minMaxArray[i];
        
    }
    
    return counterMax;
}

let minimunValue= sumMinimunFunction(minMaxArray);  //call de function and save the value of minimun 
let maximunValue= sumMaximunFunction(minMaxArray); // call the function and save the value of maximun


console.log(minimunValue,maximunValue); // the output with the solution