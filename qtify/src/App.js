import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import Container from "./components/Container/Container";
// import axios from "axios";
import Section from "./components/Section_Top_Song/Section";
import { fetchTopSongs , fetchNewSongs } from "./api/api";
import AccordionElement from "./components/Accordion/AccordionElement";

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      {/* <Container songData={songData}/> */}
      <Section title={"Top Albums"} dataSource={fetchTopSongs} />
      <Section title={"New Albums"} dataSource={fetchNewSongs} />
      <AccordionElement />
      
    </>
  );
}

export default App;
