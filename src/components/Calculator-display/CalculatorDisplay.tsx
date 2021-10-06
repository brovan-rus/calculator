import { FC } from 'react';
import cn from 'classnames/bind';

import styles from './CalculatorDisplay.module.css';

const cx = cn.bind(styles);

interface ICalculatorDisplayProps {
  primaryLine?: string,
  secondaryLine?: string
  isError?: boolean
}

export const CalculatorDisplay: FC<ICalculatorDisplayProps> = ({primaryLine, isError= false, secondaryLine}) => {
  return (
    <div className={cx('container', 'font', {isError})}>
      <p className={cx('secondaryLine')}>{secondaryLine}</p>
      <p className={cx('primaryLine', {isError})}>{primaryLine}</p>
    </div>
  )
}
