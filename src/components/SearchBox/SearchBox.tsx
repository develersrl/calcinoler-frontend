import React from "react";
import { useDebouncedCallback } from "use-debounce";

import styles from "./SearchBox.module.scss";

export type IProps = {
  placeholder: string;
  fetchItems: (searchTerm: string) => void;
  debounceTime: number;
};

const SearchBox: React.FC<IProps> = ({
  placeholder,
  fetchItems,
  debounceTime
}) => {
  const [debouncedFetch] = useDebouncedCallback(
    (searchTerm: string) => fetchItems(searchTerm),
    debounceTime
  );

  return (
    <div className={styles.SearchBoxContainer}>
      <div className={styles.SearchBox}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={e => debouncedFetch(e.target.value)}
        />
        <i className={styles.SearchIcon} />
      </div>
    </div>
  );
};

export default SearchBox;
