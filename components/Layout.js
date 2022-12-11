import Header from './header/Header'
import Footer from './footer/Footer'
import Head from "next/head";   
import React, {  useEffect ,useState } from "react";

export default function Layout({children}) {
  return (
    <div className='relative'>
      
<div className='absolute top-0'>
        <Header />

</div>
            {children}
            <Footer />
  
    </div>
  )
}

