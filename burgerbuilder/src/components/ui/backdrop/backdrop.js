import React from 'react';
import classes from './backdrop.css'
const backdrop=(props)=>(
    props.show? <div onClick={props.closemodel} className={classes.Backdrop}></div> : null
)

export default backdrop;