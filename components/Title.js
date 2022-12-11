import React from 'react'

export default function Title({title,line,style}) {
  return (
    <div className={`  relative flex flex-col w-fit  ${style} gap-1 `}>
      <h1 className='text-[#01133F] font-bold ' >{title}</h1>  
    {line &&<div className=' w-full h-1 bg-[#FF9A18]'></div>}  
    </div>
  )
}
