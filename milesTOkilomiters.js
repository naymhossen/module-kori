function mileToKilom(mile){
    const kilom = mile / 1.69;
    return kilom ;
}

const getKilom = 1000;
const getMile = mileToKilom(getKilom);

const robinGetKilo =1000;
const robinGetMile = mileToKilom(robinGetKilo);

console.log(getMile);
console.log(robinGetMile);