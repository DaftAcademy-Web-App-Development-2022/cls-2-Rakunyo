import React from 'react';
import {
  StateButton, 
  ProgressBar
} from './index'
import usePlayer from "~/hooks/usePlayer.hook";

import styles from "./Player.module.css";

const Player = () => {
  const { state } = usePlayer()
  
  return (
    <div className={styles.root}>
      <StateButton />
      <div>
        {state.meta?.name}
        <ProgressBar />
        {state.meta?.artists}
      </div>
    </div>
  );
};

export default Player;