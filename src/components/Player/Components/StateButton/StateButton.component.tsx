import React from 'react';
import usePlayer from "~/hooks/usePlayer.hook";
import trackData from "~/data/trackData.json"

import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/20/solid"

import styles from "./StateButton.module.css";

const StateButton = () => {
  const { state, actions } = usePlayer()
  return (
    <div className={styles.root}>

      {state.playing ? (
        <button onClick={() => actions.pause()}>
          <PauseCircleIcon className={styles.icon} />
        </button>
      ) : (
        <button onClick={() => actions.play({
          id: trackData.id,
          name: trackData.name,
          src: trackData.preview_url,
          artists: trackData.artists.map(artist => artist.name)
        })}>
          <PlayCircleIcon className={styles.icon} />
        </button>
      )}
    </div>
  );
};

export default StateButton;