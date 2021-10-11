/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */
//function sockMerchant(n, ar) {
// Write your code here
let typeOfSock;
let numberOfPairs;
let pairsCounters=0;
let pairsOfSocks;

const removeRepetetionValues = (array)=>{
    let arrayWithoutRepetiton;
    arrayWithoutRepetiton=array.filter((value,index)=>{
        return array.indexOf(value)===index;
    });
    return arrayWithoutRepetiton;
};

const howManySock = (sock)=>{
    let numberOfSock;
    numberOfSock=ar.filter((value)=>{
        return value===sock
    });        
    if((numberOfSock.length%2)===0){
        return numberOfSock.length;
    }
    else{
        let module=(numberOfSock.length%2);
        return numberOfSock.length - module;
    }  
}

 const sumThePairs=(pairsArray)=>{
     
     pairsArray.map((value)=>{
         pairsCounters+=value;
     });
     
     pairsOfSocks=pairsCounters/2;
 }


typeOfSock=removeRepetetionValues(ar);

numberOfPairs=typeOfSock.map((value)=>{
    return howManySock(value);
    
});


sumThePairs(numberOfPairs);
return pairsOfSocks;
