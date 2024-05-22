import React from 'react'
import Input from './Input';
import Button from './Button'

import { RxHamburgerMenu } from "react-icons/rx";

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
<div className='mx-60 items-center flex'>


<div>
    <Input
placeholder = "search"
/>
</div>



</div>


{/* left */}
<div></div>





        </div>

    </div>
  )
}

export default Navbar