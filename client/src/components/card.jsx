import React from 'react'
import {Link} from '@reach/router'

function Card({link, title}) {
    return (
        <Link to={link}>
            <div className="card">
                <p>
                    {title}
                </p>
            </div>
        </Link>
    )
}

export default Card
