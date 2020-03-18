import React from 'react';
import classes from './buildcontrols.css';
import Buildcontrol from './buildcontrol/buildcontrol';
const controls=[
    {label:"Salad",type:"salad"},
    {label:"Bacon",type:"bacon"},
    {label:"Meat",type:"meat"},
    {label:"Cheese",type:"cheese"}

]
const buildcontrols=(props)=>{
    
   return ( <div className={classes.BuildControls}>
        <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(obj=>{
            return <Buildcontrol key={obj['label']} label={obj['label']} ingredientAdded={()=>props.ingredientAdded(obj['type'])}
            ingidientRemoved={()=>props.ingidientRemoved(obj['type'])} disabled={props.ingredient_state[obj['type']]}/>
        })}
        <button className={classes.OrderButton} disabled={props.disable_order} onClick={props.purchasing}>ORDER NOW</button>
    </div>
);
    }

export default buildcontrols;