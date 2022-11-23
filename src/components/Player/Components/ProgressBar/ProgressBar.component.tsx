import React, { useEffect, useState } from "react";
import usePlayer from "~/hooks/usePlayer.hook";
import Time from "./Time/Time.component";

import styles from "./ProgressBar.module.css"

const ProgressBar = () => {
    const { state, actions } = usePlayer()
    const [progress, setProgress] = useState(state.progress);

    useEffect(() => {
        setProgress(state.progress);
    }, [state.progress]);

    return (
        <div className={styles.root}>
            <div className={styles.progressFull}>
                <div
                    className={styles.progress}
                    style={{ width: `${progress * 100}%` }}
                >
                </div>
            </div>
            <Time />
        </div>

    )
}

export default ProgressBar;