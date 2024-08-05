// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Offers.css'
import exclusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h2>Exclusive</h2>
            <h2>Offers For You</h2>
            <p>Only On Best Seller Products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers