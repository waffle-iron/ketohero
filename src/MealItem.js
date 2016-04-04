import React from 'react';

import FoodItem from './FoodItem';
import Quantity from './Quantity'


export default class MealItem extends React.Component {


  render() {

    return (
      <div>
        <FoodItem>
          <Quantity />
        </FoodItem>
      </div>
    )
  }
}