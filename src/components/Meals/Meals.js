import React from 'react'
import AvaliableMeals from './AvaliableMeals'
import MealsSummary from './MealsSummary'

const Meals = (props) => {
  return (
    <>
        <MealsSummary />
        <AvaliableMeals />
    </>
  )
}

export default Meals