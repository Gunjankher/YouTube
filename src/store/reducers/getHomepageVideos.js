import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseData from "../../utilis/parseData.jsx";

const API_KEY = import.meta.env.VITE_APP_YOUTUBE_DATA_API_KEY


 export const getHomepageVideos = createAsyncThunk(

"youtube/home/searchPageVideos",
async(isNext,{getState})=>{
const {
    youtube : {nextPageToken :nextPageTokenFromState ,videos}} = getState()
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=videos&${isNext ? `pageToken=${nextPageTokenFromState}` : ""}`)
    const items = response.data.items
    console.log(response);
    const parseData = await parseData(items)
}

)