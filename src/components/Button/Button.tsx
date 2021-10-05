import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames/bind';

import styles from './Button.module.css';

const cx = cn.bind(styles);

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  symbol: string;
  isWhite?: boolean;
}

export const Button: FC<IButtonProps> = ({ symbol, isWhite = false, ...restButtonProps }) => {
  return (
    <button className={cx('container', 'font', isWhite && 'white')} {...restButtonProps}>
      {symbol}
    </button>
  );
};
