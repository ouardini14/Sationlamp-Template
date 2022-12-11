import React from 'react'
import Title from '../Title'
import Image from 'next/image'
export default function Servizi() {
  return (
    <div>
        
        <div className='flex flex-col items-center justify-center gap-9 py-12 px-5 md:px-14'>
            <Title title="I nostri Servizi" line={true} style="text-5xl text-center md:text-6xl " />
            <div className=' w-full bg-[#4B5C7D] px-6 py-12  text-white gap-6  flex  flex-col items-center md:flex-row md:justify-around'>

                    <div className='flex flex-col gap-3 items-center  text-center md:w-[342px]'>
                        <Image
                        src={"/img/servizi/img1.png"}
                        width={65}
                        height={65}
                        alt="account"
                        />
                        <h3 className='text-xl font-semibold'>
                        Creazione account
                        </h3>
                        <p className='text-sm tracking-wider font-medium  leading-6'> 
                        Affidati al nostro team di esperti, andiamo noi a creare un account per il tuo business per aiutarti a scalare.
                        </p>
                    </div>
 
                    <div className='flex flex-col gap-3 items-center   text-center md:w-[342px]'>
                        <Image
                        src={"/img/servizi/img2.png"}
                        width={65}
                        height={65}
                        alt="account"
                        />
                        <h3 className='text-xl font-semibold'>
                        Gestione account
                        </h3>
                        <p className='text-sm tracking-wider font-medium  leading-6'> 
                        Se hai un account già esistente, il nostro team di esperti offrirà a te un servizio fatto su misura per gestire il tuo account e per farlo performare al meglio.                        </p>
                    </div>

                    <div className='flex flex-col gap-3 items-center   text-center md:w-[342px]'>
                        <Image
                        src={"/img/servizi/img3.png"}
                        width={65}
                        height={65}
                        alt="account"
                        />
                        <h3 className='text-xl font-semibold'>
                        Creazione marchio
                        </h3>
                        <p className='text-sm tracking-wider font-medium  leading-6'> 
                        Hai uno stock che vuoi brandizzare? oppure vuoi creare il tuo brand personale? <br/>
                        Sei nel posto giusto, il nostro team ha aiutato oltre 50 aziende negli ultimi 5 anni a portare sul mercato brand nuovi oltre ad aiutarli a scalare.                        </p>
                    </div>

            </div>
        </div>

    </div>
  )
}
