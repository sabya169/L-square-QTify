import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import Container from "./components/Container/Container";
// import axios from "axios";
import Section from "./components/Section/Section";
import { fetchTopSongs , fetchNewSongs , fetchAllSongs } from "./api/api";
import AccordionElement from "./components/Accordion/AccordionElement";
import FilterSection from "./components/FilterSection/FilterSection";

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      {/* <Container songData={songData}/> */}
      <Section title={"Top Albums"} dataSource={fetchTopSongs} />
      <Section title={"New Albums"} dataSource={fetchNewSongs} />
      <FilterSection title={"All song"} dataSource={fetchAllSongs}/>
      <AccordionElement />
      
    </>
  );
}

export default App;
