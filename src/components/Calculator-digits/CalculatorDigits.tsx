import React, { FC } from 'react';

import styles from './CalculatorDigits.module.css';

import { Button } from '../Button';
import { digits } from '../utils/constants';

export const CalculatorDigits: FC = () => {
  const [expression, setExpression] = React.useState('');
  const handleButton = (digit: string) => {
    setExpression(digit);
  };

  const handleResultButton = () => {
    console.log('resultButton');
  };

  const handleResetButton = () => {
    console.log('resetButton');
  };

  console.log(expression);
  return (
    <div className={styles.container}>
      {digits.map((digit) => {
        if (digit === '=') {
          return <Button symbol={digit} isWhite key={digit} onClick={handleResultButton} />;
        } else if (digit === 'C') {
          return <Button symbol={digit} key={digit} onClick={handleResetButton} />;
        } else {
          return <Button symbol={digit} key={digit} onClick={() => handleButton(digit)} />;
        }
      })}
    </div>
  );
};
