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
                        <p className='text-sm tracking-wider   leading-6'> 
                       <b>Aprire un account su Amazon può apparire complesso</b> e lungo in termini di tempo, soprattutto se è la prima volta. Noi di <b>Soluzione Amazon</b> lo sappiamo bene. Ecco perché ci offriamo di prendere in carico la creazione di un account in <b>ogni suo step</b>, valutando insieme tutte le opzioni che più si adeguano al tuo business model.
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
                        <p className='text-sm tracking-wider   leading-6'> 
                        Noi non siamo soliti lanciare il sasso e ritirare la mano. <b>Capiamo perfettamente quali sono le problematiche relative alla gestione di un Amazon Account</b>, sia esso recente oppure già presente da tempo. Non ci sostituiamo a te, ma insieme ti aiutiamo a intraprendere le <b>strade necessarie</b> per rendere sempre più <b>profittevole</b> il tuo store.
                        </p>
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
                        <p className='text-sm tracking-wider   leading-6'>
                        Molte volte se non si ha un <b>brand</b> conosciuto, si fa fatica a risaltare rispetto alla competizione. Grazie alla nostra <b>pluriennale esperienza</b> possiamo aiutarti nella creazione di <b>marchi unici</b>, capaci di unire forza espressiva ed efficacia per meglio scalare il tuo <b>mercato di riferimento</b>. Curiamo ogni dettaglio del processo, per cogliere sempre gli elementi distintivi e caratteristici della tua attività.
                             </p>
                    </div>

            </div>
        </div>

    </div>
  )
}
