function LeapYearCheck(number){
    if ((number%4===0 && number%100!==0 )|| number%400===0){
        return console.log("Leap Year");
    }else{
        return console.log("Is not a leap year");
    }
}

LeapYearCheck(1700) ;
