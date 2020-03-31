import React, { Component } from "react"
import Heading from "../Reuseable/Heading"
import Image from "gatsby-image"

const getCategory = items => {
  let holdItems = items.map(items => {
    return items.node.categories
  })
  let holdCategories = new Set(holdItems)
  let categories = Array.from(holdCategories)
  categories = ["All", ...categories]
  return categories
}

export default class Coursescart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
      mycategories: getCategory(props.courses.edges),
    }
  }

  categorySelected = category => {
    let allcourses = [...this.state.courses]
    if (category === "All") {
      this.setState(() => {
        return { mycourses: allcourses }
      })
    } else {
      let selected_courses = allcourses.filter(
        ({ node }) => node.categories === category
      )
      this.setState(() => {
        return { mycourses: selected_courses }
      })
    }
  }

  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div class="dropdown">
            <button class="dropbtn">Category</button>
            <div class="dropdown-content">
              {this.state.mycategories.map((category, index) => {
                return (
                  <a
                    key={index}
                    onClick={() => {
                      this.categorySelected(category)
                    }}
                  >
                    {category}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex my-3 mx-auto"
                >
                  <Image fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0 text-success">${node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      data-item-id={node.id}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-url="https://buynlearn.netlify.com/"
                      data-item-description={node.description.description}
                      data-item-image={node.image.fixed.src}
                      className="btn btn-warning snipcart-add-item"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
