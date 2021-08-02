import React from "react"
import { Link } from "gatsby"
import useToggle from "./UseToggle"
import { RiMenu3Line } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Nav() {

  return (
    <nav className="flex items-center text-base font-riverside md:text-xl lg:text-2xl xl:text-3xl">
      <ul className="flex flex-row w-auto gap-8 mx-auto lg:mr-0">
        <li>
          <AnchorLink 
            className="hover:text-tuscany focus:text-tuscany"
            href="#find-us"
          >
            Find Us
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            className="hover:text-tuscany focus:text-tuscany"
            href="#menu"
          >
            Menu
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            className="hover:text-tuscany focus:text-tuscany"
            href="#our-story"
          >
            Our Story
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            className="hover:text-tuscany focus:text-tuscany"
            href="#contact"
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
    

    </nav>
  )
}
