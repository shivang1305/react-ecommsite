import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from "../components/Reuseable/MainSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import Coursescart from "../components/Cart/Coursescart"
import Bundlecart from "../components/Cart/Bundlecart"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <MainSection
      img={data.img.childImageSharp.fluid}
      title="Leadership and learning are indispensable to each other."
      subtitle="BuynLearn.com"
      mainclass="main-background"
    />
    <InfoBlock heading="About Us" />
    <Coursescart courses={data.courses} />
    <Bundlecart bundles={data.bundles}/>
    <DualInfoBlock
      heading="Our Team"
      source="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      msg="Keep on learning"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          categories
          description {
            description
          }
          image {
            fixed(height: 120, width: 200) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
    bundles: allContentfulBundles {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          image {
            fixed(height: 120, width: 200) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
