import React from "react"
import Heading from "./Heading"
import Image from "./Image"
import { Link } from "gatsby"

export default function DualInfoBlock({ heading, source, msg }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              dolore animi, dicta ullam quod excepturi, nobis distinctio cum
              optio labore, voluptate beatae sed eum dignissimos laudantium et
              voluptates. A tempore, mollitia repellat commodi dicta earum quasi
              ex doloribus omnis, ratione autem voluptas aperiam reprehenderit.
              Commodi nihil et dicta perspiciatis! Placeat.Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Quasi, neque libero.
              Consectetur rem laudantium neque odio tenetur voluptates quod
              nesciunt accusantium cum sit quae possimus, dolore cupiditate
              adipisci est. Doloremque aspernatur accusamus, architecto porro
              quibusdam deserunt at quaerat repudiandae sapiente placeat
              laudantium delectus iure sequi cum quod ea. Harum, laudantium.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis voluptatibus nostrum aliquid? Quas quibusdam quia
              veniam fuga nam molestias, quam totam repellat nemo velit illum
              ipsum qui eum ipsa sint quos optio, alias magni perspiciatis
              repellendus natus. Fugiat modi non doloremque, optio, quaerat
              velit eaque culpa veritatis ut repellat inventore?
            </p>
          </div>
          <div className="col-4">
            <div class="card bg-dark">
              <Image source={source} />
              <div class="card-body">
                <h5 class="card-title text-warning">{msg}</h5>
                <p class="card-text text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Beatae modi dolore ea reprehenderit asperiores sit, eveniet
                  corporis, rerum quos delectus dolor autem minima ad ipsam vel,
                  facilis minus laborum est.
                </p>
                <a href="#" class="btn btn-warning btn-block">
                  {heading}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
