import React, { useState, useEffect } from "react";
import styles from "./FilterSection.module.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

function FilterSection({ title, dataSource }) {
  const [allSongs, setAllSongs] = useState([]);
  const [copiedAllSongs, setCopiedAllSongs] = useState([])

  const [value, setValue] = React.useState("All");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);

    console.log(newValue)

    if(newValue !== "All"){
        let newList = copiedAllSongs.filter((song)=>{
            return song.genre.key === newValue
        })
        setAllSongs(newList)
    }else{
        setAllSongs(copiedAllSongs)
    }
    
  };

  useEffect(() => {
    dataSource().then((data) => {
    //   console.log("all songs in filte", data);
      setAllSongs(data);
      setCopiedAllSongs(data);
    });
  }, []);



  

  return (
    <div className={styles.container}>
      <h3>Songs</h3>
      <Box sx={{ width: "100%", marginBottom: "10px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          wrapped
        >
          <Tab value="All" label="All" wrapped />
          <Tab value="rock" label="Rock" />
          <Tab value="pop" label="Pop" />
          <Tab value="jazz" label="Jazz" />
          <Tab value="blues" label="Blues" />
        </Tabs>
      </Box>
      <Carousel
        cards={allSongs}
        renderComponent={(data) => <Card data={data} />}
      />
    </div>
  );
}

export default FilterSection;
