import React from 'react';
import classse from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classse.NavigationItems}>
      <NavigationItem link='/' active>Burger Builder</NavigationItem>
      <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;