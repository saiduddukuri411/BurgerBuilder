import React from 'react';
import classes from './burger.css';
import Burgeringredient from './burgeringredients/burgeringredients'

const burger=(props)=>{
   let con=Object.keys(props.ingredients)
            .map(objkey=>{
            return [...Array(props.ingredients[objkey])].map((_,i)=>{
                return <Burgeringredient key={objkey+i} type={objkey} />;
            });

   }).reduce((arr,el)=>{return arr.concat(el)},[]);
   if (con.length===0){
       con=<p>Please start adding ingredients!</p>
   }
    return(
             
        <div className={classes.Burger}>
               <Burgeringredient type="bread-top" />
                          {con}
               <Burgeringredient type="bread-bottom" />
        </div>
    );

};

export default burger;