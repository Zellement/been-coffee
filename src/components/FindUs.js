import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import vectorMap from "../vectors/map.svg"
import vectorArrowBee from "../vectors/arrow-bee.svg"

export default function FindUs() {
  return (
    <>
      <section
        id="find-us"
        className="container p-8 mt-12 lg:-mt-40 2xl:-mt-56 "
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-1/3 lg:pt-56 xl:pt-64">
            <h1 className="sr-only">Been Coffee</h1>
            <div className="flex flex-row justify-center w-full gap-16 leading-none lg:justify-start font-riverside">
              <p className="flex flex-col ">
                <span className="text-base text-tuscany">Just off</span>
                <span className="text-2xl lg:text-4xl md:text-3xl">
                  Junction 4
                </span>
              </p>
              <p className="flex flex-col">
                <span className="text-base text-tuscany">On the</span>
                <span className="text-2xl lg:text-4xl md:text-3xl">A50</span>
              </p>
            </div>
            <p className="mt-8 text-center lg:text-left">
              Unit 3, Derby with Burton Services
              <br />
              Etwall Road, Willington
              <br />
              Derby, <br />
              DE65 6DX
            </p>
          </div>
          <div className="relative lg:w-2/3">
            <div className="absolute bottom-0 w-[30%] h-auto right-0 mr-[61%] mb-[17%] z-10">
              <img src={vectorArrowBee} />
            </div>
            <img src={vectorMap} />
          </div>
        </div>
      </section>
      <div className="relative z-20 w-full -mt-32 text-white lg:-mt-40 ">
        <div className="absolute inset-0 h-full trapezoid-to-r bg-tuscany -z-10">
          <div className="w-full opacity-5 bg-pattern-tuscany"></div>
        </div>
        <section className="container flex-row py-40 mt-12 text-xl lg:text-2xl lg:flex">
          <div className="p-8 lg:w-1/3">
            <h2 className="text-butterscotch font-riverside">
              Local Services Nearby
            </h2>
            <ul className="font-riverside">
              <li>Fuel</li>
              <li>KFC</li>
              <li>Hairdressers</li>
              <li>Ibis Hotel</li>
              <li>Cherry Tree Pub</li>
            </ul>
          </div>
          <div className="mt-12 trapezoid-to-r lg:m-0 lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:h-full lg:w-2/3">
            <StaticImage
              className="object-cover w-full h-full"
              src="../images/shop-front.jpg"
              alt="The Been Coffee shop front"
              placeholder="blurred"
            />
          </div>
        </section>
      </div>
    </>
  )
}
