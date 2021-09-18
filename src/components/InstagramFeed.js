import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AiFillHeart } from "react-icons/ai"
import { GatsbyImage } from "gatsby-plugin-image";
import { AiFillInstagram } from "react-icons/ai"

export default function InstagramFeed() {
  const insta = useStaticQuery(
    graphql`
      query {
        allInstagramContent(limit: 6) {
          edges {
            node {
              id
              permalink
              caption
              timestamp(formatString: "Do MMMM YYYY")
              localImage {
                childImageSharp {
                  gatsbyImageData(
                    width: 400,
                    layout: CONSTRAINED,
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className="container p-8 pt-16 text-navy">
      <div className="container relative">
        <h2 className=""><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/beencoffeeuk/" className="inline-flex flex-row items-center gap-2 hover:text-tuscany focus:text-tuscany"><AiFillInstagram className="text-4xl" /></a></h2>
        <div className="flex flex-col sm:grid sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {insta.allInstagramContent.edges.map(({ node: instapost }) => (
            <a
              key={instapost.id}
              href={instapost.permalink}
              rel="noopener noreferrer"
              className="pb-4"
              target="_blank"
            >
              <div className="relative">
                <GatsbyImage
                  image={instapost.localImage.childImageSharp.gatsbyImageData}
                  alt={instapost.caption ? instapost.caption : "Instagram post"}
                  className="w-full h-full object-fit" />
                <div className="absolute bottom-0 right-0 flex flex-row items-center p-2 space-x-2 text-white pointer-events-none">
                  <AiFillHeart />
                  <span>{instapost.likes}</span>
                </div>
              </div>
              <div className="p-8 text-xs lg:pb-0">
                <span className="block mb-4 text-2xs">{ instapost.timestamp }</span>
                {instapost.caption}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
