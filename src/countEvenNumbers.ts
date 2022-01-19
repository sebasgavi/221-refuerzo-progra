import { getRandomNumber } from './getRandomNumber';

let counter = 0;
for(let i = 0; i < 50; i++) {
  const returnValue = getRandomNumber(100, 200);
  const isEven = returnValue % 2 === 0;
  if(isEven) {
    counter++;
  }
}
console.log(counter);
