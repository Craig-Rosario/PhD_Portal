import React from 'react';
import './PersonalDetails.css';
import ButtonLink from '../../ButtonLink/ButtonLink';

const PersonalDetails = () => {
    return (
        <>
        <h1 className="heading">Personal Details</h1>
        <div className = "personalDetails">
            <h1>Name</h1>
            <div className = "nameSection">
                <div className = "name">    
                    <input type="text" placeholder="Title" className="title"/>
                    <input type="text" placeholder="First Name" className="firstName"/>
                    <input type="text" placeholder="Middle Name" className="middleName"/>
                    <input type="text" placeholder="Last Name"className="lastName"/>
                </div>
                <div className="parentNames">
                    <input type="text" placeholder="Father's Name" className="fatherName"/>
                    <input type="text" placeholder="Mother's Name" className="motherName"/>
                </div>
            </div>
            <div className = "address">
                <h1>Address</h1>
                <input type="text" placeholder=" Address" />
            </div>
            <div className = "DOBGender">
                <div className = "dobGenderHeader">
                    <h1>Date of Birth</h1>
                    <h1>Gender</h1> 
                </div>
                <div className="dobGenderInput">
                    <div className = "dob">
                        <input type="date" />
                    </div>
                    <div className = "Gender">
                        <select name = "Gender" id = "gender">
                            <option disabled selected value>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className = "contactInfo">
                <div className = "contactNumber">
                    <h1>Contact Number</h1>
                    <div className = "contact">
                        <input type="text" placeholder="Contact Number" />
                        <input type="text" placeholder="Parent's Contact" />
                    </div>
                </div>
                <div className = "email">
                    <h1>Email</h1>
                    <input type="email" placeholder="Email" className="Email"/>
                </div>
            </div>
            <div className='cntBtn'>
            <ButtonLink to='/EducationDetails' children='Continue' />
            </div>
        </div>
        </>
    );
    }

export default PersonalDetails;