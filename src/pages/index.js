import React from "react"
import Seo from "../components/Seo"
import FindUs from "../components/FindUs"
import OurStory from "../components/OurStory"

// import { motion, useViewportScroll } from "framer-motion"

const IndexPage = () => {
  // const { scrollYProgress } = useViewportScroll()
  // console.log(scrollYProgress)
  return (
    <>
      <Seo title="Coffee Shop near Derby, UK" />
      <FindUs />
      <OurStory />
    </>
  )
}

export default IndexPage
