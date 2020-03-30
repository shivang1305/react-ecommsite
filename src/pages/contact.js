import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from "../components/Reuseable/MainSection"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <MainSection
      img={data.img.childImageSharp.fluid}
      title="Contact Us"
      subtitle="teamsupport@lco.co.in"
      mainclass="services-background"
    />
    <div class="row mt-5">
      <div class="col-md-6 m-auto">
        <div class="card card-body">
          <h1 class="text-center mb-3">
            <i class="fas fa-user-plus"></i> Contact Us
          </h1>
          <form action="/users/register" method="POST">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                class="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div class="form-group">
              <label for="password">Phone Number</label>
              <input
                type="text"
                id="phone-number"
                name="phone-number"
                class="form-control"
                placeholder="Enter Contact Number"
              />
            </div>
            <div class="form-group">
              <label for="password2">Issue</label>
              <input
                type="text"
                id="issue"
                name="issue"
                class="form-control"
                placeholder="Address the issue faced"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Contact
            </button>
          </form>
          <p class="lead mt-4">
            You can also mail us : <a href="#">teamsupport@lco.co.in</a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
