import axios from "axios";

// https://qtify-backend-labs.crio.do/albums/top

// https://qtify-backend-labs.crio.do/albums/new

// https://qtify-backend-labs.crio.do/songs

const BCAKEND_URL = "https://qtify-backend-labs.crio.do";

export const fetchTopSongs = async () => {
  try {
    const response = await axios.get(`${BCAKEND_URL}/albums/top`);
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewSongs = async ()=>{
  try{
    const response = await axios.get(`${BCAKEND_URL}/albums/new`) ;
    // console.log("new song response",response)
    return response.data ;
  }catch(error){
    console.log(error)
  }
}

export const fetchAllSongs = async ()=>{
  try{
    const response = await axios.get(`${BCAKEND_URL}/songs`)
    // console.log(response.data)
    return response.data ;
  }catch(error){
    console.log(error)
  }
}

