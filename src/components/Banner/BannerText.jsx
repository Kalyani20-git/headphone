import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'

const BannerText = () => {
  return (
    <section className='py-8 text-center font-varela'>

      <div className='cont'>
        <div className='bg-gradient-to-t bg-amber-700 to-bg-amber/60
        text-white rounded-4xl p-7 hover:scale-105 duration-500 hover:shadow-2xl'>
          
          <UpdateFollower
            mouseOptions={{
              backgroundColor:'black',
              zIndex: 9999,
              followSpeed: 0.5,
              mixBlendMode:'screen',
              scale:10,
            }}
          >
          <p className='font-bold text-4xl max-w-[700px] mx-auto leading-normal'
          >Headphones With Good Quality And Affordable Price </p>
          </UpdateFollower>
        </div>

      </div>
      
    </section>
  )
}

export default BannerText
