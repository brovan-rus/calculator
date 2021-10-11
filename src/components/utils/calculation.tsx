export const calculation = (expression: string) => {
  const numbersArray = expression
    .replaceAll(',', '.')
    .split(/[-/+%x]/)
    .map((el) => parseFloat(el))
    .filter((el) => !isNaN(el));
  const operatorsArray = expression.split(/[,0-9]/).filter((el) => el !== '');
  const secondaryOperators = ['+', '-'];

  const firstIterationArray: [number] = [numbersArray[0]];
  let counter = 0;
  operatorsArray.forEach((operator, i) => {
    if (!secondaryOperators.includes(operator)) {
      if (operator === 'x') {
        firstIterationArray[counter] *= numbersArray[i + 1];
      }
      if (operator === '/') {
        firstIterationArray[counter] /= numbersArray[i + 1];
      }
      if (operator === '%') {
        firstIterationArray[counter] /= 100;
      }
      if (operator === '%+' || operator === '%-') {
        firstIterationArray[counter] /= 100;
        firstIterationArray.push(numbersArray[i + 1]);
        counter++;
      }
    } else {
      firstIterationArray.push(numbersArray[i + 1]);
      counter++;
    }
  });

  counter = 1;
  let result = firstIterationArray[0];
  operatorsArray.forEach((operator) => {
    if (secondaryOperators.includes(operator) || operator === '%+' || operator === '%-') {
      if (operator === '+' || operator === '%+') {
        result += firstIterationArray[counter];
        counter++;
      }
      if (operator === '-' || operator === '%-') {
        result -= firstIterationArray[counter];
        counter++;
      }
    }
  });
  if (Number.isInteger(result)) {return result.toFixed(0)} else {return result.toFixed(6)}
};
