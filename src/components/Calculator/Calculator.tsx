import React, { FC } from 'react';

import styles from './Calculator.module.css';
import {digits} from "../utils/constants";
import {CalculatorDigits} from "../Calculator-digits";
export const Calculator: FC = () => {
  const [expression, setExpression] = React.useState('');
  const handleEnter = (digit: string) => setExpression(expression+digit);
  React.useEffect(() => {
    const handleKeyDown =  (e: KeyboardEvent) => {
      const key = e.key;
      if (digits.includes(key) && !((key === '=') || (key === 'C'))) {handleEnter(key)}
      if (key === 'Escape') {handleReset()}
      if (key === 'Enter') {handleResult()}
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {document.removeEventListener('keydown', handleKeyDown)}
  }, [handleEnter]);

  const handleReset = () => setExpression('');
  const handleResult = () => console.log('result');
  return (
    <div className={styles.container}>
      <div><h2>{expression}</h2></div>
      <CalculatorDigits onEnter={handleEnter} onReset={handleReset} onResult={handleResult}/>
    </div>
  )
}
