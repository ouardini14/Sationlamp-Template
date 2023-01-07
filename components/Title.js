import React from "react";
const { motion } = require("framer-motion");


export default function Title({ title, line, style }) {
  return (
    <div className={`  relative flex flex-col w-fit  ${style} gap-1 `}>
      <motion.h1 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1,
                        transition: {
                         ease: "easeInOut",
                         duration: 1.7
         }}}
         viewport={{ once: true }}
      className="text-[#01133F] font-bold ">{title}</motion.h1>
      {line && (
        <motion.div
          initial={{ opacity: 0,width:0 }}
          whileInView={{ opacity: 1, width:'100%',
                         transition: {
                          ease: "easeInOut",
                          duration: 1.5
          }}}
          viewport={{ once: true }}
          className=" w-full h-1 bg-[#FF9A18]"
        ></motion.div>
      )}
    </div>
  );
}
