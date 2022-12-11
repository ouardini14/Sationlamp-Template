import React from 'react'
import Title from '../Title'
import Image from 'next/image'


export default function ThirdSection() {
  return (
    <div className=' py-12 px-5 md:px-16'>
      <Title title="Chi Siamo?" line={false} style="text-7xl  " />
      <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 gap-10	items-center justify-center'>
        <div className='text-[#01133F]  text-2xl '>
            <p>
            La nostra storia inizia con un&apos;idea, un&apos;idea di due imprenditori che hanno voluto portare sul mercato un servizio che includeva <b>innovazione</b> e <b>scalabilità</b>.
            </p> <br/>
            <p>
            Il tutto nasce da una grandissima <b>passione</b> e una grande esperienza di due imprenditori che dopo che hanno portato le loro aziende al successo, hanno voluto  mettere a disposizione le loro competenze anche ad altre aziende con l&apos;obiettivo di rafforzare il <b>MADE IN ITALY</b>.
            </p>

        </div>
        <div className='flex items-center justify-center'>
         <div className='relative w-[280px] h-[187px] md:w-[600px] md:h-[400px]  '>
          <Image 
            src={"/img/ThirdSection/1.png"}
            fill
            alt='First'
          />
        </div> 
       
      </div>
      </div>
    </div>
  )
}
