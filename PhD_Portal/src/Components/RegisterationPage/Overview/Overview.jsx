import React from 'react'
import './Overview.css'
import ButtonLink from '../../ButtonLink/ButtonLink'

const Overview = () => {
    return (
        <>
            <h1>Welcome </h1>
            <div className='overview customScrollbar'>
                <div>
                    <p>We are pleased to welcome you to our research community. </p>
                    <br />
                    <p>As you begin this journey of academic inquiry and innovation, we are dedicated to providing the resources and support necessary for your success.
                        We encourage you to engage deeply, collaborate meaningfully, and contribute to advancing knowledge in your field.
                    </p>
                    <br />
                    <p>As part of the registration process, we request you to be ready with soft copies of the following documents:</p>
                    <ul className='documentsList'>
                        <li>Bachelor's Certificate</li>
                        <li>Master's Certificate</li>
                        <li>Transfer Certificate</li>
                        <li>Migration Certificate</li>
                        <li>Aadhar Card</li>
                        <li>Passport Size Image</li>
                    </ul>
                    <br />
                    <p>Wishing you a productive and enriching doctoral experience.</p>
                    <br />
                    <label>
                        <input type="checkbox" className="checkBox"/>
                        &ensp; I agree that all the information provided is true to the best of my knowledge, and all the documents submitted are original.
                    </label>

                    <div className='cntBtn'>
                        <ButtonLink to='/personalDetails' children='Continue' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview
