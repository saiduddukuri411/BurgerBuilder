import React,{Component} from 'react';
import classes from './model.css';
import Aux from '../../../hoc/Auxilary';
import Backdrop from '../backdrop/backdrop'

class Model extends Component{
    shouldComponentUpdate(nextprops,nextstate){
           return nextprops.show!==this.props.show
    }
  render(){
    return(
      <Aux>
      <div className={classes.Modal} style={{transform:this.props.show? 'translateY(0)':'translateY(-100vh)',
        opacity: this.props.show ? '1' : '0' }}>
          {this.props.children}
      </div>
      <Backdrop show={this.props.show} closemodel={this.props.closemodel}/>
      </Aux>
    );
  }
}


 
export default Model;