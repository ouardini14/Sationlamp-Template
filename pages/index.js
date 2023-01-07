import Head from "next/head";
import Image from "next/image";
import Servizi from "../components/homSections/Servizi";
import SecondSection from "../components/homSections/SecondSection";
import ThirdSection from "../components/homSections/ThirdSection";
import FourthSection from "../components/homSections/FourthSection";
import Vision from "../components/homSections/Vision";
import Studio from "../components/homSections/Studio";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-quicksand ">
      <Head>
        <title>Soluzione Amazon</title>
        <meta name="description" content="Soluzione Amazon" />

        <meta name="keywords" content="Soluzione Amazon , Amazon, BDS" />

        <meta property="og:title" content="Soluzione Amazon" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www.rctsrl.online/" /> */}

        {/* <meta
          property="og:image"
          content="https://www.rctsrl.online/img/Preview.png"
        /> */}

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          backgroundImage: `url("/img/img.png")`,
        }}
        className={`  w-screen min-h-[75vh] lg:min-h-screen relative  bg-cover bg-center  bg-no-repeat	 flex `}
      >
        <div className="relative  w-full  h-full lg:non z-[0]">
          <Image layout="fill" alt="Main Image" src={"/img/img.png"} priority />
        </div>
        <div className="absolute h-full w-full bg-black  bg-[#01133f]/80 "></div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={` absolute h-full w-full text-center text-white  pt-72  px-4 sm:px-5   `}
        >
          <span className="text-xl  lg:text-4xl  lg:tracking-wide font-medium">
            “L&apos;innovazione è lo strumento specifico
            dell&apos;imprenditoria. L&apos;atto che <br /> favorisce il
            successo con una nuova capacità di creare benessere.”
          </span>
          <br /> <br />
          <span className="text-3xl md:text-5xl  lg:text-5xl font-semibold">
            PETER FERDINAND DRUCKER
          </span>{" "}
        </motion.div>
      </div>
      <div id="vision">
        <Vision />
      </div>
      <div id="Servizi">
        <Servizi />
      </div>
      <div id="SecondSection">
        <SecondSection />
      </div>
      <div id="ThirdSection">
        <ThirdSection />
      </div>
      <div id="FourthSection">
        <FourthSection />
      </div>
      <div id="Studio">
        <Studio />
      </div>
    </div>
  );
}
