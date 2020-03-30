import React from 'react'
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eaque sit 
                            magnam aperiam, ad aliquam quae magni? Similique eum porro optio labore 
                            explicabo deserunt laudantium delectus blanditiis atque, magnam suscipit 
                            quos minima neque nesciunt velit, placeat quis perferendis tenetur eius 
                            voluptatibus ullam fugit totam nisi illum! Placeat aperiam vel iusto dolore,
                            ex autem doloremque laboriosam numquam esse eveniet, molestias fugit!
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">{heading}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
