function  gradeMark(marks) {
    if (marks < 0 || marks > 100){
       return console.log("Please enter marks between 0 to 100.");
    }
    if (isNaN(marks)) {
       return console.log("Please enter numeric value.") ;
    }

    if (marks >=80 && marks < 100 ){
        return console.log("A+") ;
    }
    else if (marks >=70 && marks < 80 ){
        return console.log("A") ;
    }
    else if (marks >=60 && marks < 70 ){
        return console.log("A-") ;
    }
    else if (marks >=50 && marks < 60 ){
        return console.log("B") ;
    }
    else if (marks >=45 && marks < 50 ){
        return console.log("C") ;
    }
    else if (marks >=33 && marks < 45 ){
        return console.log("D") ;
    }else{
        return console.log("F") ;
    }

}

gradeMark(71);
