import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, dataSource }) {
  const [cards, setCards] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    dataSource().then((data) => {
      // console.log("data from section",data)
      setCards(data);
    });
  }, []);

  // console.log("cards",cards)

  const handleToggle = (prevState) => {
    // setIsCollapsed(true)
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.wrapper}>
        <h3>{title}</h3>
        <h3 className={styles.showAll} onClick={handleToggle}>
          {isCollapsed ? <div>Collapsed</div> : <div>Show All</div>}
        </h3>
      </div>
      {isCollapsed ? (
        <div className={styles.cardContainer}>
          {cards.map((data) => {
            return <Card data={data} type="Album" />;
          })}
        </div>
      ) : (
        <div className={styles.carousel}>
          <Carousel
            cards={cards}
            renderComponent={(data) => <Card data={data} type="Album" />}
          />
        </div>
      )}
    </div>
  );
}

export default Section;
