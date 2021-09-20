/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

//function dayOfProgrammer(year) {
    // Write your code here
   const mainYear=year;
   const programmerDay=256;
   let format;
   let dayFormat;
   let monthFormat;
   let yearFormat;
   let count=0;
   const months =[
       {month:"January", days:31},
       {month:"February ", days:28},
       {month:"March", days:31},
       {month:"April", days:30},
       {month:"May", days:31},
       {month:"June", days:30},
       {month:"July", days:31},
       {month:"August", days:31},
       ];
       
       const julianCalender=(mainYear)=>{
           ((mainYear%4)===0)
           ?months[1].days=29
           :months[1].days=28
           
           return
       }
       
       const gregorianCalender=(mainYear)=>{
           if(((mainYear%4)===0 && (mainYear%100)!==0)|| (mainYear%400)===0 ){
                months[1].days=29;
            }
            else{
                 months[1].days=28;
            }
           return
       }
             
       if(mainYear>=1700 && mainYear<=1917){
           julianCalender(mainYear);
       }else if(mainYear>1918){
           gregorianCalender(mainYear);
       }
       
        for(let b of months){
           count+=b.days;
       }
       
       dayFormat=programmerDay - count;
       monthFormat=months.length +1;
       yearFormat=mainYear
       format=`${dayFormat}.0${monthFormat}.${yearFormat}`;
       console.log(months);
       if(mainYear===1918){
            dayFormat=programmerDay - count +14 -1;
            monthFormat=months.length +1;
            yearFormat=mainYear
            format=`${dayFormat}.0${monthFormat}.${yearFormat}`;
            return format
       }
       else{
           return format;
       }