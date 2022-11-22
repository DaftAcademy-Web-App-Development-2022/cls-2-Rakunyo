import { useContext } from "react";
import { PlayerContext } from "~/contexts/player.context";

const usePlayer = () => {
  const context = useContext(PlayerContext);

  if(!context) {
    throw Error("usePlayer must be placed inside PlayerProvider");
  }

  return context;
}

export default usePlayer;