import React from "react";

import styles from "./Home.module.scss";

import PlayerList from "../../containers/PlayerList";
import SearchBox from "../../containers/SearchBox";

const Home: React.FC = () => {
  return (
    <div className={styles.Home}>
      <SearchBox placeholder="Search player..." debounceTime={750} />
      <PlayerList />
    </div>
  );
};

export default Home;
