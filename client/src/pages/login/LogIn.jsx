import React from 'react'
import LoginForm from '../../components/loginForm'

function LogIn() {
    return (
        <div className='d-flex justify-content-between px-5 align-items-center'>
            <div className="docImg col-lg-6" >

            </div>

            <div className="col-lg-6 col-md-12">
                <LoginForm />
            </div>
        </div>
    )
}

export default LogIn
