import React, { Component } from "react"
import Heading from "../Reuseable/Heading"
import Image from "gatsby-image"

const getCategory = items => {
  let holdItems = items.map(listitems => {
    return listitems.node.category
  })
  let holdCategories = new Set(holdItems)
  let categories = Array.from(holdCategories)
  categories = ["All", ...categories]
  return categories
}

export default class Bundlecart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bundles: props.bundles.edges,
      mybundles: props.bundles.edges,
      mycategories: getCategory(props.bundles.edges),
    }
  }

  categorySelected = category => {
    let allbundles = [...this.state.bundles]
    if (category === "All") {
      this.setState(() => {
        return { mybundles: allbundles }
      })
    } else {
      let selected_bundles = allbundles.filter(
        ({ node }) => node.category === category
      )
      this.setState(() => {
        return { mybundles: selected_bundles }
      })
    }
  }

  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Bundles" />
          <div className="row">
            {this.state.mybundles.map(({ node }) => {
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
                    <button
                      data-item-id={node.id}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-url="https://buynlearn.netlify.com/"
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
