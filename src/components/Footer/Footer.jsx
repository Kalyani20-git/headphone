import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FaMapLocation} from 'react-icons/fa6';

function Footer() {
  return (
    <>
      <footer className='bg-amber-700 pt-12 pb-8 text-white'>
        <div className='cont'>
        <div className='grid grid-cols-1
        sm:grid-cols-2 md:grid-cols-3 gap-8'>

      {/*company Details*/}
      <div>
        <h1 className='text-3xl font-bold uppercase'>Playing</h1>
       <p className='text-sm max-w-[300px]' >
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       </p>
        <div>
            <p className='flex items-center gap-2'>
                <FaPhone />
                +91(123)98-746
            </p>
            <p className='flex items-center gap-2 mt-2'>
                {" "}
                <FaMapLocation />Pune, Maharshtra
            </p>
        </div>

      </div>
       {/*footer link*/}
       </div>
        </div>


      </footer>
    </>
  )
}

export default Footer
