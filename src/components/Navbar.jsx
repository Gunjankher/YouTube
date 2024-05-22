import React from 'react'
import Input from './Input';
import Button from './Button'


import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className='max-w-[1600px] min-w-[1200px]' >

        <div className='bg-[#0e0d0d] h-[60px] text-white flex'>



{/* left */}
<div className='flex items-center gap-x-4'>

<div className='m-3 ml-7' >
    <RxHamburgerMenu className='text-[30px] '/>
</div>
<div className=''>
    <img src="src/images/yt-logo.png" alt="" className='w-[100px]' />
</div>

</div>



{/*middle */}
<div className='mx-40 items-center flex '>


<div className='flex  rounded-3xl w-[600px] bg-black'>

    <Input
placeholder = "search"
className = "rounded-r-none rounded-l-3xl  border-gray-600 bg-black "

/>
<Button
className='bg-[#222222] rounded-l-none rounded-r-3xl  border-gray-600'
type = "submit"

>
<CiSearch  className='text-[25px]'/>
</Button>

     </div>


     <div className='flex items-center m-3 bg-[#222222] p-2 rounded-full ' >
<FaMicrophone className='text-[20px]' />
     </div>

</div>




{/* left */}
<div className='flex items-center gap-x-8 ml-40'>

<div>
    <FaVideo className='text-[20px]' />
</div>
<div> <FaBell className='text-[20px]' /></div>
<div className='bg-[#222222] p-2 rounded-full ml-6'> 

<FaUser className='text-[20px] ' />

</div>

</div>





        </div>

    </div>
  )
}

export default Navbar