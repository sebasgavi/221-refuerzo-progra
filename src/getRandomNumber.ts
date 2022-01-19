export function getRandomNumber (min: number, max: number) {
  const randomFloat = Math.random();
  const range = max - min;
  const number = randomFloat * range;
  const integer = Math.round(number);
  const result = integer + min;
  return result;
}
