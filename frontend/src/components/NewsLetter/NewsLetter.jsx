// eslint-disable-next-line no-unused-vars
import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h3>Get exclusive offers on your email</h3>
        <p>Subscribe to our newsletter and stay updated</p>
        <br />
        <div>
            <input type="email" placeholder='Your email address'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter