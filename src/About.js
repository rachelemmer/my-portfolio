import React from 'react'

export default function About() {
    return (
        <div>
            <h1 className="about-title">About Me</h1>
            <div className="about-container">
                <img className="about-photo" src="https://i.imgur.com/Im4DvPE.jpg" alt="Rachel and her dog Ollie hiking"/>
                <p className="about-paragraph">This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.</p>
            </div>
        </div>
    )
}
