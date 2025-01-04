var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let bigNumber=0;

for (let i=0; i<numbers.length; i++){
    if(numbers[bigNumber]<numbers[i]){
        bigNumber=i;
    }
}

console.log(numbers[bigNumber]);

