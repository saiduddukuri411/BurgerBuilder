import React from 'react';
import classes from './toolbar.css'
import Logo from '../../logo/logo'
import Navigationitems from '../navigationitems/navigationitems'
import Drawertoggle from '../sidedrawer/drawertoggle/drawertoggle'

const toolbar=(props)=>(
    <header className={classes.Toolbar}>
    <Drawertoggle clicked={props.drawerToggleclicked} />
    <div className={classes.Logo}>
    <Logo/>
    </div>
    <nav className={classes.Desktoponly}>
        <Navigationitems />
    </nav>
    </header>
);


export default toolbar;