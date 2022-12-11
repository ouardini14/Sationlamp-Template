import React from 'react'
import Link from 'next/link'
export default function HeaderItem({title,link}) {
  return (
    <Link href={link} >
        <span  className="cursor-pointer text-center  text-sm  tracking-wider	   hover:opacity-50  transition-all duration-300 ease-in-out " >
        {title}

        </span>
    </Link>
  )
}
