import React from 'react'

export default function Image({source}) {
    return (
        <div>
            <img class="card-img-top" src={source} />
        </div>
    )
}
