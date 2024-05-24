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

export default function SideBar() {
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
      <></>
    )
}
