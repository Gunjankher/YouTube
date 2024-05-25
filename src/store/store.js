import { configureStore } from "@reduxjs/toolkit";
import youtubeRedcuer from './youtubeSlice'

const store = configureStore({
reducer:{
    youtube : youtubeRedcuer
}

})

export default store