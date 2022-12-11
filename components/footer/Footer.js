import React from 'react'

export default function footer() {
  return (
    <div className='bg-[#01133F]  py-12 px-5 md:px-28'>
      <div className='flex flex-col md:grid md:grid-cols-2 md:gap-20 gap-10 '>
      <ul className='space-y-5'>
        <li  className='text-white/70 text-sm font-bold' >Business Development & Strategy Srl</li>
        <li  className='text-white/70 text-sm font-bold' >Via F. Simonetta, 25 - 28922 Verbania  Italia</li>
        <li  className='text-white/70 text-sm font-bold' >C.F e P.iva 09729160961</li><br/>
        <li  ><div className=' w-[330px] h-1 bg-[#FF9A18]'></div></li><br/>
        <li  className='text-white/70 text-sm font-bold' ><a href="mailto:">E-mail info@bdstrategy.it</a></li>
        <li  className='text-white/70 text-sm font-bold' ><a href="tel:+39 0323 403468">Tel. +39 0323 403468</a></li>
        <li  className='text-white/70 text-sm font-bold' ><a href="tel:++39 0323 517678">Fax +39 0323 517678</a></li>

      </ul>
      <ul className='space-y-1'>
        <li className='underline font-bold text-white text-lg'>Chi siamo?</li>
        <li className='underline font-bold text-white text-lg'>Privacy Policy</li>
        <li className='underline font-bold text-white text-lg'>Contattaci</li>
        <li className='underline font-bold text-white text-lg'>Nostri servizi</li>

      </ul>
      </div>
    

    </div>
  )
}
