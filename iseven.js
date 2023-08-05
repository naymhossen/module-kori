function checkNumber (number){
    const reminder = number % 2 ;
    if(reminder === 0){
        return true;
    }
    else{
        return false ;
    }
}

const isOdd = checkNumber(5);
console.log(isOdd);
const isEven = checkNumber(10);
console.log(isEven);