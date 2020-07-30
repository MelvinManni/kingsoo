import React from 'react'

function Button({title, form, onClick}) {
    return (
        <button form={form} onClick={onClick} className="btn btn-success w-100">
            {title}
        </button>
    )
}

export default Button
