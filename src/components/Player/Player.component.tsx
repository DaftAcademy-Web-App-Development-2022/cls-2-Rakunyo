import React from 'react';
import {
  StateButton, 
  ProgressBar,
  Time
} from './index'
import usePlayer from "~/hooks/usePlayer.hook";

import styles from "./Player.module.css";

const Player = () => {
  const { state } = usePlayer()
  
  return (
    <div className={styles.root}>
      <StateButton />
      <div className={styles.progress}>
        {state.meta?.name}
        <ProgressBar />
        {state.meta?.artists}
      </div>
      <Time />
    </div>
  );
};

export default Player;