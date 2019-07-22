import React, { useEffect } from "react";

import styles from "./PlayerList.module.scss";

import { fetchPlayers } from "../../modules/players/actions";

import PlayerDishonorable from "../../containers/PlayerDishonorable";
import { Player, PlayerErrors } from "../../modules/players/types";

import Loader from "../Loader";

export type IProps = {
  players: Player[];
  errors: PlayerErrors;
  loading: boolean;
  fetchPlayers: typeof fetchPlayers;
};

const PlayerList: React.FC<IProps> = ({
  players,
  errors,
  loading,
  fetchPlayers
}) => {
  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  if (loading) {
    return (
      <div className={styles.PlayerListError}>
        <Loader />
      </div>
    );
  }
  if (Object.entries(errors).length > 0) {
    return (
      <ul className={styles.PlayerListError}>
        {Object.keys(errors).map((key: string) => {
          return `${key}: ${errors[key].join(", ")}`;
        })}
      </ul>
    );
  }

  return (
    <div className={styles.PlayerList}>
      {players.map((p: Player) => (
        <PlayerDishonorable player={p} key={p.slack_id} />
      ))}
    </div>
  );
};

export default PlayerList;
