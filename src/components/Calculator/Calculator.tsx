import { FC } from 'react';

import styles from './Calculator.module.css';
import {CalculatorDigits} from "../Calculator-digits";

export const Calculator: FC = () => {
  return (
    <div className={styles.container}>
      <div />
      <CalculatorDigits />
    </div>
  )
}
