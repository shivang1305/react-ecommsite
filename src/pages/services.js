import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from "../components/Reuseable/MainSection"

const ServicePage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <MainSection
      img={data.img.childImageSharp.fluid}
      title="services"
      subtitle="learncodeonline.com"
      mainclass="services-background"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "services-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ServicePage
