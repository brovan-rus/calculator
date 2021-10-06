import React, { FC } from 'react';

import styles from './CalculatorDigits.module.css';

import { Button } from '../Button';
import { digits } from '../utils/constants';

interface ICalculatorDigitsProps {
  onEnter: (digit: string) => void,
  onReset: () => void,
  onResult: () => void,
}

export const CalculatorDigits: FC<ICalculatorDigitsProps> = ({onEnter, onReset, onResult}) => {

  const handleButtonClick = (digit: string) => {
    onEnter(digit);
  };

  return (
    <div className={styles.container}>
      {digits.map((digit) => {
        if (digit === '=') {
          return <Button symbol={digit} isWhite key={digit} onClick={onResult} />;
        } else if (digit === 'C') {
          return <Button symbol={digit} key={digit} onClick={onReset} />;
        }
        else if (digit === ' ') {
          return <Button symbol={digit} key={digit} onClick={onReset} disabled={true}/>;
        }
        else {
          return <Button symbol={digit} key={digit} onClick={() => handleButtonClick(digit)} />;
        }
      })}
    </div>
  );
};
