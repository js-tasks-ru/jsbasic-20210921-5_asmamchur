function getMinMax(str) {
  let arrayNumbers = str.split(' ').
  filter(item => isFinite(item)).
  sort((a, b) => a - b);
  return {min: +arrayNumbers[0], max: +arrayNumbers[arrayNumbers.length - 1]};
}
