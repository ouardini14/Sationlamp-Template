import Head from "next/head";
import Image from "next/image";
import Servizi from "../components/homSections/Servizi";
import SecondSection from "../components/homSections/SecondSection";
import ThirdSection from "../components/homSections/ThirdSection";
import FourthSection from "../components/homSections/FourthSection";

export default function Home() {
  return (
    <div className="font-quicksand ">
      <Head>
        <title>Soluzione Amazon</title>
        <meta name="description" content="Soluzione Amazon" />

        <meta
          name="keywords"
          content="Soluzione Amazon , Amazon, BDS"
        />

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

        <div
          className={` absolute text-left text-white  pt-64  px-4 sm:px-5  md:pl-16  `}
        >
          <span className="text-3xl md:text-5xl  lg:text-7xl font-semibold">
            Hai mai considerato di <br /> vendere i tuoi prodotti anche <br />{" "}
            online?
          </span>{" "}
          <br />
          <br />
          <span className="text-sm  lg:text-lg lg:leading-10 lg:tracking-wider font-medium">
            Iniziare ora a portare la tua azienda anche su Amazon il marketplace
            più grande al mondo.
            <br /> Soluzioni personalizzate per la preparazione ad ogni
            esigenza.
          </span>
        </div>
      </div>
      <Servizi />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}
