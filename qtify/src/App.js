import React, {useState , useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Container from "./components/Container/Container";
import axios from 'axios';

function App() {

  const [songData, setSongData] = useState([]) ;

  const URL = "https://qtify-backend-gye4ebhsbpfea8g9.z01.azurefd.net/albums/top"

  const performAPIcall = async ()=>{
    let response = await axios.get(URL);
    // console.log("response",response.data[0].songs)
    setSongData(response.data[0].songs)
  }

  useEffect(()=>{
    performAPIcall();
  },[])
  

  return (
    <>
    <Navbar/>
    <Hero />
    <Container songData={songData}/>
    </>
  )
}

export default App
