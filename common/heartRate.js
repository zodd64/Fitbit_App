import { me as appbit } from "appbit";
import { HeartRateSensor } from "heart-rate";
import { display } from "display";
import document from "document";

export function giveHeartRate(myHeartRate,iconHRM,iconHRM2,lowHR){

var check;

if (HeartRateSensor && appbit.permissions.granted("access_heart_rate")) {

  const hrm = new HeartRateSensor();
  hrm.addEventListener("reading", () => {

    myHeartRate.text = hrm.heartRate; //ananewse to gui na deiksei thn nea timh heartrate
    
    if(hrm.heartRate < 55){
      lowHR.style.opacity = 1;
      myHeartRate.style.opacity =0;
    }
    
    else if(hrm.heartRate < 90){ //an heartRate mikrotero tou 90 eksafanhse thn gemath kardia,emfanise thn adeia,kai kane animate      
      iconHRM.style.opacity = 1;
      iconHRM2.style.opacity = 0;
      myHeartRate.style.opacity =1;
      lowHR.style.opacity = 0;
      iconHRM.animate("highlight");
    }  
    else{                 //an heartRate megalutero iso tou 90 emfanise thn gemath kardia,eksafanhse thn adeia,kai kane animate
      iconHRM.style.opacity = 0;
      iconHRM2.style.opacity = 1;
      myHeartRate.style.opacity =1;
      lowHR.style.opacity = 0;
      iconHRM2.animate("highlight");
    }
    
  });
  display.addEventListener("change", () => {
    // Automatically stop the sensor when the screen is off
    display.on ? hrm.start() : hrm.stop();
  });
  
  hrm.start();

}
  
}