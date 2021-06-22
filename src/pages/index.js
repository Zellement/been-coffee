import React from "react"
import Seo from "../components/Seo"

const IndexPage = () => {
  return (
    <>
      <Seo title="Coffee Shop near Derby, UK" />
      <section className="container p-20 text-center lg:p-40">
        <div className="content">
          <h1 className="text-5xl sr-only">Been Coffee</h1>
          <h2 className="text-5xl font-outline">
            Your new <span className="font-sans">favourite coffee shop</span> is opening soon!
          </h2>
          <p className="mt-16 text-xl leading-tight">
            Derby with Burton Services,
            <br />
            Etwall Road,
            <br />
            Willington,
            <br />
            Derby,
            <br />
            DE65 6DX
          </p>
        </div>
      </section>
    </>
  )
}

export default IndexPage
