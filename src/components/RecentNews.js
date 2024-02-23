import React, { useState } from "react";
import { FaSearch, FaArrowUp } from "react-icons/fa";
import styles from "../css/RecentNews.module.css";

function RecentNews() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
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

      <div className={styles["body"]}>
        <h2>최근 뉴스</h2>
        <div className={styles["bodyline"]}>
          <hr />
        </div>

        <div className={styles["newsContainer"]}>
          {Array(10)
            .fill()
            .map((_, index) => {
              if (index % 2 === 0) {
                // 2개씩 배치된 후에
                return (
                  <div className={styles["news"]} key={index}>
                    <svg width="300" height="180" className={styles["photo"]}>
                      <rect width="300" height="180" fill="lightgrey" />
                    </svg>
                    <div className={styles["titlegroup"]}>
                      <p>
                        안녕하세요. 현재 만들고 있는 프로젝트는 API를 활용하여
                        리액트로 뉴스 뷰어를 보여주는 프로젝트입니다.
                      </p>
                      <h3>? 시간 전</h3>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className={styles["news"]} key={index}>
                    <svg width="300" height="180" className={styles["photo"]}>
                      <rect width="300" height="180" fill="lightgrey" />
                    </svg>
                    <div className={styles["titlegroup"]}>
                      <p>
                        안녕하세요. 현재 만들고 있는 프로젝트는 API를 활용하여
                        리액트로 뉴스 뷰어를 보여주는 프로젝트입니다.
                      </p>
                      <h3>? 시간 전</h3>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        {showButton && (
          <button className={styles["scrollButton"]} onClick={scrollToTop}>
            <FaArrowUp className={styles["scrollButtonIcon"]} />
          </button>
        )}
      </div>
    </>
  );
}

export default RecentNews;
