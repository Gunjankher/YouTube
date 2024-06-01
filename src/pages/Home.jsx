import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import SlideBar from '../components/SlideBar'
import {useAppDispatch,useAppSelector} from '../hooks/useApp'
import { getHomepageVideos } from '../store/reducers/getHomepageVideos'


function Home() {

const dispatch = useAppDispatch()
const vidoes = useAppSelector((state)=>state.youtube.vidoes)


useEffect(()=>{
  dispatch(getHomepageVideos(false))
})



  return (
    <div className=''>
        <Navbar />
        <SlideBar/>


    </div>
  )
}

export default Home
