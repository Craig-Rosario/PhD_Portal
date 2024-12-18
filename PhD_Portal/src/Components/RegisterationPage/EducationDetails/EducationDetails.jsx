import React from "react";
import "./EducationDetails.css";
import ButtonLink from "../../ButtonLink/ButtonLink";
import { useState } from 'react';

const EducationDetails = () => {
    const [hasPastExperience, setHasPastExperience] = useState(false);

    const handleExperienceChange = (event) => {
        setHasPastExperience(event.target.id === 'yes');
    };

    const addRow = () => {
        var table = document.getElementById("tbl");
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        cell1.innerHTML = "<input type='text' name='name' />";
        cell2.innerHTML = "<input type='text' name='role' />";
        cell3.innerHTML = "<input type='text' name='duration' />";
    };

    const removeRow = () => {
        var table = document.getElementById("tbl");
        var rowCount = table.rows.length;
        if(rowCount > 2) {
            table.deleteRow(rowCount - 1);
        }
    }

    return (
        <>
            <h1 className="heading">Education Details</h1>
            <div className="educationDetails customScrollbar">
                <div className="education">
                    <div className="educationSection">
                        <div className="educationDegree">
                        <div className="doctorate">
                        <h1>Doctorate</h1>
                        <input type="text" placeholder="Branch / Department of Research" />
                        </div>
                        <div className="postGraduation">
                        <h1>Post-graduation</h1>
                        <input type="text" placeholder="Title of PG degree" />
                        <input type="text" placeholder="Institute" />
                        <input type="text" placeholder="University" />
                        </div>
                        <div className="graduation">
                            <h1>Graduation</h1>
                            <input type="text" placeholder="Title of UG degree" />
                            <input type="text" placeholder="Institute" />
                            <input type="text" placeholder="University" />
                        </div>
                        <div className="pastExperience">
                            <h1>Past Experience</h1>
                            <input type="radio" name="pastExperience" id="yes" onChange={handleExperienceChange}/><label for="yes" className ="radioLabel">Yes</label>
                            <input type="radio" name="pastExperience" id="no" onChange={handleExperienceChange}/><label for="no" className ="radioLabel">No</label>
                        </div>
                        {hasPastExperience && (
                        <div className="experienceDetails">
                            <table id="tbl">
                                <tr className="tableHeader">
                                    <th><label>Name of Organization / Company</label></th>
                                    <th><label>Role</label></th>
                                    <th><label>Duration</label></th>
                                </tr>
                                <tr>
                                    <td><input type="text" name="name" /></td>
                                    <td><input type="text" name="role" /></td> 
                                    <td><input type="text" name="duration" /></td>             
                                </tr>
                            </table>
                            <div className="addRow">
                                <button className="rowBtn" onClick={addRow}>+ ADD</button>
                                <button className="rowBtn" onClick={removeRow}> - REMOVE</button>
                            </div>
                        </div>
                        
                    )}

                    
                    </div>
                </div>
            </div>
            <div className="cntBtnEducation">
            <ButtonLink to="/Documents" children="Continue" />
            </div>
            </div>
            <br />
            <br />
        </>
    );
}

export default EducationDetails;
