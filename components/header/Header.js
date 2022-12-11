import React, { useRef, useEffect, Fragment, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import HeaderItem from './HeaderItem'
import { useRouter } from 'next/router'

export default function Header({ categories }) {
  const [open, setOpen] = useState(false);
  const router = useRouter()

  const Menu = useRef(null);
  const wrap = useRef(null);
  const HeaderMenu = useRef(null);

    useEffect(()=>{
      setOpen(false);

      CloseMenu()
    },[router])

  function OpenMenu() {
    gsap
      .timeline()
      .set(HeaderMenu.current, {
        display: "inline",
      })
      .to(wrap.current, {
        scale: 1.3,
        duration: 0.5,
        ease: "Expo.InOut",
      })
      .set(Menu.current.children, {
        opacity: 0,
      })
      .fromTo(
        Menu.current.children,
        {
          opacity: 0,
          yPercent: -75,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger:0.4,
          ease: "sine.in"                }
      );
  }

  function CloseMenu() {
    gsap
      .timeline()
      .fromTo(
        Menu.current.children,
        {
          opacity: 1,
          yPercent: 0,
        },
        {
          opacity: 0,
          yPercent: -50,
          stagger: 0.2,
          ease: "Expo.InOut",
        }
      )
      .to(wrap.current, {
        scale: 0,
        duration: 0.5,
        ease: "Expo.InOut",
      })
      .set(HeaderMenu.current, {
        display: "none",
      });
  }




  return ( 
    <header className="absolute top-0 left-0 w-screen z-[100] font-quicksand" >
        <div className={`relative flex justify-between  pt-14 w-screen  px-4 sm:px-5  lg:px-36 xl:px-44 2xl:px-48`} >
       
       <div className="relative z-[100]   h-[75px] w-[180px] lg:h-[105px] lg:w-[220px] xl:h-[113px] xl:w-[275px]">

           <Image
        src="/img/logo.png"
        fill
        alt="Logo"
       className="w-full h-full"
      />
       </div>
     
     
        <div className=" items-center space-x-16  text-white text-xs  hidden md:flex   ">
            <HeaderItem title="About" link="/" />
            <HeaderItem title="Industries" link="/" />
            <HeaderItem title="Careers" link="/" />
            <HeaderItem title="Insights" link="/" />
            <HeaderItem title="Contact" link="/" />



        </div>
        
        

        


       
          
       <button
          onClick={() => {
            if (
              !(
                gsap.isTweening(HeaderMenu.current) ||
                gsap.isTweening(wrap.current) ||
                gsap.isTweening(Menu.current.children)
              )
            ) {
              setOpen(!open);
              open ? CloseMenu() : OpenMenu();
            }
          }}
          className= "z-[100] MenuButton cursor-pointer  flex flex-col items-center justify-center space-y-1 outline-0	md:hidden"
        >
          <span
            className={`w-8 h-1 bg-white rounded-full transform transition origin-[5px_3px] duration-500 ease-in-out ${
              open && `rotate-45`
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-white rounded-full transform transition origin-[5px_2px] duration-500 ease-in-out ${
              open && `-translate-x-1`
            } ${open && `opacity-0`}`}
          ></span>
          <span
            className={`w-8 h-1 bg-white rounded-full transform transition origin-[5px_3px] duration-500 ease-in-out ${
              open && `-rotate-45`
            }`}
          ></span>
        </button>
      </div>

 
      {/* Menu Dropdown */}
     <div
        className="fixed overflow-hidden h-screen  w-screen top-0 left-0 hidden  z-[95]"
        ref={HeaderMenu}
      >
        <div
          ref={wrap}
          className={`rounded-bl-full h-screen bg-[#051847] w-screen tranform origin-top-right scale-0`}  
        ></div>
        <div className=  {`flex flex-col items-center justify-center  h-screen w-screen  ` } >
          <div
            className="fixed top-0  h-screen w-screen flex flex-col items-center justify-center text-white text-lg space-y-10 text-center"
            ref={Menu}
          >
            

            
            <HeaderItem title="About" link="/" />
            <HeaderItem title="Industries" link="/" />
            <HeaderItem title="Careers" link="/" />
            <HeaderItem title="Insights" link="/" />
            <HeaderItem title="Contact" link="/" />
         
          </div>
        </div>
      </div> 
     

    </header>
  );
}
