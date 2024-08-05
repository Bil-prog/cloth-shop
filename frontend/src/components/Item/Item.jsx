// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}
Item.propTypes = {
    image: PropTypes.any,
    name: PropTypes.string,
    new_price: PropTypes.number,
    old_price: PropTypes.number
}

export default Item