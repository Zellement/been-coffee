import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function OurStory() {
  return (
    <div
      id="our-story"
      className="relative pt-64 pb-64 -mt-48 bg-center bg-auto lg:-mt-96 bg-butterscotch bg- trapezoid-to-l"
    >
      <div className="absolute inset-0 -z-10 opacity-10 bg-pattern-tuscany"></div>
      <div className="container relative z-10 px-8 py-16">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pt-40">
            <h2 className="text-3xl font-riverside text-navy lg:text-4xl">
              Our Story
            </h2>
            <div className="flex flex-col gap-8">
              <p className="text-lg">
                Been Coffee is a coffee shop near Willington and Derby, UK, just
                off the A52.
              </p>
              <p className="text-base">
                A family-run business and established in 2021, Been Coffee
                prides itself in its locally sourced supplies, building great
                relationships with local businesses and sustainably produced
                food.
              </p>
            </div>
          </div>
          <div className="mt-8 lg:w-1/2">
            <StaticImage
              className="mx-auto -mb-72 block max-w-[400px]"
              src="../images/about-us.png"
              alt="Staff member pouring coffee"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
