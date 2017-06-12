class ClockTower(){
    
    var clockTower function($startTime, $endTime){
        
    }

    var countBells = function($startTime, $endTime){
        if((validate($startTime))&&(validate($endTime))){
            var startTime = $startTime.split(':')[1]=="00" ? Number($startTime.split(':')[0]) : Number($startTime.split(':')[0])+1;
            var endTime = Number($endTime.split(':')[0])+1;
            var clockStrike = endTime > startTime ? endTime-startTime :  24 - startTime + endTime; 
            var x = 0;
            for(i=1; i<= clockStrike; i++){
                startTime = startTime % 12 == 0 ? 12 : startTime % 12; 
                /*console.log('hour '+i+', the clock strikes '+startTime +' times');*/
                x += startTime++;
               /* console.log(x);*/
            }
            return("the clock will chime a total of "+x+" times");
        } else return "Please enter valid military-format times for each input";

    }
    function validate($militaryTime){
        if($militaryTime.indexOf(':') == -1) false;
        else if(($militaryTime.split(':')[0].isNaN)||($militaryTime.split(':')[0] >23 )) return false;
        else if(($militaryTime.split(':')[1].isNaN)||($militaryTime.split(':')[1] >59 )) return false;
        else return true;
    }

}