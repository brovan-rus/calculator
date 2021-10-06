import React, { FC } from 'react';

import styles from './Calculator.module.css';
import { digits, maxDigits, operators } from '../utils/constants';
import { CalculatorDigits } from '../Calculator-digits';
import { CalculatorDisplay } from '../Calculator-display';
import { calculation } from '../utils/calculation';

export const Calculator: FC = () => {
  const [isError, setIsError] = React.useState(false);
  const [expression, setExpression] = React.useState('');
  const [result, setResult] = React.useState('');

  const handleEnter = (digit: string) => {
    // Ограничение максимальной дины выражения
    if (!isError && maxDigits > expression.length) {
      // Ограничение возможности двойного оператора и ввода, когда есть результат на экране
      if (
        !(
          operators.includes(digit) &&
          operators.includes(expression[expression.length - 1]) &&
          digit === '%'
        ) &&
        !(operators.includes(digit) && expression.length === 0) &&
        result === ''
      ) {
        setExpression(expression + digit);
      }
    } else setIsError(true);
  };

  const handleReset = () => {
    setExpression('');
    setResult('');
    setIsError(false);
  };
  const handleResult = () => {
    let calculationExpression = expression;
    if (
      operators.includes(expression[expression.length - 1]) &&
      expression[expression.length - 1] !== '%'
    ) {
      calculationExpression = expression.slice(0, expression.length - 1);
      setExpression(calculationExpression);
    }
    const result = calculation(calculationExpression);
    if (result === 'Infinity' || result.length > maxDigits) {
      setIsError(true);
      return;
    } else {
      setResult(result);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (digits.includes(key) && !(key === '=' || key === 'C')) {
        handleEnter(key);
      }
      if (key === 'Escape') {
        handleReset();
      }
      if (key === 'Enter') {
        handleResult();
      }
      if (key === '*') {handleEnter('x')};
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleEnter]);

  return (
    <div className={styles.container}>
      <CalculatorDisplay
        primaryLine={result.length > 0 ? result : expression}
        secondaryLine={result.length > 0 && !isError ? expression : ''}
        isError={isError}
      />
      <CalculatorDigits onEnter={handleEnter} onReset={handleReset} onResult={handleResult} />
    </div>
  );
};
