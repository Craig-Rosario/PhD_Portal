import React from 'react'
import './Guidelines.css'
import noti from '../../assets/noti.png';
import prof from '../../assets/prof.png';

const Guidelines = () => {
    return (
        <>
            <div className='navBar'>
                <div className='hero'>Thesis Details</div>
                <div className="buttons">
                    <button className='notiBtn'>
                        <img src={noti} alt="Notification" />
                    </button>
                    <button className='profBtn'>
                        <img src={prof} alt="Profile" />
                    </button>
                </div>
            </div>

            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}className='guidelinesDetails'>
                <h3>1. <strong>Format:</strong></h3>
                <ul style={{ paddingLeft: '40px' }}>
                    <li>Use standard paper size (usually A4).</li>
                    <li>Set consistent margins (typically 1–1.5 inches on all sides).</li>
                    <li>Use a legible font (e.g., Times New Roman, Arial) in an appropriate size (usually 11–12 pt).</li>
                    <li>Double-space the main text.</li>
                    <li>Number all pages consecutively.</li>
                </ul>

                <h3>2. <strong>Structure:</strong></h3>
                <ul style={{ paddingLeft: '40px' }}>
                    <li>Title page</li>
                    <li>Abstract</li>
                    <li>Table of contents</li>
                    <li>List of figures and tables</li>
                    <li>Main body chapters</li>
                    <li>References/Bibliography</li>
                    <li>Appendices (if applicable)</li>
                </ul>

                <h3>3. <strong>Title Page:</strong></h3>
                <ul style={{ paddingLeft: '40px' }}>
                    <li>Include the thesis title, your full name, department, institution, degree, and submission date.</li>
                </ul>

                <h3>4. <strong>Abstract:</strong></h3>
                <ul style={{ paddingLeft: '40px' }}>
                    <li>Provide a concise summary of your research (usually 150–300 words).</li>
                    <li>Include the research question, methodology, key findings, and conclusions.</li>
                </ul>

                <h3>5. <strong>Citations and References:</strong></h3>
                <ul style={{ paddingLeft: '40px' }}>
                    <li>Follow the citation style specified by your institution (e.g., APA, MLA, Chicago).</li>
                    <li>Ensure all in-text citations are included in the reference list and vice versa.</li>
                </ul>

                <h3>6. <strong>Figures and Tables:</strong></h3>
                <ul style={{ paddingLeft: '40px' }}>
                    <li>Label all figures and tables clearly.</li>
                    <li>Provide captions and sources where necessary.</li>
                    <li>Ensure they are referenced in the text.</li>
                </ul>

                <h3>7. <strong>Language and Editing:</strong></h3>
                <ul style={{ paddingLeft: '40px' }}>
                    <li>Proofread thoroughly for grammar, spelling, and punctuation errors.</li>
                    <li>Ensure consistent terminology throughout the document.</li>
                    <li>Use clear, concise academic language.</li>
                </ul>

                <h3>8. <strong>Plagiarism Check:</strong></h3>
                <ul style={{ paddingLeft: '40px' }}>
                    <li>Run your thesis through plagiarism detection software.</li>
                    <li>Ensure all sources are properly cited and paraphrased.</li>
                </ul>
            </div>
        </>
    )
}

export default Guidelines
