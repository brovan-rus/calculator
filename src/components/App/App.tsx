import { FC } from 'react';
import cn from 'classnames/bind';

import styles from './App.module.css';

const cx = cn.bind(styles);

export const App: FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container} />
    </div>
  )
}
