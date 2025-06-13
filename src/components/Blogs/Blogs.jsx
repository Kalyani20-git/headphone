import React from 'react';
import Blogs1 from "../../assets/Blogs/blog1.jpg";
import Blogs2 from "../../assets/Blogs/blog2.jpg";
import Blogs3 from "../../assets/Blogs/blog3.jpg";
import Blogs4 from "../../assets/Blogs/blog4.jpg";
import { UpdateFollower } from 'react-mouse-follower';
import {motion} from 'framer-motion'
import { desc, title } from 'motion/react-client';



const BlogsData =[
    {
        id: 1,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: "#",
        img: Blogs1,
    },

    {
        id:2 ,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        desc: "Lorem Ipsum is 2simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: "#",
        img: Blogs2,
    },

    {
        id: 3,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: "#",
        img: Blogs3,
    },


    {
        id: 4,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: "#",
        img: Blogs4,
    },

]




const Blogs = () => {
  return (
    <>
     <section className='bg-gray-50'>
        <div className='cont py-14'>
            <h1 className='text-3xl font-bold text-center font-poppins pb-8'
            >Blogs</h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-4 gap-6'>
                {BlogsData.map((data)=>{
                  return(
                    <UpdateFollower
                    mouseOptions={{
                       backgroundColor:"black",
                       zIndex:9999,
                       followSpeed: 1.5,
                       text: "Read",
                       textFontSize: "3px",
                       scale: 5,


                    }}
                    >
                  <div className='flex flex-col items-center justify-center gap-6 p-5 max-w-[300px]
                  mx-auto shadow-lg rounded-b-md bg-white hover:translate-y-2 duration-300'>
                    <img src ={data.img} alt='' />
                    <div className='space-y-2 '>
                        <h1 className='text-xl font-bold line-clamp-2'>
                            {data.title}
                        </h1>
                        <p className='line-clamp-2' >
                            {data.desc}
                        </p>
                    </div>
                  </div>

                  </UpdateFollower>
                  );

                })}


            </div>
        </div>
     </section>
    </>
  )
}

export default Blogs
