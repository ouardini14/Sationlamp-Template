import React from 'react'
import Title from '../Title'
import Image from 'next/image'
import Link from 'next/link'
import Form from './Form'
export default function FourthSection() {
  return (
    <div className=' py-12  md:px-10 lg:px-0'>
    <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 gap-10 items-center justify-center	'>

    <div className=' px-5 flex flex-col gap-10  items-center justify-center text-center lg:pl-36 xl:pl-52 md:items-start md:text-start md:justify-start'>
      <Title title="CONTATTACI SUBITO" line={true} style="text-3xl md:text-5xl  " />
      <p className='text-[#01133F] font-medium  text-2xl'>
      Prenota una chiamata con noi, assolutamente senza impegno, e scopri tutti i vantaggi che una <b>consulenza esperta</b> e dedicata ti può offrire
         </p>
      <Link href={"/"} legacyBehavior>
        <a className='md:self-start rounded-3xl px-20 py-2 font-bold text-center text-white text-lg  bg-[#01133F] hover:bg-[#2B8580] transition-all duration-300 ease-in-out '>Prenota qui</a>
      </Link>
      </div>

    <Form />

    </div>
  </div>
  )
}
