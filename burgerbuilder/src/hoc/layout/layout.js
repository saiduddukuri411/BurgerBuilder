import React,{Component} from 'react';
import Aux from '../Auxilary'
import classes from './layout.css'
import Toolbar from '../../components/navigations/toolbar/toolbar'
import Sidedrawer from '../../components/navigations/sidedrawer/sidedrawer'

class Layout extends Component{
    state={
        showSideDrawer: false
    };
    
    sideDrawerClosedHandler=()=>{
            this.setState({showSideDrawer:false});
    }

    menuSideDrawerHandler=()=>{
        this.setState((prevState)=>{return({showSideDrawer:!prevState.showSideDrawer})}
            )
    }
   render(){
    return(
    <Aux>
     <Toolbar drawerToggleclicked={this.menuSideDrawerHandler}/>
     <Sidedrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
     <main className={classes.Content}>{this.props.children}</main>
     </Aux>)

    }
}

export default Layout;