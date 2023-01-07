import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
const { motion } = require("framer-motion");

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);
  const [loading, SetLoading] = useState(false);

  async function onSubmitForm(values) {
   SetLoading(true);
   await axios
      .post("/api/email", { values })
      .then((res) => {
       SetLoading(false);
        reset();
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((e) => {
        SetLoading(false);
        console.log(e);
      });
  }

  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1,
                  
                   transition: {
                    ease: "easeInOut",
                     duration:1.5
    }}}
    viewport={{ once: true }} 
    className='bg-[#FF9A18] px-8 py-10 md:px-28  md:py-28 '>
          <form
          onSubmit={handleSubmit(onSubmitForm)}
          className=" flex flex-col  md:pt-0  "
        >
          <h1 className=' tracking-tighter text-4xl  text-white text-center font-semibold pb-10'>Oppure manda un massagio</h1>
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-y-0 justify-center space-y-3  ">
            <label className="flex flex-col space-y-2">
              <input
                {...register("fname", {
                  required: {
                    value: true,
                    message: "You must enter your First name",
                  },
                })}
                className={` border-white focus:ring-white focus:border-white placeholder:text-gray-900 placeholder:font-semibold placeholder:text-sm rounded-md   ${errors.fname ? "border-b-red-900" : null}`}
                name="fname"
                type="text"
                placeholder='Nome'
              />
              <span className="text-red-800 text-sm py-2">
                {errors?.fname?.message}
              </span>
            </label>
            <label className="flex flex-col space-y-2">
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "You must enter your email address",
                },
                minLength: {
                  value: 8,
                  message: "This is not long enough to be an email",
                },
                maxLength: {
                  value: 120,
                  message: "This is too long",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "This needs to be a valid email address",
                },
              })}
              className={` border-white focus:ring-white focus:border-white placeholder:text-gray-900 placeholder:font-semibold placeholder:text-sm rounded-md   ${errors.fname ? "border-b-red-900" : null}`}
              name="email"
              type="text"
              placeholder='Email'

            />
            <span className="text-red-800 text-sm py-2">
              {errors?.email?.message}
            </span>
          </label>
           
          </div>
        <label className="flex flex-col space-y-2">
              <input
                {...register("oggetto", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                })}
                className={` border-white focus:ring-white focus:border-white placeholder:text-gray-900 placeholder:font-semibold placeholder:text-sm rounded-md   ${errors.fname ? "border-b-red-900" : null}`}
                name="oggetto"
                type="text"
                placeholder='Oggetto'

              />
              <span className="text-red-800 text-sm py-2">
                {errors?.oggetto?.message}
              </span>
            </label>
          <label className="flex flex-col space-y-2">
            <input
              {...register("phone", {
                required: {
                  value: true,
                  message: "You must enter your phone",
                }
              })}
              className={` border-white focus:ring-white focus:border-white placeholder:text-gray-900 placeholder:font-semibold placeholder:text-sm rounded-md   ${errors.fname ? "border-b-red-900" : null}`}
              name="phone"
              type="tel"
              placeholder='Telefono'

            />
            <span className="text-red-800 text-sm py-2">
              {errors?.phone?.message}
            </span>
          </label>

          <label className="flex flex-col space-y-2">
            <textarea
              rows="4"
              {...register("message", {
                required: {
                  value: true,
                  message: "You need to enter your message",
                },
                maxLength: {
                  value: 1000,
                  message: "Your message can't be more than 1000 characters",
                },
                minLength: {
                  value: 20,
                  message: "Your message must be longer than this!",
                },
              })}
              className={` border-white focus:ring-white focus:border-white placeholder:text-gray-900 placeholder:font-semibold placeholder:text-sm rounded-md   ${errors.fname ? "border-b-red-900" : null}`}
              name="message"
              placeholder='Scrivi qui il tuo un messaggio...'

            ></textarea>
            <span className="text-red-800 text-sm py-2">
              {errors?.message?.message}
            </span>
          </label>
              
          <button
            type="submit"
            className={`rounded-3xl px-5 py-2 font-bold text-center text-white text-lg  bg-[#01133F] hover:bg-[#2B8580] transition-all duration-300 ease-in-outdisabled:opacity-20 disabled:cursor-not-allowed ${
              success && "bg-blue-600 "
            }`}
            disabled={
              errors.message || errors.email || errors.fname || errors.lname
            }
          >
            {success && "Completed"}
            {loading && "loading"}
            {!loading && !success && "Invia"}
          </button>
        </form>
    </motion.div>
  )
}
