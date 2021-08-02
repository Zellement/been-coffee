import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import Nav from "./Nav"
import Logo from "./atoms/Logo"
import Hexagon from "./atoms/Hexagon"

import { AiOutlineTwitter, AiFillInstagram, AiFillFacebook } from "react-icons/ai"

const Header = ({ siteTitle }) => (
  <header className="relative w-full">
    <div className="absolute inset-0 h-full angle-to-br bg-butterscotch -z-10">
      <div className="w-full h-full opacity-5 bg-pattern-tuscany"></div>
    </div>
    <div className="container relative w-full lg:flex lg:flex-row lg:space-between">
    <Hexagon className="absolute top-0 left-0 hidden w-1/2 lg:block lg:mt-[-10%] lg:ml-[-10%]" />

    <div class="bg-navy p-16 w-full lg:w-[35%] lg:mt-20 lg:bg-transparent relative z-10">
      <Link
        className="block w-full max-w-sm mx-auto text-center lg:m-0 lg:max-w-none"
        to="/"
      >
        <Logo className="w-full h-auto text-butterscotch" />
      </Link>
    </div>

    <div className="relative z-10 flex flex-col pt-8 lg:gap-8 lg:ml-auto lg:pr-8 lg:pb-56 2xl:pb-72">

      <div className="flex flex-row justify-center gap-4 mb-4 text-base md:text-lg lg:justify-end text-tuscany lg:text-xl">

        <a className="hover:text-navy focus:text-navy" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/beencoffeeuk"><span className="sr-only">Find us on Facebook</span><AiFillFacebook /></a>
        <a className="hover:text-navy focus:text-navy" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/beencoffeeuk/"><span className="sr-only">Find us on Instagram</span><AiFillInstagram /></a>
        <a className="hover:text-navy focus:text-navy" rel="noopener noreferrer" target="_blank" href="https://twitter.com/BeenCoffeeUK"><span className="sr-only">Find us on Twitter</span><AiOutlineTwitter /></a>

      </div>

      <Nav />

      <div className="flex flex-col items-center gap-0 mt-16 leading-none font-riverside">
        <span className="text-[2.2rem] font-riverside-outline md:text-[3.2rem] xl:text-[4rem]">Locally sourced. Lovingingly Crafted.</span>
        <span className="text-[4rem] text-tuscany md:text-[5.8rem] xl:text-[7.3rem]">Great tasting Coffee.</span>
        <span className="text-[3.9rem] md:text-[5.7rem] xl:text-[7.1rem]">Opening Autumn 2021.</span>
      </div>

    </div>
</div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
