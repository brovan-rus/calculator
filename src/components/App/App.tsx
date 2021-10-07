import { FC } from 'react';
import {BrowserRouter} from "react-router-dom";

import {Calculator} from "../Calculator";
import styles from './App.module.css';

export const App: FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className={styles.page}>
      <div className={styles.container}>
        <Calculator />
      </div>
    </div>
    </BrowserRouter>
  )
}
