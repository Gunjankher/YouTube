import React from 'react';
import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater,
} from 'react-icons/md';

import { LuThumbsUp } from 'react-icons/lu';

export default function SideBar({isCollapsed}) {
    const mainLinks = [
        {
            icon: <MdHomeFilled className='text-xl' />,
            name: 'Home'
        },
        {
            icon: <MdOutlineSlowMotionVideo className='text-xl' />,
            name: 'Shorts'
        },
        {
            icon: <MdSubscriptions className='text-xl' />,
            name: 'Subscriptions'
        }
    ];

    const otherLinks = [
        {
            icon: <MdOutlineVideoLibrary className='text-xl' />,
            name: 'Library'
        },
        {
            icon: <MdHistory className='text-xl' />,
            name: 'History'
        },
        {
            icon: <MdOutlineWatchLater className='text-xl' />,
            name: 'Watch Later'
        },
        {
            icon: <LuThumbsUp className='text-xl' />,
            name: 'Liked Video'
        }
    ];

    return (
  <div className='w-2/12 bg-[#0F0F0F] h-screen text-white'>

<ul className='border-b-2 border-gray-700'>
{mainLinks.map(({icon,name})=>{
return (
    <li key={name} className='flex gap-x-3 text-[20px] {`pl-6 py-3 hover:bg-zinc-700 px-3 ${name === "Home" ?"bg-zinc-600" : " "} rounded-xl  `}'>
 <a href='#' className='flex items-center gap-5'> 
                    {icon}
                  {!isCollapsed &&<span className='text-sm tracking-wider'>{name}</span>}
                    </a>

</li>
)
})}

</ul>

<ul className='border-b-2 border-gray-700'>
{otherLinks.map(({icon,name})=>{
return (
    <li key={name} className='flex gap-x-3 text-[20px] {`pl-6 py-3 hover:bg-zinc-700 px-3 ${name === "Home" ?"bg-zinc-600" : " "} rounded-xl  `}'>
 <a href='#' className='flex items-center gap-5'> 
                    {icon}
                    {<span className='text-sm tracking-wider'>{name}</span>}
                    </a>

</li>
)
})}

</ul>


  </div>
    )
}
