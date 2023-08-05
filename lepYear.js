function checkLepYear (year){
    const reminder = year % 4 ;
    if(reminder === 0){
        return 'Yes its Lep Year' ;
    }
    else{
        return 'No its not a Lep Year' ;
    }
}

const yesLepYear = checkLepYear(2020);
console.log(yesLepYear);

const noLeapYear = checkLepYear(2023);
console.log(noLeapYear);