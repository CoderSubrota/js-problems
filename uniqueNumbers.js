var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let uniqueNumbers=[] ;

for (let i=0; i<numbers.length; i++){
     if(!uniqueNumbers.includes(numbers[i])){
        uniqueNumbers.push(numbers[i]) ;
     }
}

for(let i=0; i<uniqueNumbers.length; i++){
    console.log(uniqueNumbers[i]) ;
}

