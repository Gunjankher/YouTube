 import React from 'react'
 import axios from 'axios'

 const API_KEY = import.meta.env.VITE_APP_YOUTUBE_DATA_API_KEY


 export const parseData = async(item) => {

try {

const videoIds = []
const channelIds = []

item.map((item)=>{
  channelIds.push(item.snippet.channelId)
  videoIds.push(item.id.videoId)
})


const {
  data:{items:channelsData},
} = axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(
  ","
)}&key=${API_KEY}`); 


const parseChannelData = []
channelsData.map((channel)=>parseChannelData.push({
  id:channel.id,
  image:channel.snippet.thumbnails.default.url
}))


const {
  data:{items:videoData},
} = axios.get(
  `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(
    ","
  )}&key=${API_KEY}`
);


const parseData = []
item.map((item,index)=>{
 const{image:channelData} = parseChannelData.find((data)=>data.id === item.snippet.channelId)
 if(channelData&&videoData){
 parseData.push({
  videoId : item.id.videoId,
  videoTitle: item.snippet.title,
  videoDescription:item.snippet.description,
  videoThumbnail:item.snippet.thumbnails.medium.url,
  videoLink:`https://www.youtube.com/watch?v=${item.id.videoId}`,
  channelInfo:{
    id:item.snippet.channelId,
    image:channelImage,
    name:item.snippet.channelTitle
  },


 })
 }


})




  
} catch (error) {
  
}


   return (
     <div>parseData</div>
   )
 }
 
 