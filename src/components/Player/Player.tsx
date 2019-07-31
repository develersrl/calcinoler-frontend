import React from "react";

import styles from "./Player.module.scss";

import { Player as PlayerSchema } from "../../modules/players/types";

interface IProps {
  url?: string;
}

const Player: React.FC<PlayerSchema & IProps> = ({
  slack_id,
  name,
  nickname,
  dishonors,
  url
}) => {
  return (
    <div id={slack_id} className={styles.Player}>
      <div className={styles.PlayerBody}>
        <div className={styles.PlayerBodyInfos}>
          <span className={styles.PlayerBodyInfosName}>{name}</span>
          <span className={styles.PlayerBodyInfosNick}>
            {url ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${url}/${slack_id}`}
              >
                @{nickname}
              </a>
            ) : (
              nickname
            )}
          </span>
        </div>
        <div className={styles.PlayerBodyStatsHolder}>
          <div className={styles.PlayerBodyStatsHolderStats}>
            <strong>Disonori</strong>
            <span>{dishonors}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
