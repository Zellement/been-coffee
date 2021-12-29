import React from "react"
import Seo from "../components/Seo"

import { StaticImage } from "gatsby-plugin-image"

// import { motion, useViewportScroll } from "framer-motion"

import imgMap from "../images/map.svg"
import imgArrowBee from "../images/arrow-bee.svg"

import InstagramFeed from "../components/InstagramFeed"

const IndexPage = () => {
  // const { scrollYProgress } = useViewportScroll()
  // console.log(scrollYProgress)
  return (
    <>
      <Seo title="Coffee Shop near Derby, UK" />
      <section className="container p-8 mt-12 lg:-mt-40 lg:pb-20 2xl:-mt-56 2xl:pb-32">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-2/5 lg:pt-[20%] 2xl:w-1/3">
            <h1 className="sr-only">Been Coffee</h1>
            <div className="flex flex-row justify-center w-full gap-16 leading-none lg:justify-start font-riverside">
              <p className="flex flex-col ">
                <span className="text-base text-tuscany">Just off</span>
                <span className="text-2xl xl:text-4xl md:text-3xl">Toyota Island</span>
              </p>
              <p className="flex flex-col">
                <span className="text-base text-tuscany">On the</span>
                <span className="text-2xl xl:text-4xl md:text-3xl">A50 &amp; A38</span>
              </p>
            </div>
            <p className="mt-8 text-center lg:text-left">
              Derby and Burton Services
              <br />
              Etwall Road, Willington
              <br />
              Derby, <br />
              DE65 6DX
            </p>
          </div>
          <div className="relative lg:w-3/5 2xl:w-2/3">
            <div className="absolute bottom-0 w-[30%] h-auto right-0 mr-[61%] mb-[17%] z-10">
              <img src={imgArrowBee} />
            </div>
            <img src={imgMap} />
          </div>
        </div>
      </section>
      <section className="relative px-4 my-16">
      <div className="absolute w-11/12 h-full transform translate-x-10 translate-y-10 inside-image bg-butterscotch -z-10"></div>
          <StaticImage className="inside-image" src="../images/inside.jpg" alt="A dinosaur" />
      </section>
      <InstagramFeed />
    </>
  )
}

export default IndexPage
