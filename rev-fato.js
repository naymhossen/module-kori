function rev_facto (number) {
    let i = number;
    let result = 1;
    while(i >= 1) {
        result = result * i;
        i--;
        console.log(i);
    }
    return result ;
}

let number = 7 ;
let fact = rev_facto(number);
console.log('this is while facto', number, fact);