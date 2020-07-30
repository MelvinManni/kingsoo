import React from 'react'
import SignUpForm from '../../components/signUpForm'

function SignUp() {
    return (
        <div className='d-flex justify-content-between px-5 align-items-center'>
            <div className="docImg col-lg-6" >

            </div>

            <div className="col-lg-6 col-md-12">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUp
