import React from 'react'

function ButtonOutline({title, onClick}) {
    return (
        <button onClick={onClick} className="btn btn-outline-success w-100">
            {title}
        </button>
    )
}

export default ButtonOutline
