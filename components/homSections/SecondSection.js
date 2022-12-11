import React from 'react'
import Title from '../Title'
import Image from 'next/image'
import Link from 'next/link'
export default function SecondSection() {
  return (
    <div className='flex flex-col items-center justify-center gap-9 py-12 px-5 md:px-14'>
    <Title title="Quali sono gli step per lavorare insieme a noi?" line={false} style="text-4xl max-w-[850px] text-center md:text-5xl " />
    
    <div className=' flex flex-col  md:grid md:grid-cols-2 md:gap-20 gap-10	items-center justify-center  max-w-[990px]'>
      <div className='flex flex-col gap-8  items-center justify-center text-center md:items-start md:text-start md:justify-start'>
      <Title title="Prenota una prima consulenza" line={true} style="text-3xl  " />
      <p className='text-[#01133F] font-medium md:pr-28 leading-6'>Prenota una prima chiamata di 45 minuti con il nostro team, cosi da mostrarci quali sono le tue esigenze e per capire al meglio come possiamo aiutarti.</p>
      <Link href={"/"} legacyBehavior>
        <a className='md:self-start rounded-3xl px-5 py-2 font-bold text-center text-white text-lg  bg-[#FF9A18] hover:bg-[#1d67cd] transition-all duration-300 ease-in-out '>Prenota una chiamata</a>
      </Link>
      </div>
      <div className='flex items-center justify-center'>
         <div className='relative w-[310px] h-[388px]  '>
          <Image 
            src={"/img/SecondSection/1.png"}
            fill
            alt='First'
          />
        </div> 
       
      </div>
    </div>
    
    <div className='flex flex-col md:grid md:grid-cols-2 md:gap-20 gap-10 	items-center justify-center max-w-[990px] '>
      <div className='flex flex-col gap-8  items-center justify-center text-center md:items-start md:text-start md:justify-start'>
      <Title title="Analizziamo i dati ricevuti" line={true} style="text-3xl  " />
      <p className='text-[#01133F] font-medium md:pr-28 leading-6'>Dopo la prima call il nostro team valuta le informazioni raccolte per capire che possono aiutarti a raggiungere i tuoi obbiettivi</p>
      <Link href={"/"} legacyBehavior>
        <a className='md:self-start rounded-3xl px-5 py-2 font-bold text-center text-white text-lg  bg-[#FF9A18] hover:bg-[#1d67cd] transition-all duration-300 ease-in-out '>Prenota una chiamata</a>
      </Link>
      </div>
      <div className='flex items-center justify-center md:order-first'>
         <div className='relative w-[310px] h-[388px]  '>
          <Image 
            src={"/img/SecondSection/2.png"}
            fill
            alt='Second'
          />
        </div> 
       
      </div>
    </div>

    <div className='flex flex-col md:grid md:grid-cols-2 md:gap-20 gap-10	items-center justify-center max-w-[990px]'>
      <div className='flex flex-col gap-8  items-center justify-center text-center md:items-start md:text-start md:justify-start'>
      <Title title="Il giorno della proposta" line={true} style="text-3xl  " />
      <p className='text-[#01133F] font-medium md:pr-28 leading-6'>Dopo gli analisi delle informazioni e i gli obiettivi desiderati, il nostro team creerà una proposta personalizzata per aiutarti a raggiungere i tuoi obiettivi</p>
      <Link href={"/"} legacyBehavior>
        <a className='md:self-start rounded-3xl px-5 py-2 font-bold text-center text-white text-lg  bg-[#FF9A18] hover:bg-[#1d67cd] transition-all duration-300 ease-in-out '>Prenota una chiamata</a>
      </Link>
      </div>
      <div className='flex items-center justify-center'>
         <div className='relative w-[370px] h-[368px]  '>
          <Image 
            src={"/img/SecondSection/3.png"}
            fill
            alt='Third'
          />
        </div> 
       
      </div>
    </div>
    </div>
    
      )
}
