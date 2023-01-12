import React from 'react'
import arrow from '../../src/arrow.svg'
export default function Contact() {
  return (
    <section className="section contact-section">
      <h1 className="section-title">😊 For To Contact Me 😊</h1>
      {/* <label className="link2"> 😊 For To Contact Me 😊</label> */}
      <br />
      <br />
      <br />
      <img src={arrow} alt="cocktail db logo" className="logo3" />
      <br />
      <a href="https://whitedevil24.netlify.app/">
        <button className="link1 link1-primary link1-details">
          Click Here
        </button>
      </a>
    </section>
  )
}
