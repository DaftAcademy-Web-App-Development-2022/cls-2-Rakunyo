import React from 'react';
import StateButton from './Components/StateButton/StateButton.component';

import styles from "./Player.module.css";

const Player = () => {
  return (
    <div className={styles.root}>
      <StateButton />
    </div>
  );
};

export default Player;