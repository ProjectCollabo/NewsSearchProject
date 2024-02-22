import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../css/RecentNews.module.css";

function RecentNews() {
  return (
    <div className={styles["header"]}>
      <input
        type="text"
        className={styles["NewsSearch"]}
        placeholder="뉴스 제목을 입력해주세요"
      />
      <button type="submit" className={styles["search"]}>
        <FaSearch className={styles["searchIcon"]} />
      </button>
    </div>
  );
}

export default RecentNews;
