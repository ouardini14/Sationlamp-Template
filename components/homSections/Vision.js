import React from 'react'
import Title from '../Title'
export default function Vision() {
  return (
          <div className='flex flex-col items-center justify-center gap-9 py-12 px-5 md:px-14'>
            <Title title="Vision"  line={true} style="text-5xl text-center md:text-6xl " />
                <div  className='max-w-5xl flex flex-col items-center justify-center text-center text-3xl gap-4 text-[#01133F]'>

                <p>
               <b>Soluzione Amazon</b> nasce con l&apos;intento di offrire un <b>supporto strutturato</b> a tutte quelle realtà italiane che desiderano <b>innovarsi</b> e fare il salto decisivo nel mondo dell&apos;<b>e-commerce</b>
                </p>
                <p>
                Non è un mistero che una delle sfide più importanti che le aziende del nostro Paese si ritrovano ad affrontare consiste nell&apos;essere presenti nel mercato internazionale tramite il digitale. <b>Noi desideriamo mettere la nostra professionalità e competenza proprio al tuo servizio per aiutarti ad espandere e consolidare il tuo business.</b>             
               </p>
               <br/>
               <div className=' w-56 h-1 bg-[#FF9A18]'></div>               <br/>

               <p>
               orresti aprire il tuo negozio online su <b>Amazon</b> e iniziare subito a vendere ma non sai come fare? Oppure hai difficoltà nella sua gestione? Nessun problema. <b>Scopri come possiamo aiutarti, qualunque siano le tue esigenze. </b>              </p>
                </div>
    </div>
  )
}
