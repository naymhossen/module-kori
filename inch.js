function inchesToFeet (inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchesToFeet(dadaInches);

const nanaInches = 199;
const nanaFeet = inchesToFeet(nanaInches);

console.log(dadaFeet);
console.log(nanaFeet);