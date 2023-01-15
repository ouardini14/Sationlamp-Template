import React from 'react'
import Title from '../Title'
import Image from 'next/image'
const { motion } = require("framer-motion");


export default function ThirdSection() {
  return (
    <div className=' py-12 px-5 md:px-16'>
      <Title title="Chi Siamo?" line={false} style="text-7xl  " />

      <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 gap-10	items-center justify-center'>

        <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1,
                        transition: {
                         ease: "easeInOut",
                          duration: 1.95
         }}}
         viewport={{ once: true }} 
        className='text-[#01133F]  text-2xl pt-10'>
            <p>
            <b>Soluzione Amazon è un progetto innovativo</b>, nato dalla collaborazione di due imprenditori italiani desiderosi di portare un servizio alle imprese diverso e più efficace .
            </p> <br/>
            <p>
            Dopo anni maturati in contesti importanti di consulenza in vari settori, ci siamo resi conto di come tante aziende italiane fatichino a trovare risorse e tempo per essere presenti in maniera consistente nel mondo dell’e-commerce. Questa è una grande opportunità per il MADE IN ITALY, che rischia di soccombere ad una competizione qualitativamente scadente ma più aggressiva.          
              </p>
              <br/>
            <p>
              <b>Noi accettiamo questa sfida e siamo impazienti di metterci al tuo servizio.</b>
            </p>

        </motion.div>

        <motion.div 
         initial={{ opacity: 0,y:-100 }}
         whileInView={{ opacity: 1,
                        y:0,
                        transition: {
                         ease: "easeInOut",
                          duration:0.8
         }}}
         viewport={{ once: true }} 
        className='flex items-center justify-center'>
         <div className='relative w-[280px] h-[187px] md:w-[600px] md:h-[400px]  '>
          <Image 
            src={"/img/ThirdSection/1.png"}
            fill
            alt='First'
          />
        </div> 
       
      </motion.div>
      </div>
    </div>
  )
}
