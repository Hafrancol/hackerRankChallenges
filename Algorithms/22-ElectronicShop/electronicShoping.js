/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
		
		const findTheHighShopping = (keyboardsArray, usbArray)=>{
			const possibilitiesShopping = [];
        keyboardsArray.map((keyboardPrice)=>{
            usbArray.map((usbPrice)=>{
                if((keyboardPrice + usbPrice) <= b){
                    possibilitiesShopping.push(keyboardPrice + usbPrice);
                } 
            })  
        })
				return possibilitiesShopping;
    }
    
    let findTheCost = findTheHighShopping([...keyboards],[...drives]);
    let max;
    
     if(findTheCost.length !==0){
         max = Math.max(...findTheCost);
         return max
     }else if(findTheCost.length ===0){
         return -1
     }

}
