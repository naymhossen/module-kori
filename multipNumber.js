function factorial (number){
    let sscresult =1;
    for(let i=1; i <= number; i++ ) {
        sscresult = sscresult * i ;
    }
    return sscresult ;
}

let sscresult = factorial(7);
console.log('total ssc result', sscresult, 'marks');