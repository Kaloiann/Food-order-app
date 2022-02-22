import React from 'react'

function CartProvider(props) {
  const addItemHandler = item => {}
  const removeItemHandler = item => {}
 
  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }
  
  return (
    <CartProvider.Provider>
      {props.children}
    </CartProvider.Provider>
  )
}

export default CartProvider