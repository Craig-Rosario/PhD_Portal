import React from 'react';
import "./Documents.css";
import ButtonLink from '../../ButtonLink/ButtonLink';
import { useState } from 'react';

const Documents = () => {
    const [fileNames, setFileNames] = useState({});

    // displays the file uploaded by the user
    const handleFileChange = (event, inputId) => {
        const file = event.target.files[0];
        setFileNames((prevFileNames) => ({
            ...prevFileNames,
            [inputId]: file ? file.name : ''
        }));
    };

    return (
        <div className="docContainer">
        <h1 className='docTitle'>Documents</h1>
        <div className='docDetails customScrollbar'>
            <label className='docLabel'>
                Passport Size Photo<br />
                <input type="file" className='docInput' id="photo" onChange={(e) => handleFileChange(e, 'photo')} />
                <label htmlFor="photo" className="file-upload-button">Upload File</label>
                {fileNames.photo && <span className="fileName">{fileNames.photo}</span>}
            </label>
            <label className='docLabel'>
                Aadhar Card<br />
                <input type="file" className='docInput' id="aadhar" onChange={(e) => handleFileChange(e, 'aadhar')} />
                <label htmlFor="aadhar" className="file-upload-button">Upload File</label>
                {fileNames.aadhar && <span className="fileName">{fileNames.aadhar}</span>}
            </label>
            <label className='docLabel'>
                UG Degree Certificate<br />
                <input type="file" className='docInput' id="ugDegree" onChange={(e) => handleFileChange(e, 'ugDegree')} />
                <label htmlFor="ugDegree" className="file-upload-button">Upload File</label>
                {fileNames.ugDegree && <span className="fileName">{fileNames.ugDegree}</span>}
            </label>
            <label className='docLabel'>
                PG Degree Certificate<br />
                <input type="file" className='docInput' id="pgDegree" onChange={(e) => handleFileChange(e, 'pgDegree')} />
                <label htmlFor="pgDegree" className="file-upload-button">Upload File</label>
                {fileNames.pgDegree && <span className="fileName">{fileNames.pgDegree}</span>}
            </label>
            <label className='docLabel'>
                Transfer Certificate<br />
                <input type="file" className='docInput' id="transferCert" onChange={(e) => handleFileChange(e, 'transferCert')} />
                <label htmlFor="transferCert" className="file-upload-button">Upload File</label>
                {fileNames.transferCert && <span className="fileName">{fileNames.transferCert}</span>}
            </label>
            <label className='docLabel lastDoc'>
                Migration Certificate<br />
                <input type="file" className='docInput' id="migrationCert" onChange={(e) => handleFileChange(e, 'migrationCert')} />
                <label htmlFor="migrationCert" className="file-upload-button">Upload File</label>
                {fileNames.migrationCert && <span className="fileName">{fileNames.migrationCert}</span>}
            </label>
            <div className='Btn'>
                <ButtonLink to='' children='Submit' className='submitBtnR'/> 
                { /** TODO --> need to add the path to the next page after submission */ }
            </div>
        </div>
        </div>
    );
};

export default Documents;