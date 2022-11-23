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
      <div className={styles.progress}>
        <p className={styles.trackName}>{state.meta?.name}</p>
        <ProgressBar />
        <p className={styles.trackArtist}>{state.meta?.artists}</p>
      </div>
    </div>
  );
};

export default Player;