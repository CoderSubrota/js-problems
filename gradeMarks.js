function  gradeMark(marks) {
    if (marks < 0 || marks > 100){
       return "Please enter marks between 0 to 100.";
    }
    if (isNaN(marks)) {
       return "Please enter numeric value." ;
    }

    if (marks >=80 && marks < 100 ){
        return "A+" ;
    }
    else if (marks >=70 && marks < 80 ){
        return "A" ;
    }
    else if (marks >=60 && marks < 70 ){
        return "A-" ;
    }
    else if (marks >=50 && marks < 60 ){
        return "B" ;
    }
    else if (marks >=45 && marks < 50 ){
        return "C" ;
    }
    else if (marks >=33 && marks < 45 ){
        return "D" ;
    }else{
        return "F" ;
    }

}

const result = gradeMark(71);
console.log(result) ;

