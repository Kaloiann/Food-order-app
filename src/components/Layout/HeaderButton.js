import React from 'react'
import CartIcon from '../Cart/CartIcon'

import classes from './HeaderButton.module.css'

const HeaderButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Card</span>
        <span className={classes.badge}>
            2
        </span>
    </button>
  )
}

export default HeaderButton