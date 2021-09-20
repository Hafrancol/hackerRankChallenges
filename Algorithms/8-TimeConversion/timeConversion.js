// Write your code here
    
const time =s;
let militarTime;  // varible to save the mylitar time
let amPm;
let hours;
let minutes;
let seconds;
let intHours;



hours=time.substring(0,2); // we extract the Hours
minutes=time.substring(3,5); //we extract the minutes
seconds=time.substring(6,8); //we extract the seconds
amPm=time.substring(8,10); // we extract the time format AM and PM

intHours=parseInt(hours); //Covert hour to int numbers

if(hours=="12" && amPm=="AM"){
		militarTime= `00:${minutes}:${seconds}`;
}else if(amPm=="AM"){
		militarTime=time.substring(0,8); // the time is iqual less the time format
		
}else if(hours=="12" && amPm=="PM"){
		 militarTime=time.substring(0,8);//when the time is 12 pm, the time is equal less time format
}else if(amPm=="PM"){
		intHours+=12;
		militarTime=`${intHours}:${minutes}:${seconds}`;
		
}

return(militarTime);