import { createSlice } from "@reduxjs/toolkit";

const initialState = {
video : [],
currentPlaying : null,
SearchTerm : "",
SearchResults : [],
nextPageToken : null,
recommendedVideo : []



}

const youtubeSlice = createSlice({
name : "youtube",
initialState , 

reducers :{

}



})


export default youtubeSlice.reducer