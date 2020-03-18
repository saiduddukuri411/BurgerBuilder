import React from 'react';
import classes from './navigationitem.css'

const navigationitem=(props)=>{
    return(
<li className={classes.Navigationitem}>
    <a 
    href={props.link} 
    className={props.active ? classes.Active : null}> {props.children}</a></li>
)};

export default navigationitem;