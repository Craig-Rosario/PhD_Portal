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
    
        <div className='guidlinesDetails'>
            <p>
                Format:
                Use standard paper size (usually A4)
                Set consistent margins (typically 1-1.5 inches on all sides)
                Use a legible font (e.g., Times New Roman, Arial) in an appropriate size (usually 11-12 pt)
                Double-space the main text
                Number all pages consecutively
                Structure:
                Title page
                Abstract
                Table of contents
                List of figures and tables
                Main body chapters
                References/Bibliography
                Appendices (if applicable)
                Title Page:
                Include thesis title, your full name, department, institution, degree, and submission date
                Abstract:
                Concise summary of your research (usually 150-300 words)
                Include research question, methodology, key findings, and conclusions
                Citations and References:
                Follow the citation style specified by your institution (e.g., APA, MLA, Chicago)
                Ensure all in-text citations are included in the reference list and vice versa
                Figures and Tables:
                Label all figures and tables clearly
                Provide captions and sources where necessary
                Ensure they are referenced in the text
                Language and Editing:
                Proofread thoroughly for grammar, spelling, and punctuation errors
                Ensure consistent terminology throughout the document
                Use clear, concise academic language
                Plagiarism Check:
                Run your thesis through plagiarism detection software
                Ensure all sources are properly cited and paraphrased

            </p>
        </div>
    </>
  )
}

export default Guidelines
