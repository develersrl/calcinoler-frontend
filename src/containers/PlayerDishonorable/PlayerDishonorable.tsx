import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { setDishonors } from "../../modules/players/actions";

import Player from "../../components/Player";
import { Player as PlayerSchema } from "../../modules/players/types";

import styles from "./PlayerDishonorable.module.scss";
import { useDebouncedCallback } from "use-debounce";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setDishonors
};

type IProps = {
  player: PlayerSchema;
  setDishonors: typeof setDishonors;
};

const PlayerDishonorable: React.FC<IProps> = ({ player, setDishonors }) => {
  const [localDishonors, setLocalDishonors] = useState(player.dishonors);

  const [
    debouncedSetDishonors,
    cancelDebouncedSetDishonors
  ] = useDebouncedCallback((dishonors: number) => {
    setDishonors(player.slack_id, dishonors);
  }, 2000);

  useEffect(() => {
    debouncedSetDishonors(localDishonors);
    if (localDishonors === player.dishonors) {
      cancelDebouncedSetDishonors();
    }
  }, [
    localDishonors,
    player.dishonors,
    debouncedSetDishonors,
    cancelDebouncedSetDishonors
  ]);

  return (
    <div className={styles.PlayerDishonorableContainer}>
      <button
        className={styles.plus}
        onClick={() => setLocalDishonors(localDishonors + 1)}
      />
      <Player
        {...player}
        dishonors={localDishonors}
        url={process.env.REACT_APP_SLACK_CHAT_URL}
      />
      <button
        disabled={localDishonors <= 0}
        className={styles.minus}
        onClick={() => setLocalDishonors(localDishonors - 1)}
      />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerDishonorable);
