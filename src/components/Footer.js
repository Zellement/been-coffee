import React from "react"
import { Link } from "gatsby"
import useToggle from "./UseToggle"
import { RiMenu3Line } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Footer() {

  return (
    <footer className="p-8">
    <div className="container text-sm">
      <p>© Been Coffee 2021</p>
    </div>
    </footer>
  )
}
