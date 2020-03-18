import React from 'react';
import classes from './navigationitems.css'
import Navigationitem from './navigationitem/navigationitem'

const navigationitems=(props)=>(
    <ul className={classes.Navigationitems}>
        <Navigationitem link="/" active>Burger Builder</Navigationitem>
        <Navigationitem link="/">Checkout</Navigationitem>
    </ul>
);

export default navigationitems;