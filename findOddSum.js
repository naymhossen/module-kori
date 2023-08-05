function getSumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
  }
  return sum;
}

function getOddNumbers(numbers) {
    let oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    if (element % 2 !==0) {
      console.log(element, index);
      oddNumbers.push(element);
    }
  }
  return oddNumbers ;
}

let myNumbers = [23, 32, 45, 34, 45, 67, 8, 12, 16];
let oddNumbers = getOddNumbers(myNumbers);
console.log(oddNumbers);

let oddNumbersSum = getSumArray(oddNumbers);
console.log("odd number sum" , oddNumbersSum);