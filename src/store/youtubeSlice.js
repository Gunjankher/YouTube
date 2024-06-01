import { createSlice } from "@reduxjs/toolkit";
import { getHomepageVideos } from "./reducers/getHomepageVideos";

const initialState = {
videos : [],
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

},
extraReducers:(builder) =>{
    builder.addCase(getHomepageVideos.fulfilled,(state,action)=>{
        
    })
}



})


export default youtubeSlice.reducer