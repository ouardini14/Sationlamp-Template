import Image from 'next/image'
import React from 'react'
import Title from '../Title'
const { motion } = require("framer-motion");

export default function Studio() {
  return (
    <div className='flex flex-col items-center justify-center gap-9 py-12 px-5 md:px-10'>
    <Title title="I nostri casi studio"  line={false} style="text-5xl text-center md:text-6xl " />
    <div className='grid grid-cols-2  gap-10  md:flex md:flex-row md:gap-5 lg:gap-7 xl:gap-14  items-center justify-center 	'>
       {
        [...Array(4)].map((src,idx) => 
       ( <motion.div 
        initial={{ opacity: 0,y:idx%2==0? -100:100 }}
        whileInView={{ opacity: 1, 
                       y:0,
                       transition: {
                        ease: "easeInOut",
                        duration: 0.3
        }}}
        viewport={{ once: true }} 
       className='flex items-center justify-center ' key={idx}>
         <div className='relative  w-[250px] h-[300px]  md:w-[170px] md:h-[320px] lg:w-[250px] lg:h-[500px] xl:w-[290px] xl:h-[600px]  '>
          <Image 
            src={"/img/studio/"+(idx+1)+".jpg"}
            fill
            alt={'Image'+(idx+1)}
          />
        </div> 
       
      </motion.div>)
        )
       }
    </div>

      </div>
  )
}
