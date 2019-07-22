import React from "react";
import { connect } from "react-redux";

import { setDishonors } from "../../modules/players/actions";

import Player from "../../components/Player";
import { Player as PlayerSchema } from "../../modules/players/types";

import styles from "./PlayerDishonorable.module.scss";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setDishonors
};

type IProps = {
  player: PlayerSchema;
  setDishonors: typeof setDishonors;
};

const PlayerDishonorable: React.FC<IProps> = ({ player, setDishonors }) => (
  <div className={styles.PlayerDishonorableContainer}>
    <button
      className={styles.plus}
      onClick={() => setDishonors(player.slack_id, player.dishonors + 1)}
    >
      +
    </button>
    <Player {...player} url={process.env.REACT_APP_SLACK_CHAT_URL} />
    <button
      className={styles.minus}
      onClick={() => setDishonors(player.slack_id, player.dishonors - 1)}
    >
      -
    </button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerDishonorable);
