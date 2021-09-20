import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import * as date from "../common/date";
import * as heartRate from "../common/heartRate";


// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
const myDate = document.getElementById("myDate");
var myHeartRate = document.getElementById("myHeartRate");
let iconHRM = document.getElementById("iconHRM"); 
let iconHRM2 = document.getElementById("iconHRM2"); 
let lowHR = document.getElementById("lowHR");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
  
  
  
}

myDate.text = date.giveDate(); //klhsh ths giveDate kai apo8hkeush tou String
lowHR.text = "--";
heartRate.giveHeartRate(myHeartRate,iconHRM,iconHRM2,lowHR); //klhsh ths giveHeartRate



