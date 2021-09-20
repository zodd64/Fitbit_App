export function giveDate(){
  
var d = new Date();
var dayName = d.toString().split(' ')[0]; //pare thn hmera apo thn hmeromhnia
var year = d.toString().split(' ')[3].substr(2,4); //apo8hkeuse to 3o kai 4o xarakthra tou xronou afou diaxwrhseis ton xrono apto var d
var month = new Array();
var n ;
  
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
  
n = month[d.getMonth()]; //gia na paroume oloklhro to onoma tou mhna apton parapanw pinaka month.

return(dayName+" "+n+" "+year); //gurise onoma hmeras mhna kai xronou
}