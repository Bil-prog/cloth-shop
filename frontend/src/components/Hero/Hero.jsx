// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import hand_icon from '../../assets/hand_icon.png'
import hero_image from '../../assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <div className="hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
                <div className="hero-btn">
                    <button>View Collections {'>>'}</button>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero