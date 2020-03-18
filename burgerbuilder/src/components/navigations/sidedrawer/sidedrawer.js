import React from 'react';
import Logo from '../../logo/logo';
import Navigationitems from '../navigationitems/navigationitems';
import classes from './sidedrawer.css'
import Backdrop from '../../ui/backdrop/backdrop';
import Aux from '../../../hoc/Auxilary';

const sidedrawer=(props)=>{
     let attacedclasses=[classes.Sidedrawer,classes.Close];
     if(props.open){
        attacedclasses=[classes.Sidedrawer,classes.Open];
     }
    return(
        <Aux>
        <Backdrop  show={props.open} closemodel={props.closed}/>
        <div className={attacedclasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo/>
            </div>
            <nav>
                <Navigationitems />
            </nav>
        </div>
        </Aux>
    );
}

export default sidedrawer;