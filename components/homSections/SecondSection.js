import React from "react";
import Title from "../Title";
import Image from "next/image";
import Link from "next/link";
const { motion } = require("framer-motion");

export default function SecondSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-9 py-12 px-5 md:px-14">
      <Title
        title="NON VEDIAMO L'ORA DI AIUTARE ANCHE TE. IN TRE PASSAGGI."
        line={false}
        style="text-4xl max-w-[850px] text-center md:text-5xl "
      />

      <div className=" flex flex-col  md:grid md:grid-cols-2 md:gap-20 gap-10	items-center justify-center  max-w-[990px]">
        <div className="flex flex-col gap-8  items-center justify-center text-center md:items-start md:text-start md:justify-start">
          <Title
            title="Prenota una prima consulenza"
            line={true}
            style="text-3xl  "
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 1.95,
              },
            }}
            viewport={{ once: true }}
            className="text-[#01133F] font-medium md:pr-28 leading-6"
          >
            Se desideri <b>conoscere più dettagli</b> su <b>Soluzione Amazon</b>{" "}
            e su come possiamo aiutarti, o semplicemente vuoi sapere di che
            pasta siamo fatti, <b>contattaci subito</b> e saremo lieti di
            rispondere a tutte le tue <b>domande</b>. Con il tuo permesso,
            inizieremo a lavorare sulle informazioni che vorrai condividere per
            inquadrare al meglio il tipo di servizio che più soddisfa le tue
            esigenze.{" "}
          </motion.p>
          <Link href={"/"} legacyBehavior>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  duration: 1.95,
                },
              }}
              viewport={{ once: true }}
              className="md:self-start rounded-3xl px-5 py-2 font-bold text-center text-white text-lg  bg-[#FF9A18] hover:bg-[#1d67cd] transition-all duration-300 ease-in-out "
            >
              Prenota una chiamata
            </motion.a>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  duration: 1.95,
                },
              }}
              viewport={{ once: true }} className="relative w-[310px] h-[388px]  ">
            <Image src={"/img/SecondSection/1.png"} fill alt="First" />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-20 gap-10 	items-center justify-center max-w-[990px] ">
        <div className="flex flex-col gap-8  items-center justify-center text-center md:items-start md:text-start md:justify-start">
          <Title
            title="Analizziamo i dati ricevuti"
            line={true}
            style="text-3xl  "
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 1.95,
              },
            }}
            viewport={{ once: true }}
            className="text-[#01133F] font-medium md:pr-28 leading-6"
          >
            Dopo aver ricevuto tutte le <b>indicazioni</b> necessarie,
            procederemo ad una loro attenta <b>analisi e valutazione</b>. In
            questo step ci interessa identificare i contenuti specifici della
            richiesta e sciogliere tutti i possibili nodi al riguardo (compreso
            una seria indagine sulla concorrenza) per identificare la{" "}
            <b>strategia più efficace</b>.{" "}
          </motion.p>
          <Link href={"/"} legacyBehavior>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  duration: 1.95,
                },
              }}
              viewport={{ once: true }}
              className="md:self-start rounded-3xl px-5 py-2 font-bold text-center text-white text-lg  bg-[#FF9A18] hover:bg-[#1d67cd] transition-all duration-300 ease-in-out "
            >
              Prenota una chiamata
            </motion.a>
          </Link>
        </div>
        <div className="flex items-center justify-center md:order-first">
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  duration: 1.95,
                },
              }}
              viewport={{ once: true }} className="relative w-[310px] h-[388px]  ">
            <Image src={"/img/SecondSection/2.png"} fill alt="Second" />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-20 gap-10	items-center justify-center max-w-[990px]">
        <div className="flex flex-col gap-8  items-center justify-center text-center md:items-start md:text-start md:justify-start">
          <Title
            title="Il giorno della proposta"
            line={true}
            style="text-3xl  "
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 1.95,
              },
            }}
            viewport={{ once: true }}
            className="text-[#01133F] font-medium md:pr-28 leading-6"
          >
            Il diavolo è nei dettagli, si dice. Noi siamo dei veri
            professionisti ed è nostra abitudine chiarire ogni particolare
            rilevante per arrivare ad una{" "}
            <b>proposta tagliata su misura per te</b>, precisa in ogni sua
            parte. A questo punto della collaborazione, siamo pronti a offrire
            le nostre conclusioni sull&apos;analisi compiuta e illustrare i
            passi immediati da prendere. <b>Non lasciamo niente al caso. </b>{" "}
          </motion.p>
          <Link href={"/"} legacyBehavior>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  duration: 1.95,
                },
              }}
              viewport={{ once: true }}
              className="md:self-start rounded-3xl px-5 py-2 font-bold text-center text-white text-lg  bg-[#FF9A18] hover:bg-[#1d67cd] transition-all duration-300 ease-in-out "
            >
              Prenota una chiamata
            </motion.a>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  duration: 1.95,
                },
              }}
              viewport={{ once: true }} className="relative w-[370px] h-[368px]  ">
            <Image src={"/img/SecondSection/3.png"} fill alt="Third" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
