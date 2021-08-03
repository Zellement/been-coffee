import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Nav from "./Nav"
import Logo from "./atoms/Logo"
import Hexagon from "./atoms/Hexagon"

import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai"

export default function Header() {
  
  const socialContainer = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { delayChildren: 2, staggerChildren: 0.5 },
    },
  }

  const socialContainer__Icons = {
    initial: { opacity: 0, y: -100 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const heroContainer = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { delay: 0.5, staggerChildren: 0.5 },
    },
  }

  const heroContainer__Items = {
    initial: { opacity: 0, y: -100 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <header className="relative w-full 3xl:min-h-[595px]">
      <div className="absolute inset-0 h-full angle-to-br bg-butterscotch -z-10">
        <div className="w-full h-full opacity-5 bg-pattern-tuscany"></div>
      </div>
      <div className="container relative w-full lg:flex lg:flex-row lg:space-between">
        <Hexagon className="absolute top-0 left-0 hidden w-1/2 lg:block lg:mt-[-10%] lg:ml-[-10%] 3xl:ml-[-8%]" />

        <div className="bg-navy p-16 w-full lg:w-[35%] lg:mt-20 lg:bg-transparent relative z-10">
          <Link
            className="block w-full max-w-sm mx-auto text-center lg:m-0 lg:max-w-none"
            to="/"
          >
            <Logo className="w-full h-auto text-butterscotch" />
          </Link>
        </div>

        <div className="relative z-10 flex flex-col pt-8 overflow-hidden lg:gap-8 lg:ml-auto lg:pr-8 lg:pb-56 2xl:pb-72">
          <motion.div
            variants={socialContainer}
            initial="initial"
            animate="enter"
            className="flex flex-row justify-center gap-4 mb-4 text-base md:text-lg lg:justify-end text-tuscany lg:text-xl"
          >
            <motion.a
              variants={socialContainer__Icons}
              className="hover:text-navy focus:text-navy"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/beencoffeeuk"
            >
              <span className="sr-only">Find us on Facebook</span>
              <AiFillFacebook />
            </motion.a>
            <motion.a
              variants={socialContainer__Icons}
              className="hover:text-navy focus:text-navy"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/beencoffeeuk/"
            >
              <span className="sr-only">Find us on Instagram</span>
              <AiFillInstagram />
            </motion.a>
            <motion.a
              variants={socialContainer__Icons}
              className="hover:text-navy focus:text-navy"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/BeenCoffeeUK"
            >
              <span className="sr-only">Find us on Twitter</span>
              <AiOutlineTwitter />
            </motion.a>
          </motion.div>

          <Nav />

          <motion.div variants={heroContainer} initial="initial" animate="enter" className="flex flex-col items-center gap-0 mt-16 leading-none font-riverside">
            <motion.span variants={heroContainer__Items} className="text-[2.2rem] font-riverside-outline md:text-[3.2rem] xl:text-[4rem]">
              Locally sourced. Lovingingly Crafted.
            </motion.span>
            <motion.span variants={heroContainer__Items} className="text-[4rem] text-tuscany md:text-[5.8rem] xl:text-[7.3rem]">
              Great tasting Coffee.
            </motion.span>
            <motion.span variants={heroContainer__Items} className="text-[3.9rem] md:text-[5.7rem] xl:text-[7.1rem]">
              Opening Autumn 2021.
            </motion.span>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
