import React, { useState } from 'react'

import classes from './Cart.module.css'
import Modal from '../UI/Modal'

function Cart(props) {
    const cartItems = <ul className={classes['cart-items']}>{[].map((item) =>(<li>{item.name}</li>))}</ul>
  
    return (
    <Modal closeHandler={props.closeHandler}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>321</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.closeHandler} className={classes['button--alt']}>Close</button> 
          <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart