
var friends = ["rahim", "karim" ,"abdul", "sadsd", "heroAlom"];

let lengthCheck=0;
for(let i=0; i<friends.length; i++){

    if(friends[lengthCheck].length < friends[i].length){
        lengthCheck=i;
    }
}
console.log(friends[lengthCheck]) ;
