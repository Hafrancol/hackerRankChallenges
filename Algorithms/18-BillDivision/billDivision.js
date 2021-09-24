/*Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 * 
 * 


 */

//function bonAppetit(bill, k, b) {
  // Write your code here
const indexBill=k;
const charged=b;
let counter=0;
let billActual=0;

 
const mainBill =bill.map((value,index)=>{
  if(index!=indexBill){
    return value;
  }return 0
    
});

for(let value of mainBill){ 
  counter=counter+value;
}

billActual=counter/2;
let resta=charged-billActual;

if(resta>0){
  console.log(resta); 
}
else if(resta==0){
  console.log ("Bon Appetit");
}