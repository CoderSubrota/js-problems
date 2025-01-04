function LeapYearCheck(number){
    if ((number%4===0 && number%100!==0 )|| number%400===0){
        return "Leap Year";
    }else{
        return "Is not a leap year";
    }
}

let result = LeapYearCheck(1700) ;
console.log(result) ;

