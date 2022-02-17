import React from 'react'
import img from '../../assets/meals.jpg'
import Button from './HeaderButton'


import classes from './Header.module.css'

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <Button>Cart</Button>
        </header>
        <div className={classes['main-image']}>
            <img src={img} alt="Table of food" />
        </div>
    </>
  )
}

export default Header