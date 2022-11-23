import React from "react";
import usePlayer from "~/hooks/usePlayer.hook";

const Time = () => {
  const { state } = usePlayer()

  var currentTime = new Date(state.currentTime * 1000).toISOString().substring(14, 19)
  var duration = new Date(state.duration * 1000).toISOString().substring(14, 19)

  return (
    <div>
      {currentTime}/{duration}
    </div>
  )
}

export default Time;