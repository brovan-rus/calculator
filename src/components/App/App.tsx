import { FC } from 'react';

import {Calculator} from "../Calculator";
import styles from './App.module.css';

export const App: FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Calculator />
      </div>
    </div>
  )
}
